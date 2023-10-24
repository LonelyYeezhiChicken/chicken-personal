---
sidebar_position: 20
description: ActiveMQ 權限控管 
key: [ActiveMQ, tool, windows, Message Queue]
tags: [ActiveMQ, 工具, Message Queue]
---

# 🧣 ActiveMQ 權限控管

## 環境

- windows10 ~ 11 (win64)
- [ActiveMQ 5.16.6](https://activemq.apache.org/activemq-5016006-release) (注意版本與 JDK 的相容性)
- [JDK 1.8](https://blog.lychicken.com/docs/daylilyTool/toolScoop/setJdk)

## 權限控管

### Web 登入帳號資訊

- 檔案: /conf/jetty-realm.properties
- 規則: 帳號: 密碼, 角色

```shell
# Defines users that can access the web (console, demo, etc.)
# username: password [,rolename ...]

admin: [密碼], admin
user: [密碼], user
```

## JAAS身分驗證

### 使用者設定

- 檔案: /conf/users.properties
- 儲存帳號與密碼
- 密碼至少要大於四位
- 規則: 帳號=密碼

```xml
admin=admin
user1=pwd123
```

### 角色群組

- 檔案: /conf/groups.properties
- 設定角色群組
- 規則: 群組名稱=帳號1,帳號2

```xml
admin=admin,user1
```

> 修改完不需重啟

## 登入 log

- 檔案: /conf/login.config
- 指定使用 `users.properties`, `groups.properties`

```java
activemq {
    org.apache.activemq.jaas.PropertiesLoginModule required
        org.apache.activemq.jaas.properties.user="users.properties"
        org.apache.activemq.jaas.properties.group="groups.properties";
};
```
