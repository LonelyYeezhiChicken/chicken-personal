---
sidebar_position: 25
description: Config 設定
key: [java, Spring Cloud, Microservices, 微服務, Spring Boot]
tags: [java, Spring Cloud, Microservices, Spring Boot]
---

# 🌤️ Config 設定

## Spring Boot vs Spring

> 在 Spring Boot 底下，不需要引入其他設定，只需要引入 `Maven` ，
>
> 雖然與傳統 Spring 一樣，都需要實作 `Controller`，
>
> 但在設定 Spring Boot 都是自動化的設定，除非有其他特殊的場景，
>
> 才需要手動設定 (EX: 8080 port 與其他網站衝突時，我們就必須手動修改)，
>
> 修改 Port 可參考 [此篇](https://blog.lychicken.com/docs/daylily/javaDaylily/javaStartPort)

## 設定文件

### 文件位置

```test
src/main/resources 
```

### 預設設定文件

```text
application.properties
```

### 設定服務名稱

- 開啟 `src/main/resources/application.properties`

```shell
spring.application.name=hello
```

### 使用 Yaml

- spring boot 的設定也可以使用 Yaml 格式
- 以下是 Yaml 與傳統 properties 比較

> Yaml

```yaml
environments: 
    dev: 
        url: http://test.com 
        name: Developer Setup 
    prod: 
        url: http://demo.com 
        name: My Demo App
```

> properties

```shell
environments.dev.url=http://test.com
environments.dev.name=Developer Setup 
environments.prod.url=http://demo.com 
environments.prod.name=My Demo App
```

### 多環境設定

> 可以根據不同的設定檔，來切換環境
>
> 以下設定會籲社會讀取開發環境

- application-dev.properties: 開發環境
- application-test.properties: 測試環境
- application-prod.properties: 正式環境

> 如果要執行 jar 並且切換設定時

- ex: 測試環境

```shell
java -jar [jar name].jar --application-test.properties=test
```

## 關於設定檔的載入順序

1. **命令行參數：** 首先，您可以通過命令行傳入參數，這些參數會影響配置。

2. **SPRING_APPLICATION_JSON 屬性：** 如果您在系統環境變數中以 JSON 格式設定了 SPRING_APPLICATION_JSON 屬性，Spring Boot 將從中讀取設定。

3. **java:comp/env 的 JNDI 屬性：** 您可以獲取位於 java:comp/env 環境下的 JNDI 屬性。

4. **Java 系統屬性：** 您可以透過 `System.getProperties()` 方法獲取 Java 系統屬性。

5. **作業系統環境變數：** 系統環境變數也可能影響配置設定。

6. **隨機屬性設定：** 如果您透過 random.* 設定了隨機屬性，這些設定也會被納入考慮。

7. **外部配置文件（針對特定環境）：** 對於特定的 {profile} 環境，您可以在應用 JAR 包外部準備配置文件，例如 app-{profile}.properties 或使用 YAML 格式的文件。

8. **內部配置文件（針對特定環境）：** 同樣地，對於特定的 {profile} 環境，您也可以在應用 JAR 包內部設置配置文件，例如 app-{profile}.properties 或使用 YAML 定義的文件。

9. **外部的 application.properties 和 YAML 配置：** 若這些配置位於應用 JAR 包的外部。

10. **內部的 application.properties 和 YAML 配置：** 若這些配置位於應用 JAR 包的內部。

11. **@Configuration 標記的類中的 @PropertySource 屬性：** 在被 @Configuration 標記的類中，您可以透過 @PropertySource 注解定義屬性。

12. **應用默認屬性：** 最後，使用 SpringApplication.setDefaultProperties 定義的應用默認屬性。
