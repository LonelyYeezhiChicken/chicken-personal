---
sidebar_position: 15
description: Spring Boot  Hibernate 連接 MSSQL
key: [java, 雜記, Hibernate, Spring Boot, MSSQL]
tags: [java, java雜記, Hibernate, Spring Boot, MSSQL]
---

# 👩‍💻 Spring Boot  Hibernate 連接 MSSQL

以下是使用 Spring Boot 連接 MSSQL 的範例：


### 1. 在 pom.xml 中添加 MSSQL 驅動程序的依賴：
```java
<dependency>
    <groupId>com.microsoft.sqlserver</groupId>
    <artifactId>mssql-jdbc</artifactId>
    <version>7.4.1.jre8</version>
</dependency>
```

### 2. 在 application.properties 中添加 MSSQL 連接屬性：
```java
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=mydb
spring.datasource.username=username
spring.datasource.password=password
spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver
```

### 3. 在 application.properties 中添加 Hibernate 屬性：
```java
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServer2012Dialect
```

### 4. 在配置類中添加 @EnableTransactionManagement 注釋：
```java
@Configuration
@EnableTransactionManagement
public class DatabaseConfig {
    // ...
}
```

### 5. 在配置類中添加 EntityManagerFactory 和 TransactionManager 的 Bean：
```java

@Bean
public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
    LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
    em.setDataSource(dataSource());
    em.setPackagesToScan(new String[] { "com.example.domain" });
    JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
    em.setJpaVendorAdapter(vendorAdapter);
    em.setJpaProperties(additionalProperties());
    return em;
}
@Bean
public DataSource dataSource(){
    DriverManagerDataSource dataSource = new DriverManagerDataSource();
    dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
    dataSource.setUrl("jdbc:sqlserver://localhost:1433;databaseName=mydb");
    dataSource.setUsername( "username" );
    dataSource.setPassword( "password" );
    return dataSource;
}
@Bean
public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
    JpaTransactionManager transactionManager = new JpaTransactionManager();
    transactionManager.setEntityManagerFactory(emf);
    return transactionManager;
}
Properties additionalProperties() {
    Properties propertie
}
```
