---
sidebar_position: 10
---

# 基本語法(一) - 靜態資源
### 今天開始來把背景與角色加載到遊戲資源裡面吧!

## 基本 phaser.js 功能 - 加載素材

### 使用 `preload`

- 這步驟稱為 **預加載**

1. 先到 config 綁定事件

```javascript
// 宣告場景的基本資訊
let config = {
  type: Phaser.AUTO,
  width: 600, // 寬
  height: 300, // 高
  // 綁定宣告的場景
  scene: {
    preload: preload,
  },
};
```

2. `preload()` 就與 preload 的事件綁訂了

```javascript
function preload() {
  // 載入素材
}
```

### 載入資源 - 背景圖

1. 先建立一個資料夾
2. 名稱命名為 `assets`
3. 再到裡面建立一個 `backgroungs` 的資料夾
4. 將背景圖片放到裡面
5. 將圖片引入

```javascript
function preload() {
  // 載入素材
  // bg1 -> 圖片載入後的物件名稱(key)
  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");
}
```

![mdImg](https://raw.githubusercontent.com/LonelyYeezhiChicken/chicken-personal/main/static/mdImgs/phaser/note/backgrounds/bg_1.webp)

### 載入資源 - 角色圖

1.  在 `assets` 裡面建立一個 `roles` 的資料夾
2.  將背景圖片放到裡面
3.  將圖片引入

```javascript
function preload() {
  // 載入素材
  // bg1 -> 圖片載入後的物件名稱(key)
  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");
  this.load.image("player1", "../assets/roles/alpaca.png");
}
```

![草泥馬圖](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/roles/alpaca.png?raw=true)

### 載入資源 - 音樂

1.  在 `assets` 裡面建立一個 `music` 的資料夾
2.  將背景圖片放到裡面
3.  將圖片引入

```javascript
function preload() {
  // 載入素材
  // bg1 -> 圖片載入後的物件名稱(key)
  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");
  this.load.image("player1", "../assets/roles/alpaca.png");
  this.load.audio("music1", "../assets/music/crrect_answer3.mp3");
}
```

### 以上就是今天的資源加載，明天就會開始使用這些資源啦!

---

### 程式原碼

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day2</title>
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
            width: 600, // 寬
            height: 300, // 高
            // 綁定宣告的場景
            scene: {
                preload: preload,
            }
        }

        //啟動遊戲
        let game = new Phaser.Game(config)

        //載入素材
        function preload() {
            // 載入素材
            // bg1 -> 圖片載入後的物件名稱(key)
            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');
            this.load.image('player1', '../assets/roles/alpaca.png');
            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');
        }
    </script>

</body>

</html>
```
