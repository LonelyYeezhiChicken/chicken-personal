---
sidebar_position: 30
description: 容錯設計
key: [java, Spring Cloud, Microservices, 微服務]
tags: [java, Spring Cloud, Microservices]
---

# 🌧️ 容錯設計

## 微服務 VS 單體服務

### 單體服務

> 一發生錯誤，就全部服務故障

### 微服務

- 每個服務都跑在獨立的 Process
- 一個服務故障後，其他服務不會受影響
- 