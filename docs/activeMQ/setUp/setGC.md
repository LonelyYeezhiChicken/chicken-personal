---
sidebar_position: 35
description: ActiveMQ 自動回收
key: [ActiveMQ, tool, windows, Message Queue]
tags: [ActiveMQ, 工具, Message Queue]
---

# 🧣 ActiveMQ 自動回收

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release) (注意版本與 JDK 的相容性)
- [JDK 1.8](https://blog.lychicken.com/docs/daylilyTool/toolScoop/setJdk)

## 訂閱者回收

### 訂閱者回收 - 設定

- 檔案: /conf/activemq.xml

```xml
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"  offlineDurableSubscriberTimeout="86400000" offlineDurableSubscriberTaskSchedule="30000">
<!-- 其他設定 -->
</broker>
```

### 訂閱者回收 - 屬性

1. **offlineDurableSubscriberTimeout:**
   - 此屬性設定了離線持久訂閱者的超時時間
   - 如果一個持久訂閱者在指定的超時時間內沒有任何活動，系統可能會將其視為離線狀態，並進行相應的處理
   - 超時時間設定為 86400000 毫秒，即 24 小時。

2. **offlineDurableSubscriberTaskSchedule:**
   - 此屬性設定了執行離線持久訂閱者任務的排程間隔
   - 系統將以指定的間隔執行任務，以確保離線持久訂閱者的狀態得以更新
   - 排程間隔設定為 30000 毫秒，即 30 秒

## Topic 回收

### Topic 回收 - 設定

```xml
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"  offlineDurableSubscriberTimeout="86400000" offlineDurableSubscriberTaskSchedule="30000">
 <destinationPolicy>
        <policyMap>
            <policyEntries>
                <policyEntry topic=">">
                    <pendingMessageLimitStrategy>
                        <constantPendingMessageLimitStrategy limit="1000"/>
                    </pendingMessageLimitStrategy>
                </policyEntry>
            </policyEntries>
        </policyMap>
    </destinationPolicy>    
<!-- 其他設定 -->
</broker>
```

### Topic 回收 - 屬性

1. **topic:**
   - 此屬性指定了 Topic 的名稱，這裡使用了 `>`，表示所有的 Topic
   - 回收策略將應用於所有的 Topic

2. **pendingMessageLimitStrategy:**
   - 此屬性設定了待處理訊息數的限制策略，即當一個 Topic 上的待處理訊息數超過指定限制時，將採取相應的處理策略
   - 在這個例子中，使用了常數限制策略，設定的限制為每個 Topic 最多允許 1000 則待處理訊息

## Queue 回收

### Queue 回收 - 設定

```xml
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"  offlineDurableSubscriberTimeout="86400000" offlineDurableSubscriberTaskSchedule="30000">
 <destinationPolicy>
        <policyMap>
            <policyEntries>
                <policyEntry queue=">" gcInactiveDestinations="true" inactiveTimoutBeforeGC="30000"/>
            </policyEntries>
        </policyMap>
    </destinationPolicy>    
<!-- 其他設定 -->
</broker>
```

### Queue 回收 - 屬性

1. **gcInactiveDestinations:**
   - 此屬性用於啟用或禁用對閒置目的地的垃圾回收（Garbage Collection）
   - 如果設定為 `true`，系統將對閒置的 Queue 進行垃圾回收

2. **inactiveTimoutBeforeGC:**
   - 此屬性設定了在執行垃圾回收之前，目的地可以保持閒置的時間閾值
   - 設定為 30000 毫秒，即 30 秒
   - 如果一個 Queue 在 30 秒內沒有活動，系統將視其為閒置目的地，並在啟用垃圾回收的情況下將其回收
