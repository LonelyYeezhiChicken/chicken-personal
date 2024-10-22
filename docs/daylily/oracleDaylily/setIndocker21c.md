---
sidebar_position: 7
description: Docker 中安裝 Oracle-21c
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記, Docker]
---

# 👩‍💻 Docker 中安裝 Oracle-21c

## 安裝版本

- Oracle: 21c
- Image: container-registry.oracle.com/database/express:21.3.0-xe (官方版本)
- OS: Windows11

## 安裝步驟

### 1. 註冊與下載

- 先到[官網](https://profile.oracle.com/myprofile/account/create-account.jspx)註冊帳號

- 登入

```shell
docker login container-registry.oracle.com
```

- 下載

```shell
docker pull container-registry.oracle.com/database/express:21.3.0-xe
```

### 2. 啟動容器

- 建立容器，並將 port 做對應

```shell
docker run --name oracle -p 1521:1521 -e ORACLE_PWD=test1234 -v "oradata:/opt/oracle/oradata" container-registry.oracle.com/database/express:21.3.0-xe
```

> 預設密碼為 test1234

---

ref: [如何在 Windows 快速啟動一個 Oracle Database 23c Free 資料庫容器](https://blog.miniasp.com/post/2024/02/29/Oracle-Database-23c-Free-for-Docker-Desktop-on-Windows)
