---
sidebar_position: 5
description: html 概觀
key: [html, html overview]
tags: [html]
---

# 🐄 HTML 概觀

## 何謂 HTML

> HTML (Hypertext Markup Language)，中文翻譯成超 `文本語言`
>
> 他是一種標記語言(Mark Language)，他會透過各種標籤，讓瀏覽器看懂，並呈現出最終的樣子

## HTML 的結構

### HTML 的組成

- 以下這是一個 HTML

```html
<div> Hi Hi </div>
```

- 開頭與結尾: HTML 的開頭 (Opening tag) 會使用 `<>` 結尾(Closing tag) 則是 `</>`，
- 內容 (Content) :  上面的例子 Hi Hi 就是內文

### HTML 的架構

- 首先會再開頭宣告，這段的內容是 HTML

```html
<!doctype html>
```

- 再來分別可以將 HTML 拆成兩塊
- `head`、`body` 可以將它看成頭跟身體

```html
<!doctype html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

### HTML head

- head 通常會放一些重要資訊:
  - 瀏覽器搜尋的關鍵字 (SEO)
  - CSS 會放在 head
  - 還有網頁的相關資訊

```html
<head>
    <meta charset="utf-8" />
    <title>我的網站標題</title>
</head>
```

> `<meta charset="" />` 通常會在 head 放上這行，表示要用 `utf-8` 這個字元呈現
>
> `<title>我的網站標題</title>` title 這個標籤通常會放在 head 而且只會有一個，他會顯示在瀏覽器的頁籤上，表示網頁的標題

### HTML body

```html
<body>
    <h1>我是標題</h1>
    <div>我是內文</div>
</body>
```

### HTML file

> HTML 檔案的副檔名為 `.html`
>
> 可以嘗試在電腦建立一個空白的記事本，並將檔名與附檔名改成 `website.html`
>
> 並貼上以下內容

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>我的網站標題</title>
</head>
<body>
    <h1>我是標題</h1>
    <div>我是內文</div>
</body>
</html>
```

> 存檔後將他用瀏覽器打開，就可以看到第一個網站呈現了

---

## 學習資源

| 網站 | 說明 |
| --- | --- |
| [mdn web docs](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics) | 比較有權威性的網頁文件，適合初學，比較類似字典類型的網站 |
| [W3C school](https://www.w3schools.com/html/default.asp)| 上面有許多範例，也可以直接在上面做練習，適合初學入門的網站 |

## REF

[mdn web docs](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics)
