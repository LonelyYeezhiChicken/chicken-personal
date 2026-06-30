---
sidebar_position: 5
description: 預渲染日報、焦點報告與權限裁切的自動派送
key: [SPC, 自動化報表, 預渲染, 焦點報告, 派送系統]
tags: [SPC, 系統自動化, AI筆記]
---

# 📊 報表自動化系統

本章節只做一件事：說明如何把全廠數千監控項濃縮成**工程師每天早上該看的報表**。通報可靠性見 [`notification-reliability`](../exception-handling/notification-reliability.md)。

## 讀完本篇你能回答

- 品質日報為什麼要凌晨預渲染？
- 焦點報告篩選哪些項？
- 報表如何連回系統下鑽？

## 1. 預渲染

定時任務計算前日指標並渲染 PDF/PNG 快取，使用者開啟約百毫秒級。

## 2. 焦點報告

只顯示需要行動的項，例如：

- $C_{pk} < 1.0$
- OOC 次數環比增長 > 50%
- 異常久未 ACK

## 3. 派送與權限

支援 Email / IM；依部門裁切可見機台與指標。

:::info 實務提醒
好報表要帶 Deep Link 回系統下鑽，並持續調整篩選閾值，避免變成無人看的「資料墳場」。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 下鑽分析 | [`drill-down`](./drill-down.md) |
| 通報可靠性 | [`notification-reliability`](../exception-handling/notification-reliability.md) |