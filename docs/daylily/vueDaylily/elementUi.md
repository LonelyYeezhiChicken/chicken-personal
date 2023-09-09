---
sidebar_position: 5
description: element ui plus 建置
key: [Vue, Vue雜記, element ui]
tags: [Vue, Vue雜記, element ui]
---

# 👩‍💻 element ui plus 建置

## 版本

- vue: 3.2.41
- vite: 3.2.0
- typescript: 4.6.4
- element-plus: 2.3.12

## 安裝

### 安裝 element-plus

```shell
yarn add element-plus
```

### 安裝套件

> unplugin-vue-components 和 unplugin-auto-import
>
> 可以在需要時在導入UI，降低專案的大小

```shell
yarn add unplugin-vue-components unplugin-auto-import
```

> 於 vite.config.ts 加入設定

```js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),]
})
```

### 加入到全域

```js
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from 'element-plus'
import router from "./router/index";
import App from "./App.vue";
import './style.css'

const app = createApp(App);

app.use(router).use(createPinia()).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount("#app");
```
