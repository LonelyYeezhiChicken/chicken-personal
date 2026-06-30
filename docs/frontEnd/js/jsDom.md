---
sidebar_position: 4
description: JavaScript DOM 操作與事件：querySelector、addEventListener
key: [JavaScript, DOM, 事件, addEventListener]
tags: [前端, JavaScript, 入門]
---

# 🐄 DOM 與事件

> **DOM**（Document Object Model）是瀏覽器把 HTML 轉成的樹狀結構。用 JS 選取元素、改內容、聽按鈕點擊。

## 你會用到什麼

- [函式](./jsFunctions.md)
- [表單基礎](../html/htmlForms.md)

## 步驟 1：選取元素

HTML：

```html
<h1 id="title">標題</h1>
<p class="msg">原始內容</p>
```

JS：

```javascript
const title = document.querySelector("#title");
const msg = document.querySelector(".msg");
```

- `#id` 選 id
- `.class` 選 class
- 標籤名直接寫 `p`、`button`

## 步驟 2：改文字與 HTML

```javascript
title.textContent = "新標題";
msg.textContent = "內容已更新";
```

`textContent` 只放純文字；若需插入 HTML 標籤才用 `innerHTML`（要小心 XSS，初學先用 `textContent`）。

## 步驟 3：改 class（樣式切換）

CSS 先有：

```css
body.dark {
  background: #0f172a;
  color: #e2e8f0;
}
```

JS：

```javascript
const toggleBtn = document.querySelector("#toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```

`classList.toggle`：有這個 class 就移除，沒有就加上。

## 步驟 4：完整深色模式範例

`theme.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>主題切換</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 id="title">你好</h1>
    <button type="button" id="toggle-theme">切換深色模式</button>
    <script src="theme.js"></script>
  </body>
</html>
```

`theme.js`：

```javascript
const toggleBtn = document.querySelector("#toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```

## 步驟 5：表單驗證（攔截送出）

```javascript
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const hint = document.querySelector("#hint");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === "") {
    hint.textContent = "請填寫姓名";
    return;
  }

  hint.textContent = "驗證通過！（尚未接後端）";
});
```

- `event.preventDefault()`：阻止表單真的送出、頁面刷新。
- `input.value`：目前輸入框的文字。
- `trim()`：去掉前後空白。

HTML 片段：

```html
<form id="contact-form">
  <input id="name" type="text" />
  <p id="hint"></p>
  <button type="submit">送出</button>
</form>
```

## 動手做

1. 實作深色模式切換（`button` + `classList.toggle`）。
2. 在 `contact.html` 接上表單驗證：姓名空白時顯示提示，不刷新頁面。
3. 用 F12 確認點擊時 Console 無錯誤。

**完成標準**：按鈕可切換深/淺色；空白姓名無法通過驗證且有提示文字。

## 常見卡關

| 問題 | 解法 |
|------|------|
| `Cannot read properties of null` | `querySelector` 找不到元素；檢查 id 或 script 是否放在 `body` 底 |
| 按鈕沒反應 | 是否寫 `addEventListener`？id 是否重複？ |
| 表單還是刷新 | 是否呼叫 `event.preventDefault()`？ |

## 參考

- [MDN：DOM 入門](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN：addEventListener](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener)