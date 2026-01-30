---
sidebar_position: 25
description: 深入了解西門子 (Siemens) PLC 的記憶體組織與其模組化的位址點表示方式，包含 I, Q, M, DB, T, C 等。
key: [PLC, Siemens, 西門子, 記憶體, TIA Portal, I, Q, M, DB]
tags: [PLC, Siemens, 西門子, 記憶體, TIA Portal, I, Q, M, DB, AI筆記]
---

# 🏭 西門子 (Siemens) PLC

> 西門子 (Siemens) 是全球工業自動化的巨頭，其 SIMATIC 系列 PLC（如 S7-300, S7-1200, S7-1500）在業界有著極高的市佔率和聲譽。西門子 PLC 以其強大的性能、高度的模組化和整合的工程平台 TIA Portal 而聞名。

## 西門子 PLC 的記憶體區域與位址點

西門子的記憶體管理極具結構性，特別是其「資料塊 (Data Block, DB)」的概念，是其程式設計的核心。其位址點通常包含 `區域` + `位元組位址` + `.` + `位元位址`。

### 常用記憶體區域

1.  **實體輸入 (Process Image Input / I)**：
    -   對應外部實體輸入訊號。
    -   **位址範例**：
        -   `I0.0`：第 `0` 個位元組的第 `0` 個位元。
        -   `IB0`：第 `0` 個輸入位元組 (Input Byte)。
        -   `IW0`：第 `0` 個輸入字元組 (Input Word)，由 `IB0` 和 `IB1` 組成。
        -   `ID0`：第 `0` 個輸入雙字元組 (Input Double Word)，由 `IB0` 到 `IB3` 組成。

2.  **實體輸出 (Process Image Output / Q)**：
    -   對應外部實體輸出裝置。
    -   **位址範例**：`Q4.1`, `QB4`, `QW4`, `QD4`。

3.  **記憶體位元 (Memory Bits / M)**：
    -   內部輔助記憶體，用於儲存旗標或中間變數。
    -   **位址範例**：`M10.0`, `MB10`, `MW10`, `MD10`。
    -   部分 M 區域可以設定為斷電保持。

4.  **資料塊 (Data Blocks / DB)**：
    -   這是西門子 PLC 的一大特色，是用於集中管理程式資料的結構化記憶體區域。
    -   **全域 DB (Global DB)**：可以在程式的任何地方被存取，用於儲存全域變數、設定參數等。
    -   **背景 DB (Instance DB)**：與特定的功能塊 (Function Block, FB) 相關聯，每個 FB 的實例都有自己獨立的背景 DB，用於儲存該實例的內部狀態。
    -   **位址範例**：
        -   `DB1.DBX0.0`：DB1 中的第 0 個位元組的第 0 個位元。
        -   `DB1.DBB0`：DB1 中的第 0 個位元組。
        -   `DB1.DBW0`：DB1 中的第 0 個字元組。
        -   `DB1.DBD0`：DB1 中的第 0 個雙字元組。
    -   在 TIA Portal 中，更推薦使用**符號定址**，例如 `"Motor_DB".Start_Button`，而不是絕對位址。

5.  **計時器 (Timers / T)**：
    -   用於計時功能。
    -   在 TIA Portal 中，計時器通常被當作指令塊（如 `TON`, `TOF`）來使用，並在背景 DB 中自動實例化，不再需要手動分配 `T` 編號。

6.  **計數器 (Counters / C)**：
    -   用於計數功能。
    -   與計時器類似，在 TIA Portal 中也多以指令塊（如 `CTU`, `CTD`）的形式存在。

## TIA Portal 與符號定址

西門子現代的工程平台 **TIA Portal (Totally Integrated Automation Portal)** 強力推薦**符號定址 (Symbolic Addressing)** 的程式設計風格。

-   **優點**：開發者為變數取一個有意義的名稱（例如 `"Motor_Speed"`, `"Emergency_Stop"`），而不是記住 `DB10.DBD4` 這樣的絕對位址。
-   **可讀性與維護性**：程式碼的可讀性和可維護性大幅提升。
-   **自動化管理**：PLC 編譯器會自動為這些符號分配實際的記憶體位址，減少了人為錯誤。

### 範例程式片段 (SCL 語法)

在 TIA Portal 中，除了階梯圖 (LAD)，也常使用結構化控制語言 (SCL)，這是一種高階文字語言。

```scl
// 從 DB 塊 "Motor_DB" 中讀取變數
IF "Motor_DB".Start_Button AND NOT "Motor_DB".Is_Running THEN
    // 設定輸出 Q0.0 和 DB 塊中的狀態位元
    "Motor_DB".Is_Running := TRUE;
    "Q_Outputs".Motor_1 := TRUE;
END_IF;
```

西門子 PLC 的學習曲線相對較陡，但其結構化、模組化的設計理念，特別是 DB 和符號定址的應用，使其在處理大型、複雜的自動化專案時具有明顯的優勢。
