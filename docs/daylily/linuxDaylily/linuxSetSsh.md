---
sidebar_position: 1
description: 設定 ssh
key: [Linux, 雜記, ssh]
tags: [Linux, Linux雜記]
---

# 👩‍💻 設定 Ssh

## 步驟

### 安裝 OpenSSH 服務器

- 更新套件列表並安裝 OpenSSH 服務器：

    ```shell
    sudo apt update
    sudo apt install openssh-server
    ```

- 檢查 SSH 服務狀態，確認服務正在運行：

    ```shell
    sudo systemctl status ssh
    ```

### 配置防火牆

- 如果使用 UFW 防火牆，允許 SSH 連接：

    ```shell
    sudo ufw allow ssh
    ```

### 連接到 SSH 服務器

- 從遠程系統使用 SSH 連接到 Ubuntu 服務器：

    ```shell
    ssh username@your_ubuntu_server_ip
    ```

- `username`：Ubuntu 服務器上的用戶名
- `your_ubuntu_server_ip`：服務器的 IP 地址

### 查看目錄

- 列出當前目錄下的檔案及其索引號：

    ```shell
    ls -i
    ```

- 以詳細格式列出檔案，包括隱藏檔案：

    ```shell
    ls -ial
    ```
