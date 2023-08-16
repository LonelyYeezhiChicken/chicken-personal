---
sidebar_position: 15
description: 使用 sqlcmd 匯入 sql 指令
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 使用 sqlcmd 匯入 sql 指令

## 說明

> 如果 sql 指令內容過多時，使用 SSMS 執行會跑出 `記憶體不足` 的錯誤訊息
>
> 這時候可以使用 sqlcmd 來解決此問題

## 流程

### 1. 建立新的 Database

- 可使用 SSMS 建立
- ⚠️ Database 需與 sqlcmd 中的 `USE [DataBase]` 相同

### 2. 執行指令

```sql
sqlcmd -S [Server Name] -U [User Name] -P [Password] -d [DataBase Name] -i [C:\<filePath>\script.sql]
```
