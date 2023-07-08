---
sidebar_position: 30
description: phaser js 遊戲引擎 
key: [phaser3, phaserJS, 遊戲引擎, game]
tags: [phaser3, phaserJS, 遊戲引擎, game]
---

# 🎮 基本語法(五) - 場景切換
### 我們今天來將場景模組化，讓他隨時可以切換

### 使用 `class` 包裝場景

1. 首先我們在與 `index.html` 同層建立 `scenes` 資料夾
2. 在資料夾中建立起始場景的檔案 `gameStart.js`
3. 並且繼承 `Phaser.Scene`

```javascript
class GameStart extends Phaser.Scene {
  // do something
}
```

### 註冊場景

1. 利用 `constructor` 的 `super()` 註冊場景 Key

```javascript
class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }
  // do something
}
```

### 載入素材

- 由於繼承了 `Phaser.Scene`
- 因此我們直接可以使用 `preload()`
- 就可以載入素材了

```javascript
class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }
  /**
   * 載入素材
   */
  preload() {
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");
    this.load.image("start1", "../assets/others/start/start1.png");
    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");
  }
}
```

### 生成物件

- 跟 `preload()` 原理相同
- 直接使用 `create()` 即可
- 我們在這邊先載入背景跟遊戲標題

```javascript
class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }
  /**
   * 載入素材
   */
  preload() {
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");
    this.load.image("start1", "../assets/others/start/start1.png");
    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");
  }

  /**
   * 生成物件
   */
  create() {
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    // 2. 遊戲標題
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);
  }
}
```

### 點擊事件

- 接下來我們要做遊戲開始按鈕
- 因此需要對按鈕物件下 `setInteractive()` 表示他可以跟玩家互動
- 並且加上一個 `pointerdown` 的事件
- 只有手機或滑鼠點擊他都會被觸發

```javascript
class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }
  /**
   * 載入素材
   */
  preload() {
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");
    this.load.image("start1", "../assets/others/start/start1.png");
    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");
  }

  /**
   * 生成物件
   */
  create() {
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    // 2. 遊戲標題
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);

    // 3. 開始按鈕
    this.start1 = this.add.sprite(width, height + 50, "start1", 0).setInteractive();

    this.start1.on("pointerdown", () => {
      console.log("我被點了!");
    });
  }
}
```

### 加入第二場景

- 第二場景是將 day6 的 js 分離出來，因此這邊不在做詳細的描述
- 先在 `scenes` 資料夾中建加入場景的檔案 `alpacaScene.js`
- 並放入以下程式碼

```javascript
class AlpacaScene extends Phaser.Scene {
  constructor() {
    super({ key: "alpacaScene" });
  }

  /**
   * 載入素材
   */
  preload() {
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

  /**
   * 生成物件
   */
  create() {
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

  /**
   * 初始化
   */
  init() {
    // 設定 行星 的速度
    this.planet1Speed = 3;
    //草泥馬陣列
    this.allPlayer = ["player1", "player2"];
    //計算時間軸
    this.index = 0;
    //噴火
    this.fileArr = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"];
  }

  /**
   * 更新畫面
   */
  update() {
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
}
```

### 將場景加入遊戲中

- 我們將焦點移回 `index.html` 中
- 首先要先引用剛剛建立的兩個場景

```html
<body>
  <div id="app"></div>

  <script src="../lib/phaser.min.js"></script>
  <script src="./scenes/gameStart.js"></script>
  <script src="./scenes/alpacaScene.js"></script>
</body>
```

### 宣告場景

- 因為剛剛已經將場景包裝成 `class`
- 因此我們這邊使用 `new` 關鍵字來實例化它

```html
<body>
  <div id="app"></div>
  <script src="../lib/phaser.min.js"></script>
  <script src="./scenes/gameStart.js"></script>
  <script src="./scenes/alpacaScene.js"></script>
  <script>
    // 宣告一個場景
    let scene = new AlpacaScene();
    let sceneStart = new GameStart();
  </script>
</body>
```

### 加入遊戲基本設定與場景

- 先新增一個遊戲
- 接下來在新增場景
- 最後啟動場景

