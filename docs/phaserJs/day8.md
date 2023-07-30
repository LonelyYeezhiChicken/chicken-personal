---
sidebar_position: 35
description: phaser js 遊戲引擎 
key: [phaser3, phaserJS, 遊戲引擎, game]
tags: [phaser3, phaserJS, 遊戲引擎, game]
---

# 🎮 基本語法(六) - 群組化物件

## 遊戲裡面肯定會遇到很多一模一樣的背景裝飾，每次都要寫一堆重複的設定太麻煩了，因此我們今天就來將物件群組化

### 我們今天就來讓沙漠中長滿草吧

### 先載入沙漠背景與草皮

![mdImg](https://raw.githubusercontent.com/LonelyYeezhiChicken/chicken-personal/main/static/mdImgs/phaser/note/backgrounds/desert.webp)
![草皮](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/static/mdImgs/phaser/note/others/Grass.png?raw=true)

```javascript
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  /**
   * 載入素材
   */
  preload() {
    // 載入素材
    // bg1 -> 圖片載入後的物件名稱(key)
    this.load.image("bg1", "../assets/backgrounds/desert.webp");

    // 載入草皮
    this.load.image("grass", "../assets/others/Grass.png");
  }
}
```

### 接下來就是大家熟悉的建立背景

```javascript
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  /**
   * 載入素材
   */
  preload() {
    // 載入素材
    // bg1 -> 圖片載入後的物件名稱(key)
    this.load.image("bg1", "../assets/backgrounds/desert.webp");

    // 載入草皮
    this.load.image("grass", "../assets/others/Grass.png");
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
  }
}
```

### 接下來進入建立草皮群組環節

- 首先我們使用 `this.add.group` 來對場景加入群組
- 接下來設定群組的參數
  1. 設定群組的唯一值 `key: "grass"`
  2. 複製多少物件 `repeat: 10, //種十撮`
- 再來就是設定物件的起始點還有規則

```javascript
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  /**
   * 載入素材
   */
  preload() {
    // 載入素材
    // bg1 -> 圖片載入後的物件名稱(key)
    this.load.image("bg1", "../assets/backgrounds/desert.webp");

    // 載入草皮
    this.load.image("grass", "../assets/others/Grass.png");
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

    // 建立草皮群組
    // 一次長十撮
    this.grassland = this.add.group({
      key: "grass",
      repeat: 10, //種十撮
      setXY: {
        x: 10, // 從 X 10 開始
        y: 250, // 從 Y 250 開始
        stepX: 55, // 每間隔10種一撮
        stepY: 0,
      },
    });
  }
}
```

### 因為沙漠太熱了，所以草要集體縮水

- 首先可以先取得群組內的所有物件 `getChildren()`
- 此時我們就可以使用 `forEach` 迴圈來同時改變群組內的所有物件
- 放大縮小我們使用 `setScale()` 來處理

```javascript
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  /**
   * 載入素材
   */
  preload() {
    // 載入素材
    // bg1 -> 圖片載入後的物件名稱(key)
    this.load.image("bg1", "../assets/backgrounds/desert.webp");

    // 載入草皮
    this.load.image("grass", "../assets/others/Grass.png");
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

    // 建立草皮群組
    // 一次長十撮
    this.grassland = this.add.group({
      key: "grass",
      repeat: 10, //種十撮
      setXY: {
        x: 10, // 從 X 10 開始
        y: 250, // 從 Y 250 開始
        stepX: 55, // 每間隔10種一撮
        stepY: 0,
      },
    });

    // 一次修改
    this.grassland.getChildren().forEach((item) => {
      item.setScale(0.5);
    });
  }
}
```

### 今天我們學會了大量複製場景中的物件了，大家可以試著在沙漠裡撲滿更多的草

---

### 遊戲場景

```javascript
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
  }

  /**
   * 載入素材
   */
  preload() {
    // 載入素材
    // bg1 -> 圖片載入後的物件名稱(key)
    this.load.image("bg1", "../assets/backgrounds/desert.webp");

    // 載入草皮
    this.load.image("grass", "../assets/others/Grass.png");
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

    // 建立草皮群組
    // 一次長十撮
    this.grassland = this.add.group({
      key: "grass",
      repeat: 10, //種十撮
      setXY: {
        x: 10, // 從 X 10 開始
        y: 250, // 從 Y 250 開始
        stepX: 55, // 每間隔10種一撮
        stepY: 0,
      },
    });

    // 一次修改
    this.grassland.getChildren().forEach((item) => {
      item.setScale(0.5);
    });
  }
}
```

### 主程式

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day8</title>
</head>

<body>
    <div id="app"></div>

    <script src="../lib/phaser.min.js"></script>
    <script src="./scenes/gameScene.js"></script>
    <script>
        // 宣告一個場景
        let scene = new GameScene();

        // 宣告場景的基本資訊
        let config = {
            type: Phaser.AUTO,
            width: 600, // 寬
            height: 300, // 高
        }

        //啟動遊戲
        let game = new Phaser.Game(config)

        //加載場景
        game.scene.add('gameScene', scene);
        //啟動場景
        game.scene.start('gameScene');
    </script>

</body>

</html>
```
