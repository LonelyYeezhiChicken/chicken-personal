---
sidebar_position: 5
description: Docker 中安裝 MongoDB
key: [MongoDB, 雜記]
tags: [MongoDB, MongoDB雜記, Docker]
---

# 👩‍💻 Docker 中安裝 MongoDB

## 安裝版本

- MongoDB: 4.1
- Image: mongo:4.1
- OS: Windows11

:::caution
如果需要與 Mongo Express 的容器做集成，直接跳至 [Docker 中安裝 MongoDB](https://blog.lychicken.com/docs/daylily/mongoDBDaylily/setMongoExpress)
:::

## 安裝步驟

### 1. 下載 Image

- 下載

```shell
docker pull mongo:4.1
```

### 2. 啟動容器

- 建立容器，並將 port 做對應

```shell
docker run -itd --name mongo4 -p 27017:27017 mongo:4.1 --auth
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
