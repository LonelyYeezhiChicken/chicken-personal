---
sidebar_position: 5
description: Spring Cloud Eureka
key: [java, Spring Cloud, Microservices, 微服務]
tags: [java, Spring Cloud, Microservices]
---

# 🌧️ Spring Cloud Eureka

## 關於 Eureka

- Spring Cloud Eureka 是  Spring Cloud Netflix 的其中一個套件
- 他是 based on `Netflix Eureka` 進行第二次封裝
- 可以透過他，來對 spring boot 進行自動化的設定

## 服務管理

> 服務管理是微服務中，最核心的一塊

最初可能服務不多，還可以手動去設定，隨著系統越來越龐大，
服務不斷增加手動設定靜態資源會變得難以維護，造成大量的人力消耗

### 服務註冊

> 在微服務的架構中，通常會有一個註冊中心，
>
> 讓每個服務去註冊他提供的服務，並且註冊一些相關訊息，
>
> 例如: 版本號、主機與 port 、通訊協議等

### 服務發現

> 在整個微服務的框架之下，服務之間就不需要知道對方的具體位置，
>
> 當他需要使用服務時，會透過服務中心來詢問，其他服務的相關資訊
