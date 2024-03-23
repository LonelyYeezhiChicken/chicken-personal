---
sidebar_position: 12
description: 在 Linux 底下安裝 Docker 
key: [Docker, tool, 虛擬容器, Linux]
tags: [Docker, 工具]
---

# 🐳 Docker 安裝 (Linux)

## 環境

- Ubuntu

## 開始安裝

### 1. 更新 apt

```bash
sudo apt-get update -y
```

```bash
sudo apt-get install curl -y
```

### 2. 安裝 docker

```bash
sudo apt-get install docker.io
```

### 3. 將 docker 加入服務

```bash
sudo systemctl start docker
```

```bash
sudo systemctl enable docker
```

### 4. 確認服務狀態

```bash
service docker status
```

> 正常的話可以看到綠色的狀態

### 5. 將使用者權限加入 docker

```bash
sudo groupadd docker
```

```bash
sudo gpasswd -a $USER docker
```

```bash
sudo usermod -aG docker $USER
```

> 執行完需要登出後才會生效

## 安裝 docker compose

### 設定 Docker apt repository

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

### Install the Docker packages

```bash
sudo apt-get install docker-compose-plugin
```

### 檢查版本

```bash
docker compose version
```

---

## REF

- [梁大哥筆記](https://hackmd.io/hux5UiziTlyoNbj7EOBxQQ?view)
- [docker 官網](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
