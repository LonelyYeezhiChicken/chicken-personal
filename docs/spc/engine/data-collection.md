---
sidebar_position: 1
description: Raw Sample 與 Monitor Value 雙層模型，以及 R/S 離散估計選擇
key: [SPC, ETL, 原始樣本, 觀測彙總值, R, S]
tags: [SPC, 資料工程, AI筆記]
---

# 📊 資料擷取與彙總架構

本章節只做一件事：說明 ETL 如何把設備量測變成控制圖上的**一個點**（Monitor Value），以及為什麼要保留 Raw Sample。全流程見 [`endToEndLifecycle`](../core-model/endToEndLifecycle.md)。

## 讀完本篇你能回答

- Raw Sample 與 Monitor Value 各存什麼？
- $n$ 較小用 $R$、較大用 $S$ 的邏輯是什麼？
- 各組樣本數不同時，中心線怎麼算？

## 1. 雙層數據模型

| 層級 | 內容 | 用途 |
|------|------|------|
| **Raw Sample** | 設備直接量測值 | 組內變異、下鑽診斷 |
| **Monitor Value** | 一組樣本彙總後的單值 | 控制圖上的「點」 |

彙總分兩類：

- **位置**：$\bar{X} = \sum x_i / n$
- **離散**：$R$ 或 $S$

## 2. R vs S 怎麼選

| 方法 | 公式 | 適用 |
|------|------|------|
| 全距 $R$ | $X_{\max} - X_{\min}$ | $n < 10$ |
| 標準差 $S$ | $\sqrt{\sum(x_i-\bar{x})^2/(n-1)}$ | $n \geq 10$ |

## 3. 動態樣本數

各組 $n$ 不一致時，總中心線用加權平均：

$$\bar{\bar{X}} = \frac{\sum (n_i \cdot \bar{x}_i)}{\sum n_i}$$

係數表（$d_2$、$A_2$ 等）依當前 $n$ 自動查表。

:::info 實務提醒
分組要考慮**時間同質性**——相隔過久的樣本不應硬湊同一 Subgroup。系統可支援強制分組截斷。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 分群概念 | [`monitoring-strategy`](../core-model/monitoring-strategy.md) |
| 界限計算 | [`calculation-engine`](./calculation-engine.md) |
| 端到端流程 | [`endToEndLifecycle`](../core-model/endToEndLifecycle.md) |