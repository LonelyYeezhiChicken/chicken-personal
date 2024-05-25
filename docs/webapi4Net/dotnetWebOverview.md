---
sidebar_position: 5
description: Web 結構
key: [WebAPI, asp dotnet]
tags: [WebAPI, C#, asp dotnet]
---

# 🛰 Web 結構

## web 體系結構擁有三個核心觀念

1. 資源 (resource)
2. URI (Uniform Resource Identifier)
3. 表示 (representation)

### 資源 (resource)

- 只要任何有 identity (註 1) 的東西都屬於資源
- 資源本身會是一個或多個實體 (entity) 的概念映射
- 他可能是一格種文字格式，也可能是文件、圖片、影片等
- 而資源不需要對應到資料庫的實體，也不須對應到業務邏輯的物件

> 註 1:
> [identity](https://www.rfc-editor.org/rfc/rfc2396#section-1.1) :
> 是一個唯一的物件，可以被當成身分的東西

### URI (Uniform Resource Identifier)

- 他可以被視為一個資源的 `主鍵 (primary key)`
- URI 被分為兩種:
  1. 統一資源定位符 (Universal Resource Locator, URL)
  2. 統一資源名稱 (Universal Resource Name, URN)
- 大多數看到的 URI 都是 URL ，因此他們常常被當成同義詞

### 表示 (representation)

- 表示是資源在某一特定時間點的狀態
- 它可以以不同的格式傳遞，例如 JSON、XML、HTML 等
- 表示允許客戶端與服務端以標準化的方式溝通資源的狀態
- 這樣的方式使得資源可以被不同的應用程序以不同的格式進行處理與呈現

## Web API 的設計原則

1. **統一接口 (Uniform Interface)**
   - 簡化與解耦合
   - 使用標準的 HTTP 方法（GET、POST、PUT、DELETE 等）
2. **無狀態 (Stateless)**
   - 每個請求都應該包含所有的資訊，以便服務器能夠理解和處理請求
   - 無需保留客戶端的狀態，這樣可以提升可伸縮性
3. **可緩存 (Cacheable)**
   - 通過明確的快取控制來提高效能
   - 客戶端和中介軟體應該能夠快取回應
4. **分層系統 (Layered System)**
   - 客戶端無需了解系統的結構
   - 可以使用中間層來提升可擴展性和安全性

## Web API 的安全性考量

1. **認證與授權 (Authentication and Authorization)**
   - 確保只有授權的用戶才能存取資源
   - 常見的認證方法有 OAuth、JWT 等
2. **數據加密 (Data Encryption)**
   - 使用 HTTPS 保護數據在傳輸過程中的安全
3. **輸入驗證 (Input Validation)**
   - 防止 SQL 注入、XSS 攻擊等常見的安全漏洞
   - 確保所有輸入都經過嚴格的驗證和消毒

## 參考

- [resource - rfc2396](https://www.rfc-editor.org/rfc/rfc2396#section-1.1)
- [URI - rfc3986](https://www.rfc-editor.org/rfc/rfc3986)
