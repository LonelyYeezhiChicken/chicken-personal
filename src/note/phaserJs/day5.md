### 今天就來讓圖片動起來吧!

- 首先我們今天會新增一個行星的物件
- 可以參考前幾篇來置入行星這邊就不再多做贅述

![mdImg1](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/backgrounds/planet.png?raw=true)

```javascript
//載入素材
function preload() {
  // 載入素材
  // bg1 -> 圖片載入後的物件名稱(key)
  this.load.image("bg1", "../assets/backgrounds/bg_1.webp");
  this.load.image("planet1", "../assets/backgrounds/planet.png"); // 行星
  this.load.image("player1", "../assets/roles/alpaca.png");
  this.load.image("player2", "../assets/roles/pinkAlpaca.png");
  this.load.audio("music1", "../assets/music/crrect_answer3.mp3");
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
}
```

## 基本 phaser.js 功能 - 初始化

### 使用 `init`

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
    create: create,
    init: init,
  },
};
```

2. `init()` 就與 init 的事件綁定了

```javascript
function init() {
  // 載入素材
}
```

### 初始化物件

1. 加入行星的移動速度 - 我們等等要讓行星移動起來

```javascript
// 初始化
function init() {
  // 設定 行星 的速度
  this.planet1Speed = 3;
}
```

2. 草泥馬陣列 - 這是為了讓草泥馬變身準備的

```javascript
// 初始化
function init() {
  // 設定 行星 的速度
  this.planet1Speed = 3;
  //草泥馬陣列
  this.allPlayer = ["player1", "player2"];
}
```

3. 計算時間軸 - 用來土炮時間軸變化使用的，稍後的文章會說明用途

```javascript
// 初始化
function init() {
  // 設定 行星 的速度
  this.planet1Speed = 3;
  //草泥馬陣列
  this.allPlayer = ["player1", "player2"];
  //計算時間軸
  this.index = 0;
}
```

## 基本 phaser.js 功能 - 畫面更新

### 使用 `update`

- 它屬於一個偵聽器
- 預設每一幀是以毫秒為單位在做更新

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
    create: create,
    init: init,
    update: update,
  },
};
```

2. `init()` 就與 init 的事件綁訂了

```javascript
function update() {
  // 監聽事件
}
```

### 更新畫面

- 我們這邊先土炮用 `this.index` 來當時間基準點
- 在 `this.index` 來到 `50` 之前，讓行星往右移動
- 因此在需要對行星的 `x` 軸做增量

```javascript
//更新畫面
function update() {
  // 行星出現
  if (this.index < 50) this.planet1.x += this.planet1Speed;

  this.index++;
}
```

- 接下來行星到定位後
- 草泥馬要變身
- 草泥馬變身到 `this.index < 200` 時就完全變身
- 這邊使用 `setTexture` 來切換圖片
- 由於草泥馬圖片有兩張，我們就利用取餘運算子 `%`
- 針對陣列 `this.allPlayer` 的 `0,1` 切換

```javascript
//更新畫面
function update() {
  // 行星出現
  if (this.index < 50) this.planet1.x += this.planet1Speed;
  //草泥馬變身
  if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
    this.player.setTexture(this.allPlayer[this.index % 2]);

  this.index++;
}
```

### 這樣就完成我們今天的 `花好月圓，草泥馬大變身的` 功能了!

---

### 程式原碼

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day5</title>
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
        }

        // 初始化
        function init() {
            // 設定 行星 的速度
            this.planet1Speed = 3;
            //草泥馬陣列
            this.allPlayer = ['player1', 'player2'];
            //計算時間軸
            this.index = 0;
        }

        //更新畫面
        function update() {
            // 行星出現
            if (this.index < 50)
                this.planet1.x += this.planet1Speed;

            //草泥馬變身
            if (this.index % 5 === 0 && this.index > 80 && this.index < 200)
                this.player.setTexture(this.allPlayer[this.index % 2]);

            this.index++;
        }
    </script>

</body>

</html>
```
