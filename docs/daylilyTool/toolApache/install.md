---
sidebar_position: 5
description: 在 windows 底下安裝 Apache24 
key: [Apache24, tool, windows, proxy sever]
tags: [Apache24, 工具, proxy sever]
---

# 🍂 Apache24 安裝

## 環境

- windows10 ~ 11
- [Apache24](https://www.apachehaus.com/cgi-bin/download.plx)

## 安裝流程

### 下載

> 選擇 `64 bit Redistributable Package (x64)` 點擊下載
>
> copy Apache24 to C:\Apache24

:::caution
如果需要換路徑，需要 `/Apache24/conf/httpd.conf`，

修改 `Define SRVROOT "c:/Apache24"`
:::

### 安裝依賴

:::caution
如果啟動後跳出以下錯誤訊息

installing apache: no VCRUNTIME140.dll
:::

> 需安裝 C++ Redistributable for Visual Studio 2015 RC
>
> [下載](https://www.microsoft.com/en-us/download/details.aspx?id=52685)
