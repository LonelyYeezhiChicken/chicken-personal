---
sidebar_position: 5
description: 多管道通報、指數退避重試與備援路徑
key: [SPC, 異構管道, 指數退避, 備援路徑, 重試策略]
tags: [SPC, 異常處理, 基礎設施, AI筆記]
---

# 📊 通報可靠性與補償機制

本章節只做一件事：說明告警任務從建立到送達的**可靠投遞**機制。告警建立見 [`detection-and-alert`](./detection-and-alert.md)。

## 讀完本篇你能回答

- 通報任務有哪些狀態？
- MMS 掛了怎麼辦？
- 如何稽核「誰讀了通知」？

## 1. 多管道

| 管道 | 特點 |
|------|------|
| MMS / IM | 即時、可內嵌摘要 |
| App Push | 行動裝置 |
| Email | 長內容、可附圖 |

插件化架構，依廠區配置啟用。

## 2. 重試策略

任務狀態：PENDING → SENT / FAILED。失敗時以 1、4、16 分鐘**指數退避**重試，避免雪崩。

## 3. 備援與稽核

- 首選管道持續失敗 → 自動切 Email
- 全系統失效 → 管理員最高級警報
- 記錄已讀回執，定期檢視延遲與失敗率

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 告警抑制 | [`alert-suppression`](./alert-suppression.md) |
| 報表派送 | [`report-automation`](../visualization/report-automation.md) |