---
sidebar_position: 30
description: 在 scoop 底下安裝 Mockoon 
key: [scoop, tool, windows, Python]
tags: [scoop, 工具, Python]
---

# 🥣 Mockoon 安裝

## 安裝

### 將 extras 加入 bucket

```shell
scoop bucket add extras
```

### 確認現有 bucket

```shell
scoop bucket list
```

> 出現以下文字表示加入成功

```shell
Name     Source                                     Updated                  Manifests
----     ------                                     -------                  ---------
extras   https://github.com/ScoopInstaller/Extras   2024/10/26 上午 04:31:41      2091
```

### 下載 Python

```shell
scoop install mockoo
```
