---
sidebar_position: 40
description: 建立 user
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記]
---

# 👩‍💻 建立 user

## 查詢使用者

```sql
SELECT * FROM all_users WHERE username = 'user';
```

## 建立使用者

```sql
CREATE USER user IDENTIFIED BY [user password];
```

## 授權使用者

```sql
GRANT CREATE TABLE TO user;
```
