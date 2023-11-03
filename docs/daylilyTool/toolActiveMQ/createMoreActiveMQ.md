---
sidebar_position: 30
description: ActiveMQ 單機建立多組
key: [ActiveMQ, tool, windows, Message Queue]
tags: [ActiveMQ, 工具, Message Queue]
---

# 🧣 ActiveMQ 單機建立多組

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release) (注意版本與 JDK 的相容性)
- [JDK 1.8](https://blog.lychicken.com/docs/daylilyTool/toolScoop/setJdk)

## 在 windows 底下安裝多組

### 設定後台 port

- 檔案: /conf/jetty.xml
- port 不可重複

```xml {4}
<bean id="jettyPort" class="org.apache.activemq.web.WebConsolePort" init-method="start">
         <!-- the default port number for the web console -->
    <property name="host" value="127.0.0.1"/>
    <property name="port" value="8161"/>
</bean>
```

### 設定通訊協議 port

- 檔案: /conf/activemq.xml
- 所有通訊協議的 port 必須不重複

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

### 修改服務名稱

- 檔案: /bin/win64/wrapper.conf

> console 啟動時 CMD 的標題

```shell
# Title to use when running as a console
wrapper.console.title=ActiveMQ_1895
```

> 服務的名稱

```shell
# Name of the service
wrapper.ntservice.name=ActiveMQ_1895
```

> 服務管理器看到的名稱

```shell
# Display name of the service
wrapper.ntservice.displayname=ActiveMQ_1895
```

> 服務管理器的敘述

```shell
# Description of the service
wrapper.ntservice.description=ActiveMQ_1895 Broker
```
