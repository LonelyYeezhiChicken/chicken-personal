---
sidebar_position: 4
description: CSS Flexbox：導覽列與多欄排版
key: [CSS, Flexbox, 排版]
tags: [前端, CSS, 入門]
---

# Flexbox 排版

> 用 `display: flex` 讓子元素橫向或直向排列、對齊、均分空間——現代網頁排版入門必學。

## 你會用到什麼

- [盒模型與間距](./cssBoxModel.md)

## 步驟 1：啟用 Flex 容器

```css
.container {
  display: flex;
  gap: 16px;
}
```

父層設 `display: flex` 後，**直接子元素**變成 flex 項目，預設橫向一排。

`gap`：項目之間的間距。

## 步驟 2：主軸對齊 justify-content

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

| 值 | 效果 |
|----|------|
| `flex-start` | 靠起點排 |
| `center` | 置中 |
| `space-between` | 兩端對齊，中間均分 |
| `flex-end` | 靠終點排 |

## 步驟 3：交叉軸對齊 align-items

```css
align-items: center;
```

讓不同高度的項目在垂直方向對齊中線（橫向 flex 時）。

## 步驟 4：方向 flex-direction

```css
.card-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
```

| 值 | 效果 |
|----|------|
| `row` | 橫向（預設） |
| `column` | 直向 |

## 步驟 5：頂部導覽列

HTML：

```html
<header class="site-header">
  <div class="logo">My Site</div>
  <nav class="nav">
    <a href="profile.html">關於</a>
    <a href="contact.html">聯絡</a>
  </nav>
</header>
```

CSS：

```css
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #1e293b;
  color: #fff;
}

.site-header a {
  color: #e2e8f0;
  margin-left: 16px;
  text-decoration: none;
}

.site-header a:hover {
  color: #fff;
}
```

## 步驟 6：三欄卡片橫排

HTML：

```html
<div class="card-row">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

CSS：

```css
.card-row {
  display: flex;
  gap: 16px;
}

.card-row .card {
  flex: 1;
  margin-bottom: 0;
}
```

`flex: 1` 讓三張卡片盡量均分寬度。

## 動手做

在現有練習頁加上：

1. 頂部 `header` 用 flex：左邊站名、右邊 2 個連結。
2. 三個 `.card` 包在 `.card-row` 裡橫向排列。
3. 連結 hover 時顏色變化。

**完成標準**：桌機寬度下三卡同一行；導覽列左右分開。

## 常見卡關

| 問題 | 解法 |
|------|------|
| flex 沒生效 | `display: flex` 是否寫在**父層**？ |
| 子元素還是直排 | 父層是否被其他 CSS 蓋掉？檢查 F12 Computed |
| 卡片被壓扁 | 加 `flex: 1` 或 `min-width: 0` |

## 參考

- [MDN：Flexbox](https://developer.mozilla.org/zh-TW/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS Tricks：Flexbox 指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)