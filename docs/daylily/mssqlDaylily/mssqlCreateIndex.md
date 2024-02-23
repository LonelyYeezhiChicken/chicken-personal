---
sidebar_position: 40
description: 建立 Index
key: [MSSQL, 雜記]
tags: [MSSQL, MSSQL雜記]
---

# 👩‍💻 建立 Index

## 為 OrderNumber 建立 Index

- Orders 為 Table Name
- OrderNumber 為 Orders 的其中一個欄位
- IDX_OrderNumber 是 Index 的命名

```sql
CREATE INDEX IDX_OrderNumber ON Orders(OrderNumber);
```
