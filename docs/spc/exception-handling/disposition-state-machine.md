---
sidebar_position: 3
description: OOC 紀錄狀態流、根因分類與 Excluded 重算
key: [SPC, 狀態機, ACK, OCAP, 數據排除]
tags: [SPC, 異常處理, 管理流程, AI筆記]
---

# 📊 異常處置狀態機

本章節只做一件事：說明一筆 OOC/OOS 紀錄如何從**偵測到結案**走完整 OCAP 流程。快照模型見 [`data-snapshot`](../core-model/data-snapshot.md)。

## 讀完本篇你能回答

- 異常紀錄有哪些狀態？誰負責推進？
- Common Cause 與 Special Cause 為什麼要強制分類？
- Excluded 之後系統做什麼？

## 1. 狀態流

```mermaid
stateDiagram-v2
  [*] --> Detected
  Detected --> Notification
  Notification --> InProgress: ACK
  state InProgress {
    Investigation --> ActionTaken --> Review
  }
  Review --> Closed
  Review --> Investigation: 無效
  Closed --> [*]
```

| 狀態 | 意義 |
|------|------|
| Detected | 規則觸發 |
| ACK | 簽收，停止升級 |
| Investigation | 根因分析 |
| Closed | 對策有效 |

## 2. 根因分類

| 類型 | 用途 |
|------|------|
| Common Cause | 系統改善、長期優化 |
| Special Cause | 立即處置 |

原因代碼分佈（柏拉圖）可鎖定主要品質波動來源。

## 3. 排除與重算

確認量測機故障等情況可標記 `Excluded`，觸發影子計算重估 $C_{pk}$。

:::info 實務提醒
結案前強制填寫處置代碼與分析內容，滿足稽核「誰、何時、做了什麼」。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 快照模型 | [`data-snapshot`](../core-model/data-snapshot.md) |
| MES 聯動 | [`cross-system-integration`](./cross-system-integration.md) |
| 端到端流程 | [`endToEndLifecycle`](../core-model/endToEndLifecycle.md) |