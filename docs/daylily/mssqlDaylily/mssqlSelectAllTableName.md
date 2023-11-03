---
sidebar_position: 30
description: 查詢 Database 底下所有 Table
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 查詢所有 Table

## 查出所有 Table

```sql
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';
```

## 刪除所有 Table

```sql
DECLARE @table_schema varchar(100)
       ,@table_name varchar(100)
       ,@constraint_schema varchar(100)
       ,@constraint_name varchar(100)
       ,@cmd nvarchar(200)

DECLARE table_cursor CURSOR FOR
  select TABLE_SCHEMA, TABLE_NAME
    from INFORMATION_SCHEMA.TABLES
   where TABLE_NAME != 'sysdiagrams'
  
OPEN table_cursor
FETCH NEXT FROM table_cursor INTO @table_schema, @table_name
  
WHILE @@FETCH_STATUS = 0 
BEGIN
     SELECT @cmd = 'DROP TABLE [' + @table_schema + '].[' + @table_name + ']'
     --select @cmd
     EXEC sp_executesql @cmd
  
  
     FETCH NEXT FROM table_cursor INTO @table_schema, @table_name
END
  
CLOSE table_cursor 
DEALLOCATE table_cursor
```

:::caution
刪除前必須先 [移除所有 FK](https://blog.lychicken.com/docs/daylily/mssqlDaylily/mssqlFK#一次解除所有-fk)
:::

---

## REF

- [SQL Server 刪除資料庫中所有資料表](https://shunnien.github.io/2017/05/06/delete-all-database-table/)
