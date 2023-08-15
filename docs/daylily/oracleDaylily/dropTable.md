---
sidebar_position: 15
description: 使用 sqldeveloper 連接 Oracle
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記]
---

# 👩‍💻 刪除資料表

## 刪除

```sql
DROP TABLE [schema].[table];
```

## 完全刪除

> 使用 PURGE 完全刪除 table 無法進行 rollback

```sql
DROP TABLE [schema].[table] PURGE;
```

## 移除約束

> 如果 Table 有約束條件時，直接執行 DROP 會跳出錯誤
>
> 加了 CASCADE CONSTRAINTS 才能正常移除

```sql
DROP TABLE [schema].[table] CASCADE CONSTRAINTS;
```