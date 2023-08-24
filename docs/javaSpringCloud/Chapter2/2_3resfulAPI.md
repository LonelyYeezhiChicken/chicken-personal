---
sidebar_position: 15
description: Spring Boot 簡介
key: [java, Spring Cloud, Microservices, 微服務, Spring Boot]
tags: [java, Spring Cloud, Microservices, Spring Boot]
---

# 🌤️ 建立 RESTful API

- 建立檔案 `src/main/java/demoController.java`

```java
package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demoController {

    @RequestMapping("/Hi")
    public String index() {
        return "Hi Hi";
    }
}
```

- 在瀏覽器輸入以下網址

```text
http://localhost:8080/Hi
```

- 結果

> Hi Hi

---

### 建立 controller 範本

[github 連結](https://github.com/LonelyYeezhiChicken/spring-boot-demo/tree/controller)
