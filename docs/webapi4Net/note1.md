---
sidebar_position: 35
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

---

## 參考

- [resource - rfc2396](https://www.rfc-editor.org/rfc/rfc2396#section-1.1)
- [URI - rfc3986](https://www.rfc-editor.org/rfc/rfc3986)

### (持續更新中 ....)
