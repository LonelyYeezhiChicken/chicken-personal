---
sidebar_position: 1
description: 綜合練習：個人首頁（HTML + CSS）
key: [前端, 作品, 個人首頁, HTML, CSS]
tags: [前端, 入門, 作品]
---

# 作品一：個人首頁

> 把 HTML 與 CSS 篇章串起來，做出一頁可給別人看的個人介紹網站。

## 你會用到什麼

- [HTML 三章](../html/htmlStructure.md)
- [CSS 五章](../css/cssIntro.md)

## 作品規格

### 必備項目

| 項目 | 說明 |
|------|------|
| 語意結構 | `header`、`main`、`footer` |
| 導覽列 | Flex 排版，至少 2 個區塊連結（可用頁內 `#id` 錨點） |
| 自我介紹 | `h1`、多段 `p`、一張圖片（含 `alt`） |
| 技能或興趣 | `ul` 或 `ol` 清單 |
| 外部連結 | 至少 1 個 `target="_blank"` |
| 外部 CSS | 獨立 `style.css`，不用行內樣式 |
| 響應式 | viewport meta；手機上卡片或區塊單欄 |

### 建議檔案結構

```
personal-site/
├── index.html
├── style.css
└── images/
    └── avatar.jpg
```

## 步驟 1：HTML 骨架

`index.html` 起點：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>你的名字 — 個人首頁</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="logo">你的名字</div>
      <nav class="nav">
        <a href="#about">關於</a>
        <a href="#skills">技能</a>
        <a href="#contact">聯絡</a>
      </nav>
    </header>

    <main>
      <section id="about">
        <h1>你好，我是 ○○</h1>
        <img src="images/avatar.jpg" alt="大頭貼" width="160" />
        <p>兩三句自我介紹。</p>
      </section>

      <section id="skills">
        <h2>技能</h2>
        <div class="card-row">
          <div class="card"><h3>HTML</h3><p>網頁結構</p></div>
          <div class="card"><h3>CSS</h3><p>排版樣式</p></div>
          <div class="card"><h3>JS</h3><p>互動（下一作品）</p></div>
        </div>
      </section>

      <section id="contact">
        <h2>聯絡</h2>
        <p>
          Email：you@example.com<br />
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>
    </main>

    <footer>
      <p>© 2026 你的名字</p>
    </footer>
  </body>
</html>
```

## 步驟 2：CSS 重點

`style.css` 至少包含：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, "Microsoft JhengHei", sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background: #f8fafc;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #1e293b;
  color: #fff;
}

.site-header a {
  color: #cbd5e1;
  margin-left: 16px;
  text-decoration: none;
}

.site-header a:hover {
  color: #fff;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 16px;
}

.card-row {
  display: flex;
  gap: 16px;
}

.card {
  flex: 1;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 24px;
  color: #64748b;
  font-size: 14px;
}

@media (max-width: 640px) {
  .card-row {
    flex-direction: column;
  }

  .site-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
```

## 步驟 3：自我檢查清單

- [ ] 分頁標題不是「Untitled」
- [ ] 圖片有 `alt`
- [ ] 手機寬度（F12 裝置模式）不橫向溢出
- [ ] 導覽連結能跳到對應區塊
- [ ] 沒有只用 `div` 堆完全部內容

## 動手做

依規格完成 `personal-site` 資料夾，內容改成**你自己的**真實或虛構介紹。

**完成標準**：給朋友看時，對方能在 30 秒內知道你是誰、會什麼、怎麼聯絡；手機與桌機版面都正常。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 錨點 `#about` 沒跳 | 對應 `section` 是否有 `id="about"` |
| 圖片路徑錯 | `images/avatar.jpg` 與實際資料夾一致 |
| 手機橫向捲動 | 加 `max-width: 100%` 與 `@media` 單欄 |

## 參考

- [MDN：語意 HTML](https://developer.mozilla.org/zh-TW/docs/Glossary/Semantics#semantics_in_html)
- 下一篇：[作品二：待辦清單](./projectTodoList.md)