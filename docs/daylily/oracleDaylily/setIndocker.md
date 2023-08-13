---
sidebar_position: 5
description: Docker 中安裝 Oracle
key: [Oracle, 雜記]
tags: [Oracle, MSSQL雜記, Docker]
---

# 👩‍💻 Docker 中安裝 Oracle

## 安裝版本

- Oracle: 11g
- Image: oracleinanutshell/oracle-xe-11g
- OS: Windows11

## 安裝步驟

### 1. 下載Image

- 搜尋 Oracle Image

```shell
docker search oracle
```

- 可以看到以下資訊

```shell {20}
NAME                              DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED
oraclelinux                       Official Docker builds of Oracle Linux.          1009      [OK]
kasmweb/oracle-8-desktop          Oracle Linux 8 desktop for Kasm Workspaces       3
kasmweb/oracle-7-desktop          Oracle Linux 7 desktop for Kasm Workspaces       1
kasmweb/oracle-9-desktop          Oracle 9 desktop for Kasm Workspaces             0
dokken/oraclelinux-7              Oracle Linux 7 image for kitchen-dokken          1
dokken/oraclelinux-6              Oracle Linux 6 image for kitchen-dokken          0
dokken/oraclelinux-9              Oracle Linux 9 image for use with Test Kitch…   0
paketobuildpacks/oracle                                                            0
dokken/oraclelinux-8                                                               1
vulhub/oracle                                                                      0
kasmweb/core-oracle-8             Oracle Linux 8 base image for Kasm Workspace…   1
kasmweb/core-oracle-7             Oracle Linux 7 base image for Kasm Workspace…   1
kasmweb/core-oracle-9             Oracle Linux 9 base image for Kasm Workspace…   0
dockette/adminer                  My most tiniest (10mb) Adminer image with su…   20                   [OK]
dockette/mvn                      My MVN 3 based on Oracle Java Dockerfile         4                    [OK]
redislabs/redis-connect-oracle    Redis Connect Oracle Connector for Continuou…   1
dockette/jdk8                     My Oracle Java 8 Dockerfile                      4                    [OK]
sismics/debian-java               Debian Jessy + Oracle JDK                        1
oracleinanutshell/oracle-xe-11g                                                    277
oraclecoherence/coherence-ce      Coherence Community Edition                      5
oracledb19c/oracle.19.3.0-ee                                                       31
oracledemo1/hello-world           Test docker build from github                    0                    [OK]
gvenzl/oracle-xe                  Oracle Database XE (21c, 18c, 11g) for every…   232
iamseth/oracledb_exporter         A Prometheus exporter for Oracle modeled aft…   7
18fgsa/oracle-client              Hosted version of the Oracle Container Image…   2
```

- 下載

```shell
docker pull oracleinanutshell/oracle-xe-11g
```

### 2. 啟動容器

- 建立容器，並將 port 做對應

```shell
docker run -d -p 2122:22 -p 9090:8080 -p 1521:1521 --name oracle-11g oracleinanutshell/oracle-xe-11g
```

### 3. 設定 oracle 帳號密碼

- 進入容器

```shell
docker exec -it oracle-11g /bin/bash
```

- 切換權限

```shell
su oracle
```

- 開啟 sqlplus

```shell
$ORACLE_HOME/bin/sqlplus / as sysdba
```

- 將密碼期限調整為永不過期

```shell
ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;
```

- 解鎖 system 權限

```shell
alter user SYSTEM account unlock;
```

---

ref: [Docker中安装Oracle-12c](https://zhuanlan.zhihu.com/p/605595017)