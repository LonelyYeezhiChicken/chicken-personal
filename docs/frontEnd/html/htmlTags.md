---
sidebar_position: 2
description: HTML 常用標籤：標題、段落、清單、連結、圖片與語意結構
key: [HTML, 標籤, 語意, 連結, 圖片]
tags: [前端, HTML, 入門]
---

# 🐄 常用標籤與語意

> 用正確的標籤表達「這是標題、這是清單、這是連結」，讓網頁結構清楚、對搜尋引擎與讀屏軟體友善。

## 你會用到什麼

- [HTML 網頁骨架](./htmlStructure.md)

## 步驟 1：文字標籤

```html
<h1>一級標題（一頁通常只用一個）</h1>
<h2>二級標題</h2>
<p>這是一個段落。</p>
<p>段落之間會自動換行、留白。</p>
```

標題層級 `h1`–`h6` 數字越小字越大，不要跳級（例如 `h1` 下面直接 `h3`）。

## 步驟 2：區塊與行內

```html
<div>區塊容器，常用來分區排版</div>
<span>行內容器，常用來包一小段文字</span>
```

- `div`：獨佔一行（區塊級）
- `span`：不換行（行內級）

## 步驟 3：清單

**無序清單**（項目沒有先後順序）：

```html
<ul>
  <li>閱讀</li>
  <li>寫程式</li>
  <li>散步</li>
</ul>
```

**有序清單**（有順序）：

```html
<ol>
  <li>學 HTML</li>
  <li>學 CSS</li>
  <li>學 JavaScript</li>
</ol>
```

## 步驟 4：連結

```html
<a href="https://developer.mozilla.org/zh-TW/">MDN 網站</a>
<a href="about-me.html">關於我</a>
```

- `href`：目標網址。外部網址用完整 `https://...`；同資料夾檔案用檔名即可。
- 在新分頁開啟：加 `target="_blank" rel="noopener noreferrer"`。

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">外部連結</a>
```

## 步驟 5：圖片

```html
<img src="avatar.jpg" alt="我的大頭貼" width="200" />
```

- `src`：圖片路徑（與 HTML 同資料夾就寫檔名）。
- `alt`：**必填**的文字說明（圖片載入失敗或視障使用者會讀這段）。
- 先把一張小圖放進 `my-first-site` 資料夾再測試。

## 步驟 6：語意結構

用語意標籤表達頁面區塊，比全部塞 `div` 更清楚：

```html
<header>
  <h1>王小明的個人頁</h1>
</header>
<main>
  <h2>自我介紹</h2>
  <p>我是正在學前端的新手。</p>
</main>
<footer>
  <p>聯絡：example@email.com</p>
</footer>
```

| 標籤 | 常見用途 |
|------|----------|
| `header` | 頁首、區塊標題區 |
| `main` | 主要內容（一頁建議只有一個） |
| `footer` | 頁尾 |

## 步驟 7：完整範例

`profile.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <title>王小明 — 個人介紹</title>
  </head>
  <body>
    <header>
      <h1>王小明</h1>
      <p>前端學習中</p>
    </header>
    <main>
      <h2>關於我</h2>
      <p>你好！我來自台北，正在學習 HTML 和 CSS。</p>
      <img src="avatar.jpg" alt="王小明的照片" width="160" />
      <h2>興趣</h2>
      <ul>
        <li>閱讀技術部落格</li>
        <li>週末煮咖啡</li>
        <li>慢跑</li>
      </ul>
      <h2>學習計畫</h2>
      <ol>
        <li>HTML 結構</li>
        <li>CSS 排版</li>
        <li>JavaScript 互動</li>
      </ol>
      <p>
        更多資源：
        <a href="https://developer.mozilla.org/zh-TW/" target="_blank" rel="noopener noreferrer">MDN</a>
      </p>
    </main>
    <footer>
      <p>© 2026 王小明</p>
    </footer>
  </body>
</html>
```

## 動手做

建立 `profile.html`：

1. 使用 `header`、`main`、`footer`。
2. 至少 1 個 `h1`、2 個 `h2`、2 個 `p`。
3. 一個 `ul` 清單（3 項以上）和一個 `ol` 清單。
4. 一張圖片（沒圖可先用 [placehold.co](https://placehold.co/200x200) 的 URL 當 `src`）與有意義的 `alt`。
5. 一個連到外部網站的 `a` 標籤。

**完成標準**：瀏覽器顯示結構清楚；點連結能開啟；圖片有 `alt` 文字。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 圖片破圖 | 檢查 `src` 路徑、檔名大小寫、圖片是否在正確資料夾 |
| 連結點了沒反應 | `href` 是否漏寫或寫錯 |
| 清單沒有項目符號 | 項目必須包在 `<li>` 裡，且外層是 `ul` 或 `ol` |

## 參考

- [MDN：HTML 文字基礎](https://developer.mozilla.org/zh-TW/docs/Learn/HTML/Introduction_to_HTML/HTML_text_basics)
- [MDN：語意 HTML](https://developer.mozilla.org/zh-TW/docs/Glossary/Semantics#semantics_in_html)