---
sidebar_position: 40
description: ActiveMQ 進階設定：JDBC 外部持久化
key: [ActiveMQ, JDBC, persistenceAdapter, MySQL, PostgreSQL, 外部資料庫]
tags: [ActiveMQ, 進階設定, AI筆記]
---

# 🧣 JDBC 外部持久化

本章節解析如何將 ActiveMQ 的持久化儲存從本地 KahaDB 切換到外部資料庫（MySQL、PostgreSQL 等）。此方案適合需要集中管理訊息資料、或搭配 Shared Database Master-Slave 的場景。

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release)
- MySQL 5.7+ 或 PostgreSQL 12+

## 1. KahaDB vs JDBC 取捨

| 項目 | KahaDB | JDBC |
|------|--------|------|
| 效能 | 高（本地 I/O） | 較低（SQL 往返） |
| 運維 | 僅管 Broker | 需維護資料庫 |
| HA | Shared File System | Shared Database |
| 資料查詢 | 僅透過 JMS | 可直接 SQL 查詢訊息表 |
| 推薦場景 | 大多數部署 | 需 DB 級 HA 或集中管理 |

## 2. MySQL 設定範例

### 2.1 放置 JDBC Driver

將 `mysql-connector-java.jar` 放入 `${ACTIVEMQ_HOME}/lib/`。

### 2.2 activemq.xml

```xml
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}">
  <persistenceAdapter>
    <jdbcPersistenceAdapter dataSource="#mysql-ds" lockKeepAlivePeriod="2000">
      <locker>
        <lease-database-locker lockAcquireSleepInterval="10000"/>
      </locker>
    </jdbcPersistenceAdapter>
  </persistenceAdapter>

  <bean id="mysql-ds" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">
    <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
    <property name="url" value="jdbc:mysql://localhost:3306/activemq?relaxAutoCommit=true"/>
    <property name="username" value="activemq"/>
    <property name="password" value="activemq-pw"/>
    <property name="maxTotal" value="20"/>
  </bean>
</broker>
```

### 2.3 建立資料庫

```sql
CREATE DATABASE activemq CHARACTER SET utf8mb4;
CREATE USER 'activemq'@'%' IDENTIFIED BY 'activemq-pw';
GRANT ALL ON activemq.* TO 'activemq'@'%';
```

ActiveMQ 首次啟動時會自動建立所需的訊息表。

## 3. 關鍵元件

| 元件 | 說明 |
|------|------|
| `jdbcPersistenceAdapter` | JDBC 持久化適配器 |
| `lease-database-locker` | 資料庫層級的 Broker 鎖，防止多實例同時寫入 |
| `dataSource` | 連線池，建議使用 DBCP2 |

## 4. 常見問題與排查

| 現象 | 可能原因 | 處理方式 |
|------|----------|----------|
| 啟動失敗 `Table doesn't exist` | 資料庫連線失敗 | 確認 URL、帳密與資料庫已建立 |
| 兩個 Broker 同時寫入 | Locker 未生效 | 確認 `lease-database-locker` 已配置 |
| 效能明顯下降 | SQL 往返開銷 | 評估是否可回到 KahaDB |
| 磁碟暴增 | 訊息表未清理 | 正常消費後訊息會被刪除，檢查堆積 |

## 5. 與其他文章的關聯

- KahaDB 調校：[`kahadbTuning`](/docs/activeMQ/advanced/kahadbTuning)
- 持久化概念：[`durable`](/docs/activeMQ/fundamentals/durable)
- Master-Slave（Shared DB）：[`masterSlave`](/docs/activeMQ/advanced/masterSlave)