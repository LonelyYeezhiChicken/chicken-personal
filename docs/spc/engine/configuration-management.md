---
sidebar_position: 6
description: 配置版本化、影響模擬與電子簽核的合規變更流程
key: [SPC, 配置不可變性, 影響評估, 安全審查, 電子簽章]
tags: [SPC, 系統管理, AI筆記]
---

# 📊 配置變更管理

本章節只做一件事：說明 SPC 配置（Plan、規則、界限）如何**可回溯、可審批**地變更。變更引发的虛警見 [`spcDebugging`](../exception-handling/spcDebugging.md)。

## 讀完本篇你能回答

- 為什麼啟用後的配置不能原地修改？
- 發布新規則前怎麼評估 OOC 比率變化？
- Draft → Active 要經過什麼流程？

## 1. 版本化

| 原則 | 做法 |
|------|------|
| 不可變 | 每次變更產生新版本 ID |
| 可回溯 | 舊版標記 Obsolete 並存檔 |

## 2. 影響評估

發布前用**離線模擬器**把新規則套到歷史數據，預覽 OOC 比率變化，避免告警疲勞。

## 3. 審批流程

| 狀態 | 意義 |
|------|------|
| Draft | 編輯中 |
| Pending | 待主管簽核 |
| Active | 推送生產 |

修改必須附原因代碼並連結 Ticket。

:::info 實務提醒
定期審計「誰在何時改了界限」；驗證過的規則集可批量同步至同型機台。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 監控計畫 | [`monitoring-plan`](./monitoring-plan.md) |
| 進階重判 | [`advanced-calculation`](./advanced-calculation.md) |
| 除錯 | [`spcDebugging`](../exception-handling/spcDebugging.md) |