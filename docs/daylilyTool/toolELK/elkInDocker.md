---
sidebar_position: 5
description: Docker 中安裝 ELK
key: [ELK, tool, Docker]
tags: [ELK, tool, Docker]
---

# 🐲 Docker 中安裝 ELK

## 下載與安裝

### 下載

- 於官方 Github [下載](https://github.com/deviantony/docker-elk/releases)
- 本次下載 `8.2305.1` 版

### 安裝

- 解壓縮後，到專案目錄下，開啟終端機

- 建立 docker-compose

```shell
docker-compose up
```

## 啟動

- 以下是預設的 port

```shell
5000: Logstash TCP input
9200: Elasticsearch HTTP
9300: Elasticsearch TCP transport
5601: Kibana
```

### 後台(kibana)

- 後台聯結: [http://localhost:5601/](http://localhost:5601/)
- 預設帳號: elastic
- 預設密碼: changeme
