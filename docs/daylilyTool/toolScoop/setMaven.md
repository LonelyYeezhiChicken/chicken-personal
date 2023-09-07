---
sidebar_position: 15
description: 在 scoop 底下安裝 Maven 
key: [scoop, tool, windows, Maven]
tags: [scoop, 工具, Maven, java, java雜記]
---

# 🥣 Maven 安裝

## 安裝

### 將 Java 加入 bucket

```shell
scoop bucket add java
```

### 確認現有 bucket

```shell
scoop bucket list
```

> 出現以下文字表示加入成功

```shell
Name Source                                     Updated                Manifests
---- ------                                     -------                ---------
java https://github.com/ScoopInstaller/Java     2023/9/7 上午 09:02:34       253
```

### 搜尋可用 maven

```shell
scoop search maven
```

```shell
Name  Version Source Binaries
----  ------- ------ --------
maven 3.9.4   main
```

### 下載 maven

```shell
scoop install maven
```

### 切換 maven

```shell
scoop reset maven
```

### maven 版本確認

```shell
mvn -v
```
