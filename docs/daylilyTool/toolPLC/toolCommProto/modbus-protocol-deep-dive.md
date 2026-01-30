---
sidebar_position: 5
description: 深入解析 Modbus 通訊協定，包括其資料模型、功能碼以及 RTU、ASCII 和 TCP 三種模式的差異。
key: [Modbus, 通訊協定, RTU, TCP, 工業自動化]
tags: [Modbus, 通訊協定, RTU, TCP, 工業自動化, AI筆記]
---

# 🌐 Modbus 通訊協定詳解

> **Modbus** 是一種在 1979 年由 Modicon（現為施耐德電機）發布的串列通訊協定，是工業領域中應用最廣泛的通訊協定之一。它的設計目標是簡單、開放且易於實作，使得不同廠商的設備能夠輕易地進行通訊。

## Modbus 的基本概念

Modbus 採用**主從式 (Master-Slave)** 架構。在一個 Modbus 網路上，通常只有一個 Master，以及一個或多個 Slave（最多 247 個）。

-   **Master**：主動方，負責發起請求（讀取或寫入資料）。例如，一台 HMI 或 SCADA 系統。
-   **Slave**：被動方，負責回應 Master 的請求。例如，一台 PLC、溫控器或變頻器。每個 Slave 在網路上都有一個唯一的站號（Slave ID）。

## Modbus 資料模型 (Data Model)

從上位系統的角度看，Modbus 的資料被組織在四個邏輯區域中，每個區域都有 65536 個位址。

1.  **線圈 (Coils / Discrete Outputs)**：
    -   **功能**：讀寫單一**位元 (Bit)**，通常用於控制數位輸出，如繼電器、指示燈。
    -   **權限**：可讀可寫。
    -   **位址範圍**：`00001` - `09999`。

2.  **離散輸入 (Discrete Inputs)**：
    -   **功能**：讀取單一**位元 (Bit)**，通常用於讀取數位輸入，如開關、按鈕。
    -   **權限**：唯讀。
    -   **位址範圍**：`10001` - `19999`。

3.  **輸入暫存器 (Input Registers)**：
    -   **功能**：讀取 16-bit **字元組 (Word)**，通常用於讀取類比輸入，如溫度、壓力感測器的值。
    -   **權限**：唯讀。
    -   **位址範圍**：`30001` - `39999`。

4.  **保持暫存器 (Holding Registers)**：
    -   **功能**：讀寫 16-bit **字元組 (Word)**，是最常用的區域，用於讀寫設備的設定參數、計數值等。
    -   **權限**：可讀可寫。
    -   **位址範圍**：`40001` - `49999`。

**重要提示**：位址點 `40001` 在實際的通訊封包中，其位址欄位是 `0x0000`。這個 `4` 代表了記憶體區域，是一種慣例，實際傳輸時會被省略。

## 常用功能碼 (Function Codes)

Master 透過功能碼告知 Slave 要執行什麼操作。

| 功能碼 | 功能描述 | 資料類型 | 權限 |
| :--- | :--- | :--- | :--- |
| **`01`** | 讀取線圈 (Read Coils) | 位元 | 讀 |
| **`02`** | 讀取離散輸入 (Read Discrete Inputs) | 位元 | 讀 |
| **`03`** | 讀取保持暫存器 (Read Holding Registers) | 字元組 | 讀 |
| **`04`** | 讀取輸入暫存器 (Read Input Registers) | 字元組 | 讀 |
| **`05`** | 寫入單一線圈 (Write Single Coil) | 位元 | 寫 |
| **`06`** | 寫入單一暫存器 (Write Single Register) | 字元組 | 寫 |
| **`15` (`0x0F`)** | 寫入多個線圈 (Write Multiple Coils) | 位元 | 寫 |
| **`16` (`0x10`)** | 寫入多個暫存器 (Write Multiple Registers) | 字元組 | 寫 |

## 三種傳輸模式

Modbus 主要有三種傳輸模式：

1.  **Modbus RTU (Remote Terminal Unit)**：
    -   **物理層**：串列通訊 (RS-232, RS-485)。
    -   **資料格式**：二進位表示，資料緊湊。
    -   **錯誤校驗**：CRC (Cyclic Redundancy Check)。
    -   **特點**：效率高，是工業現場最常用的模式。透過偵測訊息之間的靜默時間（3.5 個字元時間）來判斷訊息的開始與結束。

2.  **Modbus ASCII**：
    -   **物理層**：串列通訊 (RS-232, RS-485)。
    -   **資料格式**：使用 ASCII 字元來表示資料，例如 `0x1A` 會被編碼成 `"1"` 和 `"A"` 兩個字元。
    -   **錯誤校驗**：LRC (Longitudinal Redundancy Check)。
    -   **特點**：可讀性高，但傳輸效率較低，現已較少使用。

3.  **Modbus TCP/IP**：
    -   **物理層**：乙太網路 (Ethernet)。
    -   **資料格式**：將 RTU 的訊息格式封裝在 TCP/IP 封包中。
    -   **錯誤校驗**：依賴 TCP/IP 的校驗機制，不再需要 CRC。
    -   **特點**：
        -   速度快，無距離限制。
        -   允許多個 Master 同時存取。
        -   使用 `IP:Port` 進行定址，預設 Port 為 `502`。
        -   訊息頭部新增了 MBAP Header (Modbus Application Protocol Header)，用於處理交易識別和多工處理。

從上位系統開發的角度來看，Modbus TCP 是最容易整合的，因為它基於標準的網路 Socket 編程，有大量的現成函式庫可供使用。
