---
sidebar_position: 40
description: 原生端點
key: [java, Spring Cloud, Microservices, 微服務, Spring Boot, actuator]
tags: [java, Spring Cloud, Microservices, Spring Boot]
---

# 🌤️ 原生端點

## 說明

> 根據端點的用途，我們將這些原生端點分為以下三大類：

### 應用設定類

> 取得應用程式載入的設定、環境變數、自動設定報告等，這些與 Spring Boot 應用程式緊密相關的設定資訊

### 監控指標類

> 取得應用程式執行過程中用於監控的度量指標，例如: 記憶體資訊、執行緒池資訊、HTTP 請求統計等

### 操作控制類

> 提供應用程式的關閉等操作功能

## 關於應用設定類

### 應用設定類說明

> 傳統的 Spring 應用設定有時候相當繁瑣，要寫很多 XML 檔案
>
> Spring Boot 為了簡化這一步驟，引入了自動掃描和自動設定的方式，讓我們不用寫太多設定檔，代碼看起來比較簡潔
>
> 但是這種做法可能會導致我們的應用實例和相依性被分散到各個設定類的註解上，這使得分析整個應用中的資源和實例關係變得有點困難
>
> 不過有些端點可以幫助我們輕鬆獲取有關 Spring 應用設定的詳細報告，包括自動設定的報告、Bean 的建立報告和環境屬性報告等

### 應用設定相關的端點資訊

| 端點                  | 用途                                                                      |
|-----------------------|---------------------------------------------------------------------------|
| `/configprops`        | 提供應用程式的配置屬性及其來源的詳細資訊                                      |
| `/env`                | 查看應用程式的環境屬性，包括系統屬性、環境變數和配置屬性                        |
| `/beans`              | 顯示應用程式中所有可用的 Spring Bean 資訊                                     |
| `/info`               | 提供有關應用程式的自訂資訊，可以根據需要進行配置                                |
| `/mappings`           | 顯示應用程式中的所有 URL 對應，包括控制器對應和靜態資源對應                      |
| `/conditions`         | 顯示自動設定條件以及其是否符合的詳細資訊                                        |

## 關於監控指標類

### 監控指標類說明

> 應用設定類的端點給予固定報告，但計量指標類的端點則是給動態變動的執行時資訊，有助於打造微服務監控系統

### 監控指標相關的端點資訊

| 端點                  | 用途                                                                      |
|-----------------------|---------------------------------------------------------------------------|
| `/metrics`            | 提供有關應用程式執行時的各種度量指標資訊，例如記憶體使用、HTTP 請求統計等   |
| `/health`             | 顯示應用程式的健康狀態，可用於監控系統的運作情況                           |
| `/threaddump`         | 顯示有關執行緒的資訊，可用於分析應用程式的併發狀況                         |
| `/`           | 主要的端點路徑，可以查看所有可用的監控和管理端點                           |

## 關於操作控制類

### 操作控制類說明

> 操作控制類端點提供了操作應用程式的方式，使您能夠執行各種管理任務和調整應用程式的執行時行為

### 操作控制相關的端點資訊

| 端點                  | 用途                                                                      |
|-----------------------|---------------------------------------------------------------------------|
| `/shutdown`           | 允許從遠程關閉應用程式，需進行適當的安全性配置                           |
| `/restart`            | 允許從遠程重新啟動應用程式，同樣需要進行適當的安全性配置                  |
| `/pause`              | 暫停接受流量，用於進行維護工作，需要安全性保護                           |
| `/resume`             | 恢復接受流量，取消暫停狀態，同樣需要進行適當的安全性配置                  |