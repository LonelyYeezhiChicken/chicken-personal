---
sidebar_position: 1
description: HTML 網頁骨架：doctype、head、body
key: [HTML, 骨架, doctype, head, body]
tags: [前端, HTML, 入門]
---

# HTML 網頁骨架

> 學會每個 HTML 檔案必備的結構：宣告、head（給瀏覽器的資訊）、body（給使用者看的內容）。

原「HTML 概觀」已整併至本篇。

## 你會用到什麼

- [零基礎起步](../gettingStarted.md) — 已會用 VS Code 建 `.html` 並用瀏覽器打開

## 步驟 1：什麼是 HTML

**HTML**（HyperText Markup Language，超文本標記語言）是一種**標記語言**，用一對一對的**標籤**告訴瀏覽器：哪裡是標題、哪裡是段落、哪裡是連結。

它不是程式語言——你不能在 HTML 裡寫「如果…就…」的邏輯（那要交給 JavaScript）。

最小單位長這樣：

```html
<div>Hi Hi</div>
```

- **開始標籤**：`<div>`
- **內容**：`Hi Hi`
- **結束標籤**：`</div>`

## 步驟 2：完整網頁骨架

每個正規 HTML 檔案都建議長這樣：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <title>我的網站標題</title>
  </head>
  <body>
    <h1>我是標題</h1>
    <p>我是內文</p>
  </body>
</html>
```

各部分說明：

| 區塊 | 作用 |
|------|------|
| `<!doctype html>` | 告訴瀏覽器：這是現代 HTML5 文件 |
| `<html lang="zh-Hant">` | 整份文件的根元素；`lang` 有助於搜尋與無障礙 |
| `<head>` | **不直接顯示**在畫面上，放給瀏覽器／搜尋引擎的資訊 |
| `<body>` | **使用者看得到**的內容 |

## 步驟 3：head 裡常放什麼

```html
<head>
  <meta charset="utf-8" />
  <title>我的網站標題</title>
</head>
```

- **`meta charset="utf-8"`**：用 UTF-8 編碼，中文才不會亂碼。幾乎每頁必備。
- **`title`**：顯示在瀏覽器**分頁標題**上；每頁通常只有一個。之後 CSS、SEO 相關設定也會放在 head。

## 步驟 4：body 裡放內容

```html
<body>
  <h1>我是標題</h1>
  <p>我是內文</p>
</body>
```

`h1` 是主標題（一頁通常一個），`p` 是段落。更多標籤在下一篇 [常用標籤與語意](./htmlTags.md)。

## 步驟 5：建立並預覽

在 `my-first-site` 資料夾新增 `about-me.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <title>關於我</title>
  </head>
  <body>
    <h1>關於我</h1>
    <p>你好，我是前端學習者。</p>
    <p>這是我的第一個結構完整的網頁。</p>
  </body>
</html>
```

存檔後用瀏覽器打開，確認分頁標題顯示「關於我」。

## 動手做

建立 `about-me.html`（或覆寫練習檔），完成：

1. 正確的 `<!doctype html>` 與 `lang="zh-Hant"`。
2. `head` 含 `charset` 與有意義的 `title`。
3. `body` 含 1 個 `h1`、至少 2 個 `p`，內容寫自我介紹。
4. 用瀏覽器打開，分頁標題與畫面都正確。

**完成標準**：無亂碼；F12 Elements 能看到完整 `html > head + body` 結構。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 標籤沒包住內容 | 每個 `<tag>` 都要有對應的 `</tag>`（少數標籤如 `meta` 可自關閉） |
| 畫面全白 | 內容是否寫在 `<body>` 裡，而不是寫在 `head`？ |
| 用記事本建檔 | 可以，但建議用 VS Code，較不容易存成 `.txt` |

## 參考

- [MDN：HTML 基本結構](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools HTML 教程](https://www.w3schools.com/html/default.asp)