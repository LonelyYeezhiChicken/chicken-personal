---
sidebar_position: 10
description: 使用 sqldeveloper 連接 Oracle
key: [Oracle, 雜記]
tags: [Oracle, MSSQL雜記]
---

# 👩‍💻 使用 sqldeveloper 連接

## 下載與預先準備

### SQL Developer

[連結](https://www.oracle.com/database/sqldeveloper/technologies/download/)

### oracle11g

[安裝步驟](https://blog.lychicken.com/docs/daylily/oracleDaylily/setIndocker)

## 連線

### 1. 新增連線

- 點選 UI 左側選單的 `+`
- 填寫以下資訊

> Name: oracle11g-docker (可自行定義)
>
> 使用者名稱: system
>
> 使用者密碼: ****
>
> 主機名稱: localhost (或是其他主機ID)
>
> 連接埠: 1521
>
> SID: xe

### 2. 測試連線

點選測試按鈕

畫面顯示連線成功即可

### 3. 連線

點選連線按鈕

即可連上資料庫

---

ref: [Docker中安装Oracle-12c](https://zhuanlan.zhihu.com/p/605595017)
