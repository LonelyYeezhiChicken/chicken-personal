---
sidebar_position: 25
description: 使用 sqldeveloper 連接 Oracle
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記]
---

# 👩‍💻 資料表授權

## 說明

將資料表授權給某個使用者，可由此指令進行

## 流程

### 1. 授權

> 此處將 Order 資料表授權給 AP_User 使用

```sql
GRANT SELECT ON  [schema].Order TO AP_User;
```

### 2. 確認

> 使用 AP_User 進行連線，確認是否可以連線成功

```sql
SELECT * FROM [schema].Order
```
