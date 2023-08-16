---
sidebar_position: 5
description: 微服務是什麼
key: [java, Spring Cloud, Microservices, 微服務]
tags: [java, Spring Cloud, Microservices]
---

# 🌧️ 微服務是什麼

## 名詞解釋

### 微服務 (Microservices)

- 是一種系統架構的設計風格
- 將原本一個獨立的系統拆分為多個小型的服務
- 每個服務都在獨立的 Process 中運行

### 服務之間的溝通

> 在每個服務之間的溝通方式大致可以分為三類

1. RCP
2. Event streaming
3. Message brokers

### 優點

在每個小型服務被拆開之後，每個服務只需要維護自身的邏輯，

並且擁有了輕量級的通訊，所以這些服務可以各自使用不同語言編寫
