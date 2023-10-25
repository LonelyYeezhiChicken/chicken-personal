---
sidebar_position: 35
description: 建立 tablespace
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記]
---

# 👩‍💻 建立 tablespace

## 檢查 table space 是否存在

```sql
SELECT [tablespace_name] FROM dba_tablespaces WHERE tablespace_name = '[tablespace name]';
```

## 新增 table space

```sql
CREATE TABLESPACE tablespace_name  DATAFILE 'path_to_datafile.dbf' SIZE 100M;
```
