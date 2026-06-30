---
sidebar_position: 5
description: S1 設備狀態 Stream 完整訊息對照：S1F1 到 S1F18 各代表什麼？
key: [SECS, S1, S1F12, S1F13, Equipment Status, SVID, GEM]
tags: [SECS, 訊息字典, AI筆記]
---

# 🔰 S1 設備狀態 Stream

本章節整理 S1（Equipment Status）Stream 的完整 SxFy 對照表。S1 是 GEM 啟動時最先接觸的 Stream，涵蓋在線確認、通訊建立、上下線控制與狀態變數查詢。

:::info 資料來源聲明
本文 SxFy 名稱與用途摘要整理自 SEMI E5（SECS-II）公開慣例與產業實務，為學習筆記性質之原創整理，**非 SEMI 標準全文轉載**。完整訊息格式請以 [SEMI 官方標準](https://www.semi.org/) 或設備廠商 SECS Interface Specification 為準。
:::

## Stream 職責

S1 管理 Host 與 Equipment 之間的**連線狀態**與**設備狀態變數（SVID）**查詢，是 GEM Communication State 與 Control State 的訊息基礎。

## 完整訊息對照表

| 代號 | 標準名稱 | 方向 | W-Bit | 配對 | 用途摘要 |
|------|----------|------|-------|------|----------|
| **S1F1** | Are You There | H→E | 1 | → S1F2 | 心跳，確認設備是否在線 |
| **S1F2** | On Line Data | E→H | 0 | ← S1F1 | 回覆設備型號、版本等資訊 |
| **S1F3** | Selected Equipment Status Request | H→E | 1 | → S1F4 | 請求指定 SVID 的當前值 |
| **S1F4** | Selected Equipment Status Data | E→H | 0 | ← S1F3 | 回覆 SVID 對應的狀態值 |
| **S1F5** | Formatted Status Request | H→E | 1 | → S1F6 | 請求格式化狀態（較少使用） |
| **S1F6** | Formatted Status Data | E→H | 0 | ← S1F5 | 回覆格式化狀態資料 |
| **S1F11** | Status Variable Namelist Request | H→E | 1 | → S1F12 | 請求設備支援的 SVID 名稱清單 |
| **S1F12** | Status Variable Namelist Reply | E→H | 0 | ← S1F11 | 回覆 SVID 編號與名稱對照 |
| **S1F13** | Establish Communications Request | H→E | 1 | → S1F14 | 請求建立 GEM 通訊 |
| **S1F14** | Establish Communications Acknowledge | E→H | 0 | ← S1F13 | 回覆通訊建立結果（COMMACK） |
| **S1F15** | Request OFF-LINE | H→E | 1 | → S1F16 | 請求設備進入 OFF-LINE |
| **S1F16** | OFF-LINE Acknowledge | E→H | 0 | ← S1F15 | 回覆 OFF-LINE 結果（OFLACK） |
| **S1F17** | Request ON-LINE | H→E | 1 | → S1F18 | 請求設備進入 ON-LINE |
| **S1F18** | ON-LINE Acknowledge | E→H | 0 | ← S1F17 | 回覆 ON-LINE 結果（ONLACK） |

:::caution
F7–F10 在標準 S1 Stream 中未定義。實際設備支援的 Function 清單請查廠商 SECS Capability 文件。
:::

## 重點配對說明

### S1F1 → S1F2：在線確認

最常用的連線測試。Host 定期發送 S1F1，Equipment 以 S1F2 回覆設備識別資訊。

```yaml
# S1F2 Body 示意（結構因設備而異）
L 2
  A 6 "ModelX"
  A 4 "1.00"
```

### S1F11 → S1F12：狀態變數名稱清單

Host 想知道設備有哪些 SVID 可查，先發 S1F11，Equipment 以 S1F12 回覆清單。

```yaml
# S1F12 Body 示意
L 3                          # 3 個 SVID
  L 2
    U4 1 1001                # SVID = 1001
    A 8 "Clock  "            # 名稱
  L 2
    U4 1 1002
    A 10 "ProcessState"
  L 2
    U4 1 1003
    A 8 "PPExecName"
```

這就是 **S1F12** 的實際用途：回覆 S1F11 請求的 **Status Variable Namelist**。

### S1F13 → S1F14：建立通訊

GEM 啟動的關鍵步驟。S1F14 的 COMMACK 值決定通訊是否成功建立。

| COMMACK | 意義 |
|---------|------|
| 0 | 接受 |
| 1 | 拒絕 |

### S1F3 → S1F4：查詢狀態值

已知 SVID 後，Host 發 S1F3 指定要查的 SVID 列表，Equipment 以 S1F4 回覆對應值。

```yaml
# S1F3 Body 示意：查 SVID 1001 和 1002
L 2
  U4 1 1001
  U4 1 1002
```

## GEM 關聯

| GEM 狀態 | 相關 S1 訊息 |
|----------|-------------|
| 建立通訊 | S1F13 → S1F14 |
| OFF-LINE | S1F15 → S1F16 |
| ON-LINE | S1F17 → S1F18 |
| 心跳維持 | S1F1 → S1F2 |

詳見 [`communicationState`](/docs/secs/gem/communicationState)、[`controlState`](/docs/secs/gem/controlState)。

## 與其他文章的關聯

- Stream 總覽：[`streamOverview`](/docs/secs/messages/streamOverview)
- 訊息結構：[`secsStructure`](/docs/secs/basics/secsStructure)
- SECS 與 GEM：[`secsAndGem`](/docs/secs/overView/secsAndGem)