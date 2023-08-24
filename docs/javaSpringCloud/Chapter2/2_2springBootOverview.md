---
sidebar_position: 10
description: Spring Boot 簡介
key: [java, Spring Cloud, Microservices, 微服務, Spring Boot]
tags: [java, Spring Cloud, Microservices, Spring Boot]
---

# 🌤️ Spring Boot 簡介

## 關於

> Spring Cloud 是基於 Spring Boot 延伸出來的微服務架構

## Spring 框架的問題與 Spring Boot 的優勢

### Spring 框架對初學者和老手的問題

- 初學者因繁雜的設定而望而卻步
- 老手每次新建專案都需要重複複製貼上一些相似的設定

### 解決問題的方法

- 利用建構工具（如 Maven）建立腳手架專案，初始化標準專案，簡化設定流程

### Spring Boot的優勢

- 自動化設定簡化樣板化設定
- Starter POMs 集成功能，簡化依賴管理
- 支援內嵌的 Tomcat、Jetty 等容器，輕鬆建構與部署
- 適合容器化，可整合 Docker

### 開發優勢

- 使用 Groovy、Gradle 等工具開發 Spring Boot 應用程式
- 簡潔範例：透過編譯、打包、java -jar 命令啟動 RESTful API

> Spring Boot 的出現有效簡化了 Spring 框架的設定與開發，透過自動化設定、Starter POMs、內嵌式容器等特性，使建構、部署和開發流程更加高效輕便

## 快速入門

### 環境安裝

[Java 安裝文章連結](https://blog.lychicken.com/docs/daylily/javaDaylily/setJava)

### 專案建立

透過 [Spring Initializr](https://start.spring.io/) 來建立專案

1. 選擇 `Maven`
2. `Java`
3. 選擇 Spring Boot 版本
4. 設定命名
5. 選擇 `jar`
6. 選擇 Java 版本
7. 加入`Spring Web` 模組
8. 最後匯出專案
9. 解壓縮專案，並且使用終端機輸入 `code .`
10. 使用 `vs code` 開啟專案

### 專案說明

> 整個專案的主程式為 `src/main/java/DemoApplication.java`

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}

```

> 專案的設定檔與靜態資源檔則會放在 `src/main/resources`
>
> 單元測試檔案則會放在 `src/test/`
>
> Maven 的設定檔則是 `pom.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.1.3</version>
		<relativePath/> <!-- lookup parent from repository -->
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

---
### 建立專案範本

[github 連結](https://github.com/LonelyYeezhiChicken/spring-boot-demo/tree/Init)
