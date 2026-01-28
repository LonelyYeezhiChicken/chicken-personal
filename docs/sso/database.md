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

> 一個現代化的 SSO 系統，特別是基於 OIDC 和 JWT (JSON Web Tokens) 的無狀態（Stateless）架構，其資料庫設計需要考量幾個關鍵點。以下是一個更符合業界實踐的資料庫結構範例。

### 1. User Table（使用者表格）

> 存儲使用者的基本資訊。`username` 和 `email` 都應具備唯一性，以防止資料重複。

```sql
CREATE TABLE user_table (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    status VARCHAR(20) NOT NULL DEFAULT 'active' -- e.g., active, inactive, locked
);
```

### 2. Refresh Token Table（刷新權杖表格）

> 在無狀態的 JWT 架構中，我們不需要在伺服器端保存 `session`。使用者的登入狀態由 Access Token 本身來證明。然而，為了安全地換發新的 Access Token，我們需要一個地方來儲存長效的 Refresh Token。

```sql
CREATE TABLE refresh_token_table (
    token_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    token_value TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE
);
```

### 3. Application Table（應用程式表格）

> 存儲與 SSO 系統集成的各個應用程式（在 OAuth2 中稱為 Client）的資訊。

```sql
CREATE TABLE application_table (
    app_id serial PRIMARY KEY,
    app_name VARCHAR(100) NOT NULL UNIQUE,
    client_id VARCHAR(100) NOT NULL UNIQUE,
    client_secret_hash VARCHAR(255) NOT NULL,
    redirect_uris TEXT[] NOT NULL -- An array of allowed redirect URIs
);
```

### 4. User-Application Consent Table（使用者應用程式授權表格）

> 用於記錄使用者同意授權給某個應用程式的範圍（Scopes）。

```sql
CREATE TABLE user_app_consent (
    consent_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    app_id INT NOT NULL,
    granted_scopes TEXT[] NOT NULL,
    last_granted_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,

    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE,
    FOREIGN KEY (app_id) REFERENCES application_table (app_id) ON DELETE CASCADE,
    UNIQUE (user_id, app_id)
);
```

### 5. Audit Log Table（審計日誌表格）

> 記錄與安全相關的活動，用於追蹤和分析。

```sql
CREATE TABLE audit_log (
    log_id serial PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,

    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE SET NULL
);
```

### 6. Role and Permission Tables（角色與權限表格）

> 實現 RBAC (Role-Based Access Control) 的核心表格。

```sql
CREATE TABLE role_table (
    role_id serial PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE permission_table (
    permission_id serial PRIMARY KEY,
    permission_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE user_role_mapping (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES role_table (role_id) ON DELETE CASCADE
);

CREATE TABLE role_permission_mapping (
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES role_table (role_id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permission_table (permission_id) ON DELETE CASCADE
);
```

---

## 完整 SQL

```sql
CREATE TABLE user_table (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    status VARCHAR(20) NOT NULL DEFAULT 'active' -- e.g., active, inactive, locked
);

CREATE TABLE refresh_token_table (
    token_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    token_value TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE
);

CREATE TABLE application_table (
    app_id serial PRIMARY KEY,
    app_name VARCHAR(100) NOT NULL UNIQUE,
    client_id VARCHAR(100) NOT NULL UNIQUE,
    client_secret_hash VARCHAR(255) NOT NULL,
    redirect_uris TEXT[] NOT NULL -- An array of allowed redirect URIs
);

CREATE TABLE user_app_consent (
    consent_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    app_id INT NOT NULL,
    granted_scopes TEXT[] NOT NULL,
    last_granted_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,

    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE,
    FOREIGN KEY (app_id) REFERENCES application_table (app_id) ON DELETE CASCADE,
    UNIQUE (user_id, app_id)
);

CREATE TABLE audit_log (
    log_id serial PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    ip_address VARCHAR(50),
    user_agent TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,

    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE SET NULL
);

CREATE TABLE role_table (
    role_id serial PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE permission_table (
    permission_id serial PRIMARY KEY,
    permission_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE user_role_mapping (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES role_table (role_id) ON DELETE CASCADE
);

CREATE TABLE role_permission_mapping (
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES role_table (role_id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permission_table (permission_id) ON DELETE CASCADE
);
```
