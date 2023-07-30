---
sidebar_position: 25
description: phaser js 遊戲引擎 
key: [phaser3, phaserJS, 遊戲引擎, game]
tags: [phaser3, phaserJS, 遊戲引擎, game]
---

# 🎮 基本語法(四) - 操作

## 今天開始要來操作畫面了

- 今天的任務是要讓變身後的草泥馬噴火
- 因此要先放進噴火的物件，這次使用照片串流的方式
- 之後還會有另一種動畫的使用方式

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-1.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-2.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-3.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-4.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-5.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-6.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-7.png?raw=true)

![噴火](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/skills/fire/file-8.png?raw=true)

```javascript
//載入素材
function preload() {
  // 載入素材
  // bg1 -> 圖片載入後的物件名稱(key)
  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");
  this.load.image("planet1", "../assets/backgrounds/planet.png");
  this.load.image("player1", "../assets/roles/alpaca.png");
  this.load.image("player2", "../assets/roles/pinkAlpaca.png");
  this.load.audio("music1", "../assets/music/crrect_answer3.mp3");
  //載入技能,使用迴圈載入
  for (let i = 1; i < 9; i++) {
    this.load.image("file" + i, `../assets/skills/fire/file-${i}.png`);
  }
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

  // 3. 行星
  this.planet1 = this.add.sprite(-100, 40, "planet1");

  // 4. 音樂
  this.music = this.sound.add("music1", {
    volume: 0.2, //音量
    loop: true, // 是否輪播
  });

  this.music.play();

  // 5. 技能
  this.file = this.add.sprite(360, 65, "file1");
  this.file.alpha = 0; //透明度設為0
}
```

### 初始化物件

- 我們來初始化噴火的陣列

```javascript
// 初始化
function init() {
  // 設定 行星 的速度
  this.planet1Speed = 3;
  //草泥馬陣列
  this.allPlayer = ["player1", "player2"];
  //計算時間軸
  this.index = 0;
  //噴火
  this.fileArr = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"];
}
```

## 基本 phaser.js 功能 - 點擊

## 使用 `input.activePointer.isDown`

- 在滑鼠或手機畫面被按住時，他會是 `true`
- 因此我們可以利用 `update` 一直更新的特性

### 1. 首先先做個判斷

- 判斷草泥馬變身後才能噴火

```javascript
// 初始化
function init() {
  // 行星出現
  if (this.index < 50) this.planet1.x += this.planet1Speed;

  //草泥馬變身
  if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
    this.player.setTexture(this.allPlayer[this.index % 2]);

  //草尼馬噴火
  if (this.index > 200) {
    console.log("草泥馬變身了!");
  }

  this.index++;
}
```

### 2. 判斷是不是有被點擊

- 使用 `input.activePointer.isDown`
- 搭配 `if` 判斷式

```javascript
// 初始化
function init() {
  // 行星出現
  if (this.index < 50) this.planet1.x += this.planet1Speed;

  //草泥馬變身
  if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
    this.player.setTexture(this.allPlayer[this.index % 2]);

  //草尼馬噴火
  if (this.index > 200) {
    if (this.input.activePointer.isDown) {
    } else {
    }
  }

  this.index++;
}
```

### 3. 顯示與不顯示物件

- 利用物件的透明度來讓它顯示與不顯示
- `alpha` 為透明度的屬性
- `alpha = 0` 表示全透明
- `alpha = 100` 表示不透明

```javascript
// 初始化
function init() {
  // 行星出現
  if (this.index < 50) this.planet1.x += this.planet1Speed;

  //草泥馬變身
  if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
    this.player.setTexture(this.allPlayer[this.index % 2]);

  //草尼馬噴火
  if (this.index > 200) {
    if (this.input.activePointer.isDown) {
      this.file.alpha = 100; //透明度設為100
    } else {
      this.file.alpha = 0; //透明度設為0
    }
  }

  this.index++;
}
```

### 4. 噴火動畫

- 最後利用 `update` 一直更新的特性
- 來切換圖片讓火焰動畫呈現

```javascript
// 初始化
function init() {
  // 行星出現
  if (this.index < 50) this.planet1.x += this.planet1Speed;

  //草泥馬變身
  if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
    this.player.setTexture(this.allPlayer[this.index % 2]);

  //草尼馬噴火
  if (this.index > 200) {
    if (this.input.activePointer.isDown) {
      this.file.alpha = 100; //透明度設為100
      this.file.setTexture(this.fileArr[this.index % 8]);
    } else {
      this.file.alpha = 0; //透明度設為0
    }
  }

  this.index++;
}
```

## 以上就是今天的操作啦

---

## 程式原碼

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day6</title>
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
                create: create,
                init: init,
                update: update
            }
        }

        //啟動遊戲
        let game = new Phaser.Game(config)

        //載入素材
        function preload() {
            // 載入素材
            // bg1 -> 圖片載入後的物件名稱(key)
            this.load.image('bg1', '../assets/backgrounds/bg_1.webp');
            this.load.image('planet1', '../assets/backgrounds/planet.png');
            this.load.image('player1', '../assets/roles/alpaca.png');
            this.load.image('player2', '../assets/roles/pinkAlpaca.png');
            this.load.audio('music1', '../assets/music/crrect_answer3.mp3');

            //載入技能,使用迴圈載入
            for (let i = 1; i < 9; i++) {
                this.load.image("file" + i, `../assets/skills/fire/file-${i}.png`);
            }
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

            // 3. 行星
            this.planet1 = this.add.sprite(-100, 40, "planet1");

            // 4. 音樂
            this.music = this.sound.add('music1', {
                volume: 0.2, //音量
                loop: true // 是否輪播
            });

            this.music.play();

            // 5. 技能
            this.file = this.add.sprite(360, 65, "file1");
            this.file.alpha = 0; //透明度設為0
        }

        // 初始化
        function init() {
            // 設定 行星 的速度
            this.planet1Speed = 3;
            //草泥馬陣列
            this.allPlayer = ['player1', 'player2'];
            //計算時間軸
            this.index = 0;
            //噴火
            this.fileArr = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7', 'file8'];
        }

        function update() {
            // 行星出現
            if (this.index < 50)
                this.planet1.x += this.planet1Speed;

            //草泥馬變身
            if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
                this.player.setTexture(this.allPlayer[this.index % 2]);

            //草尼馬噴火
            if (this.index > 200) {
                if (this.input.activePointer.isDown) {
                    this.file.alpha = 100; //透明度設為100
                    this.file.setTexture(this.fileArr[this.index % 8]);
                } else {
                    this.file.alpha = 0;//透明度設為0
                }
            }

            this.index++;
        }

    </script>

</body>

</html>
```
