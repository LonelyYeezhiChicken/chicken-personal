---
sidebar_position: 10
description: 查詢所有Table筆數
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 查詢所有index


```sql
SELECT
    TableName = t.name,
    IndexName = ind.name,
    IndexType = CASE ind.index_id WHEN 1 THEN 'Clustered' ELSE 'Nonclustered' END,
    ColumnName = col.name
FROM
    sys.indexes ind
INNER JOIN
    sys.index_columns ic ON ind.object_id = ic.object_id and ind.index_id = ic.index_id
INNER JOIN
    sys.columns col ON ic.object_id = col.object_id and ic.column_id = col.column_id
INNER JOIN
    sys.tables t ON ind.object_id = t.object_id
WHERE
    ind.is_primary_key = 0
    AND ind.is_unique = 0
    AND ind.is_unique_constraint = 0
ORDER BY
    t.name, ind.name, ind.index_id, ic.key_ordinal;
```
