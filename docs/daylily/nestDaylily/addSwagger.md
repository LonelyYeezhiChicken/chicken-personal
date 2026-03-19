---
sidebar_position: 25
description: NestJS 安裝 Swagger
key: [NestJS, Node, TypeScript, Swagger]
tags: [NestJS, Node, TypeScript, Swagger]
---

# 👩‍💻 安裝 Swagger

## 步驟

### 安裝

```shell
pnpm install --save @nestjs/swagger
```

### Bootstrap 設定

```js
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; //swagger
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 // [B] swagger
  const config = new DocumentBuilder()
    .setTitle('Car API')
    .setDescription('The Car API description')
    .setVersion('1.0')
    .addTag('Car')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
 // [E] swagger
  await app.listen(3050);
}
bootstrap();
```

### 啟動

```shell
pnpm start
```

> [http://localhost:3050/api](http://localhost:3050/api)
