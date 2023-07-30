---
sidebar_position: 5
description: 查詢所有Table筆數
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 查詢所有Table筆數

```sql
USE [DB] 
GO 
SELECT  O.NAME '資料表名稱', P.ROWS '總數' 
FROM SYS.OBJECTS O INNER JOIN SYS.SCHEMAS S 
ON O.SCHEMA_ID = S.SCHEMA_ID 
INNER JOIN SYS.PARTITIONS P 
ON O.OBJECT_ID = P.OBJECT_ID 
WHERE (O.TYPE = 'U') AND 
(P.INDEX_ID IN (0,1)) 
ORDER BY S.NAME, O.NAME ASC; 
GO
```
