---
sidebar_position: 25
description: Apache24 設定log大小
key: [Apache24, tool, windows, proxy sever]
tags: [Apache24, 工具, proxy sever]
---

# 🍂 Apache24 設定 log 大小

## 環境

- windows10 ~ 11
- [Apache24](https://www.apachehaus.com/cgi-bin/download.plx)

## 設定 log

### 限制每份 log 的大小

> 檔案: /Apache24/conf/httpd.conf

```xml
 <IfModule log_config_module>
    LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined

    # 使用rotatelogs限制日誌檔案大小
    CustomLog "|bin/rotatelogs ${SRVLOG}/access_log.%Y-%m-%d 10M" combined
</IfModule>
```
