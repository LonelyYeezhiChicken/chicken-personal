---
sidebar_position: 10
description:  Multimedia Data Representations (筆記)
key: [ML, 機器學習, Digitization of Sound, Multimedia , 聲音數據化, 量化]
tags: [聲音數據化, 超媒體, 量化]
---

# 🛸 聲音數據化

## Multimedia Data Representations

## Digitization of Sound(聲音數據化)

### Facts about Sound(關於聲音的數據)

- 聲音為壓力波
- 聲音是在空氣中傳遞的連續波(continuous wave)
- 是由壓力(pressure)差所造成的

### 一般數據化

- 將聲音或影像輸入到電腦，我們就必須將他轉為數據(digitize)
- 因此我們需要分散取樣(discrete sampling) → (time and voltage)
- Sampling(取樣) → 時間維度 → 水平軸
- Quantization(量化) → 訊號強度 → 垂直軸
- 8bit 量化分為256 levels,16bit 量化分為 65536 levels

### Signal to Noise Ratio (SNR)(訊號雜訊比)

- 在電腦中有些信號是需要被測量的，有些是隨機產生的
- 需要被測量的 → 訊號(voltage)
- 隨機產生的 → 雜訊(noise)
- 兩者的功率稱為訊號雜訊比單位通常以分貝做計算

### Signal to Quantization Noise Ratio (SQNR)(訊號量化雜訊比)

- 量化誤差(quantization error)是採樣時間模擬信號的實際值與最接近的量化間隔值之間的差值

### Graphic/Image Data Structures(圖形數據結構)

- Pixels → picture elements in digital images
  - 數位圖像中的圖片元素
- Image Resolution → number of pixels in a digital image
  - 數位圖像中的像素數
- Bit-Map → 數據顯示表示的方式與他們存在影片中的相同

### 單色圖像

- 每個像素都由0與1組成的

### 灰階圖像

- 每像素由一個byte組成的

### 8-bit 彩色圖像

- 每個像素一個byte
- 支援256種顏色
