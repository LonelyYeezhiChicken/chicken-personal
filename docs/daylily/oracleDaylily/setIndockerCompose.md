---
sidebar_position: 8
description: 使用 docker-compose 啟動
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記, Docker]
---

# 👩‍💻 使用 docker-compose 啟動

## 安裝版本

- Oracle: 21c
- Image: container-registry.oracle.com/database/express:21.3.0-xe (官方版本)
- OS: Windows11

## 安裝步驟

### 1. 下載 image

- 下載 image 方式參考 [Docker 中安裝 Oracle-21c](https://blog.lychicken.com/docs/daylily/oracleDaylily/setIndocker21c)

### 2. 建立 docker-compose

- 於一個空的資料夾中建立腳本 `docker-compose.yml`

```yml
version: '3.8'

services:
  oracle-db:
    image: container-registry.oracle.com/database/express:21.3.0-xe  # 使用 Oracle XE 映像
    container_name: oracle21c
    environment:
      - ORACLE_PWD=test1234            # SYS 和 SYSTEM 的密碼
      - ORACLE_CHARACTERSET=AL32UTF8
      - NLS_LANG=SIMPLIFIED CHINESE_CHINA.AL32UTF8  # 設定正確的語言和字符集
    ports:
      - "1521:1521"                    # Oracle Listener 端口
    volumes:
      - oradata:/opt/oracle/oradata    # Oracle 數據持久化存儲
      - ./initdb:/opt/oracle/scripts/startup  # 自動運行 SQL 腳本
      - ./tnsnames.ora:/opt/oracle/product/21c/dbhome_1/network/admin/tnsnames.ora  # 修改 tnsnames.ora

volumes:
  oradata:
```

### 3. 建立 ora 檔案

- 於資料夾底下建一個目錄 `tnsnames.ora`

```shell
XE =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = XEPDB1)
    )
  )

XESYS =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = 0.0.0.0)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = XE)
    )
  )
```

### 4. 建立初始化腳本

- 於資料夾底下建一個目錄 `initdb`
- 於 `initdb` 資料夾底下新增 `create.sql`
- ex: 建立一個使用者，並且建立角色表

```sql
-- 切換到 PDB
ALTER SESSION SET container = XEPDB1;

-- 建立 test_user 使用者
CREATE USER test_user IDENTIFIED BY test123 DEFAULT TABLESPACE users;

-- 授予權限
GRANT CONNECT, RESOURCE, UNLIMITED TABLESPACE TO test_user;

-- 使用者表 User
CREATE TABLE tds_user.User (
    UserId      VARCHAR2(50) PRIMARY KEY,  -- 使用者Id
    Name        VARCHAR2(100),             -- 使用者名稱
    Password    VARCHAR2(100),             -- 使用者密碼
    UpdateUser  VARCHAR2(50),              -- 修改人員
    UpdateTime  TIMESTAMP                  -- 修改時間
);

```

### 5. 啟動

```shell
docker-compose up --build
```

### 6. 停止

```shell
docker-compose down
```

---

ref: [Oracle 12c PDB](https://blog.darkthread.net/blog/oracle-cbd-and-pdb/)
