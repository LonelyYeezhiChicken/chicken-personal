---
sidebar_position: 25
description: 增刪查詢 FK
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 增刪查詢 FK (Foreign Key)

## 查詢目前所有 Table 的 FK

```sql
SELECT 
    FK.name AS 'FK Name',
    t.name AS 'Table Name',
    c1.name AS 'FK List',
    t2.name AS 'FK Table',
    c2.name AS 'FK Table List'
FROM sys.foreign_keys FK
INNER JOIN sys.tables t
    ON FK.parent_object_id = t.object_id
INNER JOIN sys.tables t2
    ON FK.referenced_object_id = t2.object_id
INNER JOIN sys.foreign_key_columns fkc
    ON fkc.constraint_object_id = FK.object_id
INNER JOIN sys.columns c1
    ON fkc.parent_column_id = c1.column_id AND c1.object_id = t.object_id
INNER JOIN sys.columns c2
    ON fkc.referenced_column_id = c2.column_id AND c2.object_id = t2.object_id
GO
```

## 建立 FK

```sql
ALTER TABLE [dbo].[TableName]  WITH CHECK ADD  CONSTRAINT [FK_ForeignKeyName] FOREIGN KEY([TableKey])
REFERENCES [dbo].[FKTableName] ([FKTableNameId])
GO
```

## 刪除 FK

```sql
ALTER TABLE [dbo].[TableName] DROP CONSTRAINT [FK_ForeignKeyName]
GO
```
