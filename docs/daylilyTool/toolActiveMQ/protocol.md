---
sidebar_position: 25
description: ActiveMQ 通訊協議
key: [ActiveMQ, tool, windows, Message Queue]
tags: [ActiveMQ, 工具, Message Queue]
---

# 🧣 ActiveMQ 通訊協議

## 官方預設通訊協議

- 檔案: /conf/activemq.xml

```xml
<transportConnectors>
    <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB-->
    <transportConnector name="openwire" uri="tcp://0.0.0.0:61616?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
    <transportConnector name="amqp" uri="amqp://0.0.0.0:5672?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
    <transportConnector name="stomp" uri="stomp://0.0.0.0:61613?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
    <transportConnector name="mqtt" uri="mqtt://0.0.0.0:1883?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
    <transportConnector name="ws" uri="ws://0.0.0.0:61614?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> 
</transportConnectors>
```

## 傳輸協議

### TCP

> TCP (Transmission Control Protocol)

- 預設 port 為 `61616`
- 在預設的情況下，被命名為 `openwire`
- 連線字串的組成為 `tcp://ip:port?key=value`
- TCP 優點
  - TPC 協議為保證連線
  - 效率高，socket 本身有 retry 機制

```xml
<transportConnectors>
    <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB-->
    <transportConnector name="openwire" uri="tcp://0.0.0.0:61616?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
</transportConnectors>
```

### AMQP

> AMQP (Advanced Message Queuing Protocol)

- 預設 port 為 `5672`
- 在預設的情況下，AMQP 連線被命名為 `amqp`
- 連線字串的組成為 `amqp://ip:port?key=value`
- AMQP 優點
  - 支援多種客戶端和伺服器，使其成為一個極具靈活性的協議
  - 提供高度可靠的訊息交付機制，適合需要確保訊息不會丟失的應用程序
  - 能夠處理大量訊息，使其適用於高流量環境

```xml
<transportConnectors>
    <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB-->
    <transportConnector name="amqp" uri="amqp://0.0.0.0:5672?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
</transportConnectors>
```

### STORM

> STORM (STOMP - Streaming Text Oriented Messaging Protocol)

- 預設 port 為 `61613`
- 在預設的情況下，STORM 連線被命名為 `stomp`
- 連線字串的組成為 `stomp://ip:port?key=value`
- STORM 優點
  - 提供輕量級的訊息傳遞協議，適合實時通訊和流數據處理
  - 易於實現並與多種客戶端和伺服器庫兼容

```xml
<transportConnectors>
    <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB-->
    <transportConnector name="stomp" uri="stomp://0.0.0.0:61613?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
</transportConnectors>
```

### MQTT

> MQTT (Message Queuing Telemetry Transport)

- 預設 port 為 `1883`
- 在預設的情況下，MQTT 連線被命名為 `mqtt`
- 連線字串的組成為 `mqtt://ip:port?key=value`
- MQTT 優點
  - 非常適合 IOT 設備，因為它是一個輕量級協議，節省網路和資源
  - 提供發布/訂閱和請求/回應訊息傳遞模式

```xml
<transportConnectors>
    <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB-->
    <transportConnector name="mqtt" uri="mqtt://0.0.0.0:1883?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
</transportConnectors>
```

### WebSocket

- 預設 port 為 `61614`
- 在預設的情況下，WebSocket 連線被命名為 `ws`
- 連線字串的組成為 `ws://ip:port?key=value`
- WebSocket 優點
  - 允許伺服器和客戶端之間的即時雙向通信
  - 適用於互動性應用程序，如即時聊天、在線遊戲等

```xml
<transportConnectors>
    <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB-->
    <transportConnector name="ws" uri="ws://0.0.0.0:61614?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> 
</transportConnectors>
```
