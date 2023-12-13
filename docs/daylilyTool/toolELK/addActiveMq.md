---
sidebar_position: 10
description: 蒐集 ActiveMQ Logs
key: [ELK, tool, Docker, ActiveMQ]
tags: [ELK, tool, Docker, ActiveMQ]
---

# 🐲 蒐集 ActiveMQ Logs

## 環境

- Windows10 ~ 11 (win64)
- ActiveMQ 5.18.3
- Filebeat 8.11.3

## 下載與安裝

### 下載 Filebeat

- [下載 Windows ZIP x86_64](https://www.elastic.co/downloads/beats/filebeat)
- 解壓縮，並將檔名修改為 `Filebeat`
- 放到 `C:\Program Files\Filebeat` 底下
  
### 加入服務

- 使用系統管理員啟用 `power shell`

```shell
cd "C:\Program Files\Filebeat"
.\install-service-filebeat.ps1
```

:::caution
`\install-service-filebeat.ps1 未經數位簽署。您無法在目前的系統上執行此指令碼。`

先執行 `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
:::

> 看到服務中有 `filebeat` 表示成功

### 設定連線

- 檔案位置: `C:\Program Files\Filebeat\filebeat.yml`

```yml
output.elasticsearch:
  hosts: ["<es_url>"]
  username: "elastic"
  password: "<password>"
  # If using Elasticsearch's default certificate
  ssl.ca_trusted_fingerprint: "<es cert fingerprint>"
setup.kibana:
  host: "<kibana_url>"
```

- 如果使用 docker-compose 的預設

```yml
output.elasticsearch:
  hosts: ["localhost:9200"]
  username: "elastic"
  password: "changeme"
  # If using Elasticsearch's default certificate
  # ssl.ca_trusted_fingerprint: "<es cert fingerprint>"
setup.kibana:
  host: "localhost:5601"
```

### 啟用 ActiveMQ 蒐集

```shell
.\filebeat.exe modules enable activemq
```

- 設定 ActiveMQ log 路徑
- 檔案: `modules.d/activemq.yml`

```yml
- module: activemq
  # Audit logs
  audit:
    enabled: true
    var.paths: ["C:\\apache-activemq-5.18.3\\data\\audit.log"]

  # Application logs
  log:
    enabled: true
    var.paths: ["C:\\apache-activemq-5.18.3\\data\\activemq.log"]
```

### 載入設定

```shell
.\filebeat.exe setup
```

## 啟動

### 1. 未設定為服務

- 如果沒有設定成服務要直接執行

```shell
.\filebeat.exe -e -c filebeat.yml -d "*"
```

### 2. 啟動服務

- 已經設定成服務，啟動服務

```shell
Start-Service filebeat
```

## 觀看 log

- 可到[後台](http://localhost:5601/app/logs/stream?flyoutOptions=(flyoutId:!n,flyoutVisibility:hidden,surroundingLogsId:!n)) 看到 log 表示設定成功
