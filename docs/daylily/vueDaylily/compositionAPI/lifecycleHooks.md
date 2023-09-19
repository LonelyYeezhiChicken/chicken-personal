---
sidebar_position: 10
description: 生命週期 Hooks（Lifecycle Hooks）
key: [Vue, Vue雜記, Composition API]
tags: [Vue, Vue雜記, Composition API]
---

# 👩‍💻 Lifecycle Hooks

## 生命週期 Hooks（Lifecycle Hooks）

> 在 Composition API 中，我們可以使用 onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount 等生命週期鉤子，來執行組件生命週期中的操作
>
> 這些鉤子允許我們在不同階段的生命週期中添加自定義邏輯

## 常見的 Lifecycle Hooks

- onBeforeMount：在組件即將被掛載到 DOM 前執行
- onMounted：在組件被掛載到 DOM 後執行
- onBeforeUpdate：在組件即將更新前執行
- onUpdated：在組件更新完成後執行
- onBeforeUnmount：在組件即將被卸載前執行

這些生命週期鉤子可以通過 import 的方式引入，然後在組件中使用

```js
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      // 在組件即將被掛載到 DOM 前執行的邏輯
    });

    onMounted(() => {
      // 在組件被掛載到 DOM 後執行的邏輯
    });

    onBeforeUpdate(() => {
      // 在組件即將更新前執行的邏輯
    });

    onUpdated(() => {
      // 在組件更新完成後執行的邏輯
    });

    onBeforeUnmount(() => {
      // 在組件即將被卸載前執行的邏輯
    });

    // 其他 Composition API 邏輯

    return {};
  },
};
```
