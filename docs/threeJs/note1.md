---
sidebar_position: 35
description: Three JS - WebGL
key: [Three JS, 3D, WebGL]
tags: [Three JS, 3D, WebGL]
---

# 🌍 WebGL 簡介
### 1.1 何謂 WebGL

- WebGL (Web Graphics Library) 是一種使用 `JavaScript API`
- 可在瀏覽器中呈現 2D 或 3D 互動圖形的技術
- 他是基於 OpenGL 組成
- 可使用此連結確認設備是否有支援 WebGL >> [點我](https://get.webgl.org/)

### 1.2 WebGL 的設計

- WebGL 的設計使用了 Html 的 Canvas，並提供自動記憶體管理。

### 1.3 WebGL 與 GPU

- 它在 GPU 上被分為兩個部分:
  1. 處理資料流 (stream of data)
  2. 將第一部份的資料流畫成像素點 (pixels based)

### 1.4 電腦影像概念

在電腦上，我們使用攝影機 (camera) 的概念來看世界。攝影機拍攝畫面並呈現給使用者。因此，我們可以透過調整攝影機、光線、材質等設定來呈現不同的視角。

### 1.5 Shader 簡介

- Shader 是一種程式
- 它用於在 GPU 上渲染 3D 圖形
- 通常會分為兩種:
  1. 頂點著色器 (vertex shader): 對每個頂點進行計算，例如轉換座標、計算光照和陰影等。
  2. 片段著色器 (fragment shader): 對每個像素進行計算，例如計算顏色和紋理等。
- Shader 是由開發者自定義的，可以使用 GLSL (OpenGL Shading Language) 等語言編寫。使用不同的 Shader 可以得到不同的圖形效果，例如鏡面反射、高光、陰影等。
