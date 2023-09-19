---
sidebar_position: 5
description: Composition API 生命週期
key: [Vue, Vue雜記, Composition API]
tags: [Vue, Vue雜記, Composition API]
---

# 👩‍💻 生命週期

## 關於

> 當談到 Vue.js 的 Composition API 生命週期時，我們需要理解在使用 Composition API 時，如何管理組件的生命週期事件，
>
> Composition API 是 Vue 3 中引入的一個新的 API，它允許我們更靈活地組織和重用代碼，但它的生命週期管理方式與以前的選項 API 有所不同

## 生命週期

### 起始點

> 程式的進入點會從 `setup` 開始執行

```js
export default {
  setup() {
    return {};
  },
};
```

### props

> 在 Composition API 中，可以使用 props 開始處理從父級組件 (上層組件) 傳遞過來的屬性，
>
> 這是通過 setup 函數的第一個參數來實現的
>
> 例如，如果組件接收一個名為 title 的 prop

```js
export default {
  props: {
    title: String,
  },
  setup(props) {
    // 進行解構
    const {title} = props;

    return {
      title
    };
  },
};
```

### data 與 ref

> Composition API 引入了 ref 函數，用於創建具有響應式能力的數據
>
> 可以將 ref 函數用於組件內部的數據

```js
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    // 在模板中使用 count.value 來訪問數據
    return {
      count,
    };
  },
};
```
