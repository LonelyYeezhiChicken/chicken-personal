---
sidebar_position: 2
description: SECS/GEM 術語表：SVID、CEID、PPID、HCACK 等縮寫一次查清楚
key: [SECS, GEM, 術語, SVID, CEID, PPID, ALID, HCACK, Glossary]
tags: [SECS, 基礎, AI筆記]
---

# 🔰 SECS/GEM 術語表

本章節彙整 SECS 系列中反覆出現的縮寫與專有名詞。遇到不熟悉的代號，先來這裡查，再點連結深入閱讀。

## 角色與架構

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **Host** | 主機 | 工廠中央控制電腦，發指令、收資料 | [aboutSECS](/docs/secs/overView/aboutSECS) |
| **Equipment** | 設備 / 機台 | 蝕刻機、清洗機等，執行任務並回報 | [aboutSECS](/docs/secs/overView/aboutSECS) |
| **GEM** | Generic Equipment Model | SECS-II 之上的設備行為標準（E30） | [secsAndGem](/docs/secs/overView/secsAndGem) |
| **HSMS** | High-Speed SECS Message Services | 以 TCP/IP 傳遞 SECS-II 訊息（E37） | [protocol](/docs/secs/overView/protocol) |
| **SECS-I** | — | 以 RS-232 傳遞 SECS-II 訊息（E4） | [secs1BlockTransfer](/docs/secs/protocol-advanced/secs1BlockTransfer) |
| **SECS-II** | — | 訊息內容與格式標準（E5） | [secsStructure](/docs/secs/basics/secsStructure) |

## 訊息結構

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **SxFy** | Stream × Function | 訊息代號，如 S1F13 | [secsStructure](/docs/secs/basics/secsStructure) |
| **Stream (S)** | 訊息主類別 | S1=狀態、S2=控制、S5=警報… | [streamOverview](/docs/secs/messages/streamOverview) |
| **Function (F)** | 功能編號 | 同 Stream 下的具體訊息 | [secsStructure](/docs/secs/basics/secsStructure) |
| **W-Bit** | Wait Bit | =1 表示需回覆，=0 表示不需回覆 | [secsStructure](/docs/secs/basics/secsStructure) |
| **Data Item** | 資料項目 | List、ASCII、U4、B 等 SECS-II 資料型別 | [secsStructure](/docs/secs/basics/secsStructure) |

## 狀態變數與常數

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **SVID** | Status Variable ID | 狀態變數編號，可查當前值（S1F3/F4） | [s1-equipmentStatus](/docs/secs/messages/s1-equipmentStatus) |
| **VID** | Variable ID | 變數編號，用於事件報告內容 | [eventReport](/docs/secs/gem/eventReport) |
| **ECID** | Equipment Constant ID | 設備常數編號，設定後較少變動（S2F13–F16） | [s2-equipmentControl](/docs/secs/messages/s2-equipmentControl) |
| **DVVAL** | Data Value | 資料值，常出現在 S6F11 事件內容中 | [s6-dataCollection](/docs/secs/messages/s6-dataCollection) |

## 事件報告

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **CEID** | Collection Event ID | 收集事件編號，如「片盒載入」 | [eventReport](/docs/secs/gem/eventReport) |
| **RPTID** | Report ID | 報告編號，定義事件要回報哪些 VID | [eventReport](/docs/secs/gem/eventReport) |
| **DATAID** | Data ID | 事件資料識別碼，出現在 S6F11 | [s6-dataCollection](/docs/secs/messages/s6-dataCollection) |
| **DRACK** | Define Report Acknowledge | S2F34 回覆碼，定義報告是否成功 | [eventReport](/docs/secs/gem/eventReport) |
| **LRACK** | Link Report Acknowledge | S2F36 回覆碼，連結 CEID 是否成功 | [eventReport](/docs/secs/gem/eventReport) |
| **ERACK** | Enable Report Acknowledge | S2F38 回覆碼，啟用事件是否成功 | [eventReport](/docs/secs/gem/eventReport) |

## 配方與控制

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **PPID** | Process Program ID | 配方（Process Program）名稱或編號 | [s7-recipe](/docs/secs/messages/s7-recipe) |
| **PP** | Process Program | 設備執行製程用的配方檔 | [s7-recipe](/docs/secs/messages/s7-recipe) |
| **RCMD** | Remote Command | 遠端指令名稱，如 START、STOP | [s2-equipmentControl](/docs/secs/messages/s2-equipmentControl) |
| **HCACK** | Host Command Acknowledge | S2F42 回覆碼，指令是否被接受 | [s2-equipmentControl](/docs/secs/messages/s2-equipmentControl) |
| **CPNAME / CPVAL** | Command Parameter Name/Value | S2F41 指令的參數名與值 | [s2-equipmentControl](/docs/secs/messages/s2-equipmentControl) |

## 警報

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **ALID** | Alarm ID | 警報編號 | [s5-alarm](/docs/secs/messages/s5-alarm) |
| **ALCD** | Alarm Code | 警報代碼，含嚴重度與 Set/Clear 資訊 | [s5-alarm](/docs/secs/messages/s5-alarm) |
| **ALTX** | Alarm Text | 警報文字描述 | [s5-alarm](/docs/secs/messages/s5-alarm) |
| **ACKC5** | Acknowledge Code 5 | S5F4/S5F8 回覆碼 | [alarmManagement](/docs/secs/gem/alarmManagement) |

## 通訊與狀態

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **COMMACK** | Communications Acknowledge | S1F14 回覆碼，通訊是否建立 | [communicationState](/docs/secs/gem/communicationState) |
| **ONLACK** | ON-LINE Acknowledge | S1F18 回覆碼，上線是否成功 | [controlState](/docs/secs/gem/controlState) |
| **OFLACK** | OFF-LINE Acknowledge | S1F16 回覆碼，下線是否成功 | [controlState](/docs/secs/gem/controlState) |
| **COMMUNICATING** | 通訊中 | GEM 通訊狀態，可交換業務訊息 | [communicationState](/docs/secs/gem/communicationState) |
| **REMOTE** | 遠端模式 | ON-LINE 子狀態，Host 可下達控制指令 | [controlState](/docs/secs/gem/controlState) |
| **Processing State** | 處理狀態 | INIT / IDLE / EXECUTING 等製程狀態 | [processingState](/docs/secs/gem/processingState) |

## HSMS 控制訊息

| 術語 | 全名 / 中文 | 說明 | 深入閱讀 |
|------|------------|------|----------|
| **Select.req/rsp** | 選擇請求/回覆 | HSMS Session 建立握手 | [hsmsConnection](/docs/secs/protocol-advanced/hsmsConnection) |
| **Linktest.req/rsp** | 連線測試 | HSMS 心跳，確認 TCP 仍存活 | [hsmsConnection](/docs/secs/protocol-advanced/hsmsConnection) |
| **T3** | Reply Timeout | 等待 SECS 回覆的逾時（預設 45 秒） | [hsmsConnection](/docs/secs/protocol-advanced/hsmsConnection) |
| **System Bytes** | 系統位元組 | HSMS Header 中用於配對請求與回覆 | [hsmsMessage](/docs/secs/protocol-advanced/hsmsMessage) |

## 與其他文章的關聯

- 學習路徑：[`index`](/docs/secs/index)
- 端到端場景：[`startupScenario`](/docs/secs/gem/startupScenario)