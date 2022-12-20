# 基本語法(七) - 動畫


### 我們之前是用土炮的方式來切換圖片，達到動畫效果，今天我們來用比較正規得方式來做動畫


### 今天的動畫是要讓雞在沙漠走來走去
- 先載入雞與背景的圖片
- 我們這邊使用 `spritesheet` 來設定每一偵的寬高
![mImg](https://github.com/LonelyYeezhiChicken/chicken-personal/blob/main/src/assets/mdImgs/phaser/note/roles/chickenGo.png?raw=true)

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

    // 載入雞動畫
    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }
}
```

### 接下接下來需要設定雞的圖片應該從第幾偵開始
- 我們這邊多給一個參數表示從第12格開始 `this.add.sprite(50, 200, "chicken", 12)`
- 並且把雞放大 1.5倍
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

    // 載入雞動畫
    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
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

    // 2. 雞
    this.chicken = this.add.sprite(50, 200, "chicken", 12);

    // 把雞放大 1.5 倍
    this.chicken.setScale(1.5);
   
  }
}
```

### 建立動畫
- 這邊使用 `this.anims.create` 來建立動畫
- `start` `end` ，表示動畫應該從哪格開始與結束
- 我們分別建立一個向左走與向右走的動畫
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

    // 載入雞動畫
    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
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

    // 2. 雞
    this.chicken = this.add.sprite(50, 200, "chicken", 12);

    // 把雞放大 1.5 倍
    this.chicken.setScale(1.5);

    // 建立雞向右走的動畫
    this.anims.create({
      key: "chickenGoRight",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 12,
        end: 15,
      }),
      frameRate: 4,
    });

    this.anims.create({
      key: "chickenGoLeft",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 4,
        end: 7,
      }),
      frameRate: 4,
    });
  }
}
```

### 播放動畫
- 這時候我們想要點擊畫面雞就會出發
- 點擊畫面會用到 `this.input.activePointer.isDown`
- 接下來就是播放動畫了 `this.chicken.anims.play("chickenGoRight", true)`
- 並且要幫雞的 x軸 +1 他才會往右前進
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

    // 載入雞動畫
    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
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

    // 2. 雞
    this.chicken = this.add.sprite(50, 200, "chicken", 12);

    // 把雞放大 1.5 倍
    this.chicken.setScale(1.5);

    // 建立雞向右走的動畫
    this.anims.create({
      key: "chickenGoRight",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 12,
        end: 15,
      }),
      frameRate: 4,
    });

    this.anims.create({
      key: "chickenGoLeft",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 4,
        end: 7,
      }),
      frameRate: 4,
    });
  }

  update() {
   
    if (this.input.activePointer.isDown) {
        this.chicken.x += 1;
        this.chicken.anims.play("chickenGoRight", true);
    }
  }
}
```

### 讓雞回家
- 現在一直點著螢幕，雞就會離家出走
- 跑出螢幕外就回不了家了
- 因此我們加一個變數，來判斷雞是不是該回家了
- 並且偵測機是不是走到世界的盡頭，是的話就讓他回頭
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

    // 載入雞動畫
    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
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

    // 2. 雞
    this.chicken = this.add.sprite(50, 200, "chicken", 12);

    // 把雞放大 1.5 倍
    this.chicken.setScale(1.5);

    // 建立雞向右走的動畫
    this.anims.create({
      key: "chickenGoRight",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 12,
        end: 15,
      }),
      frameRate: 4,
    });

    this.anims.create({
      key: "chickenGoLeft",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 4,
        end: 7,
      }),
      frameRate: 4,
    });
  }

  #isChickenGoHome = false;
  update() {
    // 雞沒有再回家才能走

    if (this.input.activePointer.isDown) {
      if (this.#isChickenGoHome === false) {
        this.chicken.x += 1;
        this.chicken.anims.play("chickenGoRight", true);
      } else {
        this.chicken.x -= 1;
        this.chicken.anims.play("chickenGoLeft", true);
      }
    }

    // 如果雞超過場景就讓他跑回家
    if (this.chicken.x >= this.sys.game.config.width) {
      this.#isChickenGoHome = true;
    } else if (this.chicken.x <= 0) {
      this.#isChickenGoHome = false;
    }
  }
}
```

### 此時此刻的雞，就會乖乖散步也不會離家出走了，我們明天再來監視這隻雞確保他不會亂跑

---

### 遊戲場景
``` javascript
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

    // 載入雞動畫
    this.load.spritesheet("chicken", "../assets/roles/chickenGo.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
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

    // 2. 雞
    this.chicken = this.add.sprite(50, 200, "chicken", 12);

    // 把雞放大 1.5 倍
    this.chicken.setScale(1.5);

    // 建立雞向右走的動畫
    this.anims.create({
      key: "chickenGoRight",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 12,
        end: 15,
      }),
      frameRate: 4,
    });

    this.anims.create({
      key: "chickenGoLeft",
      frames: this.anims.generateFrameNumbers("chicken", {
        start: 4,
        end: 7,
      }),
      frameRate: 4,
    });
  }

  #isChickenGoHome = false;
  update() {
    // 雞沒有再回家才能走

    if (this.input.activePointer.isDown) {
      if (this.#isChickenGoHome === false) {
        this.chicken.x += 1;
        this.chicken.anims.play("chickenGoRight", true);
      } else {
        this.chicken.x -= 1;
        this.chicken.anims.play("chickenGoLeft", true);
      }
    }

    // 如果雞超過場景就讓他跑回家
    if (this.chicken.x >= this.sys.game.config.width) {
      this.#isChickenGoHome = true;
    } else if (this.chicken.x <= 0) {
      this.#isChickenGoHome = false;
    }
  }
}

```
### 主程式
``` javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game-day9</title>
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