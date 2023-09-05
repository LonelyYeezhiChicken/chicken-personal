---
sidebar_position: 5
description: 在 windows 底下安裝 NVM 
key: [Node, tool, windows, NVM]
tags: [Node, 工具, NVM]
---

# 📗 NVM 安裝

## 環境

> OS: Windows11

## 用途

> 可以在本機安裝多個版本的 node， 並且快速切換版本

## 下載

[官方位址](https://github.com/coreybutler/nvm-windows/releases)

- 下載 `nvm-setup.zip`
- 解壓縮

:::caution
安裝目錄不可有中文，否則會報錯
:::

## 安裝

> 直接點擊 `nvm-setup.exe`
>
> 持續下一步即可

## 測試

- 開啟終端機

```shell
nvm
```

## 常用命令

### 安裝 node

> 最新版本的 node

```shell
nvm install latest
```

> 使用特定版本的 Node.js（例如，使用版本 14.3.0）

```shell
nvm use 14.3.0
```

> 在當前版本的 Node.js 環境下，重新全局安裝指定版本號的 npm 套件

```shell
nvm reinstall-packages 版本號
```

### 列出所有版本

> 列出已安裝的所有版本

```shell
nvm list
```

>（簡化版）

```shell
nvm ls
```

> 列出可用的遠端 Node.js 版本（僅適用於 macOS）

```shell
nvm ls-remote
```

> 列出可用的遠端 Node.js 版本（僅適用於 Windows）

```shell
nvm ls available
```

### 卸載 node

> 特定版本的 Node.js（例如，卸載版本 14.3.0）

```shell
nvm uninstall 14.3.0
```

### 顯示版本

> 顯示當前使用的 Node.js 版本

```shell
nvm current
```

### 為不同版本的 Node.js 添加別名

```shell
nvm alias [別名] [版本號]
```

### 刪除已定義的別名

```shell
nvm unalias 別名
```
