---
sidebar_position: 5
description: SSO 功能模組拆分
key: [sso, Single Sign-On]
tags: [sso, Single Sign-On]
---

# 🔐 SSO 功能模組

## 關於 SSO 功能模組

在現代應用程式架構中，單一登錄 (SSO) 系統通常扮演著**身份提供者 (Identity Provider, IdP)** 的核心角色。它的主要職責是管理使用者身份，並向已註冊的應用程式（稱為**服務提供者, Service Provider, SP** 或 **客戶端, Client**）提供安全可靠的身份驗證服務。

這個模組的目標是透過一次登錄，讓使用者能夠無縫存取多個相關的應用程式，無需重複輸入認證資訊，從而提升安全性與便利性。

## 模組拆分

一個功能完整的 SSO (IdP) 系統通常包含以下幾個核心模組：

### 核心身份驗證 (Authentication)

1.  使用者註冊 (User Registration)
2.  使用者登錄 (User Login) & 登出 (Logout)
3.  多因素驗證 (Multi-Factor Authentication, MFA)
4.  產生與驗證存取權杖 (Access Token) 與身份權杖 (ID Token)
5.  管理使用者會話 (Session Management)

### 使用者管理 (User Management)

1.  新增、編輯和刪除使用者
2.  密碼變更與重設
3.  使用者狀態管理（啟用、禁用、鎖定）

### 應用程式管理 (Application Management / Client Registry)

1.  新增、編輯和刪除應用程式 (Client)
2.  設定應用程式的回呼 URL (Callback URL) 與其他安全參數
3.  為每個應用程式生成唯一的 Client ID 和 Client Secret

### 授權與同意管理 (Authorization & Consent)

1.  管理使用者對應用程式的授權範圍 (Scope)
2.  記錄並管理使用者的同意 (Consent) 決策

### 身份聯合 (Identity Federation)

1.  整合外部身份提供者 (External IdP)，如 Google, GitHub, Facebook
2.  支援 SAML, OAuth2/OIDC 等標準協定進行聯合登入

### 存取控制 (Access Control / RBAC)

1.  新增、編輯和刪除角色 (Role)
2.  定義、分配和管理權限 (Permission)
3.  管理使用者與角色的對應關係

### 日誌與稽核 (Logging & Auditing)

1.  記錄使用者登入、登出、授權等安全事件
2.  提供操作日誌的檢索與顯示
