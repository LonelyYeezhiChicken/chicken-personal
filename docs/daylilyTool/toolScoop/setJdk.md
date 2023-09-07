---
sidebar_position: 10
description: 在 scoop 底下安裝 JDK 
key: [scoop, tool, windows, JDK]
tags: [scoop, 工具, JDK, java, java雜記]
---

# 🥣 JDK 安裝

## 關於

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

### 搜尋可用 JDK

```shell
scoop search jdk
```

```shell
Name                    Version                   Source Binaries
----                    -------                   ------ --------
corretto-jdk            19.0.2.7.1                java
corretto-lts-jdk        17.0.8.8.1                java
corretto11-jdk          11.0.20.9.1               java
corretto15-jdk          15.0.2.7.1                java
corretto16-jdk          16.0.2.7.1                java
corretto17-jdk          17.0.8.8.1                java
corretto18-jdk          18.0.2.9.1                java
corretto19-jdk          19.0.2.7.1                java
corretto8-jdk           8.382.05.1                java
dragonwell11-jdk        11.0.20.16-11.0.20        java
dragonwell17-jdk        17.0.8.0.8-17.0.8         java
dragonwell8-jdk         8.16.17-8.0.382           java
graalvm-jdk11           22.3.2                    java
graalvm-jdk17           22.3.2                    java
```

### 下載JDK

- 下載 JDK 8 與 JDK 17

```shell
# JDK8
scoop install openjdk8-redhat

# JDK17
scoop install openjdk17
```

### 切換JDK

- 切 JDK 8

```shell
# JDK8
scoop reset openjdk8-redhat
```

- 切 JDK 17

```shell
scoop reset openjdk17
```

### JDK 版本確認

```shell
java -version
```
