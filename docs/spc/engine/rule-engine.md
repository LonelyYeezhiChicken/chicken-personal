---
sidebar_position: 5
description: 滑動窗口、位元遮罩與複合規則的即時 OOC 判定引擎
key: [SPC, 統計規則, 滑動窗口, 位元遮罩, 區間劃分]
tags: [SPC, 統計計算, AI筆記]
---

# 📊 統計規則引擎

本章節只做一件事：說明**實作層**如何高效執行 Nelson 等規則。規則語意與製程解讀見 [`decision-rules`](../core-model/decision-rules.md)。

## 讀完本篇你能回答

- 連續 9 點同側這類規則為什麼需要滑動窗口？
- 位元遮罩如何做到 O(1) 判定？
- 試產與量產的規則集為何不同？

## 1. 滑動窗口

規則依賴歷史點位（如連續 9 點）。引擎在記憶體維護活動窗口：新點進、舊點出，避免每點查庫。

## 2. 位元遮罩

將點位相對 CL 的狀態編成位元流，用 bitmask 一次檢查「全 1 / 全 0」等模式，適合高併發即時判定。

## 3. 區間與複合規則

| 區間 | 範圍 |
|------|------|
| C | CL ± 1σ 內 |
| B | ±1σ ~ ±2σ |
| A | ±2σ ~ ±3σ |

支援 AND/OR/NOT 組合，並可按機台狀態啟用不同規則集。

:::info 實務提醒
試產用寬鬆規則避免噪聲；量產啟用完整 Nelson 抓細微衰退。支援 Script 自定義規則。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 規則語意 | [`decision-rules`](../core-model/decision-rules.md) |
| 告警觸發 | [`detection-and-alert`](../exception-handling/detection-and-alert.md) |
| 計算引擎 | [`calculation-engine`](./calculation-engine.md) |