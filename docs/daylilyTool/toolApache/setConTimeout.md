---
sidebar_position: 35
description: Apache24 設定 Timeout
key: [Apache24, tool, windows, proxy sever]
tags: [Apache24, 工具, proxy sever]
---

# 🍂 Apache24 設定 Timeout

## 環境

- windows10 ~ 11
- [Apache24](https://www.apachehaus.com/cgi-bin/download.plx)

## 設定 Timeout

### 設定每個請求的 Timeout

> 檔案: /Apache24/conf/extra/httpd-default.conf

```shell
# Timeout: The number of seconds before receives and sends time out.
Timeout 30
```
