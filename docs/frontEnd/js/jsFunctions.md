---
sidebar_position: 3
description: JavaScript 函式：參數、回傳值與箭頭函式
key: [JavaScript, 函式, function]
tags: [前端, JavaScript, 入門]
---

# 函式

> 把重複的邏輯包成函式，需要時呼叫一次，程式更好讀、更好改。

## 你會用到什麼

- [變數與流程](./jsBasics.md)

## 步驟 1：宣告與呼叫

```javascript
function sayHello() {
  console.log("你好！");
}

sayHello();
sayHello();
```

## 步驟 2：參數

```javascript
function greet(name) {
  console.log("你好，" + name);
}

greet("小明");
greet("小華");
```

## 步驟 3：回傳值 return

```javascript
function add(a, b) {
  return a + b;
}

const sum = add(3, 5);
console.log(sum); // 8
```

`return` 之後的程式不會再執行。

## 步驟 4：箭頭函式（簡寫）

```javascript
const double = (n) => {
  return n * 2;
};

const triple = (n) => n * 3; // 單行可省略 return
```

事件處理與 `fetch` 很常看到箭頭函式，語意與一般函式相近。

## 步驟 5：格式化自我介紹

```javascript
function formatProfile(name, city, hobby) {
  return `我是${name}，來自${city}，喜歡${hobby}。`;
}

const intro = formatProfile("小明", "台北", "寫網頁");
console.log(intro);
```

## 步驟 6：搭配陣列使用

```javascript
function formatList(items) {
  let result = "";
  for (let i = 0; i < items.length; i++) {
    result += "- " + items[i] + "\n";
  }
  return result;
}

const skills = ["HTML", "CSS", "JavaScript"];
console.log(formatList(skills));
```

## 動手做

在 `profile.js` 實作：

1. `formatProfile(name, role)` 回傳一句自我介紹字串。
2. `isAdult(age)` 回傳 `true` / `false`（18 歲以上為 true）。
3. 用 `console.log` 測試兩個函式。

**完成標準**：`formatProfile("你", "學生")` 印出完整句子；`isAdult(20)` 為 true、`isAdult(15)` 為 false。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 函式沒執行 | 是否只宣告忘記加 `()` 呼叫？ |
| 回傳一直是 undefined | 是否漏了 `return`？ |
| 參數順序錯 | 呼叫時依宣告順序傳入 |

## 參考

- [MDN：函式](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics#函式)
- [MDN：箭頭函式](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)