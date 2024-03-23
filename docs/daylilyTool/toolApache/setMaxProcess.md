---
sidebar_position: 30
description: Apache24 設定process上限
key: [Apache24, tool, windows, proxy sever]
tags: [Apache24, 工具, proxy sever]
---

# 🍂 Apache24 設定 process

## 環境

- windows10 ~ 11
- [Apache24](https://www.apachehaus.com/cgi-bin/download.plx)
- mpm_winnt

## 設定 process

### 1. 確認環境使用的設定

- 使用終端機查詢

```shell
httpd -l
```

- 結果

```text {4}
Compiled in modules:
  core.c
  mod_win32.c
  mpm_winnt.c
  http_core.c
  mod_so.c
```

> 這邊是使用 `mpm_winnt.c`

### 2. 進行設定

> 檔案: /Apache24/conf/extra/httpd-mpm.conf

```shell
# WinNT MPM
# ThreadsPerChild: constant number of worker threads in the server process
# MaxConnectionsPerChild: maximum number of connections a server process serves
<IfModule mpm_winnt_module>
    ThreadsPerChild        300
    MaxConnectionsPerChild   0
</IfModule>
```

> 建議上限為 `150 ~ 1000`
