---
sidebar_position: 35
description: 更換欄位型別
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 更換欄位型別

## 修改欄位為 nvarchar

```sql
ALTER TABLE [Table]
ALTER COLUMN [欄位名稱] nvarchar(50);
```
