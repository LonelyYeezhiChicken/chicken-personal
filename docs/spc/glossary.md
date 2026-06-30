---
sidebar_position: 2
description: SPC 快速術語表：UCL、Cpk、OOC、Subgroup 等縮寫一行查清楚
key: [SPC, 術語, Glossary, UCL, Cpk, OOC, OOS, Subgroup]
tags: [SPC, 基礎, AI筆記]
---

# 📊 SPC 快速術語表

本章節提供 SPC 系列常用縮寫的**一行定義**與深入閱讀連結。需要完整理論推導時，請讀 [`terminology`](./terminology.md)。

## 界限與判定

| 術語 | 全名 / 中文 | 一句話 | 深入閱讀 |
|------|------------|--------|----------|
| **UCL** | Upper Control Limit | 管制上限，由歷史數據統計得出 | [control-vs-spec-limits](./core-model/control-vs-spec-limits.md) |
| **CL** | Center Line | 管制中心線，通常為過程平均值 | [calculation-engine](./engine/calculation-engine.md) |
| **LCL** | Lower Control Limit | 管制下限，由歷史數據統計得出 | [control-vs-spec-limits](./core-model/control-vs-spec-limits.md) |
| **USL** | Upper Specification Limit | 規格上限，客戶或設計要求 | [control-vs-spec-limits](./core-model/control-vs-spec-limits.md) |
| **LSL** | Lower Specification Limit | 規格下限，客戶或設計要求 | [control-vs-spec-limits](./core-model/control-vs-spec-limits.md) |
| **OOC** | Out of Control | 統計受控失敗，製程不穩定 | [decision-rules](./core-model/decision-rules.md) |
| **OOS** | Out of Specification | 產品超出規格，可能為廢品 | [detection-and-alert](./exception-handling/detection-and-alert.md) |

## 製程能力指標

| 術語 | 全名 / 中文 | 一句話 | 深入閱讀 |
|------|------------|--------|----------|
| **Cp** | Process Capability | 製程精密度，只看波動寬窄 | [terminology](./terminology.md) §4 |
| **Ca** | Process Accuracy | 製程準確度，中心是否偏移 | [terminology](./terminology.md) §4 |
| **Cpk** | Process Capability Index | 綜合能力，同時考慮精密度與準確度 | [calculation-engine](./engine/calculation-engine.md) |
| **Pp / Ppk** | Process Performance | 長期能力，含班別、環境等全體變異 | [terminology](./terminology.md) §5 |
| **σ_within** | Within-subgroup variation | 組內變異，算 Cpk 的基礎 | [calculation-engine](./engine/calculation-engine.md) |
| **σ_overall** | Overall variation | 全體變異，算 Ppk 的基礎 | [calculation-engine](./engine/calculation-engine.md) |

## 控制圖與數據

| 術語 | 全名 / 中文 | 一句話 | 深入閱讀 |
|------|------------|--------|----------|
| **X-bar** | 平均值圖 | 監控製程中心是否偏移 | [dual-chart-philosophy](./core-model/dual-chart-philosophy.md) |
| **R Chart** | 全距圖 | 監控組內變異，適用 n 較小 | [dual-chart-philosophy](./core-model/dual-chart-philosophy.md) |
| **S Chart** | 標準差圖 | 監控組內變異，適用 n 較大 | [data-collection](./engine/data-collection.md) |
| **Subgroup** | 理性分群 / 子組 | 將原始數據分組後再畫圖的統計單位 | [monitoring-strategy](./core-model/monitoring-strategy.md) |
| **Monitor Value** | 觀測彙總值 | 一組樣本彙總後的控制圖「點」 | [data-collection](./engine/data-collection.md) |
| **Raw Sample** | 原始樣本 | 設備直接量測的物理數值 | [data-collection](./engine/data-collection.md) |

## 系統與流程

| 術語 | 全名 / 中文 | 一句話 | 深入閱讀 |
|------|------------|--------|----------|
| **SpcPlan** | Monitoring Plan | 定義哪些數據進入哪張控制圖 | [monitoring-plan](./engine/monitoring-plan.md) |
| **SpcHis** | 歷史快照 | 寫入時封裝當下界限的數據紀錄 | [data-snapshot](./core-model/data-snapshot.md) |
| **SpcOocHis** | 違規紀錄 | OOC/OOS 異常的處置生命週期 | [disposition-state-machine](./exception-handling/disposition-state-machine.md) |
| **OCAP** | Out-of-Control Action Plan | 異常發生時的標準處置流程 | [disposition-state-machine](./exception-handling/disposition-state-machine.md) |
| **Nelson Rules** | 尼爾森規則 | 偵測不出界但具模式的統計異常 | [decision-rules](./core-model/decision-rules.md) |
| **Hold Lot** | 扣留批次 | 向 MES 攔截異常批次 | [cross-system-integration](./exception-handling/cross-system-integration.md) |
| **Backfill** | 補點 | 延遲到達的歷史數據回填 | [spcDebugging](./exception-handling/spcDebugging.md) |

## 變異原因

| 術語 | 中文 | 一句話 | 深入閱讀 |
|------|------|--------|----------|
| **Common Cause** | 隨機原因 / 共同原因 | 製程固有波動，需系統改善 | [terminology](./terminology.md) §1 |
| **Special Cause** | 異常原因 / 特殊原因 | 可歸屬的突發變異，需立即處置 | [terminology](./terminology.md) §1 |

## 與其他文章的關聯

- 學習路徑：[`index`](./index.md)
- 理論基石：[`terminology`](./terminology.md)
- 端到端場景：[`endToEndLifecycle`](./core-model/endToEndLifecycle.md)
- 除錯入門：[`spcDebugging`](./exception-handling/spcDebugging.md)