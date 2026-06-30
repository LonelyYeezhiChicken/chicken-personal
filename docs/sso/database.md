---
sidebar_position: 10
description: SSO 資料庫
key: [sso, Single Sign-On]
tags: [sso, Single Sign-On, Postgresql]
---

# 🔐 SSO 資料庫

## 關於本篇

SSO 概念說明見 [SSO 概觀](./ssoOverView.md)。本篇聚焦 IdP 端的資料庫設計。

## 資料庫

### 資料庫設計考量

一個基於 OIDC 的 IdP **通常是有狀態的**：瀏覽器端的 IdP 登入 Session（Cookie）、短效的 authorization code、以及 refresh token 都需要伺服器端儲存或快取。這與 [SSO 概觀](./ssoOverView.md) 中 IdP 建立登入會話的描述一致。

所謂「JWT 無狀態」主要指 **RP 端**：RP 收到 ID Token 後可用公鑰驗簽，不必每次回 IdP 查 session。但 IdP 本身仍需要持久化儲存來管理使用者、Client 註冊與 token 生命週期。

以下為符合常見 OIDC IdP 實踐的資料庫結構範例。

### 1. User Table（使用者表格）

存儲使用者的基本資訊。`username` 和 `email` 都應具備唯一性，以防止資料重複。

```sql
CREATE TABLE user_table (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    status VARCHAR(20) NOT NULL DEFAULT 'active' -- e.g., active, inactive, locked
);
```

### 2. Authorization Code Table（授權碼表格，可選）

Authorization Code Flow 中，IdP 產生的 `code` 生命週期極短（通常數分鐘內），需在伺服器端記錄以供 RP 兌換。高流量場景可改用 Redis 等快取，不一定需要關聯式表格。

```sql
CREATE TABLE authorization_code_table (
    code_hash VARCHAR(255) PRIMARY KEY,
    user_id INT NOT NULL,
    client_id VARCHAR(100) NOT NULL,
    redirect_uri TEXT NOT NULL,
    scopes TEXT[],
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,

    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE
);
```

### 3. Refresh Token Table（刷新權杖表格）

Access Token 生命週期短，RP 需透過 Refresh Token 向 IdP 換發新 token。Refresh Token 必須在伺服器端儲存，以便撤銷與輪替。

```sql
CREATE TABLE refresh_token_table (
    token_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    client_id VARCHAR(100) NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE
);
```

### 4. Application Table（應用程式表格）

存儲與 SSO 系統集成的各個應用程式（在 OAuth2 中稱為 Client）的資訊。

```sql
CREATE TABLE application_table (
    app_id serial PRIMARY KEY,
    app_name VARCHAR(100) NOT NULL UNIQUE,
    client_id VARCHAR(100) NOT NULL UNIQUE,
    client_secret_hash VARCHAR(255) NOT NULL,
    redirect_uris TEXT[] NOT NULL -- An array of allowed redirect URIs
);
```

### 5. User-Application Consent Table（使用者應用程式授權表格）

用於記錄使用者同意授權給某個應用程式的範圍（Scopes）。

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

### 6. Audit Log Table（審計日誌表格）

記錄與安全相關的活動，用於追蹤和分析。

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

:::info 關於 RBAC
角色與權限（RBAC）通常由各 RP 應用程式自行管理，而非 IdP 的必備表格。若你的 side project 需要集中管理角色，可另行擴充，但不屬於 OIDC 標準的最低需求。
:::

## 完整 SQL

```sql
CREATE TABLE user_table (
    user_id serial PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    status VARCHAR(20) NOT NULL DEFAULT 'active'
);

CREATE TABLE authorization_code_table (
    code_hash VARCHAR(255) PRIMARY KEY,
    user_id INT NOT NULL,
    client_id VARCHAR(100) NOT NULL,
    redirect_uri TEXT NOT NULL,
    scopes TEXT[],
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE
);

CREATE TABLE refresh_token_table (
    token_id serial PRIMARY KEY,
    user_id INT NOT NULL,
    client_id VARCHAR(100) NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    issued_at TIMESTAMPTZ NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY (user_id) REFERENCES user_table (user_id) ON DELETE CASCADE
);

CREATE TABLE application_table (
    app_id serial PRIMARY KEY,
    app_name VARCHAR(100) NOT NULL UNIQUE,
    client_id VARCHAR(100) NOT NULL UNIQUE,
    client_secret_hash VARCHAR(255) NOT NULL,
    redirect_uris TEXT[] NOT NULL
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
```