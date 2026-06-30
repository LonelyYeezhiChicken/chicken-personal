---
sidebar_position: 1
description: OOC/OOS 雙路判定、告警事務原子性與優先級派發
key: [SPC, 異常偵測, OOC, OOS, 原子性, 優先級]
tags: [SPC, 異常處理, AI筆記]
---

# 📊 異常偵測與告警觸發

本章節只做一件事：說明數據寫入瞬間如何**同時判定 OOC/OOS 並可靠建立告警任務**。規則語意見 [`decision-rules`](../core-model/decision-rules.md)。

## 讀完本篇你能回答

- OOC 與 OOS 在哪個時點被判定？
- 怎麼保證告警任務不遺失？
- OOS 與 OOC 的通報優先級誰高？

## 1. 雙路判定

| 路徑 | 依據 | 結果 |
|------|------|------|
| OOC | UCL/LCL + Nelson 規則 | 製程不穩 |
| OOS | USL/LSL | 產品不合格 |

兩路獨立、同時執行。

## 2. 事務原子性

「寫入 SpcHis」與「插入告警任務」鎖在同一資料庫事務。發送服務掛掉時，背景補償程式續傳，目標零丟失。

## 3. 優先級

| 因子 | 影響 |
|------|------|
| OOS > OOC | 嚴重度 |
| 關鍵工序 | High Priority |
| 高優先 | 目標 5 秒內推播 |

## 4. 補點（Backfill）

| 情境 | 行為 |
|------|------|
| 歷史數據修改 | 重跑該區間判定 |
| 延遲補點 | 標記 Backfill Alert，通常不自動 Hold |

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 告警抑制 | [`alert-suppression`](./alert-suppression.md) |
| 規則引擎 | [`rule-engine`](../engine/rule-engine.md) |
| 端到端流程 | [`endToEndLifecycle`](../core-model/endToEndLifecycle.md) |
| 除錯 | [`spcDebugging`](./spcDebugging.md) |