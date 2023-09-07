---
sidebar_position: 20
description: 在 scoop 底下安裝 Spring Boot CLI 
key: [scoop, tool, windows, Spring Boot]
tags: [scoop, 工具, Spring Boot, java, java雜記]
---

# 🥣 Spring Boot CLI 安裝

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
Name   Source                                     Updated                Manifests
----   ------                                     -------                ---------
extras https://github.com/ScoopInstaller/Extras   2023/9/7 下午 01:55:59      1890
java   https://github.com/ScoopInstaller/Java     2023/9/7 上午 09:02:34       253
```

### 搜尋可用 Spring Boot

```shell
scoop search springboot
```

```shell
Name        Version  Source Binaries
----        -------  ------ --------
openliberty 23.0.0.8 extras springBootUtility.bat
springboot  3.1.3    extras
```

### 下載 Spring Boot

```shell
scoop install springboot
```

### 切換 Spring Boot

```shell
scoop reset springboot
```

### Spring Boot 版本確認

```shell
spring -v
```
