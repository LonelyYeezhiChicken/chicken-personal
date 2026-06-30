---
sidebar_position: 20
description: S6 資料收集 Stream：S6F1 與 S6F11 事件資料上報
key: [SECS, S6, S6F11, Collection Event, CEID, Trace]
tags: [SECS, 訊息字典, AI筆記]
---

# 🔰 S6 資料收集 Stream

本章節整理 S6（Data Collection）的訊息。S6 負責將設備的生產事件與追蹤資料送達 Host。

:::info 資料來源聲明
本文為學習筆記性質之原創整理，**非 SEMI 標準全文轉載**。完整格式請以 [SEMI 官方標準](https://www.semi.org/) 或設備廠商 Spec 為準。
:::

## 常用訊息對照表

| 代號 | 標準名稱 | 方向 | 配對 | 用途摘要 |
|------|----------|------|------|----------|
| **S6F1** | Trace Data Send | E→H | — | 追蹤資料上報（Trace 模式） |
| **S6F2** | Trace Data Acknowledge | H→E | ← S6F1 | Host 確認收到追蹤資料 |
| **S6F11** | Event Report Send | E→H | — | 事件報告上報（Collection Event） |
| **S6F12** | Event Report Acknowledge | H→E | ← S6F11 | Host 確認收到事件 |
| **S6F15** | Event Report Request | H→E | → S6F16 | Host 主動請求事件資料 |
| **S6F16** | Event Report Data | E→H | ← S6F15 | 回覆請求的事件資料 |
| **S6F19** | Individual Report Request | H→E | → S6F20 | 請求單一報告內容 |
| **S6F20** | Individual Report Data | E→H | ← S6F19 | 回覆單一報告資料 |

## 重點：S6F11 事件報告

GEM 事件報告的核心。設備在 CEID 觸發時主動發送。

```yaml
# S6F11 Body 示意
L 2
  U4 1 5001            # DATAID
  U4 1 100             # CEID（Collection Event ID）
  L 1                  # 報告列表
    L 2
      U4 1 1           # RPTID
      L 2              # 報告資料（依 S2F33 定義）
        A 8 "LOT001  "
        U4 1 25
```

前提：Host 須先透過 S2F33–F38 完成 Report 定義與 Event 連結。

## S6F1 vs S6F11

| 項目 | S6F1 Trace | S6F11 Event |
|------|-----------|-------------|
| 觸發 | 週期性（S2F23 啟動） | 事件驅動（CEID） |
| 用途 | 連續感測器數據 | 狀態改變通知 |
| 資料量 | 高頻、大量 | 事件驅動、間歇 |

## 與其他文章的關聯

- S2 事件定義：[`s2-equipmentControl`](/docs/secs/messages/s2-equipmentControl)
- GEM 事件報告：[`eventReport`](/docs/secs/gem/eventReport)
- Stream 總覽：[`streamOverview`](/docs/secs/messages/streamOverview)