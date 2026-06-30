---
sidebar_position: 5
description: HSMS 訊息封包結構：10-byte Header 與 SECS-II Body
key: [SECS, HSMS, Message Header, Session, W-Bit, System Bytes]
tags: [SECS, 傳輸協定, AI筆記]
---

# 🔰 HSMS 訊息封包結構

本章節解析 HSMS 傳輸層的訊息封包格式。搞懂 10-byte Header，才能從 raw log 中判讀 SxFy 與連線問題。

:::info 資料來源聲明
本文為學習筆記性質之原創整理，**非 SEMI E37 全文轉載**。完整定義請以 [SEMI 官方標準](https://www.semi.org/) 為準。
:::

## 封包組成

```
[ 4 bytes Message Length ][ 10 bytes HSMS Header ][ SECS-II Data (Body) ]
```

| 部分 | 長度 | 內容 |
|------|------|------|
| Message Length | 4 bytes | Header + Body 的總長度（大端序） |
| HSMS Header | 10 bytes | Session、Header 資訊、P-Type/S-Type |
| SECS-II Data | 變長 | Data Item 組成的 Body |

## 10-byte HSMS Header 欄位

| 偏移 | 欄位 | 說明 |
|------|------|------|
| 0–1 | Session ID | 連線 Session 識別 |
| 2 | Header Byte 2 | Stream（高 7 bit）+ W-Bit（最低 bit） |
| 3 | Header Byte 3 | Function 編號 |
| 4 | P-Type | 0 = SECS-II Data Message |
| 5 | S-Type | 訊息類型（Data Message = 0） |
| 6–9 | System Bytes | 唯一交易識別碼 |

### Stream 與 W-Bit 解讀

Header Byte 2 的編碼：
- bit 0 = W-Bit（1 = 需回覆）
- bit 1–7 = Stream 編號

例如 S2F41 W=1：Stream=2, Function=41, W-Bit=1。

## P-Type 與 S-Type

| P-Type | S-Type | 名稱 | 用途 |
|--------|--------|------|------|
| 0 | 0 | Data Message | 一般 SECS-II 訊息 |
| 0 | 1 | Select.req | 請求建立 Session |
| 0 | 2 | Select.rsp | Select 回覆 |
| 0 | 3 | Deselect.req | 釋放 Session |
| 0 | 4 | Deselect.rsp | Deselect 回覆 |
| 0 | 5 | Linktest.req | 連線測試 |
| 0 | 6 | Linktest.rsp | Linktest 回覆 |
| 0 | 7 | Reject.req | 拒絕 |
| 0 | 9 | Separate.req | 斷開連線 |

控制訊息（Select/Linktest 等）無 SECS-II Body。

## 與 SECS-II 的關係

HSMS Header 攜帶 SxFy 與 W-Bit；Body 才是 [`secsStructure`](/docs/secs/basics/secsStructure) 中的 Data Item 結構。兩層合在一起才是完整的 HSMS 訊息。

## 與其他文章的關聯

- 連線生命週期：[`hsmsConnection`](/docs/secs/protocol-advanced/hsmsConnection)
- SECS-II 結構：[`secsStructure`](/docs/secs/basics/secsStructure)
- 通訊協定概覽：[`protocol`](/docs/secs/overView/protocol)