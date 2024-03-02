---
sidebar_position: 5
description: Docker 中安裝 RabbitMQ
key: [RabbitMQ, tool, Docker]
tags: [RabbitMQ, tool, Docker]
---

# 🐰 Docker 中安裝 RabbitMQ

## 安裝版本

- RabbitMQ: 3.13
- Image: rabbitmq:management (docker 官方)
- OS: Windows11

## 安裝步驟

### 1. 下載 Image

- 下載

```shell
docker pull rabbitmq:management
```

### 2. 啟動容器

- 建立 volume (方便管理)

```shell
docker volume create rabbitmq-home 
```

- 建立容器，並將 port 做對應
- 15672 port：管理頁面
- 5672 port：訊息接收端
- 1883 port：MQTT訊息接收端

```shell
docker run -id --name rabbitmq `
-v rabbitmq-home:/var/lib/rabbitmq `
-p 15672:15672 `
-p 5672:5672 `
-p 1883:1883 `
-e RABBITMQ_DEFAULT_USER=admin `
-e RABBITMQ_DEFAULT_PASS=admin `
rabbitmq:management
```

## 登入後台

- 打開後台 [http://localhost:15672/](http://localhost:15672/)
- 使用 `admin`,`admin` 登入(或是其他自定義帳號密碼)
