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

## 程式碼呼叫

```csharp
private static readonly ILog log = LogManager.GetLogger(typeof(Program));

// 發送日誌
log.Info("Hello Syslog Server!");
log.Error("測試錯誤訊息");
```
