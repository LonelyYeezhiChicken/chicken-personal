---
sidebar_position: 35
description: 使用 Maven 打包 spring boot
key: [java, 雜記, Spring Boot]
tags: [java, java雜記, Maven, Spring Boot]
---

# 👩‍💻 使用 Maven 打包 spring boot

- pom.xml 中指定 application.properties

```xml
  <!--開發環境-->
  <profile>
   <id>dev</id>
   <activation>
    <!--默認開啟開發環境-->
    <activeByDefault>true</activeByDefault>
   </activation>
   <properties>
    <!--profile.active對應application.properties中的@profile.active@-->
    <profile.active>dev</profile.active>
   </properties>
  </profile>
  <!--測試環境-->
  <profile>
   <!--不同環境的唯一id-->
   <id>test</id>
   <properties>
    <profile.active>test</profile.active>
   </properties>
  </profile>
  <!--正式環境-->
  <profile>
   <id>prod</id>
   <properties>
    <profile.active>prod</profile.active>
   </properties>
  </profile>
 </profiles>
```

- 指令

```shell
mvn clean package -P [指定的設定檔]
```
