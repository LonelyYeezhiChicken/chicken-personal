---
sidebar_position: 5
description: 使用 Scoop 套件管理器在 Windows 上快速安裝 Mockoon。
key: [Mockoon, Scoop, Windows, API, Mock]
tags: [Mockoon, Scoop, Windows, API, Mock, AI筆記]
---

# 👀 使用 Scoop 安裝

> [Scoop](https://scoop.sh/) 是一個在 Windows 上的命令列安裝工具，可以讓我們快速安裝各種開發者工具，包含 Mockoon。

## 1. 確保 Scoop 已安裝

如果你的系統中還沒有 Scoop，可以參考[官方文件](https://scoop.sh/)進行安裝。通常只需要一行 PowerShell 指令。

## 2. 新增 Extras Bucket

Mockoon 存在於 Scoop 的 `extras` bucket（軟體倉庫）中。如果尚未新增，請先執行以下指令：

```bash
scoop bucket add extras
```

## 3. 安裝 Mockoon

新增 bucket 後，就可以直接安裝 Mockoon：

```bash
scoop install mockoon
```

Scoop 會自動下載最新版本的 Mockoon、解壓縮並設定好環境變數。

## 4. 啟動 Mockoon

安裝完成後，你可以直接在命令列中輸入 `mockoon` 來啟動桌面應用程式：

```bash
mockoon
```

或者你也可以在 Windows 的開始選單中找到它。

透過 Scoop 安裝可以讓你輕鬆管理 Mockoon 的版本，未來只需要執行 `scoop update mockoon` 就可以升級到最新版本。
