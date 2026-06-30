---
sidebar_position: 1
description: CSS 三種寫法：行內、style 標籤與外部樣式表
key: [CSS, 樣式表, 外部 CSS]
tags: [前端, CSS, 入門]
---

# CSS 怎麼寫進網頁

> HTML 負責結構，CSS 負責外觀。學會三種引入方式，並養成「HTML + 外部 CSS」分檔的好習慣。

## 你會用到什麼

- [HTML 網頁骨架](../html/htmlStructure.md) 至 [表單基礎](../html/htmlForms.md)

## 步驟 1：CSS 在做什麼

CSS（Cascading Style Sheets，層疊樣式表）用「選擇器 + 屬性」描述元素長相，例如：

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

瀏覽器會把符合 `h1` 的標題改成藍色、32 像素大。

## 步驟 2：方法一 — 行內樣式（不建議常用）

```html
<p style="color: red;">這段是紅色</p>
```

適合快速測試；專案裡難維護，盡量少用。

## 步驟 3：方法二 — 頁內 `<style>`

```html
<head>
  <meta charset="utf-8" />
  <title>範例</title>
  <style>
    h1 {
      color: navy;
    }
  </style>
</head>
```

適合只有一頁、樣式很少的情況。

## 步驟 4：方法三 — 外部檔案（建議）

`style.css`：

```css
body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 24px;
}

h1 {
  color: #1a56db;
}
```

`index.html` 的 `<head>` 裡連結：

```html
<link rel="stylesheet" href="style.css" />
```

`href` 與 HTML 同資料夾就寫檔名；子資料夾則寫 `css/style.css`。

## 步驟 5：建議的資料夾結構

```
my-first-site/
├── index.html
├── profile.html
├── style.css
└── avatar.jpg
```

一篇 HTML 可對應一個 CSS，或多頁共用同一個 `style.css`。

## 步驟 6：把 profile 接上外部 CSS

`style.css`：

```css
body {
  font-family: "Segoe UI", "Microsoft JhengHei", sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
  margin: 0;
  padding: 24px;
}

header h1 {
  margin-bottom: 0;
}

main {
  max-width: 640px;
}

footer {
  margin-top: 48px;
  font-size: 14px;
  color: #64748b;
}
```

`profile.html` 的 `<head>` 加入：

```html
<link rel="stylesheet" href="style.css" />
```

存檔後重新整理，背景與字型應有變化。

## 動手做

1. 在 `my-first-site` 建立 `style.css`。
2. 把 [常用標籤](../html/htmlTags.md) 的 `profile.html` 接上 `<link rel="stylesheet" href="style.css" />`。
3. 在 CSS 裡設定：`body` 背景淺灰、`h1` 深藍色、`footer` 字體較小較灰。

**完成標準**：刪掉 `<link>` 後樣式消失，加回來又恢復——證明是 CSS 在起作用。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 樣式完全沒生效 | `href` 路徑是否正確？檔名是否 `style.css` 不是 `style.css.txt`？ |
| 改了 CSS 沒變化 | 強制重新整理：`Ctrl + Shift + R` |
| 中文字型很醜 | 在 `font-family` 加上 `"Microsoft JhengHei"` 或 `system-ui` |

## 參考

- [MDN：CSS 入門](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [MDN：CSS 如何運作](https://developer.mozilla.org/zh-TW/docs/Learn/CSS/First_steps/How_CSS_works)