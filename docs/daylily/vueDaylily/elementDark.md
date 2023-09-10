---
sidebar_position: 10
description: element ui plus 暗黑模式
key: [Vue, Vue雜記, element ui]
tags: [Vue, Vue雜記, element ui]
---

# 👩‍💻 element ui plus 暗黑模式

## 版本

- vue: 3.2.41
- vite: 3.2.0
- typescript: 4.6.4
- element-plus: 2.3.12

## 安裝

### 先安裝 vueUse

> vueUse 類似 react 中的 hooks

```shell
yarn add @vueuse/core
```

### 加入開關

> 於 App.vue

```js
<script setup lang="ts">
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<template>
  <div>
    <button @click="toggleDark()">
      是否為暗黑模式: {{ isDark }}
    </button>
  </div>
  <main>
    <router-view />
  </main>
</template>
```

### 加入 css

> 於 style.css

```css
html.dark {
  /* 背景顏色 */
  --af-bg-color: #000000;
}
```

### 加入深色主題

```js {4}
import { createApp } from "vue";
import { createPinia } from "pinia";
import './style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

app.use(router).use(createPinia()).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount("#app");
```
