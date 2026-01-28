---
sidebar_position: 15
description: Mockoon 的基本使用教學，從建立第一個 Mock API 環境到設定路由。
key: [Mockoon, Usage, API, Mock, Tutorial]
tags: [Mockoon, Usage, API, Mock, Tutorial]
---

# 👀 Mockoon 基本用法

> 本篇將引導你完成 Mockoon 的基本操作，從建立環境到新增你的第一個 Mock API 路由。以下操作皆使用 Mockoon 桌面版應用程式。

## 1. 建立一個新的 Mock 環境

啟動 Mockoon 後，你會看到主畫面。

1.  點擊左上角的「**New environment**」按鈕。
2.  你可以為這個環境取一個名字（例如 `My-Test-API`），並設定它運行的 port（例如 `3000`）。
3.  點擊「**Save**」儲存。

一個環境可以包含多個 API 路由，你可以把它想像成一個專案或一個微服務的 Mock 集合。

## 2. 新增你的第一個 API 路由

環境建立後，我們來新增一個路由 (Route)。

1.  點擊你的環境旁邊的「**Add route**」按鈕 (一個帶有 `+` 的藍色圓圈)。
2.  你會看到一個新的路由被建立，預設是 `GET /`。

## 3. 設定路由

現在，點擊這個新建立的路由，右側會出現路由的設定面板。

-   **方法 (Method)**: 選擇 HTTP 方法，例如 `GET`, `POST`, `PUT` 等。我們保持 `GET`。
-   **路徑 (Path)**: 設定你的 API 路徑。將 `/` 修改為 `/users`。
-   **回應內容 (Response Body)**: 在 `Body` 標籤頁中，你可以設定這個 API 要回傳的內容。我們來回傳一個 JSON 陣列。

在 `Body` 編輯器中輸入以下 JSON 內容：

```json
[
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  }
]
```

## 4. 啟動/停止 Mock 伺服器

完成設定後，你需要啟動這個 Mock 環境，它才會開始監聽請求。

-   點擊環境名稱旁邊的「**Start server**」按鈕 (一個綠色的播放按鈕 ▶️)。
-   按鈕會變成紅色的停止按鈕 (⏹️)，表示伺服器正在運行中。

## 5. 測試 API

現在你的 Mock API 已經在 `http://localhost:3000` 上運行了。

打開你的瀏覽器或使用任何 API 測試工具（如 Postman, curl）訪問 `http://localhost:3000/users`。

```bash
curl http://localhost:3000/users
```

你應該會看到你剛剛設定的 JSON 內容被成功回傳。

```json
[
  {
    "id": 1,
    "name": "Alice"
  },
  {
    "id": 2,
    "name": "Bob"
  }
]
```

## 更多功能

Mockoon 還提供了許多強大的功能，例如：

-   **動態回應**: 使用 Handlebars 模板語法產生動態的假資料 (如 `{{faker 'name.firstName'}}`)。
-   **多重回應 (Multiple Responses)**: 為同一個路由設定多種不同的回應，並可以設定規則來決定何時回傳哪一個。
-   **延遲 (Latency)**: 模擬真實世界的網路延遲。
-   **標頭 (Headers)**: 自訂回應的 HTTP 標頭。

你可以透過探索 Mockoon 的介面來發掘更多實用的功能。
