---
sidebar_position: 10
description:  map 函式
key: [P5 Js, map]
tags: [P5JS]
---

# 🎨 map 函式

## 說明

- map 首先需要設定原始參數的範圍
- 並設定要設定的比例範圍
- 並輸入需要縮放的參數
- 透過 map 函式會將輸入的參數做等比例縮放

`map(輸入的參數 , 原始參數起始範圍, 原始參數結束範圍, 縮放起始範圍, 縮放結束範圍)`

## 範例

- 我們以 `map(1,0,10,0,100)` 為例
- 原始的範圍是 `0~10`
- 我們要將它變成 `0~100`
- `0~10` 變成 `0~100` 則需要乘以 10 倍
- 因此我們需要縮放的 `1` 通過 map 函式的計算後，會變成 `10`

[線上測試](https://lonelyyeezhichicken.github.io/p5Js-Demo/Method-map/MapDemo.html)
