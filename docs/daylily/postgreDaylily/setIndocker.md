---
sidebar_position: 5
description: Docker 中安裝 Postgresql
key: [Postgresql, 雜記]
tags: [Postgresql, Postgresql雜記, Docker]
---

# 👩‍💻 Docker 中安裝 Postgresql

## 安裝版本

- Postgresql: 12.3
- Image: postgres:12.3
- OS: Windows11

## 安裝步驟

### 1. 下載Image

- 下載

```shell
docker pull postgres:12.3
```

### 2. 啟動容器

- 建立容器，並將 port 做對應

```shell
docker run --name postgres12 -e POSTGRES_PASSWORD=[password] -p 5432:5432 -d postgres:12.3
```

### 3. 設定 oracle 帳號密碼

- 進入容器

```shell
docker exec -it postgres12 /bin/bash
```

- 切換權限

```shell
su postgres
```

- 建立角色

```shell
createuser -P -s -e [user]
```
