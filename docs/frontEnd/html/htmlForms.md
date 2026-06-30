---
sidebar_position: 3
description: HTML 表單：input、label、textarea 與必填欄位
key: [HTML, 表單, form, input]
tags: [前端, HTML, 入門]
---

# 表單基礎

> 讓使用者輸入資料：文字框、信箱、多行留言與送出按鈕。本篇先做「長相」，送出邏輯留到 JavaScript。

## 你會用到什麼

- [常用標籤與語意](./htmlTags.md)

## 步驟 1：form 與 label

表單用 `<form>` 包住一組輸入欄位：

```html
<form>
  <label for="name">姓名</label>
  <input id="name" name="name" type="text" />
</form>
```

- `label` 的 `for` 要對應 `input` 的 `id`，點文字也能聚焦輸入框。
- `name`：之後送資料給伺服器時用的欄位名稱（先記住即可）。

## 步驟 2：常見 input 類型

```html
<input type="text" placeholder="請輸入姓名" />
<input type="email" placeholder="name@example.com" />
<input type="password" placeholder="密碼" />
<input type="number" min="0" max="120" />
<input type="checkbox" id="agree" />
<label for="agree">我同意服務條款</label>
```

| type | 用途 |
|------|------|
| `text` | 一般文字 |
| `email` | 信箱（瀏覽器會簡單檢查格式） |
| `password` | 密碼（輸入會遮住） |
| `number` | 數字 |
| `checkbox` | 勾選 |

## 步驟 3：多行文字與按鈕

```html
<label for="message">留言</label>
<textarea id="message" name="message" rows="4" cols="40"></textarea>

<button type="submit">送出</button>
<button type="button">一般按鈕（不送出表單）</button>
```

- `textarea`：多行文字。
- `type="submit"`：送出表單；`type="button"`：純按鈕，之後用 JS 綁事件。

## 步驟 4：必填與 action（概念）

```html
<input type="text" required />
```

`required`：瀏覽器內建檢查，空白時無法送出。

```html
<form action="/submit" method="post">
```

- `action`：資料要送到哪個網址。
- `method`：常用 `get`（網址列帶參數）或 `post`（本文傳送）。

本系列尚未有後端，**先不要真的送出**——在 [DOM 與事件](../js/jsDom.md) 會用 `preventDefault()` 攔截並在前端處理。

## 步驟 5：完整聯絡表單

`contact.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <title>聯絡我</title>
  </head>
  <body>
    <header>
      <h1>聯絡表單</h1>
    </header>
    <main>
      <form action="#" method="post">
        <p>
          <label for="name">姓名 <span>*</span></label><br />
          <input id="name" name="name" type="text" required placeholder="你的名字" />
        </p>
        <p>
          <label for="email">Email <span>*</span></label><br />
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
        </p>
        <p>
          <label for="message">留言</label><br />
          <textarea id="message" name="message" rows="5" cols="40" placeholder="想說的話…"></textarea>
        </p>
        <p>
          <button type="submit">送出</button>
          <button type="reset">清除</button>
        </p>
      </form>
    </main>
  </body>
</html>
```

`action="#"` 表示暫時不送到真實伺服器；按送出時頁面可能只會跳一下，這是正常的。

## 動手做

建立 `contact.html`：

1. 欄位：姓名（必填）、Email（必填）、留言（選填）。
2. 每個欄位都有對應的 `label` 與 `id`。
3. 有「送出」與「清除」按鈕。
4. 試著不填姓名就按送出——瀏覽器應擋下並提示。

**完成標準**：必填驗證有效；畫面結構清楚；能用 F12 看到每個 `input` 的 `name`。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 點 label 沒聚焦 input | 檢查 `for` 與 `id` 是否完全一致 |
| 送出後整頁刷新 | 尚未接 JS 時正常；之後用 `event.preventDefault()` |
| Email 欄位沒檢查 | 確認 `type="email"` 不是 `type="text"` |

## 參考

- [MDN：你的第一個 HTML 表單](https://developer.mozilla.org/zh-TW/docs/Learn/Forms/Your_first_form)
- [MDN：input 元素](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input)