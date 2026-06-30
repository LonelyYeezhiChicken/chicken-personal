---
sidebar_position: 5
description: SpcHis 快照封裝、SpcOocHis 違規紀錄與 MES 閉環概念
key: [SPC, 數據快照, 異常處置, 狀態機, MES 聯動]
tags: [SPC, 領域模型, AI筆記]
---

# 📊 數據快照與異常處置

本章節只做一件事：說明 SPC 如何把「當下的數字」變成可稽核的**證據包**，以及異常紀錄如何進入處置流程。狀態機細節見 [`disposition-state-machine`](../exception-handling/disposition-state-machine.md)。

## 讀完本篇你能回答

- SpcHis 為什麼要封裝「當下的管制界限」？
- SpcOocHis 紀錄經歷哪些狀態？
- 什麼情況下 SPC 會驅動 MES Hold Lot？

## 1. SpcHis：歷史快照

每一筆寫入的觀測值都是一份**時空快照**：

| 封裝內容 | 目的 |
|----------|------|
| 當下 UCL/LCL/CL | 爭議時可還原「當時怎麼判定的」 |
| Monitor Value + Raw Samples | 支援下鑽與組內分析 |

沒有快照封裝，事後無法回答「這顆紅點當時的界限是多少」。

## 2. SpcOocHis：違規生命週期

| 狀態 | 意義 |
|------|------|
| Detected | 規則觸發 |
| Acknowledged | 工程師簽收 |
| Analyzing | 原因調查 |
| Closed | 對策完成並確認有效 |

短時間內多筆同類違規會**歸併**，避免告警風暴（見 [`alert-suppression`](../exception-handling/alert-suppression.md)）。

## 3. MES 閉環

嚴重異常可觸發：

- **Hold Lot**：攔截異常批次
- **Entity Block**：機台/腔體停線直至品質簽核解除

實作與握手協定見 [`cross-system-integration`](../exception-handling/cross-system-integration.md)。

## 4. 重判與排除

| 操作 | 效應 |
|------|------|
| 補點進入 | 重掃滑動窗口，可能觸發連續 OOC |
| 標記 Excluded | 剔除離群點後重算 $C_{pk}$ |

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 處置狀態機 | [`disposition-state-machine`](../exception-handling/disposition-state-machine.md) |
| MES 聯動 | [`cross-system-integration`](../exception-handling/cross-system-integration.md) |
| 端到端流程 | [`endToEndLifecycle`](./endToEndLifecycle.md) |