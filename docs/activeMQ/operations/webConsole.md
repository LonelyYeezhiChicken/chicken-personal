---
sidebar_position: 5
description: ActiveMQ 維運監控：Web Console 管理介面
key: [ActiveMQ, Web Console, 管理介面, purge, Queue 監控]
tags: [ActiveMQ, 維運監控, AI筆記]
---

# 🧣 Web Console 管理介面

本章節解析 ActiveMQ 內建的 Web Console 管理介面。透過瀏覽器即可監控 Queue 深度、管理 Consumer、手動搬移或清除訊息，是日常維運最常用的工具。

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release)
- 預設位址: `http://localhost:8161/admin`

## 1. 登入

- 帳密設定於 `/conf/jetty-realm.properties`
- 預設帳號: `admin` / `admin`

詳見 [`security`](/docs/activeMQ/advanced/security)。

## 2. 主要功能區

| 頁面 | 功能 |
|------|------|
| Queues | 查看所有 Queue、訊息數、Consumer 數 |
| Topics | 查看 Topic 與訂閱者 |
| Subscribers | 持久/非持久訂閱者列表 |
| Connections | 當前連線與 Client ID |
| Scheduled | 延遲/排程訊息 |

## 3. Queue 監控重點欄位

| 欄位 | 說明 | 告警閾值建議 |
|------|------|-------------|
| Number Of Pending Messages | 待消費訊息數 | 持續增長需排查 Consumer |
| Number Of Consumers | 消費者數量 | 為 0 表示無人消費 |
| Enqueue Count | 累計入隊數 | 觀察趨勢 |
| Dequeue Count | 累計出隊數 | 與 Enqueue 差距過大表示堆積 |
| Memory % | 佔用 Broker 記憶體比 | 接近 100% 需處理 |

## 4. 常用操作

### 4.1 清除 Queue 訊息（Purge）

1. 進入 **Queues** 頁面
2. 點選目標 Queue
3. 點擊 **Purge** 按鈕

:::caution
Purge 會永久刪除該 Queue 中所有待處理訊息，生產環境請謹慎操作。
:::

### 4.2 手動搬移訊息

1. 進入 Queue 詳情頁
2. 勾選訊息
3. 使用 **Move to** 指定目標 Queue

適用於將 DLQ 訊息搬回業務 Queue 重試（參見 [`deadLetterQueue`](/docs/activeMQ/usage/deadLetterQueue)）。

### 4.3 發送測試訊息

在 Queue 詳情頁使用 **Send To** 表單，可快速驗證 Consumer 是否正常運作。

## 5. 常見問題與排查

| 現象 | 可能原因 | 處理方式 |
|------|----------|----------|
| 無法登入 | 帳密錯誤 | 檢查 `jetty-realm.properties` |
| 8161 連不上 | Broker 未啟動 | 確認 `activemq.bat start` |
| Queue 列表為空 | 尚未有訊息進入 | 正常，動態建立 |
| Memory % 100% | 訊息堆積或 memoryUsage 太小 | 參見 [`flowControl`](/docs/activeMQ/advanced/flowControl) |

## 6. 與其他文章的關聯

- 安全設定：[`security`](/docs/activeMQ/advanced/security)
- DLQ 監控：[`deadLetterQueue`](/docs/activeMQ/usage/deadLetterQueue)
- JMX 進階監控：[`jmxMonitoring`](/docs/activeMQ/operations/jmxMonitoring)
- 出事前告警策略：[`proactiveAlerting`](/docs/activeMQ/operations/proactiveAlerting)