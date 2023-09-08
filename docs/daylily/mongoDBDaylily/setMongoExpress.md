---
sidebar_position: 10
description: Docker 中安裝 Mongo Express
key: [MongoDB, 雜記]
tags: [MongoDB, MongoDB雜記, Docker]
---

# 👩‍💻 Docker 中安裝 Mongo Express

## 關於 Mongo Express

> Mongo Express 是 Mongo 的 GUI

### 安裝版本

- MongoDB: 4.1
- MongoDB Image: mongo:4.1
- Mongo Express: latest
- Mongo Express Image: mongo-express:latest
- OS: Windows11

## 安裝步驟 (MongoDB)

### 環境準備

- 建立 Network 使用 bridge 模式

```shell
docker network create -d bridge mongo-net
```

- 確認是否建立成功

```shell
docker network ls
```

- 有看到 `mongo-net` 表示建立成功

```shell
NETWORK ID     NAME                   DRIVER    SCOPE
004c88130dc3   bridge                 bridge    local
48b2a44fc084   host                   host      local
a5b985174541   mongo-net              bridge    local
```

### 1. 下載 Image

- 下載 MongoDB

```shell
docker pull mongo:4.1
```

- 下載 Mongo Express

```shell
docker pull mongo-express:latest
```

### 2. 啟動 MongoDB 容器

- 建立容器，並將 port 做對應，並使用 `mongo-net` 網路

```shell
docker run -itd --name mongo4 --network mongo-net -p 27017:27017 mongo:4.1
```

- 確認版本

```shell
docker exec mongo4 mongo --eval "print(version())"
```

### 3. 設定 MongoDB 帳號密碼

- 進入容器

```shell
docker exec -it mongo4 mongo admin
```

- MongoDB 6.0 及以上版本使用以下命令

```shell
docker exec -it mongo mongosh admin
```

- 建立帳號

```shell
db.createUser({ user:'admin',pwd:'[pwd]',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
```

- 連線測試

```shell
 db.auth('admin', '[pwd]')
```

- 實際畫面

```shell
docker exec -it mongo4 mongo admin
MongoDB shell version v4.1.13
connecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("b5414ff1-513c-4c4c-b533-b1bfb76f2acd") }
MongoDB server version: 4.1.13
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        http://docs.mongodb.org/
Questions? Try the support group
        http://groups.google.com/group/mongodb-user
> db.createUser({ user:'admin',pwd:'test123',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
Successfully added user: {
        "user" : "admin",
        "roles" : [
                {
                        "role" : "userAdminAnyDatabase",
                        "db" : "admin"
                },
                "readWriteAnyDatabase"
        ]
}
> db.auth('admin', 'test123')
1
>
```

### 4. 啟動 Mongo Express 容器

- ME_CONFIG_MONGODB_SERVER: MongoDB container的名稱
- ME_CONFIG_MONGODB_ADMINUSERNAME: MongoDB 的最高使用者帳號
- ME_CONFIG_MONGODB_ADMINPASSWORD: MongoDB 的最高使用者密碼
- ME_CONFIG_BASICAUTH_USERNAME: 連線至 Mongo Express 網頁時所需的登入帳號
- ME_CONFIG_BASICAUTH_PASSWORD: 連線至 Mongo Express 網頁時所需的登入密碼

```shell
docker run --name mongo_express \
--network mongo-net  \
-e ME_CONFIG_MONGODB_SERVER=mongo4  \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=test123 \
-e ME_CONFIG_BASICAUTH_USERNAME=admin \
-e ME_CONFIG_BASICAUTH_PASSWORD=test123 \
-p 8081:8081 mongo-express:latest
```
