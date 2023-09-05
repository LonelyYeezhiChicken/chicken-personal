---
sidebar_position: 10
description: SSO 資料庫
key: [sso, Single Sign-On]
tags: [sso, Single Sign-On, Postgresql]
---

# 🔐 SSO 資料庫

## 何謂 SSO

> 單點登錄（Single Sign-On，SSO）是一種身份驗證機制，允許使用者使用一組憑證（通常是使用者名稱和密碼）登錄到多個不同的應用程式或服務，而無需為每個應用程式輸入憑證

## 資料庫

### 資料庫設計考量

> SSO系統通常需要一些資料庫表格來存儲使用者資訊、令牌和相關的身份驗證數據以下是一些常見的表格，這些表格可以用於實現SSO

### 1. User Table（使用者表格）

> 存儲使用者的基本資訊，如使用者名稱、密碼雜湊、電子郵件地址、使用者ID等這是SSO系統中最基本的表格

```sql
CREATE TABLE user_table (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    -- 其他用户属性列
);
```

### 2. Session Table（會話表格）

> 用於存儲使用者的會話資訊，包括會話ID、使用者ID、會話開始時間、過期時間等這些資訊用於追蹤使用者的登錄狀態

```sql
CREATE TABLE session_table (
    session_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    expiration_time TIMESTAMPTZ NOT NULL,
    -- 其他会话属性列
    FOREIGN KEY (user_id) REFERENCES user_table (user_id)
);
```

### 3. Token Table（令牌表格）

> 用於存儲令牌資訊，令牌是用於身份驗證的臨時憑證表格包括令牌ID、使用者ID、令牌類型、令牌值、過期時間等

```sql
CREATE TABLE token_table (
    token_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    token_type VARCHAR(50) NOT NULL,
    token_value VARCHAR(255) NOT NULL,
    expiration_time TIMESTAMPTZ NOT NULL,
    -- 其他令牌属性列
    FOREIGN KEY (user_id) REFERENCES user_table (user_id)
);
```

### 4. Application Table（應用程式表格）

> 存儲與SSO系統集成的各個應用程式或服務的資訊，包括應用程式ID、應用程式名稱、重定向URL等

```sql
CREATE TABLE application_table (
    app_id serial PRIMARY KEY,
    app_name VARCHAR(100) NOT NULL,
    redirect_url VARCHAR(255) NOT NULL,
    -- 其他应用程序属性列
);
```

### 5. User-Application Mapping Table（使用者-應用程式映射表格）

> 用於將使用者與其有權訪問的應用程式關聯起來這個表格包括使用者ID和應用程式ID的關聯資訊

```sql
CREATE TABLE user_app_mapping (
    mapping_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    app_id INT NOT NULL,
    -- 其他映射属性列
    FOREIGN KEY (user_id) REFERENCES user_table (user_id),
    FOREIGN KEY (app_id) REFERENCES application_table (app_id)
);
```

### 6. Audit Log Table（審計日誌表格）

> 用於記錄與使用者登錄和身份驗證相關的活動，如成功登錄、失敗登錄嘗試、會話終止等

```sql
CREATE TABLE audit_log (
    log_id serial PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    -- 其他審計日誌属性列
    FOREIGN KEY (user_id) REFERENCES user_table (user_id)
);
```

### 7. Metadata Table（元數據表格）

> 存儲與SSO配置相關的元數據，如令牌簽名金鑰、令牌有效期設置等

```sql
CREATE TABLE metadata_table (
    metadata_id serial PRIMARY KEY,
    key VARCHAR(100) NOT NULL,
    value TEXT,
    -- 其他元数据属性列
);
```

### 8. Role and Permissions Table（角色和權限表格）

> 如果SSO系統需要處理角色和權限，可以包括用於存儲角色和權限資訊的表格

```sql
CREATE TABLE role_table (
    role_id serial PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
    -- 其他角色属性列
);

CREATE TABLE permissions_table (
    permission_id serial PRIMARY KEY,
    permission_name VARCHAR(100) NOT NULL,
    -- 其他权限属性列
);

CREATE TABLE user_role_mapping (
    mapping_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    -- 其他映射属性列
    FOREIGN KEY (user_id) REFERENCES user_table (user_id),
    FOREIGN KEY (role_id) REFERENCES role_table (role_id)
);

CREATE TABLE role_permission_mapping (
    mapping_id serial PRIMARY KEY,
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    -- 其他映射属性列
    FOREIGN KEY (role_id) REFERENCES role_table (role_id),
    FOREIGN KEY (permission_id) REFERENCES permissions_table (permission_id)
);

```
