---
sidebar_position: 35
description: 12 因子應用程式
key: [java, Spring Cloud, Microservices, 微服務, The twelve-factor App]
tags: [java, Spring Cloud, Microservices]
---

# 🌧️ 12 因子應用程式

## 目標

- 標準化流程
- 增加服務的可移植性 (portability)
- 適合部屬到雲平台 (cloud platforms)
- 提高持續部屬的可行性 (continuous deployment)
- 提高系統的擴展性  (scale up)

## 12 因子

### 1. 基礎程式碼 (Codebase)

1. 基礎程式碼
   - 集中式版控指的是系統上的儲存庫 (ex: SVN應該以最後一個版本為主)
   - 分散式版控指的是最上游的儲存庫 (ex: 如果 git 上的Repo是fork來的，應該以fork前的為主) (ex: git 應該以雲端最新的版本為主)
2. 基礎程式碼與應用程式的關係:
   - 一份基礎程式碼，對應一個應用程式
   - 一份基礎程式碼，對應多個應用程式
   - 多份基礎程式碼，是一個分散式系統

> 基礎程式碼只能有一份，但可以部屬成多個應用程式

### 2. 依賴聲明 (Dependencies)

- 依賴管理工具可能安裝的套件類型:
  - 系統層級全域的依賴 (ex: python fastapi)
  - 應用程式專屬使用的 (ex: dotnet log4net)

- 依賴管理工具做法: (以Python為例)
  - 依賴聲明 (requirements.txt)
  - 依賴隔離 (venv)
  - 依賴建置 (pip install)

### 3. 設定(Config)

- 因環境差異而有所不同
  - 資料庫設定
  - 第三方服務的存取憑證
  - 環境特有的設定 (ex: 網域 )

> 建議使用環境變數

- 反例:
  - 程式碼中使用常數
  - 使用設定檔

### 4. 後端服務(Backing services)

- 定義
  - 應用程式執行中需要透過網路呼叫的服務
  - 資料庫、Queue、SMTP、快取等，內部服務
  - Google API，外部服務

> 作為應用程式的附加資源，使用URL或是其他形式，存在設定管理
>
> 在資料庫出問題時，應該先將備份的資料庫啟動，並修改環境變數中的連線字串，可能會有一些資料落差，但當下可以復歸系統

### 5.建置、發布、執行(Build, release, run)

- 定義基礎程式碼轉換為部屬的階段:
  - 建置階段 > 透過編譯器，準備好依賴，打包成一個執行檔…
  - 發布階段 > 準備好打包後的程式與設定檔
  - 執行階段 > 當程式碼啟動之後產生一個 processes

> Release 應該使用版號或是一個流水號，好處是可以確定Release後的程式都應該要可以直接在PD環境上執行

### 6.程序(Processes)

- 一個應用程式通常是由一個或多個程序執行的
- 程序需為無狀態且無共享(應保存在後端服務內)
  - 無狀態  > 前一個請求不應該影響到下一個請求的狀態
  - 無共享 > 記憶體中是不會互相影響的

### 7.端口綁定(Port binding)

> 應用程式應該要能夠自行建立網路服務，並透過端口綁定來提供服務

- 反例: C# 依賴 IIS 、Java 依賴 Tomcat
- 正例: C# 與 ASP.NET Core、 Java 與 Jetty 或 Spring Boot

### 8.併發(Concurrency)

> 以PHP為例，在Apache啟動時只會啟動最小Processes，並在使用時進行動態增長
>
> 另外以Java為例，在啟動時會將Processes都先啟動好，在請求進來時，進行分配

- 不同的工作會交給不同的程序處理
- 應該使程序管理工具(systemd)，而不是使用常駐程式

### 9. 一次性的(Disposability)

> 應用程式是一次性的

- 快速啟動 (fast startup)
- 優雅終止 (graceful shutdown)

### 10. 開發環境與線上環境相同

> 可能的差異

- 程式碼差異 > 可能因為正在開發新功能而造成程式碼差異
- 管理差異 > 開發與維運人員不同造成管理差異
- 服務差異 > 後端服務的差異，線上使用MySQL，開發使用MSSQL

### 11. 日誌(Logs)

- 不儲存、不管理，時機到了自動stdout出去
- 由其他接收這來處理這些Log (ex: [ELK Stack](https://www.elastic.co/cn/what-is/elk-stack))

### 12. 管理者程序(Admin processes)

> 管理任務作為一次性程序執行
>
> EX: Entity Framework Core 使用 dotnet CLI 刪除資料庫

```shell
dotnet ef database drop
```

> 此任務執行一次之後就結束了

---

## 參考

[The Twelve-Factor App](https://12factor.net/)

[DevOps Taiwan Community - Meetup 45 - 雲原生時代的軟體開發須知, Miles Chou](https://youtu.be/P-6uwBmaH-g)
