---
sidebar_position: 10
description: Netflix Eureka
key: [java, Spring Cloud, Microservices, 微服務]
tags: [java, Spring Cloud, Microservices]
---

# 🌧️ Netflix Eureka

## Spring Cloud Eureka

> 如果使用 Netflix Eureka ，它包含了伺服端與客戶端的模組，
>
> 並且客戶端與伺服端都是以 java 撰寫的，
>
> 因此 Eureka 適用於 java 的分散式系統或是相容 JVM 語言的系統

## 使用 Eureka 管理

> 由於 Eureka 有提供完整的 RESTful API ，所以也支援非 java 的服務，
>
> 只是其他語言的平台，需要自己時做客戶端的服務，不過一些比較熱門的語言，
>
> 已經有提供相對應的客戶端框架，如: dotnet 的 Steeltoe 、 node.js 的 eureka-js-client 等

## Eureka 伺服端

- 可稱之為 `服務註冊中心`
- 支援高度可用的設定
- 可應對不同的故障 (ex: 當整個服務群集有某個分片故障時，會自動轉入保護模式)

## Eureka 客戶端

- 主要處理註冊與發現
- 透過註解或是參數設定嵌入應用的程式碼中
- 程式運作時，Eureka 客戶端會主動發送生存確認給伺服端
