---
sidebar_position: 5
description: 在 windows 底下安裝 scoop 
key: [scoop, tool, windows]
tags: [scoop, 工具]
---

# 🥣 scoop 安裝

## 環境

> OS: Windows11
>
> Powershell

## 安裝

### 下載

```shell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```

### 狀態確認

```shell
scoop status
```

## 常用指令

### 查詢官方現有 bucket

```shell
scoop bucket known
```

### 加入 bucket

```shell
scoop bucket add [bucket name]
```

### 確認現有 bucket

```shell
scoop bucket list
```

### 更新 bucket

- 更新特定套件

```shell
scoop update [app name]
```

- 更新全部套件

```shell
scoop update * 
```

### 搜尋可用的套件

```shell
scoop search [app name]
```

### 安裝各版本套件

```shell
scoop install [Name]
```

### 切換版本

```shell
scoop reset [app name]@[Version]
```

### 卸載套件

```shell
scoop uninstall [Name]
```

### 更新 scoop 版本

```shell
scoop update
```

---

[官方網站](https://scoop.sh/)
