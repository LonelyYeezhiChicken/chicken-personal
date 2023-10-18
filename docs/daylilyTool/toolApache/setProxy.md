---
sidebar_position: 10
description: Apache24 設定 proxy
key: [Apache24, tool, windows, proxy sever]
tags: [Apache24, 工具, proxy sever]
---

# 🍂 Apache24 設定 proxy

## 環境

- windows10 ~ 11
- [Apache24](https://www.apachehaus.com/cgi-bin/download.plx)

## 設定 proxy

> 檔案: /Apache24/conf/httpd.conf

### 啟用模組

```xml
 LoadModule proxy_module modules/mod_proxy.so
 LoadModule proxy_http_module modules/mod_proxy_http.so
```

### 引用設定檔

```xml
 Include conf/extra/httpd-vhosts.conf
```

## proxy 規則

> 檔案: /Apache24/conf/extra/httpd-vhosts.conf

### httpd-vhosts 範例

> 如果外部透過 `443 port` 會將他轉到 `localhost:8080`
>
> 如果外部透過 `443 port` 會將他轉到 `https://blog.lychicken.com/`

```xml
<VirtualHost *:443>
    ServerName blog.lychicken.com

    ProxyRequests off  
    ProxyPreserveHost on  
    ProxyPass /chicken http://localhost:8080/chicken flushpackets=on keepalive=on
    ProxyPassReverse /chicken http://localhost:8080/chicken
</VirtualHost> 


<VirtualHost *:80>
        ServerName blog.lychicken.com
        Redirect permanent / https://blog.lychicken.com/
</VirtualHost>
```

## proxy log

> 檔案: /Apache24/conf/httpd.conf

### 修改 log 等級

```xml
 LogLevel warn
```
