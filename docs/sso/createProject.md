---
sidebar_position: 15
description: SSO 建立專案
key: [sso, Single Sign-On, NestJS]
tags: [sso, Single Sign-On, NestJS]
---

# 🔐 SSO 建立專案

## 環境

- TS
- NestJS

## 建立專案

### 建立

```shell
nest new sso
```
  
```shell
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use?
```

### 選擇 yarn

```shell
? Which package manager would you ❤️  to use? yarn
CREATE sso/.eslintrc.js (663 bytes)
CREATE sso/.prettierrc (51 bytes)
CREATE sso/nest-cli.json (171 bytes)
CREATE sso/package.json (1934 bytes)
CREATE sso/README.md (3347 bytes)
CREATE sso/tsconfig.build.json (97 bytes)
CREATE sso/tsconfig.json (546 bytes)
CREATE sso/src/app.controller.spec.ts (617 bytes)
CREATE sso/src/app.controller.ts (274 bytes)
CREATE sso/src/app.module.ts (249 bytes)
CREATE sso/src/app.service.ts (142 bytes)
CREATE sso/src/main.ts (208 bytes)
CREATE sso/test/app.e2e-spec.ts (630 bytes)
CREATE sso/test/jest-e2e.json (183 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project sso
👉  Get started with the following commands:

$ cd sso
$ yarn run start
```

### 設定 port

> 於檔案 src/main.ts

```js {6}
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3050);
}
bootstrap();
```

### 啟動

> 根據說明的指令啟動

```shell
cd sso

yarn run start
```

```shell
$ nest start
[Nest] 81256  - 2023/09/07 下午10:28:15     LOG [NestFactory] Starting Nest application...
[Nest] 81256  - 2023/09/07 下午10:28:15     LOG [InstanceLoader] AppModule dependencies initialized +13ms
[Nest] 81256  - 2023/09/07 下午10:28:16     LOG [RoutesResolver] AppController {/}: +72ms
[Nest] 81256  - 2023/09/07 下午10:28:16     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 81256  - 2023/09/07 下午10:28:16     LOG [NestApplication] Nest application successfully started +3ms
```

[啟動後開啟網站](http://localhost:3050/)

> Hello World!

---

[github 連結](https://github.com/LonelyYeezhiChicken/SSO-v1)
