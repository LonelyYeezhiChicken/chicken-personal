# 3. 區塊漸層

### 最終結果

![mdImg](https://github.com/LonelyYeezhiChicken/p5Js-Demo/raw/main/Gradient/Gradient.png)

### 1. 簡易作法

1. 首先將寬度除以五，來獲得五個區塊

```javascript
let linePosition = width / 5;
```

2. 開始畫第一塊

```javascript
for (let i = 0; i < height; i++) {
  let resAmount = map(i, 0, height, 0, 255);
  stroke(resAmount, 100, 200);
  line(0, i, linePosition, i);
}
```

3. 因為我們需要在每個區塊從上而下畫線，而且線需要漸層，所以使用 map 計算紅色
   - 由於 i 從上而下，所以 i 的範圍是 0~畫布的高
   - 要轉換成 RGB 的範圍 0~255
   - 這邊換算出來的是 RGB 中的 R(紅色)
   - 由於隨著區塊增長要轉換的三原色起始位置需要越來越大
   - 因此將他乘以 30 的倍數

```javascript
//區塊1
let resAmount = map(i, 0, height, 0, 255);

//區塊2
let resAmount = map(i, 0, height, 30, 255);

//區塊3
let resAmount = map(i, 0, height, 60, 255);

//區塊4
let resAmount = map(i, 0, height, 90, 255);

//區塊5
let resAmount = map(i, 0, height, 120, 255);
```

4. 設定畫筆顏色(RGB)
   - 將每次計算後的紅色置入，其他兩色固定
   - 由於紅色隨著迴圈，數字會越來越大
   - 因此顏色會越來越偏紫色，藉此達到漸層效果

```javascript
stroke(resAmount, 100, 200);
```

5. 畫線
   - 畫線的重點在於要由上而下 -> 所以起點與終點的 y 都帶入 i
   - x 軸則是需要從第一個區塊的起點畫到第二個區塊的起點
   - 所以我們用了剛剛算好的區塊(linePosition)
   - 例如: 第一塊就是要從 0~第一塊的終點，第二塊則是需要從第一塊終點到第二塊起點

```javascript
//第一塊 (0 ~ 第一塊)
line(0, i, linePosition, i);

//第二塊 (第一塊 ~ 第二塊)
line(linePosition * 1, i, linePosition * 2, i);

//第三塊 (第二塊 ~ 第三塊)
line(linePosition * 2, i, linePosition * 3, i);

//第四塊 (第三塊 ~ 第四塊)
line(linePosition * 3, i, linePosition * 4, i);

//第五塊 (第四塊 ~ 第五塊)
line(linePosition * 4, i, linePosition * 5, i);
```

---

### 2.雙迴圈做法

- 雙迴圈主要是將以上重複的程式精簡化

1. 紅色計算的精簡化
   - 由於 RGB 的範圍每次都是 30 的倍數
   - 因此我們將他\*30

```javascript
let resAmount = map(i, 0, height, position * 30, 255);
```

2. 並將劃線的點到點使用運算的方式

```javascript
line(linePosition * position, i, linePosition * (position + 1), i);
```
