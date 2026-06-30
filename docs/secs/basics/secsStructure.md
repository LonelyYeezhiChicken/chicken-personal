---
sidebar_position: 1
description: SECS-II 訊息的結構到底長什麼樣？SxFy 是什麼意思？一次搞懂 Stream, Function, W-Bit 和 Data Item。
key: [SECS, GEM, SxFy, Stream, Function, SECS-II, Data Item, List]
tags: [SECS, GEM, 基礎, AI筆記]
---

# 🔰 SECS-II 訊息結構

本章節解析 SECS-II 訊息的最小組成單元。搞懂 SxFy 標頭、W-Bit 與 Data Item，是查閱任何 Stream 訊息字典（如 [`s1-equipmentStatus`](/docs/secs/messages/s1-equipmentStatus)）的前置知識。

## 1. 訊息組成：Header + Body

| 部分 | 職責 |
|------|------|
| **Header（標頭）** | 訊息身份：Stream、Function、是否需回覆 |
| **Body（內文）** | 具體數據，由 Data Item 組成 |

HSMS 傳輸時，Header 外還有 **10-byte HSMS Message Header**（Session ID、W-Bit、System Bytes 等），詳見 [`hsmsMessage`](/docs/secs/protocol-advanced/hsmsMessage)。

## 2. 訊息標頭：SxFy

### 2.1 Stream (S) 與 Function (F)

- **Stream**：訊息主類別（S1=狀態、S2=控制、S5=警報…）
- **Function**：該類別下的具體訊息編號
- **範圍**：Stream 1–127，Function 1–255

完整 Stream 地圖見 [`streamOverview`](/docs/secs/messages/streamOverview)。

### 2.2 Primary 與 Reply 配對

- **奇數 F** 通常為 Primary（請求/發送）
- **偶數 F** 通常為 Reply（回覆）

例如 `S1F1`（請求）→ `S1F2`（回覆）。

:::caution 例外
**S9（Error Messages）** 是專門回報錯誤的 Stream，不遵循一般奇偶配對規則。詳見 [`s9-error`](/docs/secs/messages/s9-error)。
:::

### 2.3 W-Bit (Wait Bit)

| W-Bit | 意義 |
|-------|------|
| W=1 | 需要回覆，發送方等待 Reply |
| W=0 | 不需回覆 |

Host 發送 `S1F1` (W=1) 時，期望 Equipment 回覆 `S1F2`。

## 3. 訊息內文：Data Item

| 類型 | 名稱 | 描述 | 範例 |
|------|------|------|------|
| **L** | List | 可巢狀的列表 | `L 2 <item1> <item2>` |
| **A** | ASCII | ASCII 字串 | `A 5 "HELLO"` |
| **J** | JIS-8 | 日文字元集 | — |
| **B** | Binary | 二進位數據 | `B 4 <data>` |
| **BOOLEAN** | 布林 | True / False | `BOOLEAN 1 1` |
| **I1–I8** | Signed Integer | 有號整數 | `I2 2 -100` |
| **U1–U8** | Unsigned Integer | 無號整數 | `U4 4 4294967295` |
| **F4, F8** | Floating Point | 浮點數 | `F4 4 3.14` |

## 4. 範例：S2F41 Remote Command

Host 下達 `START_PROCESS` 指令（結構因設備而異，以下為示意）：

```yaml
# Header
S2F41 W

# Body
L 2
  A 13 "START_PROCESS"
  L 2
    A 9 "Recipe.rcp"
    I2 2 150
```

完整 S2 訊息字典見 [`s2-equipmentControl`](/docs/secs/messages/s2-equipmentControl)。

## 5. 與其他文章的關聯

- Stream 總覽：[`streamOverview`](/docs/secs/messages/streamOverview)
- S1 完整對照表：[`s1-equipmentStatus`](/docs/secs/messages/s1-equipmentStatus)
- SECS 與 GEM：[`secsAndGem`](/docs/secs/overView/secsAndGem)