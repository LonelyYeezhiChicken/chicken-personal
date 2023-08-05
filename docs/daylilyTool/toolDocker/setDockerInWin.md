---
sidebar_position: 10
description: 在 windows 底下安裝 Docker 
key: [Docker, tool, 虛擬容器, windows]
tags: [Docker, 工具]
---

# 🐳 Docker 安裝

## 在 Windows 底下安裝 Docker

本次安裝環境於 Windows11

## 1. 啟用虛擬機 Hyper-V

- 開始 > 變更帳戶設定 > 應用程式 > 選用功能 > 更多 Windows 功能
  - 在這個地方找到 `hyper-v` 將他啟用

## 2. 安裝 Docker Desktop

- [官網連結](https://www.docker.com/products/docker-desktop/)
- 下載後直接執行安裝檔 `Docker Desktop Installer.exe`

### 啟動後出現 WSL 版本過低

- 檢查 WSL 版本，於終端機中輸入以下指令

```shell
    wsl.exe -l -v
```

- 如果有就直接更新

```shell
    wsl --update
```

- 如果沒有任何版本就執行以下指令

```shell
    wsl --install
```

- 畫面會顯示可安裝版本

```shell
NAME                                   FRIENDLY NAME
Ubuntu                                 Ubuntu
Debian                                 Debian GNU/Linux
kali-linux                             Kali Linux Rolling
Ubuntu-18.04                           Ubuntu 18.04 LTS
Ubuntu-20.04                           Ubuntu 20.04 LTS
Ubuntu-22.04                           Ubuntu 22.04 LTS
OracleLinux_7_9                        Oracle Linux 7.9
OracleLinux_8_7                        Oracle Linux 8.7
OracleLinux_9_1                        Oracle Linux 9.1
openSUSE-Leap-15.5                     openSUSE Leap 15.5
SUSE-Linux-Enterprise-Server-15-SP4    SUSE Linux Enterprise Server 15 SP4
SUSE-Linux-Enterprise-15-SP5           SUSE Linux Enterprise 15 SP5
openSUSE-Tumbleweed                    openSUSE Tumbleweed
```

- 本次選擇 `Ubuntu-22.04`

```shell
    wsl --install -d Ubuntu-22.04
```

### 新增 wsl 記憶體限制

- 於 `C:\Users\<user>` 底下新增文檔 `.wslconfig`

```text
[wsl2]
memory=6GB
```

## 3. 啟動

> 開啟 Docker Desktop 畫面上沒有錯誤訊息表示安裝成功
