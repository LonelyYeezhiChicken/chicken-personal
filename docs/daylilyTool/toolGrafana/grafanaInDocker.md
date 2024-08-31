---
sidebar_position: 5
description: 使用 Docker Compose 部署 Prometheus 和 Grafana
key: [Prometheus, Grafana, Docker, Monitoring]
tags: [Prometheus, Grafana, Docker, Monitoring]
---

# ☀️ 使用 docker-compose

> 使用 `docker-compose` 部署 Prometheus 和 Grafana

## 1. 建立 `docker-compose.yml`

建立一個 `docker-compose.yml` 檔案，內容如下：

```yaml
version: '3.7'

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana-storage:/var/lib/grafana

volumes:
  grafana-storage:
```

### **Prometheus**
  
- `image`: 指定使用最新版本的 Prometheus
- `volumes`: 將本地的 `prometheus.yml` 配置檔案掛載到容器的 `/etc/prometheus/prometheus.yml` 位置
- `ports`: 將本地的 9090 port 對應到容器的 9090 port

### **Grafana**

- `image`: 指定使用最新版本的 Grafana
- `ports`: 將本地的 3000 port 對應到容器的 3000 port
- `environment`: 設定 Grafana 的管理員密碼為 `admin`
- `volumes`: 建立一個名為 `grafana-storage` 的資料卷來存儲 Grafana 的資料，以便在容器重啟後資料不會丟失

## 2. 建立 `prometheus.yml`

接著，建立一個 Prometheus 的配置檔案 `prometheus.yml`，內容如下：

```yaml
global:
  scrape_interval: 15s # 默認抓取間隔

scrape_configs:
  - job_name: 'prometheus'
    scheme: https # 使用 https 協議
    static_configs:
      - targets: ['localhost:9090'] # 替換為你的 ASP.NET Core API 地址 和 port
    tls_config:
      insecure_skip_verify: true # 忽略 SSL 驗證
```

### 說明

- **scrape_interval**: 設定抓取資料的間隔時間
- **scrape_configs**: 配置抓取任務，這裡設置抓取 Prometheus 自身的監控資料

## 3. 啟動服務

在配置完成後，可以使用以下指令來啟動 Prometheus 和 Grafana：

```sh
docker-compose up -d
```

這將會在 docker 執行這兩個服務，並可以通過以下 URL 訪問：

- Prometheus: [http://localhost:9090](http://localhost:9090)
- Grafana: [http://localhost:3000](http://localhost:3000)

## 4. 結束服務

如果需要停止服務，可以使用以下指令：

```sh
docker-compose down
```

這將會停止並移除所有相關的容器和網路
