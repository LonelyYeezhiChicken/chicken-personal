---
sidebar_position: 1
description: 查詢占用硬碟
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 查詢占用硬碟


```sql
-- 檢視目前資料庫所用的空間，但不一定能反映實際可用的磁碟空間。 
EXEC sp_spaceused 
GO 
-- 要求掃描資料庫中的全部的資料頁後，再檢視目前資料庫所用的空間 
EXEC sp_spaceused @updateusage = N'TRUE'; 
GO
```



```sql
SET NOCOUNT ON 
DECLARE @tDBSize TABLE 
(DBName SYSNAME DEFAULT(DB_NAME()), 
Fileid INT, FileGroup INT, TotalExtents INT, 
UsedExtents INT, Name SYSNAME, FileName NVARCHAR(4000))  
INSERT @tDBSize(Fileid,FileGroup,TotalExtents,UsedExtents,Name,FileName) 
EXEC ('DBCC showfilestats') 
SELECT DBName N'資料庫',Name N'資料檔案', 
TotalExtents*64.0/1024 N'資料檔案使用硬碟空間(MB)', 
UsedExtents*64.0/1024 N'資料實際使用空間(MB)', FileName N'實體檔案路徑' 
FROM @tDBSize 
GO
```