---
sidebar_position: 3
description: CSS 盒模型：content、padding、border、margin
key: [CSS, 盒模型, padding, margin]
tags: [前端, CSS, 入門]
---

# 🐄 盒模型與間距

> 每個元素都是一個「盒子」。搞懂內容、內距、邊框、外距，排版才不會擠成一團。

## 你會用到什麼

- [選擇器](./cssSelectors.md)

## 步驟 1：盒子四層

由內到外：

| 層 | 屬性 | 白話 |
|----|------|------|
| 內容 | `width` / `height` | 文字與圖片佔的空間 |
| 內距 | `padding` | 內容與邊框之間的留白 |
| 邊框 | `border` | 框線 |
| 外距 | `margin` | 盒子與其他盒子之間的距離 |

在 Chrome F12 → 選一個元素 → **Computed** 或圖示化的 box model 可以看到四層。

## 步驟 2：padding 與 margin

```css
.card {
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #cbd5e1;
  background-color: #ffffff;
}
```

- `padding: 16px`：四邊內距都是 16px。
- 單邊寫法：`padding-top: 8px;`、`margin-left: auto;` 等。

## 步驟 3：width 與 max-width

```css
main {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
```

`max-width` 限制最寬度；左右 `margin: auto` 常用来**水平置中**區塊。

## 步驟 4：box-sizing

預設情況下，`width: 200px` **不含** padding 和 border，實際佔位可能超過 200px。

建議全域設定：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

之後 `width` 會包含 padding 與 border，心算排版較直覺。

## 步驟 5：三張卡片（區塊版）

HTML：

```html
<main>
  <div class="card">
    <h2>HTML</h2>
    <p>網頁結構</p>
  </div>
  <div class="card">
    <h2>CSS</h2>
    <p>外觀樣式</p>
  </div>
  <div class="card">
    <h2>JS</h2>
    <p>互動行為</p>
  </div>
</main>
```

CSS：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  background: #f1f5f9;
  padding: 24px;
}

main {
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
}

.card h2 {
  margin-top: 0;
}
```

此時卡片是**直向堆疊**。下一篇 [Flexbox](./cssFlexbox.md) 會改成橫向並排。

## 動手做

1. 在 `style.css` 加上 `box-sizing: border-box` 重置。
2. 做 3 個 `.card`，各有 `padding`、`border`、`margin-bottom`。
3. `main` 設 `max-width` 並水平置中。

**完成標準**：F12 點選 `.card` 能看到 box model 圖；卡片之間有明顯間距。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 兩個區塊貼在一起 | 加 `margin` 或 `gap`（Flex 篇） |
| 設了 width 卻爆版 | 加上 `box-sizing: border-box` |
| margin 沒置中 | 要置中需 `margin-left: auto; margin-right: auto;` 且元素有寬度 |

## 參考

- [MDN：盒模型](https://developer.mozilla.org/zh-TW/docs/Learn/CSS/Building_blocks/The_box_model)
- [MDN：box-sizing](https://developer.mozilla.org/zh-TW/docs/Web/CSS/box-sizing)