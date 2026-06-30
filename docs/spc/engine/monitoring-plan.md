---
sidebar_position: 4
description: SpcPlan 路由引擎：Domain 維度、Wildcard 匹配與優先級算法
key: [SPC, 監控計畫, 數據路由, 萬用字元, 優先級]
tags: [SPC, 系統架構, AI筆記]
---

# 📊 監控計畫與路由引擎

本章節只做一件事：說明**工程層**如何把一筆量測數據路由到正確控制圖。統計學為什麼要分群，見 [`monitoring-strategy`](../core-model/monitoring-strategy.md)。

## 讀完本篇你能回答

- SpcPlan 用哪些維度定義監控範圍？
- 一筆數據符合多個 Plan 時怎麼選？
- 計畫修改後，歷史數據能重新掛載嗎？

## 1. Domain 維度

| 類別 | 欄位 |
|------|------|
| 物理 | Fab、Entity、Chamber |
| 邏輯 | Product、Operation、DataItem |

目標是**腔體級**精細監控，維持數據同質性。

## 2. 匹配與優先級

- 支援 `*`、`?` 萬用字元
- **最精確匹配優先**：精確字元越多，權重越高
- 匹配失敗 → Pending Pool（見 [`spcDebugging`](../exception-handling/spcDebugging.md)）

## 3. 動態重新分流

計畫變更後可觸發歷史數據重新掛載，以資料庫事務保證遷移過程指標不遺失。

:::info 實務提醒
少用過寬 Wildcard——異質數據混合會扭曲管制界限。優先用精確定義 + 配置範本複製。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 分群概念 | [`monitoring-strategy`](../core-model/monitoring-strategy.md) |
| 配置變更 | [`configuration-management`](./configuration-management.md) |
| 端到端流程 | [`endToEndLifecycle`](../core-model/endToEndLifecycle.md) |