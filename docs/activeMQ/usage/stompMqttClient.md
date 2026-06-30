---
sidebar_position: 30
description: ActiveMQ 實戰用法：STOMP 與 MQTT 客戶端連線
key: [ActiveMQ, STOMP, MQTT, stomp.js, Paho, IoT]
tags: [ActiveMQ, 實戰用法, AI筆記]
---

# 🧣 STOMP 與 MQTT 客戶端

本章節解析如何透過 STOMP 與 MQTT 協議連接 ActiveMQ，讓非 Java 語言的客戶端（瀏覽器、Python、IoT 裝置）也能收發訊息，無需依賴 JMS API。

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release)
- Broker 預設已啟用 STOMP (61613) 與 MQTT (1883)

## 1. 協議選擇

| 協議 | Port | 適用場景 | 客戶端生態 |
|------|------|----------|------------|
| STOMP | 61613 | Web 前端、腳本語言 | stomp.js、Python stomp |
| MQTT | 1883 | IoT 裝置、低頻寬 | Eclipse Paho、Arduino |

Broker 端設定參見 [`protocol`](/docs/activeMQ/overView/protocol)。

## 2. STOMP 客戶端

### 2.1 目的地命名規則

| JMS 類型 | STOMP destination |
|----------|-------------------|
| Queue | `/queue/ORDER.QUEUE` |
| Topic | `/topic/STOCK.PRICE` |

### 2.2 Python 範例

```python
import stomp

class Listener(stomp.ConnectionListener):
    def on_message(self, frame):
        print(f"Received: {frame.body}")

conn = stomp.Connection([('localhost', 61613)])
conn.set_listener('', Listener())
conn.connect('admin', 'admin1pwd', wait=True)
conn.subscribe(destination='/queue/ORDER.QUEUE', id=1, ack='auto')
conn.send(body='Hello from Python', destination='/queue/ORDER.QUEUE')
```

### 2.3 瀏覽器（stomp.js + WebSocket）

```javascript
const client = Stomp.client('ws://localhost:61614');
client.connect('admin', 'admin1pwd', () => {
  client.subscribe('/topic/STOCK.PRICE', (msg) => {
    console.log('Price:', msg.body);
  });
  client.send('/queue/ORDER.QUEUE', {}, 'New order');
});
```

WebSocket 連線使用 port `61614`，底層仍透過 ActiveMQ 的 `ws` transport connector。

## 3. MQTT 客戶端

### 3.1 目的地對應

MQTT 的 topic 直接對應 ActiveMQ 的 JMS Topic 名稱，例如 `STOCK/PRICE` 或 `STOCK.PRICE`（依客戶端慣例）。

### 3.2 Python Paho 範例

```python
import paho.mqtt.client as mqtt

def on_message(client, userdata, msg):
    print(f"Topic: {msg.topic}, Payload: {msg.payload.decode()}")

client = mqtt.Client()
client.username_pw_set('admin', 'admin1pwd')
client.on_message = on_message
client.connect('localhost', 1883)
client.subscribe('SENSOR/TEMP')
client.publish('SENSOR/TEMP', '25.6')
client.loop_forever()
```

### 3.3 MQTT QoS 與 ActiveMQ

| MQTT QoS | 保證 | ActiveMQ 對應行為 |
|----------|------|-------------------|
| 0 | 最多一次 | 非持久化、不確認 |
| 1 | 至少一次 | 可能重複投遞 |
| 2 | 恰好一次 | 最高可靠性，延遲較高 |

## 4. 常見問題與排查

| 現象 | 可能原因 | 處理方式 |
|------|----------|----------|
| 連線被拒 | 未啟用對應 connector | 檢查 `activemq.xml` transportConnectors |
| 認證失敗 | 未傳帳密 | STOMP/MQTT 連線時帶入 credentials |
| 收不到 Topic 訊息 | destination 前綴錯誤 | STOMP 需加 `/topic/` 前綴 |
| WebSocket 連不上 | 防火牆或 port 未開 | 確認 61614 可連通 |

## 5. 與其他文章的關聯

- Broker 協議設定：[`protocol`](/docs/activeMQ/overView/protocol)
- 安全認證：[`security`](/docs/activeMQ/advanced/security)
- MQTT QoS 概念：[`efficientPrioritization`](/docs/activeMQ/fundamentals/efficientPrioritization)