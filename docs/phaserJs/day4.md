---
sidebar_position: 15
description: phaser js 遊戲引擎 
key: [phaser3, phaserJS, 遊戲引擎, game]
tags: [phaser3, phaserJS, 遊戲引擎, game]
---

# 🎮 基本語法(二) - 圖片

## 今天來把背景與角色顯示出來吧

## 基本 phaser.js 功能 - 生成物件

## 使用 `create`

### 1. 先到 config 綁定事件

```javascript
// 宣告場景的基本資訊
let config = {
  type: Phaser.AUTO,
  width: 600, // 寬
  height: 300, // 高
  // 綁定宣告的場景
  scene: {
    preload: preload,
    create: create,
  },
};
```

### 2. `create()` 就與 create 的事件綁訂了

```javascript
function create() {
  // 載入素材
}
```

## 建立背景圖

### 1. 放入圖片

### 2. `sprite(0, 0, "bg1")` 參數分別為 (x, y, 圖片 key)
  
```javascript
  let bg = this.add.sprite(0, 0, "bg1");
```

### 3. `!! 圖片預設都以中心點來做定位 !!`

### 4. 因此我們可以計算畫布的中心點來當背景的中心點

### 5. `/ 2` 來計算畫布的正中心

```javascript
  //取得寬高
  let width = this.sys.game.config.width / 2;
  let height = this.sys.game.config.height / 2;
```

### 6. 將背景擺至畫布的正中心

```javascript
  //設定位置
  bg.setPosition(width, height);
```

## 置入角色

1. 放入圖片
2. 直接把角色置入指定位置
3. 這邊我們使用 `this.player` 方便日後控制角色使用
4. `sprite(0, 0, "bg1")` 參數分別為 (x, y, 圖片 key)
5. 這邊把 `x, y` 分別設定成 `450, 85` 讓草泥馬站在山上

```javascript
this.player = this.add.sprite(450, 105, "player1");
```

## 播放音樂

1. 建立音樂檔物件
2. 音樂屬性
   - `volume -> 音量`
   - `loop -> 是否輪播`

```javascript
this.music = this.sound.add("music1", {
  volume: 0.2, //音量
  loop: true, // 是否輪播
});

this.music.play();
```

## 今天終於完成仰望大地的草泥馬了，敬請期待明天的內容

---

## 程式原碼

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day4</title>
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
                create: create
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

        //生成物件
        function create() {
            // 1. 背景
            let bg = this.add.sprite(0, 0, "bg1");

            //取得寬高
            let width = this.sys.game.config.width / 2;
            let height = this.sys.game.config.height / 2;

            //設定位置
            bg.setPosition(width, height);

            // 2. 角色
            this.player = this.add.sprite(450, 105, "player1");

            // 3. 音樂
            this.music = this.sound.add('music1', {
                volume: 0.2, //音量
                loop: true // 是否輪播
            });

            this.music.play();
        }
    </script>

</body>

</html>
```