```html
<body>
  <div id="app"></div>

  <script src="../lib/phaser.min.js"></script>
  <script src="./scenes/gameStart.js"></script>
  <script src="./scenes/alpacaScene.js"></script>
  <script>
    // 宣告一個場景
    let scene = new AlpacaScene();
    let sceneStart = new GameStart();
    // 宣告遊戲的基本資訊
    let config = {
      type: Phaser.AUTO,
      width: 600, // 寬
      height: 300, // 高
    };

    //啟動遊戲
    let game = new Phaser.Game(config);

    //加載場景
    game.scene.add("gameStart", sceneStart);
    game.scene.add("alpacaScene", scene);
    //啟動場景
    game.scene.start("gameStart");
  </script>
</body>
```

### 場景切換

- 這時我們回到 `gameStart.js`
- 加入一個場景跳轉( `startGame()` ) 的 function
- 並且移除掉目前顯示的場景
- 如果沒有移除場景會重疊
- 最後在 `pointerdown` 事件中觸發它
- 因為在 class 呼叫自己的 function 因此這邊需要用 `this`

```javascript
/**
 * 起始場景
 */
class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }
  /**
   * 載入素材
   */
  preload() {
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");
    this.load.image("start1", "../assets/others/start/start1.png");
    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");
  }

  /**
   * 生成物件
   */
  create() {
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    // 2. 遊戲標題
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);

    // 3. 開始按鈕
    this.start1 = this.add.sprite(width, height + 50, "start1", 0).setInteractive();

    this.start1.on("pointerdown", () => {
      this.startGame();
    });
  }

  /**
   * 場景跳轉
   */
  startGame() {
    game.scene.start("alpacaScene");
    game.scene.remove("gameStart");
  }
}
```

### 今天我們學到了如何利用 JS 的 class 來模組化場景，並且如何去切換它，明天我們來練習物件的複製吧!

---

### 程式原碼

### AlpacaScene 場景

```javascript
class AlpacaScene extends Phaser.Scene {
  constructor() {
    super({ key: "alpacaScene" });
  }

  /**
   * 載入素材
   */
  preload() {
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

  /**
   * 生成物件
   */
  create() {
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

  /**
   * 初始化
   */
  init() {
    // 設定 行星 的速度
    this.planet1Speed = 3;
    //草泥馬陣列
    this.allPlayer = ["player1", "player2"];
    //計算時間軸
    this.index = 0;
    //噴火
    this.fileArr = ["file1", "file2", "file3", "file4", "file5", "file6", "file7", "file8"];
  }

  /**
   * 更新畫面
   */
  update() {
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
}
```

### GameStart 場景

```javascript
/**
 * 起始場景
 */
class GameStart extends Phaser.Scene {
  constructor() {
    super({ key: "gameStart" });
  }
  /**
   * 載入素材
   */
  preload() {
    this.load.image("bg", "../assets/backgrounds/bg_1.webp");
    this.load.image("start1", "../assets/others/start/start1.png");
    this.load.image("gameName", "../assets/others/gameName/alpacaSceneName.png");
  }

  /**
   * 生成物件
   */
  create() {
    // 1. 背景
    let bg = this.add.sprite(0, 0, "bg");

    //取得寬高
    let width = this.sys.game.config.width / 2;
    let height = this.sys.game.config.height / 2;

    //設定位置
    bg.setPosition(width, height);

    // 2. 遊戲標題
    let gameName = this.add.sprite(width, height - 50, "gameName", 0);

    // 3. 開始按鈕
    this.start1 = this.add.sprite(width, height + 50, "start1", 0).setInteractive();

    this.start1.on("pointerdown", () => {
      this.startGame();
    });
  }

  /**
   * 場景跳轉
   */
  startGame() {
    game.scene.start("alpacaScene");
    game.scene.remove("gameStart");
  }
}
```

### 主程式 場景

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day7</title>
</head>

<body>
    <div id="app"></div>

    <script src="../lib/phaser.min.js"></script>
    <script src="./scenes/gameStart.js"></script>
    <script src="./scenes/alpacaScene.js"></script>
    <script>
        // 宣告一個場景
        let scene = new AlpacaScene();
        let sceneStart = new GameStart();
        // 宣告遊戲的基本資訊
        let config = {
            type: Phaser.AUTO,
            width: 600, // 寬
            height: 300, // 高
        }

        //啟動遊戲
        let game = new Phaser.Game(config)

        //加載場景
        game.scene.add('gameStart', sceneStart);
        game.scene.add('alpacaScene', scene);
        //啟動場景
        game.scene.start('gameStart');
    </script>

</body>

</html>
```
