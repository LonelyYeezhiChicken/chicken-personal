---
sidebar_position: 10
description: 安裝 Cadvisor
key: [Linux, 雜記, Cadvisor, Docker]
tags: [Linux, Linux雜記, Docker, 工具]
---

# 👩‍💻 安裝 Cadvisor

## 關於 Cadvisor

> `cAdvisor` (Container Advisor) 是 Google 開發的一款開源工具

## 開始安裝

### 環境

- Ubuntu

### 安裝步驟

1. **安裝 Docker**：

   - 如果您還沒有安裝 Docker，請先[安裝 Docker](https://blog.lychicken.com/docs/daylilyTool/toolDocker/setDockerInLinux)

2. **運行 cAdvisor**：

   - 使用 Docker 運行 `cAdvisor` 容器
   - 以下命令將啟動一個 `cAdvisor` 容器
   - 將其綁定到主機的 `8080` Port：

   ```bash
   sudo docker run \
     --volume=/:/rootfs:ro \
     --volume=/var/run:/var/run:rw \
     --volume=/sys:/sys:ro \
     --volume=/var/lib/docker/:/var/lib/docker:ro \
     --publish=8080:8080 \
     --detach=true \
     --name=cadvisor \
     gcr.io/cadvisor/cadvisor:latest
   ```

   > 這條命令將啟動一個 `cAdvisor` 容器，並將其綁定到主機的 `8080` Port

3. **訪問 cAdvisor 界面**：

   - 在瀏覽器中訪問 `http://your-server-ip:8080`
