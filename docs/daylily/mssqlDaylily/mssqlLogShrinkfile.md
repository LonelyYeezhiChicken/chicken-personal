---
sidebar_position: 45
description: 壓縮 log
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 壓縮 log

## 1. 備份交易日誌

在完整恢復模式或大量記錄恢復模式下，可以使用以下命令備份交易日誌：

```sql
BACKUP LOG [資料庫名稱] TO DISK = 'C:\backup\Log.bak' WITH COMPRESSION;
```

## 2. 設定恢復模式為簡單

如果不需要進行交易日誌備份，可以將資料庫的恢復模式設定為簡單，以自動管理日誌空間：

```sql
ALTER DATABASE [資料庫名稱] SET RECOVERY SIMPLE;
```

## 3. 收縮日誌檔案

在簡單恢復模式下，可以使用以下命令收縮日誌檔案以釋放未使用的空間：

```sql
DBCC SHRINKFILE ([資料庫名稱_log], 1000);
```

## 4. 檢查開啟的交易

使用以下命令檢查是否有開啟的交易：

```sql
DBCC OPENTRAN;
```

## 5. 強制日誌清理

使用 `CHECKPOINT` 命令強制 SQL Server 清理日誌檔案中的不必要記錄：

```sql
CHECKPOINT;
```

## 6. 查看日誌檔案資訊

使用 `DBCC LOGINFO` 命令查看日誌檔案中的虛擬日誌檔案 (VLF) 資訊：

```sql
DBCC LOGINFO;
```

:::caution
請根據實際需要選擇和使用上述指令

在進行重要操作之前，建議先進行資料庫備份以確保資料安全
:::
