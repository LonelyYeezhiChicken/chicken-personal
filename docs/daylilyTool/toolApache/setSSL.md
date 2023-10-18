---
sidebar_position: 15
description: Apache24 設定 SSL
key: [Apache24, tool, windows, proxy sever]
tags: [Apache24, 工具, proxy sever]
---

# 🍂 Apache24 設定 SSL

## 環境

- windows10 ~ 11
- [Apache24](https://www.apachehaus.com/cgi-bin/download.plx)

## 設定 SSL

> 檔案: /Apache24/conf/httpd.conf

### 啟用模組

```xml
 LoadModule ssl_module modules/mod_ssl.so
 LoadModule socache_shmcb_module modules/mod_socache_shmcb.so
```

### 引用設定檔

```xml
 Include conf/extra/httpd-ssl.conf
```

### 建立目錄

> /Apache24/pki

### 放入憑證

- 總共有三個檔案
  - STAR_lychicken_com.crt
  - lychicken.key
  - STAR_lychicken_com.ca-bundle

## SSL 規則

> 檔案: conf/extra/httpd-ssl.conf

### 修改憑證路徑

```xml
 SSLCertificateFile "${SRVROOT}/pki/STAR_lychicken_com.crt"
 SSLCertificateKeyFile "${SRVROOT}/pki/lychicken.key"
 SSLCertificateChainFile "${SRVROOT}/pki/STAR_lychicken_com.ca-bundle
```

### 新增 https 規則

```xml
Listen 443 https

 SSLCipherSuite HIGH:MEDIUM:!aNULL:!MD5:!SEED:!IDEA
 SSLProxyCipherSuite HIGH:MEDIUM:!aNULL:!MD5:!SEED:!IDEA
 SSLProtocol all -SSLv2 -SSLv3
 # SSLProxyProtocol all -SSLv3
```
