---
sidebar_position: 10
description: 安裝 Cadvisor
key: [Linux, 雜記, Cadvisor, Docker, Grafana, Prometheus]
tags: [Linux, Linux雜記, Docker, 工具, Grafana, Prometheus]
---

# 👩‍💻 docker 監控

## 環境

- Ubuntu

## Linux 中監控 docker

> 要在 Linux 中安裝 Grafana 和 Prometheus 並將它們與 cAdvisor 集成，您
>
> 可以使用 Docker Compose 來簡化部署過程

### 建一個 Docker Compose 文件

- 在一個空目錄中建立一個名為 `docker-compose.yml` 的文件，並添加以下內容：

   ```yaml
   version: '3'
   services:
     cadvisor:
       image: gcr.io/cadvisor/cadvisor:latest
       container_name: cadvisor
       volumes:
         - /:/rootfs:ro
         - /var/run:/var/run:rw
         - /sys:/sys:ro
         - /var/lib/docker/:/var/lib/docker:ro
       ports:
         - "8080:8080"
       restart: always

     prometheus:
       image: prom/prometheus:latest
       container_name: prometheus
       volumes:
         - ./prometheus:/etc/prometheus
       command:
         - '--config.file=/etc/prometheus/prometheus.yml'
         - '--storage.tsdb.path=/prometheus'
       ports:
         - "9090:9090"
       restart: always

     grafana:
       image: grafana/grafana:latest
       container_name: grafana
       environment:
         - GF_SECURITY_ADMIN_PASSWORD=your_admin_password
       ports:
         - "3000:3000"
       restart: always
   ```

   > 在這個配置中，替換 `your_admin_password` 為您希望設置的 Grafana 管理員密碼

### 建 Prometheus 配置文件

- 在與 `docker-compose.yml` 相同的目錄中
- 建一個名為 `prometheus` 的目錄
- 並在該目錄中建立一個名為 `prometheus.yml` 的文件，添加以下內容：

   ```yaml
   global:
     scrape_interval: 15s

   scrape_configs:
     - job_name: 'cadvisor'
       static_configs:
         - targets: ['cadvisor:8080']
   ```

   > 這個配置告訴 Prometheus 從 cAdvisor 服務抓取指標

### 啟動服務

> 在包含 `docker-compose.yml` 文件的目錄中，執行以下命令來啟動所有服務：

```shell
docker compose up -d
```

### 訪問 Grafana 和 Prometheus

- Grafana 將在 `http://your-server-ip:3000` 上可用使用 `admin` 作為用戶名和您在 `docker-compose.yml` 中設定的密碼進行登錄
- Prometheus 將在 `http://your-server-ip:9090` 上可用

### 在 Grafana 中配置 Prometheus 數據源

- 登錄到 Grafana，然後轉到 Configuration (配置) > Data Sources (數據源) > Add data source (添加數據源)
- 選擇 Prometheus 作為數據源類型
- 在 HTTP URL 欄位中輸入 `http://prometheus:9090`
- 單擊 "Save & Test" 以保存配置

### 建立和配置儀表板

建立和配置儀表板是 Grafana 的核心功能之一，允許您可視化和分析來自不同數據源的監控數據以下是在 Grafana 中建立和配置儀表板的詳細步驟：

### 尋找和導入現有的儀表板

1. **訪問 Grafana Dashboards**：
   - 打開瀏覽器，訪問 [Grafana Dashboards](https://grafana.com/grafana/dashboards/) 網站

2. **搜索適合的儀表板**：
   - 在搜索欄中輸入關鍵字（例如 "cadvisor" 或 "prometheus"）來找到與 cAdvisor 或 Prometheus 相關的儀表板

3. **選擇並查看儀表板詳情**：
   - 點擊您感興趣的儀表板，查看其詳細信息和預覽

4. **複製儀表板 ID**：
   - 在儀表板詳情頁面上，找到並複製儀表板的 ID（通常是一串數字）

5. **導入儀表板到 Grafana**：
   - 返回到您的 Grafana 實例，點擊左側菜單的 "+" 圖標，然後選擇 "Import"
   - 在 "Import via grafana.com" 欄位中粘貼您複製的儀表板 ID，然後點擊 "Load"
   - 選擇適當的 Prometheus 數據源，然後點擊 "Import"

### 建立新的儀表板

1. **打開 Grafana 並建立新儀表板**：
   - 登錄到您的 Grafana 實例
   - 點擊左側菜單的 "+" 圖標，然後選擇 "Dashboard"

2. **添加面板**：
   - 在新的儀表板中，點擊 "Add panel"
   - 選擇您想要的視覺化類型（例如，圖表、單值指標、表格等）

3. **配置面板查詢**：
   - 在 "Query" 部分，選擇您的數據源（例如，Prometheus）
   - 編寫查詢以從數據源中提取所需的監控數據例如，使用 PromQL 查詢 Prometheus 數據
   - 設置適當的時間範圍和其他查詢選項

4. **自定義面板設置**：
   - 在 "Panel" 和 "Field" 部分中，根據需要調整面板的外觀和行為例如，設置標題、軸標籤、顏色、閾值等

5. **保存面板和儀表板**：
   - 完成面板配置後，點擊 "Apply" 保存面板設置
   - 返回儀表板視圖，並點擊右上角的 "Save dashboard" 按鈕以保存整個儀表板
