---
sidebar_position: 5
description: Docker 中安裝 MySQL
key: [MySQL, 雜記]
tags: [MySQL, MySQL雜記, Docker]
---

# 👩‍💻 Docker 中安裝 MySQL

## 安裝版本

- MySQL: mysql:8.0.18
- Image: library/mysql:8.0.18 (docker 官方)
- OS: Windows11

## 安裝步驟

### 1. 下載 Image

- 下載

```shell
docker image pull library/mysql:8.0.18
```

### 2. 啟動容器

- 建立容器，並將 port 做對應

```shell
 docker run --name mysql8 \
  -p 3308:3306 \
  -e MYSQL_ROOT_PASSWORD=[password] \
  -d mysql:8.0.18 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

### 3. 設定 MySQL 帳號密碼

- 進入容器

```shell
docker exec -it mysql8 mysql -u root -p
```

- 開放遠端連線

```shell
CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

- 開放連線權限

```shell
GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1';
```

- 更新狀態

```shell
FLUSH PRIVILEGES;
```

:::caution
如果使用 DBeaver 連線，需進行以下設定

1. Connection settings > Edit Driver Settings
2. Driver properties
3. 將 useSSL 改為 false
4. 將 allowPublicKeyRetrieval 改為 true

:::
