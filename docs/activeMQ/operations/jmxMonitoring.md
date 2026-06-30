---
sidebar_position: 10
description: ActiveMQ 維運監控：JMX 與 MBean 指標
key: [ActiveMQ, JMX, MBean, QueueSize, Jolokia, Prometheus]
tags: [ActiveMQ, 維運監控, AI筆記]
---

# 🧣 JMX 監控

本章節解析 ActiveMQ 透過 JMX（Java Management Extensions）暴露的運行指標。掌握關鍵 MBean，就能搭建自動化監控與告警，而不只依賴 Web Console 手動查看。

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release)
- JMX 預設已啟用

## 1. JMX 連線資訊

| 項目 | 預設值 |
|------|--------|
| JMX URL | `service:jmx:rmi:///jndi/rmi://localhost:1099/jmxrmi` |
| Port | `1099` |
| 認證 | 預設無（生產環境應啟用） |

可使用 JConsole、VisualVM 或 Jolokia 連線。

## 2. 關鍵 MBean

### 2.1 Queue MBean

路徑: `org.apache.activemq:type=Broker,brokerName=localhost,destinationType=Queue,destinationName={QUEUE_NAME}`

| 屬性 | 說明 |
|------|------|
| `QueueSize` | 待處理訊息數 |
| `EnqueueCount` | 累計入隊 |
| `DequeueCount` | 累計出隊 |
| `ConsumerCount` | 消費者數 |
| `MemoryPercentUsage` | 記憶體使用百分比 |

### 2.2 Broker MBean

路徑: `org.apache.activemq:type=Broker,brokerName=localhost`

| 屬性 | 說明 |
|------|------|
| `CurrentConnectionsCount` | 當前連線數 |
| `TotalConnectionsCount` | 累計連線數 |
| `MemoryPercentUsage` | Broker 整體記憶體使用率 |
| `StorePercentUsage` | 持久化儲存使用率 |
| `TempPercentUsage` | 暫存空間使用率 |

## 3. 告警建議閾值

| 指標 | 警告 | 嚴重 |
|------|------|------|
| `QueueSize` | 持續增長 > 1 小時 | > 10000 |
| `StorePercentUsage` | > 70% | > 90% |
| `MemoryPercentUsage` | > 70% | > 90% |
| `ConsumerCount` | = 0 且 QueueSize > 0 | — |

趨勢型告警（成長率、入出淨差、分級策略）請參見 [`proactiveAlerting`](/docs/activeMQ/operations/proactiveAlerting)。

## 4. Jolokia + Prometheus 簡介

Jolokia 提供 HTTP 代理存取 JMX，可搭配 Prometheus JMX Exporter 收集指標：

```xml
<!-- 在 conf/activemq.xml 加入 Jolokia agent（需額外部署） -->
```

常見做法是在 Broker 同機部署 Jolokia WAR 或使用 `jmx_exporter` sidecar，將 MBean 指標轉為 Prometheus 格式後接入 Grafana 告警。

## 5. 常見問題與排查

| 現象 | 可能原因 | 處理方式 |
|------|----------|----------|
| JConsole 連不上 | 1099 port 未開 | 檢查防火牆與 `ACTIVEMQ_SUNJMX_START` |
| MBean 列表為空 | brokerName 不符 | 確認 `brokerName` 屬性值 |
| 遠端 JMX 失敗 | 僅綁定 localhost | 設定 `java.rmi.server.hostname` |

## 6. 與其他文章的關聯

- Web Console：[`webConsole`](/docs/activeMQ/operations/webConsole)
- 流量控制：[`flowControl`](/docs/activeMQ/advanced/flowControl)
- 效能調校：[`performanceTuning`](/docs/activeMQ/operations/performanceTuning)
- 出事前告警：[`proactiveAlerting`](/docs/activeMQ/operations/proactiveAlerting)
- 故障排除：[`loggingTroubleshoot`](/docs/activeMQ/operations/loggingTroubleshoot)