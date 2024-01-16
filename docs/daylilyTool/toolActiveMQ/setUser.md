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

## Web 權限控管

### Web - 後台登入帳號資訊

- 檔案: /conf/jetty-realm.properties
- 規則: 帳號: 密碼, 角色

```shell
# Defines users that can access the web (console, demo, etc.)
# username: password [,rolename ...]

admin: [密碼], admin
user: [密碼], user
```

## Simple Authentication

> Client 端連線時需要使用的帳號密碼
>
> 設定完需重啟服務

### 簡單驗證 - 身分認證

- 檔案: /conf/activemq.xml

| 屬性 | 說明 |
|---|---|
|**username** | 使用者帳號 |
|**password** | 使用者密碼 |
|**groups** | 使用者所屬的群組 |

```xml
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}">
  <plugins>
    <simpleAuthenticationPlugin>
      <users>
        <authenticationUser username="admin" password="admin1pwd" groups="admins"/>
        <authenticationUser username="user" password="user-pw" groups="users"/>
      </users>
    </simpleAuthenticationPlugin>
  </plugins>
</broker>
```

### 簡單驗證 - 角色授權

- 檔案: /conf/activemq.xml

| 屬性 | 說明 |
|---|---|
|**topic** | 要授權的主題， `>` 表示所有 |
|**read** | 使用者密碼 |
|**groups** | 使用者所屬的群組 |

- 簡單驗證 - 授權所有 `Topic`

```xml
<!-- 授權所有 Topic -->
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}">
  <plugins>
    <simpleAuthenticationPlugin>
      <users>
        <authenticationUser username="admin" password="admin1pwd" groups="admins"/>
        <authenticationUser username="user" password="user-pw" groups="users"/>
      </users>
    </simpleAuthenticationPlugin>

    <authorizationPlugin>
      <map>
        <authorizationMap>
          <authorizationEntries>
            <authorizationEntry topic=">" read="users" write="users" admin="users, admins"/>

            <!-- 如果没有設定  topic=">"  需要設定以下內容
                <authorizationEntry topic="ActiveMQ.Advisory.>" read="guests, users" write="guests,users" admin="guests,users"/>
            -->
          </authorizationEntries>
        </authorizationMap>
      </map>
    </authorizationPlugin>
  </plugins>
</broker>
```

- 簡單驗證 - 授權 `Topic` 進行授權
- 需要特別設定 `ActiveMQ.Advisory.>` 讓服務使用

```xml
<!-- 授權所有 Topic -->
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}">
  <plugins>
    <simpleAuthenticationPlugin>
      <users>
        <authenticationUser username="admin" password="admin1pwd" groups="admins"/>
        <authenticationUser username="user" password="user-pw" groups="users"/>
      </users>
    </simpleAuthenticationPlugin>

    <authorizationPlugin>
      <map>
        <authorizationMap>
          <authorizationEntries>
            <authorizationEntry topic="MyTopic" read="users" write="users" admin="users, admins"/>
            <authorizationEntry topic="TestTopic" read="admins" write="users" admin="users, admins"/>
            <!-- 如果没有設定  topic=">"  需要設定以下內容 -->
             <authorizationEntry topic="ActiveMQ.Advisory.>" read="users, admins" write="anonymous, users, admins" admin="anonymous, users, admins"/>
          </authorizationEntries>
        </authorizationMap>
      </map>
    </authorizationPlugin>
  </plugins>
</broker>
```

:::caution
`topic="ActiveMQ.Advisory.>"` 這邊特地使用了 `anonymous`， 在 `5.4` 版之後，

簡單驗證提供了匿名訪問的功能，`anonymous` 則表示匿名的群組
:::

## JAAS Authentication

> JAAS 認證可以透過三份文件來設定
>
> 並且不需要重啟服務

### JAAS - 使用者設定

- 檔案: /conf/users.properties
- 儲存帳號與密碼
- 密碼至少要大於四位
- 規則: 帳號=密碼

```shell
## username=password
admin=admin
user1=pwd123
user2=pwd456
```

### JAAS - 角色群組

- 檔案: /conf/groups.properties
- 設定角色群組
- 規則: 群組名稱=帳號1,帳號2

```shell
## group-name=username1,username2
admins=admin,user1
users=user1,user2
```

### JAAS - 屬性設定

- 檔案: /conf/login.config

| 屬性 | 說明 |
|---|---|
|**debug** | 發生錯誤或例外時，可以看到詳細的錯誤訊息 |
|**reload** | 在修改 `users.properties`, `groups.properties` 後不需要重啟服務 |
|**org.apache.activemq.jaas.properties.user** | 指定使用 `users.properties` |
|**org.apache.activemq.jaas.properties.group** | 指定使用 `groups.properties` |

```java
activemq {
    org.apache.activemq.jaas.PropertiesLoginModule required
    debug=true
    reload=true
        org.apache.activemq.jaas.properties.user="users.properties"
        org.apache.activemq.jaas.properties.group="groups.properties";
};
```

### JAAS - 啟用 JAAS

- 檔案: /conf/activemq.xml

```xml
<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}">
  <plugins>
    <jaasAuthenticationPlugin configuration="activemq" />
    <authorizationPlugin>
      <map>
        <authorizationMap>
          <authorizationEntries>
            <authorizationEntry topic="TestTopic" read="users, admins" write="users, admins" admin="users, admins"/>
            <authorizationEntry topic="ActiveMQ.Advisory.>" read="users, admins" write="users, admins" admin="users, admins"/>
          </authorizationEntries>
        </authorizationMap>
      </map>
    </authorizationPlugin>
  </plugins>
</broker>
```

:::caution
此模式無法使用 `anonymous`
:::

## 關於 ActiveMQ 屬性

| 屬性            | 值（示例）                             | 描述                                                           |
|-----------------|----------------------------------------|----------------------------------------------------------------|
| `<authorizationEntry>` | -                                      | 定義授權規則的元素                                           |
| `topic`         | `>`                                    | 授權的主題，這裡是通配符，表示所有主題                     |
| `read`          | `mb`                                   | 對該主題的讀取權限，`mb` 角色具有讀取權限                   |
| `write`         | `users`                                | 對該主題的寫入權限，`users` 角色具有寫入權限               |
| `admin`         | `admins,users,mb`                      | 對該主題的管理權限，`admins`、`users` 和 `mb` 角色都有管理權限|
