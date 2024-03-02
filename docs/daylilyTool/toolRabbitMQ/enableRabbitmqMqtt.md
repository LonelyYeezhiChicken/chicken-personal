---
sidebar_position: 10
description: RabbitMQ 啟用 MQTT
key: [RabbitMQ, tool, Docker, Message Queue]
tags: [RabbitMQ, tool, Docker, Message Queue]
---

# 🐰 RabbitMQ 啟用 MQTT

## 安裝版本

- RabbitMQ: 3.13
- 部屬: docker
- OS: Windows11

## 啟用 MQTT

### 1. 進入容器

```shell
docker exec -it rabbitmq bash 
```

### 2. 啟用

```shell
rabbitmq-plugins enable rabbitmq_mqtt
```

- 如果有需要關閉的話就執行

```shell
rabbitmq-plugins disable rabbitmq_mqtt
```

## 檢查是否啟用

- 打開後台 [http://localhost:15672/](http://localhost:15672/)
- 使用 `admin`,`admin` 登入(或是其他自定義帳號密碼)
- 檢查 `Ports and contexts` 是否有出現 `Protocol` : `mqtt`

## 建立使用者

- **創建使用者**：
   使用 `rabbitmqctl` 命令來創建一個新的使用者。替換 `<username>` 和 `<password>` 為您想要設定的使用者名稱和密碼：

```shell
rabbitmqctl add_user <username> <password>
```

- **設定權限**：
   為剛創建的使用者設定權限。這允許使用者訪問虛擬主機（通常是 `/`），並對其進行讀寫操作。替換 `<username>` 為您的使用者名稱：

```shell
rabbitmqctl set_permissions -p / <username> ".*" ".*" ".*"
```
