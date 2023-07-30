---
sidebar_position: 10
description: Spring Boot 安裝 Hibernate
key: [java, 雜記, Hibernate, Spring Boot]
tags: [java, java雜記, Hibernate, Spring Boot]
---

# 👩‍💻 Spring Boot 安裝 Hibernate

## Spring Boot 集成 Hibernate 的步驟如下

### 1. 在 pom.xml 文件中添加 Hibernate 依賴

```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.4.2.Final</version>
</dependency>
```

### 2. 在 application.properties 文件中添加 Hibernate 相關配置

```java
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
```

### 3. 在 Spring Boot 主類中添加 @EnableTransactionManagement 注解

```java
@SpringBootApplication
@EnableTransactionManagement
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 4. 在需要使用 Hibernate 的類中添加 @Transactional 注解

```java
@Service
public class UserService {
    @Transactional
    public void saveUser(User user) {
        // ...
    }
}
```
