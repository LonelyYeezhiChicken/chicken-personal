---
sidebar_position: 5
description: SSO 功能模組拆分
key: [sso, Single Sign-On]
tags: [sso, Single Sign-On]
---

# 🔐 SSO 功能模組

## 關於 SSO 功能模組

單一登錄（Single Sign-On，簡稱SSO）功能模組是一個用於身份驗證和授權的關鍵組件，旨在提供用戶在多個應用程式之間的無縫身份驗證體驗，它通過一次登錄，用戶可以訪問多個相關的應用程式，而無需多次輸入他們的認證信息

這個模組的主要目標是增加安全性和便利性，同時降低管理多個應用程式的身份驗證和授權的複雜性，它包含多個子模組，每個子模組負責不同方面的功能，如用戶管理、會話管理、日誌記錄等等

我們將在以下部分詳細探討每個子模組的功能和操作，這個SSO功能模組旨在幫助開發者輕鬆實現強大的單一登錄體驗，同時確保安全性和可擴展性

## 模組拆分

### Authentication

1. 使用者註冊 (User Registration)
2. 使用者登錄 (User Login)
3. 生成和驗證 Token
4. 管理使用者會話 (Session Management)

### User Management

1. 使用者新增、編輯和刪除
2. 更改密碼和密碼重置
3. 更新使用者狀態

### Application

> 應用程式模組

1. 新增和管理應用程式
2. 設置應用程式的回調 URL

### User-App Mapping

> 使用者和應用程式關聯模組

1. 使用者與應用程式的關聯管理

### Log

> 日誌模組

1. 記錄使用者操作
2. 檢索和顯示操作日誌

### Permission and Role

> 許可權和角色模組

1. 新增、編輯和刪除角色
2. 定義、分配和管理許可權
3. 管理使用者角色