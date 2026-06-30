---
sidebar_position: 15
description: S5 警報 Stream：S5F1 警報上報與 ALID 管理
key: [SECS, S5, S5F1, Alarm, ALID, ALCD, GEM]
tags: [SECS, 訊息字典, AI筆記]
---

# 🔰 S5 警報 Stream

本章節整理 S5（Exception / Alarm）的訊息對照。當設備發生異常，S5 是 Host 第一時間得知的管道。

:::info 資料來源聲明
本文為學習筆記性質之原創整理，**非 SEMI 標準全文轉載**。完整格式請以 [SEMI 官方標準](https://www.semi.org/) 或設備廠商 Spec 為準。
:::

## 完整訊息對照表

| 代號 | 標準名稱 | 方向 | 配對 | 用途摘要 |
|------|----------|------|------|----------|
| **S5F1** | Alarm Report Send | E→H | — | 設備主動上報警報（不需回覆） |
| **S5F2** | Alarm Report Acknowledge | H→E | ← S5F1 | Host 確認收到警報（可選） |
| **S5F3** | Enable/Disable Alarm Send | H→E | → S5F4 | 啟用或停用指定 ALID |
| **S5F4** | Enable/Disable Alarm Acknowledge | E→H | ← S5F3 | 回覆啟用/停用結果（ACKC5） |
| **S5F5** | List Alarms Request | H→E | → S5F6 | 請求警報清單 |
| **S5F6** | List Alarm Data | E→H | ← S5F5 | 回覆所有 ALID 與狀態 |
| **S5F7** | Enable/Disable Alarm Request | H→E | → S5F8 | 批次啟用/停用警報 |
| **S5F8** | Enable/Disable Alarm Acknowledge | E→H | ← S5F7 | 回覆批次操作結果 |

## 重點：S5F1 警報上報

Equipment 偵測到異常時**主動發送**（W=0），Host 不需先請求。

```yaml
# S5F1 Body 示意
B 1 128              # ALCD（Alarm Code，含嚴重度等資訊）
U4 1 2001            # ALID（Alarm ID）
A 20 "ChamberTempHigh" # ALTX（Alarm Text）
```

### ALCD 常見解讀

| 位元區域 | 意義 |
|----------|------|
| bit 7 = 1 | 個人安全（Personal Safety） |
| bit 6 = 1 | 設備安全（Equipment Safety） |
| bit 5-0 | 警報類別編碼 |

## GEM 警報管理流程

1. Host 以 S5F3/S5F7 啟用需要監控的 ALID
2. 設備異常時 Equipment 發送 S5F1
3. Host 以 S5F5 查詢完整警報清單
4. 異常排除後，設備可能再次發 S5F1（ALCD 表示 Set/Clear）

## 與其他文章的關聯

- GEM 警報管理：[`alarmManagement`](/docs/secs/gem/alarmManagement)
- GEM 能力對照：[`secsAndGem`](/docs/secs/overView/secsAndGem)
- Stream 總覽：[`streamOverview`](/docs/secs/messages/streamOverview)