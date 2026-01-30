---
sidebar_position: 10
description: 從軟體開發者角度理解 TCP/IP 連線的核心概念，包括 Socket、IP 位址、Port、以及三次交握與四次揮手的過程。
key: [TCP/IP, Socket, Port, 三次交握, 四次揮手, 網路]
tags: [TCP/IP, Socket, Port, 三次交握, 四次揮手, 網路, AI筆記]
---

# 🌐 TCP/IP 連線基礎

> **TCP/IP (Transmission Control Protocol/Internet Protocol)** 是網際網路的基礎通訊協定。作為一個上位系統的開發者，當我們需要與 PLC、感測器或其他網路設備溝通時（例如使用 Modbus TCP），我們實際上就是在建立一個 TCP/IP 連線。

## 核心概念：Socket、IP 位址與 Port

從軟體開發的角度來看，建立一個 TCP 連線需要三個核心要素：

1.  **IP 位址 (IP Address)**：
    -   如同網路世界的「門牌號碼」，它唯一地標識了網路上的一台設備（例如你的電腦或一台 PLC）。
    -   常見的格式是 IPv4（如 `192.168.1.10`）。

2.  **Port (通訊埠)**：
    -   如果 IP 位址是設備的門牌號，那麼 Port 就是這棟大樓上的不同「窗口」。每個窗口都對應一個特定的服務或應用程式。
    -   Port 是一個 16-bit 的數字，範圍從 `0` 到 `65535`。
    -   例如，HTTP 服務預設使用 `80` Port，而 Modbus TCP 預設使用 `502` Port。

3.  **Socket (通訊端)**：
    -   是應用程式與網路之間進行通訊的「抽象介面」。
    -   在程式碼中，我們透過操作 Socket 來發起連線、傳送資料和接收資料。
    -   一個 Socket 由一個 **IP 位址**和一個 **Port** 組成，例如 `192.168.1.10:502`。

## 連線的建立：三次交握 (Three-Way Handshake)

TCP 是一種**可靠的、面向連線**的協定。在兩台設備正式交換資料之前，它們必須先建立一個穩定的連線。這個過程被稱為「三次交握」。

想像一下 Client (客戶端) 想和 Server (伺服器端) 建立連線：

1.  **第一次交握 (SYN)**：
    -   **Client -> Server**：Client 發送一個 `SYN` (Synchronize) 封包給 Server，表示「嗨，我想和你建立連線，你聽得到嗎？」。

2.  **第二次交握 (SYN-ACK)**：
    -   **Server -> Client**：Server 收到 `SYN` 後，如果同意連線，會回傳一個 `SYN-ACK` (Synchronize-Acknowledge) 封包，表示「聽到了！我也同意建立連線，你準備好了嗎？」。

3.  **第三次交握 (ACK)**：
    -   **Client -> Server**：Client 收到 `SYN-ACK` 後，再回傳一個 `ACK` (Acknowledge) 封包，表示「我準備好了！」。

當 Server 收到這個 `ACK` 後，連線就正式建立了，雙方可以開始互相傳輸資料。這個過程確保了雙方都有發送和接收資料的能力。

## 連線的終止：四次揮手 (Four-Way Handshake)

當資料傳輸完成後，需要一個優雅的方式來關閉連線，這就是「四次揮手」。

假設 Client 決定要關閉連線：

1.  **第一次揮手 (FIN)**：
    -   **Client -> Server**：Client 發送一個 `FIN` (Finish) 封包，表示「我的資料都發完了，準備關閉連線」。

2.  **第二次揮手 (ACK)**：
    -   **Server -> Client**：Server 收到 `FIN` 後，回傳一個 `ACK`，表示「收到了你的關閉請求。但我可能還有資料沒發完，請稍等」。此時，Server 仍然可以向 Client 發送資料。

3.  **第三次揮手 (FIN)**：
    -   **Server -> Client**：當 Server 也沒有資料要發送時，它會發送一個 `FIN` 封包給 Client，表示「我也準備好關閉連線了」。

4.  **第四次揮手 (ACK)**：
    -   **Client -> Server**：Client 收到 Server 的 `FIN` 後，回傳最後一個 `ACK`，表示「好的，關閉吧」。

Client 在發送最後一個 `ACK` 後，會等待一段時間（確保 Server 收到了 `ACK`），然後正式關閉連線。Server 收到 `ACK` 後也立即關閉連線。

## 對開發者的意義

-   **可靠性**：因為有三次交握和四次揮手，TCP 保證了資料的可靠傳輸。如果封包在途中遺失，TCP 的重傳機制會確保資料最終能送達。
-   **抽象化**：在大多數高階語言中，你不需要手動處理這些交握和揮手的細節。你只需要呼叫 `socket.connect()`、`socket.send()`、`socket.close()` 等函式，底層的作業系統和網路堆疊會為你處理好一切。
-   **除錯**：當你遇到連線問題時（例如連線被拒絕、超時），理解這些基本流程有助於你判斷問題是出在網路層、防火牆、還是應用程式本身。

了解 TCP/IP 的基礎，是所有網路程式設計的基石，尤其是在需要與硬體設備直接進行底層通訊的工業自動化領域。
