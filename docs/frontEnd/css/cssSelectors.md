---
sidebar_position: 2
description: CSS 選擇器：元素、class、id 與 hover
key: [CSS, 選擇器, class, id]
tags: [前端, CSS, 入門]
---

# 選擇器

> 精準指定「要改哪個元素」：標籤名、class、id，以及滑鼠移上去的狀態。

## 你會用到什麼

- [CSS 怎麼寫進網頁](./cssIntro.md)

## 步驟 1：元素選擇器

```css
p {
  color: #475569;
}

h2 {
  color: #0f172a;
}
```

頁面上**所有** `p` 都會套用。

## 步驟 2：class 選擇器

HTML：

```html
<p class="highlight">這段特別重要</p>
<p>一般段落</p>
```

CSS（class 前面加 `.`）：

```css
.highlight {
  background-color: #fef9c3;
  padding: 8px 12px;
}
```

一個元素可有多個 class：`class="highlight bold"`。

## 步驟 3：id 選擇器

```html
<h1 id="site-title">我的網站</h1>
```

```css
#site-title {
  font-size: 2.5rem;
}
```

**一頁內同一個 id 應只出現一次**；重複使用的樣式請用 class。

## 步驟 4：後代選擇器

```css
header h1 {
  color: #1d4ed8;
}
```

意思是：`header` **裡面**的 `h1`，不影響 `main` 裡的 `h1`。

## 步驟 5：偽類 :hover

```css
a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  color: #dc2626;
  text-decoration: underline;
}
```

滑鼠移上去時變紅色並加底線。

## 步驟 6：優先級（知道概念即可）

大致規則：**越具體的規則越優先**。

1. 行內 `style`（最高，少用）
2. `#id`
3. `.class`
4. 元素名 `p`

兩條規則衝突時，後寫的也可能覆蓋先寫的（層疊）。不必背完整特異性分數表，寫久了自然有感覺。

## 步驟 7：練習用完整 CSS

加到 `style.css`：

```css
body {
  font-family: system-ui, "Microsoft JhengHei", sans-serif;
  color: #334155;
}

h1, h2 {
  color: #1e3a8a;
}

p {
  color: #475569;
}

a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  color: #b91c1c;
}

.card {
  border: 1px solid #e2e8f0;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
}
```

HTML 某段落：

```html
<div class="card">
  <h2>興趣</h2>
  <p>喜歡學前端。</p>
</div>
```

## 動手做

在 `profile.html` + `style.css`：

1. 所有 `h1`、`h2` 同一色系；`p` 灰色。
2. 連結預設藍色、`:hover` 變另一色。
3. 新增 `.card` class 包住一個區塊，有邊框與圓角。

**完成標準**：hover 有視覺變化；`.card` 區塊與一般段落外觀不同。

## 常見卡關

| 問題 | 解法 |
|------|------|
| class 樣式沒套用 | CSS 是否寫成 `.card` 而不是 `card`？HTML 的 `class` 有拼對嗎？ |
| hover 沒反應 | 選擇器是否寫成 `a:hover`？有沒有被更具體的規則蓋掉？ |
| id 樣式怪怪 | 檢查是否重複使用同一個 `id` |

## 參考

- [MDN：CSS 選擇器](https://developer.mozilla.org/zh-TW/docs/Learn/CSS/Building_blocks/Selectors)
- [MDN：基本選擇器](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)