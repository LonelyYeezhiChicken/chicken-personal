---
sidebar_position: 2
description: SSO 概觀
key: [sso, Single Sign-On]
tags: [sso, Single Sign-On]
---

# 🔐 SSO 概觀

## 關於 SSO

> SSO (Single Sign-On): 單點登入
>
> 是一種身份驗證和授權機制，允許使用者僅需一次登入，然後就能訪問多個相關的應用程式和服務，而無需再次輸入其認證資訊
>
> SSO 提供了方便性和安全性，並提高了使用者體驗

# 🔐 SSO 概觀

## 關於 SSO

> SSO (Single Sign-On): 單點登入
>
> 是一種身份驗證機制，允許使用者僅需一次登入，就能訪問多個互相信任的應用程式，而無需為每個應用程式重複輸入認證資訊。SSO 旨在提升使用者便利性與系統安全性。

## 傳統登入方式 (Session-Cookie)

在理解 SSO 之前，我們先回顧傳統的、單一系統的登入方式。

### 傳統登入方式的角色

-   **使用者 (User)**：希望登入應用程式的人。
-   **瀏覽器 (Browser)**：使用者與後端伺服器互動的介面。
-   **後端伺服器 (Server)**：負責驗證使用者身份並管理會話 (Session)。

### 傳統登入方式流程說明

1.  使用者在瀏覽器輸入帳號密碼，發送登入請求至後端伺服器。
2.  伺服器驗證使用者提供的資訊是否正確。
3.  驗證成功後，伺服器執行以下操作：
    -   在伺服器端建立一個「會話 (Session)」，用來儲存使用者的登入狀態。
    -   產生一個獨一無二的 `Session ID`，並將其透過 `Set-Cookie` 標頭傳回給瀏覽器。
4.  瀏覽器收到回應後，會將 `Session ID` 儲存在 Cookie 中。
5.  在後續的每個請求中，瀏覽器都會自動攜帶包含 `Session ID` 的 Cookie。
6.  伺服器收到請求後，讀取 Cookie 中的 `Session ID`，並在自身的 Session 儲存區中查找對應的會話資料，從而確認使用者身份。
7.  如果找不到或會話已過期，則視為未登入。

### 傳統登入方式流程圖

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: 輸入帳號密碼，點擊登入
    Browser->>Server: POST /login (帳號, 密碼)
    Server->>Server: 驗證帳號密碼
    alt 驗證成功
        Server->>Server: 建立 Session，生成 Session ID
        Server-->>Browser: 回應成功 (攜帶 Set-Cookie: sessionId=...)
        Browser->>Browser: 保存 Session ID 到 Cookie
        Browser->>Server: GET /profile (自動攜帶 Cookie)
        Server->>Server: 讀取 Cookie 中的 Session ID
        Server->>Server: 查找對應的 Session 資料
        alt 找到 Session
            Server-->>Browser: 回應使用者個人資料
        else 找不到 Session
            Server-->>Browser: 回應錯誤 (要求重新登入)
        end
    else 驗證失敗
        Server-->>Browser: 回應登入失敗
    end
```

### 傳統登入在多系統下的瓶頸

這種緊密依賴伺服器端 Session 的方式在分散式或微服務架構中會遇到瓶頸：

1.  **Session 無法共享**：每個服務都有自己的 Session 儲存區，無法互通。使用者在系統 A 登入後，訪問系統 B 時仍會被視為未登入。
2.  **Cookie 無法跨主域**：瀏覽器的安全機制限制 Cookie 只能在同一個主域名下傳遞，無法在 `a.com` 和 `b.com` 之間共享。

為了解決這些問題，SSO 應運而生。

## SSO 原理 (以 OIDC 為例)

現代 SSO 主要基於如 **OpenID Connect (OIDC)** 或 **SAML** 等標準協定。OIDC 建立在 OAuth 2.0 之上，是目前最主流的 Web SSO 解決方案。

### OIDC 的核心角色

-   **使用者 (User)**：操作瀏覽器的人。
-   **使用者代理 (User-Agent)**：即瀏覽器。
-   **身份提供者 (Identity Provider, IdP)**：負責驗證使用者身份的專門服務，也就是我們的 SSO 系統。
-   **依賴方 (Relying Party, RP)**：信任 IdP 並依賴其進行身份驗證的應用程式，也常被稱為服務提供者 (Service Provider, SP)。

### OIDC 登入流程圖 (首次登入)

```mermaid
sequenceDiagram
    participant User
    participant RP as 服務 A (Relying Party)
    participant IdP as 身份提供者 (Identity Provider)

    User->>RP: 點擊登入
    RP->>User: 重新導向至 IdP 的登入頁面
    User->>IdP: 輸入帳號密碼
    IdP->>IdP: 驗證帳號密碼
    alt 驗證成功
        IdP->>IdP: 建立自身登入會話 (e.g., by Cookie)
        IdP->>User: 重新導向回 RP (帶上授權碼 code)
        User->>RP: 攜帶授權碼 code 訪問 RP
        RP->>IdP: 在後端用 code 換取 Token (ID Token, Access Token)
        IdP->>RP: 回應 Token
        RP->>RP: 驗證 Token，確認使用者身份
        RP->>User: 登入成功，顯示歡迎頁面
    else 驗證失敗
        IdP->>User: 顯示錯誤訊息
    end
```

### SSO 流程圖 (已登入狀態下訪問另一服務)

當使用者已經在 IdP 登入後，訪問另一個應用程式的流程變得非常無縫。

```mermaid
sequenceDiagram
    participant User
    participant RP2 as 服務 B (Relying Party 2)
    participant IdP as 身份提供者 (Identity Provider)

    User->>RP2: 訪問服務 B，點擊登入
    RP2->>User: 重新導向至 IdP
    IdP->>IdP: 檢查到使用者已有登入會話 (Cookie)
    IdP->>User: **跳過登入步驟**，直接重新導向回 RP2 (帶上新的授權碼 code)
    User->>RP2: 攜帶授權碼 code 訪問 RP2
    RP2->>IdP: 在後端用 code 換取 Token
    IdP->>RP2: 回應 Token
    RP2->>RP2: 驗證 Token，確認使用者身份
    RP2->>User: 登入成功，顯示歡迎頁面
```

### SSO 登出流程圖 (Single Logout, SLO)

單點登出確保使用者在任何一個應用程式登出後，所有其他應用程式的登入狀態也一併失效。

```mermaid
sequenceDiagram
    participant User
    participant RP as 服務 A
    participant IdP as 身份提供者

    User->>RP: 點擊登出
    RP->>RP: 清除本地登入狀態
    RP->>User: 重新導向至 IdP 的登出端點
    User->>IdP: 請求登出
    IdP->>IdP: 清除自身的登入會話 (Cookie)
    IdP->>User: 顯示登出成功頁面
    note right of IdP: IdP 也可以透過後端通知<br/>或其他重導向機制<br/>讓所有已登入的 RP 都登出。
```

---

REF:

-   [看完这篇你不能再说不懂SSO原理了！](https://www.cnblogs.com/qdhxhz/p/17007958.html)
-   [OpenID Connect (OIDC) Core Specification](https://openid.net/connect/)
