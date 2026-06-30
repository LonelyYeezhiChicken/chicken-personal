---
sidebar_position: 15
description: ActiveMQ 實戰用法：Spring Boot 與 JMS 整合
key: [ActiveMQ, Spring, Spring Boot, JmsTemplate, JmsListener, spring.activemq]
tags: [ActiveMQ, 實戰用法, AI筆記]
---

# 🧣 Spring Boot 與 JMS 整合

本章節解析 Spring 生態系與 ActiveMQ 的整合方式。透過 `JmsTemplate` 發送訊息、`@JmsListener` 接收訊息，開發者可以在微服務架構中以極少的樣板程式碼完成非同步通訊。

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release)
- Spring Boot 2.7.x / JDK 1.8

## 1. 依賴與設定

### 1.1 Maven 依賴

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-activemq</artifactId>
</dependency>
```

### 1.2 application.yml

```yaml
spring:
  activemq:
    broker-url: tcp://localhost:61616
    user: admin
    password: admin1pwd
    pool:
      enabled: true
      max-connections: 10
  jms:
    pub-sub-domain: false  # false=Queue, true=Topic
```

| 屬性 | 說明 |
|------|------|
| `broker-url` | Broker 連線位址 |
| `pub-sub-domain` | `false` 使用 Queue，`true` 使用 Topic |
| `pool.enabled` | 啟用連線池，避免頻繁建立連線 |

## 2. 發送訊息 — JmsTemplate

```java
@Service
public class OrderProducer {

    @Autowired
    private JmsTemplate jmsTemplate;

    public void sendOrder(String orderId) {
        jmsTemplate.convertAndSend("ORDER.QUEUE", orderId);
    }

    public void sendWithProperties(String orderId, String category) {
        jmsTemplate.convertAndSend("ORDER.QUEUE", orderId, message -> {
            message.setStringProperty("category", category);
            message.setJMSPriority(9);
            return message;
        });
    }
}
```

## 3. 接收訊息 — @JmsListener

```java
@Component
public class OrderConsumer {

    @JmsListener(destination = "ORDER.QUEUE", containerFactory = "queueListenerFactory")
    public void receiveOrder(String orderId) {
        System.out.println("Processing order: " + orderId);
    }
}
```

### 3.1 自訂 Listener Container

```java
@Configuration
@EnableJms
public class JmsConfig {

    @Bean
    public DefaultJmsListenerContainerFactory queueListenerFactory(
            ConnectionFactory connectionFactory) {
        DefaultJmsListenerContainerFactory factory =
            new DefaultJmsListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setSessionAcknowledgeMode(Session.CLIENT_ACKNOWLEDGE);
        factory.setConcurrency("3-10"); // 3~10 個消費執行緒
        return factory;
    }

    @Bean
    public DefaultJmsListenerContainerFactory topicListenerFactory(
            ConnectionFactory connectionFactory) {
        DefaultJmsListenerContainerFactory factory =
            new DefaultJmsListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setPubSubDomain(true);
        return factory;
    }
}
```

## 4. Topic 發布/訂閱

```java
// Producer
jmsTemplate.setPubSubDomain(true);
jmsTemplate.convertAndSend("STOCK.PRICE", "AAPL: 185.50");

// Consumer
@JmsListener(destination = "STOCK.PRICE", containerFactory = "topicListenerFactory")
public void onPriceUpdate(String price) {
    System.out.println("Price: " + price);
}
```

## 5. 與原生 JMS 的對照

| 項目 | 原生 JMS | Spring JMS |
|------|----------|------------|
| 發送 | 手動建立 Session / Producer | `JmsTemplate.convertAndSend` |
| 接收 | `setMessageListener` | `@JmsListener` |
| 資源管理 | 手動 close | Spring 自動管理 |
| 連線池 | 自行配置 `PooledConnectionFactory` | `spring.activemq.pool` |

## 6. 常見問題與排查

| 現象 | 可能原因 | 處理方式 |
|------|----------|----------|
| `@JmsListener` 不觸發 | Broker 未啟動或 URL 錯誤 | 確認 `broker-url` 與 Broker 狀態 |
| 訊息發到 Topic 但 Consumer 收不到 | `pub-sub-domain` 未設 `true` | Producer 與 Consumer 都需 Topic 模式 |
| 認證失敗 | 未設定 user/password | 對應 Broker 的 Simple Auth 帳密 |
| 訊息重複消費 | `CLIENT_ACKNOWLEDGE` 未正確 ACK | 確認業務邏輯無例外，或搭配重送策略 |

## 7. 與其他文章的關聯

- JMS 原生寫法：[`jmsClient`](/docs/activeMQ/usage/jmsClient)
- 確認模式：[`ackAndRedelivery`](/docs/activeMQ/usage/ackAndRedelivery)
- 連線容錯：[`connectionFailover`](/docs/activeMQ/advanced/connectionFailover)
- 安全認證：[`security`](/docs/activeMQ/advanced/security)