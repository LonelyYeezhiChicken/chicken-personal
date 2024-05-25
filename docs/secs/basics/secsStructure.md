---
sidebar_position: 10
description: 訊息結構與格式
key: [SECS, 工具, 通訊標準, 半導體]
tags: [SECS, 工具, 半導體, 通訊標準]
---

# 🔰 訊息結構與格式

在 SECS-II（Semiconductor Equipment Communication Standard, Part 2）中，訊息結構和格式是實現半導體設備和製造執行系統（MES）之間高效通信的核心。

## 訊息結構

> SECS-II 訊息由多個部分組成，每個部分都有其特定的功能和意圖。

### 1. **Message Header**

- 包含控制訊息，如訊息的來源、目標和唯一的識別碼
- 結構：
  - **Stream ID（S）：** 表示訊息的類別
  - **Function ID（F）：** 表示訊息的功能
  - **W-Bit（Wait Bit）：** 表示是否需要回應

### 2. **Data Body**

- 包含具體的資料內容，使用 SECS-II 資料型態進行編碼
- 可以是單一資料項或多個資料項的組合

## 訊息格式

> SECS-II 訊息的格式遵循一定的規則，以確保訊息能夠被正確解析和處理。

### 1. **Stream and Function Pair**

- 每個 SECS-II 訊息都有一個流（Stream）和功能（Function）對，用來標識訊息的類型和意圖
- 範例：
  - `S1F1`：表示流 1 功能 1 的訊息
  - `S2F17`：表示流 2 功能 17 的訊息

### 2. **資料型態**

- 訊息的資料體使用多種資料型態進行編碼，每種型態都有固定的編碼格式和長度
- 常見的資料型態包括：
  - **BOOLEAN（布林型）**
  - **INTEGER（整數型）**
  - **FLOAT（浮點數型）**
  - **STRING（字串型）**
  - **LIST（列表型）**

## 範例

> 以下是一些 SECS-II 訊息的範例，展示了不同的資料型態和訊息格式

### 1. **基本訊息**

- **Stream ID：** 1
- **Function ID：** 1
- **W-Bit：** 1（需要回應）
- **資料體：** 無

```yaml
Message:
  Header:
    Stream ID: 1
    Function ID: 1
    W-Bit: 1
  Data Body: null
```

### 2. **帶有資料的訊息**

- **Stream ID：** 2
- **Function ID：** 17
- **W-Bit：** 0（不需要回應）
- **資料體：** 列表，包含整數和字串

```yaml
Message:
  Header:
    Stream ID: 2
    Function ID: 17
    W-Bit: 0
  Data Body:
    LIST:
      - INTEGER (I4): 12345
      - STRING (A): "Example"
```

### 3. **嵌套列表的訊息**

- **Stream ID：** 2
- **Function ID：** 17
- **W-Bit：** 0（不需要回應）
- **資料體：** 嵌套列表，包含布林值和浮點數

```yaml
Message:
  Header:
    Stream ID: 2
    Function ID: 17
    W-Bit: 0
  Data Body:
    LIST:
      - LIST:
          - BOOLEAN: 1
          - FLOAT (F8): 3.14159
```
