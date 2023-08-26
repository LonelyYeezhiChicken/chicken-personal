---
sidebar_position: 20
description: Spring Boot 簡介
key: [java, Spring Cloud, Microservices, 微服務, Spring Boot, unit test]
tags: [java, Spring Cloud, Microservices, Spring Boot, unit test]
---

# 🌤️ 進行單元測試

## 實作

- 建立檔案 `src/test/java/demoControllerTest.java`

```java
package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class demoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testIndexEndpoint() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/Hi").accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Hi Hi"));
    }
}
```

## 單元測試範本

[github 連結](https://github.com/LonelyYeezhiChicken/spring-boot-demo/tree/unitTest)
