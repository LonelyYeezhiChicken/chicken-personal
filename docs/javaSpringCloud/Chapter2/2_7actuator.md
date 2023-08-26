---
sidebar_position: 35
description: Spring boot actuator
key: [java, Spring Cloud, Microservices, 微服務, Spring Boot, actuator]
tags: [java, Spring Cloud, Microservices, Spring Boot]
---

# 🌤️ Spring boot actuator

## 說明

> Spring Boot 有提供一個模組 `spring-boot－starter-actuator` ，
>
> 他可以大幅的節省，開發監控系統的時間

## 實作

### 導入模組

- 於 `pom.xml` 導入此模組

```xml {31-35}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.1.3</version>
		<relativePath/>
		<!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>
	</dependencies>
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>
```

### 啟動程式

- 在網址列輸入 `http://localhost:8080/actuator/health`
- 可以看到

```json
{
    "status": "UP"
}
```

---

## actuator 範本

[github 連結](https://github.com/LonelyYeezhiChicken/spring-boot-demo/tree/actuator)
