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

## 一次解除所有 FK

```sql
SELECT
    'IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N''' + DC.Name + ''') and Type = ''D'')
            ALTER TABLE [' + OBJECT_SCHEMA_NAME(SO.ID) + '].[' + SO.Name + '] DROP CONSTRAINT [' + DC.Name + ']'
FROM SysObjects SO
INNER JOIN SysColumns SC
    ON SO.ID = SC.ID
INNER JOIN sys.default_constraints DC
    ON SO.ID = DC.Parent_object_id
        AND SC.colid = DC.Parent_column_id
WHERE SO.XTYPE = 'U'
AND SC.Name = 'msrepl_tran_version'
UNION
SELECT
    'IF EXISTS (SELECT * FROM dbo.syscolumns where id = OBJECT_ID(N''' + SO.Name + ''') and Name = ''msrepl_tran_version'')
           ALTER TABLE [' + OBJECT_SCHEMA_NAME(SO.ID) + '].[' + SO.Name + '] DROP COLUMN [msrepl_tran_version]  '
FROM SysObjects SO
INNER JOIN SysColumns SC
    ON SO.ID = SC.ID
INNER JOIN sys.default_constraints DC
    ON SO.ID = DC.Parent_object_id
        AND SC.colid = DC.Parent_column_id
WHERE SO.XTYPE = 'U'
AND SC.Name = 'msrepl_tran_version'
ORDER BY 1
```

---

## REF

- [SQL Server 中，移除資料庫中所有的關聯限制](https://shunnien.github.io/2017/05/06/remove-database-relationship-constraint/)
