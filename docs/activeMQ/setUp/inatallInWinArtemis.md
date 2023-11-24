---
sidebar_position: 7
description: 在 windows 底下安裝 ActiveMQ Artemis
key: [ActiveMQ, tool, windows, Message Queue]
tags: [ActiveMQ, 工具, Message Queue]
---

# 🧣 ActiveMQ 安裝 - Artemis

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ Artemis 2.31.2](https://activemq.apache.org/components/artemis/) (注意版本與 JDK 的相容性)
- [OpenJDK 17.0.2](https://blog.lychicken.com/docs/daylilyTool/toolScoop/setJdk)

## 安裝流程

### 下載

> 點擊下載
>
> 解壓縮
>
> copy Apache24 to C:\apache-artemis-2.31.2

## 建立 Broker

- 檔案: /apache-artemis-2.31.2/bin/

> 右鍵
>
> 在終端機開啟

### 建立新的 Broker

```shell
.\artemis create MyBroker
```

- 終端機顯示

```shell
PS C:\app\apache-artemis-2.31.2\bin> .\artemis create MyBroker
Creating ActiveMQ Artemis instance at: C:\app\apache-artemis-2.31.2\bin\MyBroker

--user:
What is the default username?
```

### 輸入帳戶名稱

```shell
admin
```

- 終端機顯示

```shell
PS C:\app\apache-artemis-2.31.2\bin> .\artemis create MyBroker
Creating ActiveMQ Artemis instance at: C:\app\apache-artemis-2.31.2\bin\MyBroker

--user:
What is the default username?
admin

--password: is mandatory with this configuration:
What is the default password?
```

### 輸入密碼

```shell
test123
```

- 終端機顯示

```shell
PS C:\app\apache-artemis-2.31.2\bin> .\artemis create MyBroker
Creating ActiveMQ Artemis instance at: C:\app\apache-artemis-2.31.2\bin\MyBroker

--user:
What is the default username?
admin

--password: is mandatory with this configuration:
What is the default password?


--allow-anonymous | --require-login:
Allow anonymous access?, valid values are Y, N, True, False
```

### 匿名模式

:::caution
如果設定成 `Y` 隨意連線都可以連進來訂閱與推播

所以一律要設定成 `N`
:::

```shell
N
```

```shell
PS C:\app\apache-artemis-2.31.2\bin> .\artemis create MyBroker
Creating ActiveMQ Artemis instance at: C:\app\apache-artemis-2.31.2\bin\MyBroker

--user:
What is the default username?
admin

--password: is mandatory with this configuration:
What is the default password?


--allow-anonymous | --require-login:
Allow anonymous access?, valid values are Y, N, True, False
N

Auto tuning journal ...
done! Your system can make 0.45 writes per millisecond, your journal-buffer-timeout will be 2236000

You can now start the broker by executing:

   "C:\app\apache-artemis-2.31.2\bin\MyBroker\bin\artemis" run

Or you can setup the broker as Windows service and run it in the background:

   "C:\app\apache-artemis-2.31.2\bin\MyBroker\bin\artemis-service.exe" install
   "C:\app\apache-artemis-2.31.2\bin\MyBroker\bin\artemis-service.exe" start

   To stop the windows service:
      "C:\app\apache-artemis-2.31.2\bin\MyBroker\bin\artemis-service.exe" stop

   To uninstall the windows service
      "C:\app\apache-artemis-2.31.2\bin\MyBroker\bin\artemis-service.exe" uninstall
```

> 到這邊可以看到目錄底下長出一個 `Broker`

## 目錄位置

### 設定

> 位於 /apache-artemis-2.31.2/bin/MyBroker/etc/

### 啟動

> 位於 /apache-artemis-2.31.2/bin/MyBroker/bin/

```shell
.\artemis run
```

> [後台](http://localhost:8161/)
