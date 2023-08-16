---
sidebar_position: 20
description: 使用 CAST 或 CONVERT 轉型
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 字串轉型

## 說明

> 在資料庫欄位中，如果想要做 `SUM()` ，但資料型別是 `nvarchar` 等等字串型別，
>
> 執行加總時會有錯誤訊息

## 解決辦法

> 情境: 訂單中想要加總訂單金額，
>
> 訂單金額卻被定義成 `nvarchar`

### 1. 使用 CAST

```sql
SELECT SUM( CAST ( [TotalAmount] AS int)) AS [總額]
    FROM [dbo].[OrdersMain]
```

- 結果

|總額|
|---|
|100|

### 2. 使用 CONVERT

```sql
SELECT SUM( CONVERT(int ,[TotalAmount])) AS [總額]
    FROM [dbo].[OrdersMain]
```

- 結果

|總額|
|---|
|100|
