---
sidebar_position: 5
description: phaser js 遊戲引擎 
key: [phaser3, phaserJS, 遊戲引擎, game]
tags: [phaser3, phaserJS, 遊戲引擎, game]
---

# 🎮 環境
### [官網](https://phaser.io/)

- 官網圖文豐富
- 內容非常詳細

### [靜態資源](https://phaser.io/download/stable)

- 首先可以到官網下載完整的 JS 與 min.js
- 或是想用 CDN 也可以使用(以下版本有日後有可能會更新，請到官網抓取最新版)

```javascript
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
```

- 官方也有提供 npm(以下版本有日後有可能會更新，請到官網抓取最新版)

```
npm install phaser@3.55.2
```

### 素材庫

- [Kenney](https://www.kenney.nl/assets)
- [愛給](https://www.aigei.com/)

### [開發工具](https://code.visualstudio.com/)

- 本次文章使用 VS Code
- 可依個人使用習慣來選擇開發工具

### 開發起手式

1. 建立畫布(遊戲呈現的區塊)

- 於`<bod>`加入`div`標籤

```html
<div id="app"></div>
```

2. 引用 JS

- 於`<bod>`加入`phaser.js`標籤

```javascript
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
<script src="//cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
```

3. 建立場景

- 宣告一個場景

```javascript
// 宣告一個場景
let scene = new Phaser.Scene("Game");
```

- 宣告場景的基本資訊

```javascript
// 宣告場景的基本資訊
let config = {
  type: Phaser.AUTO,
  width: 640, // 寬
  height: 320, // 高
  scene, // 綁定宣告的場景
};
```

- 啟動遊戲

```javascript
let game = new Phaser.Game(config);
```

4. 使用`Open with Live Server`啟動遊戲

- 可以看到畫面上有一塊黑黑的區域
- 表示成功了喔

### 今天介紹了基本的開發環境與開發的起手式，明天就要開始練習 Phaser 了喔

---

### 程式原碼

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day1</title>
</head>

<body>
    <div id="app"></div>

    <script src="../lib/phaser.min.js"></script>
    <script>
        // 宣告一個場景
        let scene = new Phaser.Scene('Game');
        // 宣告場景的基本資訊
        let config = {
            type: Phaser.AUTO,
            width: 640, // 寬
            height: 320, // 高
            scene // 綁定宣告的場景
        }
        //啟動遊戲
        let game = new Phaser.Game(config)
    </script>

</body>

</html>
```
