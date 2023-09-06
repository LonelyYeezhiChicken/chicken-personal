---
sidebar_position: 30
description: 使用日期當條件進行查詢
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記]
---

# 👩‍💻 日期查詢

## 大於某個時間點

```sql
SELECT * FROM MY_TABLE
WHERE CREATE_TIME > TO_DATE('2023-08-09 16:32', 'YYYY-MM-DD HH24:MI');
```

## 兩個時間點之間

```sql
SELECT * FROM MY_TABLE
WHERE CREATE_TIME BETWEEN TO_DATE('2023-08-01', 'YYYY-MM-DD') 
      AND TO_DATE('2023-08-09', 'YYYY-MM-DD');
```
