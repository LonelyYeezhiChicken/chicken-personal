---
sidebar_position: 20
description: 使用 sqldeveloper 連接 Oracle
key: [Oracle, 雜記]
tags: [Oracle, Oracle雜記]
---

# 👩‍💻 Insert Into

## 說明

如果需要將某個資料表格，從 schemaA 抄寫到 schemaB ，就可用到這個語法

## 流程

### 1. 於 schemaB 建立表格

- 需要建立一張與 schemaA 一模一樣的表格
- 此處以 User 為例

```sql
create table User
(
  NAME         VARCHAR(10),
  LM_USER      VARCHAR(10),
  LM_TIME      TIMESTAMP
)
tablespace schemaB_T
```

### 2. 進行抄寫

```sql
insert into schemaB.User
  (select * from schemaA.User);
```
