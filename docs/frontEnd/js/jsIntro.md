---
sidebar_position: 1
description: JavaScript 入門：script 標籤與 console.log
key: [JavaScript, 入門, console]
tags: [前端, JavaScript, 入門]
---

# 🐄 JavaScript 入門

> 讓網頁「會做事」：在 HTML 裡接上 JS，用 `console.log` 印出第一個訊息。

## 你會用到什麼

- [HTML 網頁骨架](../html/htmlStructure.md)
- CSS 篇章（可並行，互不依賴）

## 步驟 1：JavaScript 在做什麼

- **HTML**：結構（有什麼內容）
- **CSS**：樣式（長什麼樣）
- **JavaScript**：行為（點了會怎樣、資料怎麼變）

## 步驟 2：script 放哪裡

建議放在 `</body>` **前面**：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <title>JS 入門</title>
  </head>
  <body>
    <h1>JavaScript 測試</h1>
    <script>
      console.log("你好，前端世界！");
    </script>
  </body>
</html>
```

這樣 HTML 先載入完，再執行 JS，較不容易找不到元素。

若 script 放在 `<head>`，可加 `defer` 延後執行：

```html
<script defer src="main.js"></script>
```

## 步驟 3：外部 JS 檔

`main.js`：

```javascript
console.log("來自外部檔案的訊息");
```

HTML：

```html
<script src="main.js"></script>
```

路徑規則與 CSS 的 `link` 相同。

## 步驟 4：打開 Console

1. 用瀏覽器打開頁面。
2. 按 `F12` → 分頁選 **Console**（主控台）。
3. 應看到 `你好，前端世界！`。

`console.log` 是開發時除錯用，**不會**直接顯示在網頁畫面上（除非你自己寫進 DOM）。

## 步驟 5：常見 Console 指令

在 Console 輸入後按 Enter：

```javascript
2 + 3
"hello".toUpperCase()
```

可直接當計算機試小片段程式碼。

## 動手做

建立 `js-test.html` 與 `main.js`：

1. HTML 用 `<script src="main.js"></script>` 引入。
2. `main.js` 印出你的名字，例如 `console.log("我是小明");`。
3. 再印一行 `console.log(2026);`。
4. F12 Console 確認兩行都出現。

**完成標準**：畫面仍只有 HTML 內容；訊息出現在 Console。

## 常見卡關

| 問題 | 解法 |
|------|------|
| Console 完全沒輸出 | `script` 的 `src` 路徑對嗎？Network 分頁是否 404？ |
| 語法錯誤紅字 | 看 Console 指出的行號；常見：括號或引號沒成對 |
| 改了 js 沒變 | 強制重新整理 `Ctrl + Shift + R` |

## 參考

- [MDN：JavaScript 入門](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [MDN：console.log](https://developer.mozilla.org/zh-TW/docs/Web/API/console/log_static)