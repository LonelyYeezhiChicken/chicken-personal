---
sidebar_position: 10
description: 使用 Docker 容器化運行 Mockoon，實現環境隔離與快速部署。
key: [Mockoon, Docker, API, Mock, Container]
tags: [Mockoon, Docker, API, Mock, Container]
---

# 👀 使用 Docker 安裝

> 對於熟悉容器化技術的開發者來說，使用 Docker 來運行 Mockoon 是一個非常好的選擇。它可以保持主機環境的乾淨，並且方便在不同機器之間遷移。

Mockoon 官方提供了兩種 Docker Image：

1.  `mockoon/cli`: 純命令列工具，適合在 CI/CD 或自動化腳本中使用。
2.  `mockoon/serverless`: 專為在無伺服器環境（如 AWS Lambda, GCP Cloud Run）中運行而設計的輕量級版本。

本篇主要介紹 `mockoon/cli` 的用法。

## 1. 準備 Mock 資料

首先，你需要在本地建立一個 Mockoon 的環境設定檔。你可以先透過[桌面版](install-with-scoop.md)建立好你的 Mock API，然後將其匯出成一個 `mockoon-data.json` 檔案。

假設你的資料檔案路徑為 `./mockoon-data.json`。

## 2. 運行 Mockoon CLI 容器

使用 `docker run` 指令來啟動 Mockoon 容器。你需要將本地的資料檔案掛載到容器中，並將 port 映射出來。

```bash
docker run -d --name my-mock-api \
  -v ./mockoon-data.json:/data \
  -p 3000:3000 \
  mockoon/cli:latest \
  --data /data --port 3000
```

### 指令說明：

-   `-d`: 在背景執行容器。
-   `--name my-mock-api`: 為你的容器取一個好記的名字。
-   `-v ./mockoon-data.json:/data`: 將本地的 `mockoon-data.json` 檔案掛載到容器內的 `/data` 路徑。
-   `-p 3000:3000`: 將本地的 3000 port 映射到容器的 3000 port。
-   `mockoon/cli:latest`: 指定使用的 Docker image。
-   `--data /data --port 3000`: 這是傳遞給 Mockoon CLI 的參數，告訴它資料檔案在哪裡以及要監聽哪個 port。

## 3. 測試 Mock API

容器啟動後，你就可以透過 `http://localhost:3000` 來存取你定義的 Mock API 了。

例如，如果你在 `mockoon-data.json` 中定義了一個 `GET /users` 的路由，你就可以用 `curl` 或瀏覽器訪問 `http://localhost:3000/users`。

## 4. 使用 Docker Compose

如果你有多個 Mock API 或更複雜的設定，使用 `docker-compose.yml` 會更方便管理。

```yaml
version: '3.7'

services:
  mock-api-1:
    image: mockoon/cli:latest
    command: --data /data/service1.json --port 3001
    volumes:
      - ./data/service1.json:/data/service1.json
    ports:
      - "3001:3001"

  mock-api-2:
    image: mockoon/cli:latest
    command: --data /data/service2.json --port 3002
    volumes:
      - ./data/service2.json:/data/service2.json
    ports:
      - "3002:3002"
```

透過 Docker，你可以輕鬆地在任何支援 Docker 的環境中快速啟動你的 Mock API 服務。
