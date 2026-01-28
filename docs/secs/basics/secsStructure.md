---
sidebar_position: 1
description: SECS-II 訊息的結構到底長什麼樣？SxFy 是什麼意思？一次搞懂 Stream, Function, W-Bit 和 Data Item。
key: [SECS, GEM, SxFy, Stream, Function, SECS-II, Data Item, List]
tags: [SECS, GEM, SxFy, Stream, Function, SECS-II, Data Item, List]
---

# 🔰 SECS-II 訊息結構

SECS-II 訊息是 Host 和 Equipment 之間溝通的最小單位。每個訊息都像一個結構嚴謹的「數據包」，由「標頭 (Header)」和「內文 (Body)」組成。

-   **標頭 (Header)**：描述這則訊息的「目的」，像是訊息的分類、指令和是否需要回覆。
-   **內文 (Body)**：訊息的「內容」，包含了要傳遞的具體數據。

## 訊息標頭：SxFy 的世界

標頭中最核心的概念就是 `SxFy`，它定義了訊息的獨特身份和用途。

### Stream (S)：訊息的分類

**Stream** 是訊息的「主要類別」，用來區分不同領域的訊息。你可以把它想像成圖書館的「藏書區」。

例如：
-   `S1`：設備狀態 (Equipment Status)，如查詢設備是否在線上。
-   `S2`：設備控制 (Equipment Control)，如命令設備開始或停止。
-   `S6`：數據收集 (Data Collection)，如回報生產數據。
-   `S7`：配方管理 (Recipe Management)，如上傳或下載生產配方。

### Function (F)：訊息的指令

**Function** 是在特定 Stream 下的「具體指令」。你可以把它想像成藏書區裡的「某一本書」。

-   **奇數 Function** 通常代表「請求」或「發送」。
-   **偶數 Function** 通常代表「回覆」。

例如，`S1F1` 和 `S1F2` 是一對常見的訊息：
-   `S1F1` (由 Host 發送)："Are you there?" (請求確認設備是否在線)
-   `S1F2` (由 Equipment 回覆)："I am here." (回覆確認在線)

### W-Bit (Wait Bit)：是否需要回覆？

W-Bit 是一個標記，用來指示這則訊息是否「需要回覆」。
-   `W = 1`：需要回覆。發送方會等待接收方的回覆訊息。
-   `W = 0`：不需要回覆。

例如，當 Host 發送 `S1F1` (W=1) 時，它期望 Equipment 必須回覆 `S1F2`。

---

## 訊息內文：由「資料項目」組成

如果標頭是信封，那訊息內文就是信紙，上面寫著要傳遞的具體內容。內文是由一或多個「**資料項目 (Data Item)**」所組成。

SECS-II 定義了豐富的資料項目類型，讓你可以傳遞任何複雜的數據。

### 主要資料項目 (Data Item) 類型

| 類型 | 名稱 | 描述 | 範例 |
| :--- | :--- | :--- | :--- |
| **L** | List | 列表，可以包含其他資料項目，形成複雜的樹狀結構 | `L 2 <item1> <item2>` |
| **A** | ASCII | ASCII 字串 | `A 5 "HELLO"` |
| **J** | JIS-8 | 日文字元集 | - |
| **B** | Binary | 二進位數據 | `B 4 <data>` |
| **BOOLEAN** | 布林 | `0` (False) 或 `1` (True) | `BOOLEAN 1 1` |
| **I1, I2, I4, I8** | Signed Integer | 帶正負號的整數 (1, 2, 4, 8位元組) | `I2 2 -100` |
| **U1, U2, U4, U8** | Unsigned Integer | 無正負號的整數 (1, 2, 4, 8位元組) | `U4 4 4294967295` |
| **F4, F8** | Floating Point | 浮點數 (4, 8位元組) | `F4 4 3.14` |


### 範例：一則真實的 S2F41 命令

假設 Host 要對 Equipment 下達一個指令 `START_PROCESS`，並附帶兩個參數：`Recipe.rcp` 和 `150`。

這通常會使用 `S2F41` (Host Command Send) 來發送。訊息的結構可能會像這樣 (以 YAML 格式示意)：

```yaml
# 標頭 (Header)
S2F41 W (Stream=2, Function=41, Expect Reply)

# 內文 (Body)
L 2                                    # 一個包含 2 個項目的列表
  A 13 "START_PROCESS"                 # 項目1: ASCII 字串，指令名稱
  L 2                                  # 項目2: 一個包含 2 個參數的子列表
    A 9 "Recipe.rcp"                   #    參數1: ASCII 字串，配方檔案名稱
    I2 2 150                           #    參數2: 2-byte 整數，數值
```

透過這種結構，SECS-II 能夠以一種極度標準化且可擴充的方式，在 Host 和 Equipment 之間傳遞各式各樣的複雜指令和數據。