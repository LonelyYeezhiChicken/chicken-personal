---
sidebar_position: 1
description: 設定 Proxy
key: [Linux, 雜記, Proxy]
tags: [Linux, Linux雜記]
---

# 👩‍💻 設定 Proxy
### 登入主機

```shell
ssh [username]@IP
[password]
```


### 查看目錄

```shell
ls -i

ls -ial
```


### 進入/etc/httpd/conf.d

```shell
cd /etc/httpd/conf.d
```


### 備份檔案vhost

```shell
sudo cp vhosts.conf vhost.conf.[datetime]
```




### 開始編輯檔案內容 - 使用 vim 編輯器

```shell
sudo vim vhosts.conf
```


### 內容

- [外網port] : 80(http), 443(https)
```shell
<VirtualHost *:[外網port]> 
    ServerName [proxy] 
    # Redirect permanent / [proxy]
        ProxyRequests off 
        ProxyPreserveHost on 
        ProxyPass / http://[內網IP]:[內網Port]/ flushpackets=on keepalive=on 
        ProxyPassReverse / http://[內網IP]:[內網Port]/ 
</VirtualHost>
```


### vim指令

1. 複製多行 (nyy)
	- 在命令模式下使用
	- 複製單行則使用(yy)
	- n為行數
	- 從游標開始往下數n行
	- ex: 5yy -> 從游標往下複製5行
```shell
nyy

yy
```

2. 貼上(p)
	- 在命令模式下使用
	- 將游標移動到要貼上的位置
```shell
p
```

3. 切換編輯模式
	- 進入->  i
	- 離開 -> esc
4. 存檔
	- :w
5. 離開
	- 存檔並離開 -> :wq
	- 不存檔離開 -> :!q
	- 無修改離開 > :q 


### 重啟阿帕契

```shell
sudo systemctl restart httpd
```