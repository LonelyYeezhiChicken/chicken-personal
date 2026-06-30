---
sidebar_position: 25
description: ActiveMQ 延遲和優先順序
key: [ActiveMQ, tool, durable, Message Queue]
tags: [ActiveMQ, 工具, Message Queue]
---

# 🧣 ActiveMQ 訊息過濾

訊息過濾是一個在訊息中間件中常見的概念，它允許消費者選擇性地接收特定類型或條件的訊息，從而實現更細粒度的訊息控制和處理

## 為什麼需要訊息過濾？

在實際應用中，訊息的種類可能非常多樣，而消費者並不一定對所有的訊息都感興趣

這時就需要一種機制來實現訊息的篩選，使得消費者只接收符合特定條件的訊息

這樣可以降低消費者端的資源浪費，提高系統的效率

## ActiveMQ 中的訊息過濾

在 ActiveMQ 中，訊息過濾通常通過 SQL 表達式來實現這些表達式基於訊息的屬性進行篩選，只有符合條件的訊息才會被選擇性地傳送給相應的消費者，例如一個簡單的訊息過濾條件可以是選擇所有屬性 `type` 為 `important` 的訊息，這樣消費者就只會接收到這一類型的訊息，而忽略其他訊息

### 範例

以下是一個使用 JMS API 中的訊息過濾的簡單示例，假設有一個訊息屬性為 `category`：

```java
// 建立一個過濾條件，只接收屬性 "category" 為 "urgent" 的訊息
String messageFilter = "category = 'urgent'";

// 設定訊息過濾條件
consumer.setMessageSelector(messageFilter);

// 設定訊息過濾監聽器
consumer.setMessageListener(message -> {
    // 在這裡處理符合過濾條件的訊息
    System.out.println("Received message: " + message);
});
```

在這個例子中，只有屬性 `category` 為 `urgent` 的訊息才會觸發消費者的訊息處理邏輯

## Message Selector 語法

| 運算子 | 範例 | 說明 |
|--------|------|------|
| `=` | `category = 'urgent'` | 等於 |
| `<>` | `status <> 'done'` | 不等於 |
| `>` / `>=` | `priority > 5` | 數值比較 |
| `LIKE` | `name LIKE 'ORDER%'` | 萬用字元（`%` 多字元，`_` 單字元） |
| `BETWEEN` | `amount BETWEEN 100 AND 500` | 範圍 |
| `IN` | `type IN ('A', 'B')` | 列舉 |
| `IS NULL` | `expired IS NULL` | 空值判斷 |
| `AND` / `OR` | `type = 'A' AND priority > 3` | 邏輯組合 |

:::tip
過濾在 Broker 端執行，不符合條件的訊息不會傳給 Consumer，比客戶端自行判斷更有效率。
:::
