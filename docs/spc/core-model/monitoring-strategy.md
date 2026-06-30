---
sidebar_position: 1
description: 監控計畫、理性分群與數據齊一性（概念層）
key: [SPC, 監控計畫, 理性分群, 數據路由]
tags: [SPC, 領域模型, AI筆記]
---

# 📊 監控策略與分群架構

本章節只做一件事：從**統計學角度**說明為什麼要監控計畫（SpcPlan）與理性分群（Subgroup）。工程實作（Wildcard 匹配、優先級算法）見 [`monitoring-plan`](../engine/monitoring-plan.md)。

## 讀完本篇你能回答

- 為什麼不能把不同產品/工序的數據畫在同一張圖？
- Subgroup 的「組內 vs 組間」變異各代表什麼？
- TRIAL / ACTIVE / OBSOLETE 三階段各做什麼？

## 1. 監控計畫：蘋果對蘋果

半導體廠有數萬量測點，**SpcPlan** 定義哪些數據可以放在一起比：

| 維度 | 範例 |
|------|------|
| Product | 產品型號 |
| Operation | 工序 |
| DataItem | 量測項 |

統計前提：**母體齊一**（Homogeneity）。混質數據會把界限拉歪，虛警與漏警一起來。

數據靠 Metadata 路由到對應控制圖；匹配失敗的進 **Pending Pool**，避免髒數據污染歷史。

## 2. 理性分群：組內與組間

| 變異類型 | 設計目標 | 用途 |
|----------|----------|------|
| **組內** | 只剩隨機原因 | 估計 $\sigma$，畫 R/S 圖 |
| **組間** | 抓異常原因 | 偵測偏移、趨勢 |

$X$-bar 圖常見 $n = 3 \sim 5$。增加 $n$ 可縮小 $\sigma_{\bar{X}} = \sigma / \sqrt{n}$，提升靈敏度，但過大可能混入異質樣本。

## 3. 計畫生命週期

| 階段 | 行為 |
|------|------|
| **TRIAL** | 只收數據建基線，不算 $C_{pk}$ |
| **ACTIVE** | 正式算界限，啟用 OOC 聯動 |
| **OBSOLETE** | 不再收新數據，保留稽核 |

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 路由引擎實作 | [`monitoring-plan`](../engine/monitoring-plan.md) |
| 資料彙總 | [`data-collection`](../engine/data-collection.md) |
| 端到端流程 | [`endToEndLifecycle`](./endToEndLifecycle.md) |
| 路由失敗除錯 | [`spcDebugging`](../exception-handling/spcDebugging.md) |