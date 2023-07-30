---
sidebar_position: 25
description:  arc 函式
key: [P5 Js, arc]
tags: [P5JS]
---

# 🎨 arc 函式

## 說明

- 用途 : 在螢幕上畫一條 `弧線`
- 模式 :
  1. OPEN : open semi-circle (半開圓形) -> 純粹弧線，並無閉鎖
  2. CHORD : closed semi-circle (閉鎖半圓) -> 封閉式半圓
  3. PIE : a closed pie segment (圓餅圖) -> 封閉式圓餅圖
- 從起點到終點，程式皆由順時鐘繪製

`arc(x, y, w, h, start, stop, [mode], [detail])`

- x : 點的 x 軸
- y : 點的 y 軸
- w : 圓弧的寬度
- h : 圓弧的高度
- start : 起始的角度
- stop : 結束的角度
- [mode] : 模式(OPEN, CHORD, PIE) `非必填`
- [detail] : 指定圓弧的周長，默認為 25，不可超過 50 `非必填`

### OPEN 例

- OPEN : open semi-circle (半開圓形) -> 純粹弧線，並無閉鎖

```javascript
// 從點(100, 150) 開始，劃出 200 x 200 的開放式半圓
arc(100, 150, 200, 200, 0, 10, OPEN);
```

- 結果 :
  ![mdImg](https://github.com/LINDuke-Lin/p5Js-Demo/raw/main/Method-arc/img/open.png)

### CHORD 例

- CHORD : closed semi-circle (閉鎖半圓) -> 封閉式半圓
- 與開放式的差異只在半圓口是否有黑線

```javascript
// 從點(100, 150) 開始，劃出 200 x 200 的封閉式式半圓
arc(100, 150, 200, 200, 0, 10, CHORD);
```

- 結果 :
  ![mdImg](https://github.com/LINDuke-Lin/p5Js-Demo/raw/main/Method-arc/img/chord.png)

### PIE 例

- PIE : a closed pie segment (圓餅圖) -> 封閉式圓餅圖

```javascript
// 從點(100, 150) 開始，劃出 200 x 200 的圓餅圖
arc(100, 150, 200, 200, 0, 10, PIE);
```

- 結果 :
  ![mdImg](https://github.com/LINDuke-Lin/p5Js-Demo/raw/main/Method-arc/img/pie.png)
