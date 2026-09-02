---
sidebar_position: 75
description: log4net 加入 RemoteSyslogAppender 將日誌拋送至遠端 Syslog
key: [C#, 雜記, log4net, RemoteSyslogAppender, Syslog]
tags: [C#, C#雜記]
---

# 👩‍💻 log4net RemoteSyslog

> 假設專案已完成 log4net 基礎配置，此處僅記錄如何追加 `RemoteSyslogAppender` 透過 UDP 將日誌拋送至遠端 Syslog 伺服器。

## Appender 設定

- 在 `log4net.config`（或 `App.config`）中加入 `<appender>`：

```xml
<!-- Syslog UDP 拋送 -->
<appender name="RemoteSyslogAppender" type="log4net.Appender.RemoteSyslogAppender">
    <!-- Syslog 伺服器 IP 或 Host -->
    <remoteAddress value="192.168.1.100" />
    <!-- Syslog 預設 UDP port 514 -->
    <remotePort value="514" />
    <!-- 設施代碼 (常見 Local0 ~ Local7 或 User, Daemon) -->
    <facility value="Local7" />
    <!-- 識別名稱 (Tag / App Name) -->
    <identity value="MyApp" />
    <!-- 格式設定 -->
    <layout type="log4net.Layout.PatternLayout">
        <conversionPattern value="%-5level %logger - %message%newline" />
    </layout>
</appender>
```

## 啟用 Appender

- 在 `<root>` 或指定的 `<logger>` 中掛載引用：

```xml
<root>
    <level value="ALL" />
    <appender-ref ref="RemoteSyslogAppender" />
</root>
```

## 常用屬性說明

| 屬性 | 說明 | 範例 / 預設值 |
| :--- | :--- | :--- |
| `remoteAddress` | 遠端 Syslog 伺服器 IP 或主機名稱 | `192.168.1.100` |
| `remotePort` | Syslog 接收埠號（UDP） | `514` |
| `facility` | Syslog 設施類別（如 `Local0` ~ `Local7`、`User`） | `Local7` |
| `identity` | Syslog Header 顯示的程式識別標籤 | `MyApp` |
| `layout` | 日誌訊息格式 | `%-5level %logger - %message%newline` |

## 💡 facility 與 identity 是什麼？

用一句話總結：**`identity` 是「這支程式的姓名（身分證）」，`facility` 是「系統分類（所屬部門/頻道）」**。

### 1. `identity`（你是誰）
- **具體場景**：伺服器上同時跑了 `OrderAPI`、`PaymentWorker`、`AuthService`，全部都把 Log 送到同一台 Syslog 伺服器。
- **實際效果**：Syslog 收到日誌時，每筆訊息開頭都會帶上標籤（例如 `[OrderAPI]`）。
- **用處**：維運人員在 Graylog、ELK 或 Linux 終端機可以用標籤快速篩選「只看 `OrderAPI` 的日誌」，不會跟其他服務混在一起。

### 2. `facility`（日誌大分類 / 路由分流）
- **具體場景**：公司有「核心帳務交易」、「一般官網 API」、「內部排程 Job」，資安規範要求「帳務 Log 要獨立存檔 5 年，排程 Log 留 7 天即可」。
- **實際效果**：Syslog 標準定義的來源分類，其中 `Local0` ~ `Local7` 是保留給自訂程式的 8 個專屬頻道。
- **用處**：Syslog 伺服器（如 Linux Rsyslog）可以根據頻道做路由分流：
  - `Local0`（核心帳務）$\rightarrow$ 存進 `/var/log/finance/audit.log`（長期備份）
  - `Local1`（官網 API）$\rightarrow$ 存進 `/var/log/web/api.log`
  - `Local7`（內部測試/排程）$\rightarrow$ 存進 `/var/log/app/job.log`

## 程式碼呼叫

```csharp
private static readonly ILog log = LogManager.GetLogger(typeof(Program));

// 發送日誌
log.Info("Hello Syslog Server!");
log.Error("測試錯誤訊息");
```
