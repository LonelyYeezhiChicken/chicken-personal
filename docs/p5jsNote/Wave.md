---
sidebar_position: 20
description:  聲波
key: [P5 Js, 聲波, wave]
tags: [P5JS]
---

# 🎨 聲波

使用圓型，x 軸不變，y 軸上下移動組成聲波

### 變數宣告

- 分別宣告 ；

  - 角度(用於 y 軸計算)

  ```javascript
  let angle = 0.0;
  ```

  - 圓的半徑為 20

  ```javascript
  let radius = 20;
  ```

### 設定圓的模式

- 半徑最後為半徑模式 `circle(x, y, 半徑) `

  ```javascript
  ellipseMode(RADIUS);
  ```

- 半徑最後為直徑模式(預設模式) `circle(x, y, 直徑) `

  ```javascript
  ellipseMode(CENTER);
  ```

### 開始畫圓

```javascript
//畫25個圓
for (let i = 0; i < 25; i++) {
  //計算圓新的x軸(固定不變)
  let x = map(i, 0, 24, radius, width);
  //計算圓的y軸
  let y = map(sin(angle + frameCount), -1, 1, radius, height);
  //畫圓
  circle(x, y, radius);

  //每次角度都加上 2pi / 8.75
  angle += TWO_PI / 8.75;
}
```
