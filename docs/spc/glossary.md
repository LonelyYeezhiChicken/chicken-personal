---
sidebar_position: 2
description: SPC 縮寫一行定義與深入閱讀連結
key: [SPC, 術語, Glossary, UCL, Cpk, OOC, OOS, Subgroup]
tags: [SPC, 基礎, AI筆記]
---

# 📊 SPC 快速術語表

本章節只做一件事：提供**一行定義 + 連結**。理論推導與車庫比喻見 [`terminology`](./terminology.md)。

## 讀完本篇你能回答

- 看到 UCL、Cpk、OCAP 等縮寫時，各代表什麼、該點哪篇深入？

## 界限與判定

| 術語 | 一句話 | 深入閱讀 |
|------|--------|----------|
| **UCL / LCL** | 歷史數據算出的管制上下限 | [control-vs-spec-limits](./core-model/control-vs-spec-limits.md) |
| **USL / LSL** | 客戶/設計訂的規格上下限 | [control-vs-spec-limits](./core-model/control-vs-spec-limits.md) |
| **OOC** | 統計失控 | [decision-rules](./core-model/decision-rules.md) |
| **OOS** | 產品不合格 | [detection-and-alert](./exception-handling/detection-and-alert.md) |

## 能力指標

| 術語 | 一句話 | 深入閱讀 |
|------|--------|----------|
| **Cp** | 只看波動寬窄 | [terminology](./terminology.md) |
| **Cpk** | 波動 + 中心偏移 | [calculation-engine](./engine/calculation-engine.md) |
| **Ppk** | 長期真實表現 | [calculation-engine](./engine/calculation-engine.md) |
| **σ_within / σ_overall** | 組內 vs 全體變異 | [calculation-engine](./engine/calculation-engine.md) |

## 控制圖與數據

| 術語 | 一句話 | 深入閱讀 |
|------|--------|----------|
| **X-bar** | 子組平均值圖 | [dual-chart-philosophy](./core-model/dual-chart-philosophy.md) |
| **Subgroup** | 理性分群的統計單位 | [monitoring-strategy](./core-model/monitoring-strategy.md) |
| **Monitor Value** | 控制圖上的一個點 | [data-collection](./engine/data-collection.md) |
| **Raw Sample** | 設備原始量測 | [data-collection](./engine/data-collection.md) |

## 系統與流程

| 術語 | 一句話 | 深入閱讀 |
|------|--------|----------|
| **SpcPlan** | 定義誰進哪張圖 | [monitoring-plan](./engine/monitoring-plan.md) |
| **SpcHis** | 封裝當下界限的快照 | [data-snapshot](./core-model/data-snapshot.md) |
| **OCAP** | 異常標準處置流程 | [disposition-state-machine](./exception-handling/disposition-state-machine.md) |
| **Hold Lot** | MES 攔截批次 | [cross-system-integration](./exception-handling/cross-system-integration.md) |
| **Backfill** | 延遲補點回填 | [spcDebugging](./exception-handling/spcDebugging.md) |

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 學習路徑 | [`index`](./index.md) |
| 理論入門 | [`terminology`](./terminology.md) |
| 端到端流程 | [`endToEndLifecycle`](./core-model/endToEndLifecycle.md) |