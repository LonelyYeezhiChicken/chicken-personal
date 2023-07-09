---
sidebar_position: 25
description: Image Compression - JPEG (筆記)
key: [ML, 機器學習, JPEG, Entropy, Quantization, dct]
tags: [JPEG, Entropy, Quantization]
---

# JPEG-圖片壓縮
### JPEG概述

- Joint Photographic Expert Group在1992年被評為國際標準
- 適用於彩色與灰階圖片

### 動機

- The compression ratio of lossless methods (無損壓縮演算法)
- JPEG使用變換編碼:
    1. 大部分圖像內容在圖像轉換中是相對較慢的
    2. 與較低頻率的空間頻率分量損失相比，人類更容易接受高頻率的損失
    

### JPEG Overview

- 編碼過程:
  
  ![https://ithelp.ithome.com.tw/upload/images/20211227/20097001MSQ26PMFjJ.png](https://ithelp.ithome.com.tw/upload/images/20211227/20097001MSQ26PMFjJ.png)
- DCT(Discrete Cosine Transformation) → **離散余弦變換**
- DPCM(Differential Pulse Code Modulation) → 差分預測編碼調製 → DC
- Zigzag Scanning → 曲折掃描
- RLE(Run-Length Encoding) → AC
- Entropy Coding → 熵編碼
![https://ithelp.ithome.com.tw/upload/images/20211227/200970019vPA7n4Dsl.png](https://ithelp.ithome.com.tw/upload/images/20211227/200970019vPA7n4Dsl.png)

### Discrete Cosine Transform (DCT)

- 離散餘弦變換 (DCT)：

![https://ithelp.ithome.com.tw/upload/images/20211227/20097001lNW5clsLm4.png](https://ithelp.ithome.com.tw/upload/images/20211227/20097001lNW5clsLm4.png)

- 逆離散餘弦變換 (IDCT)：

![https://ithelp.ithome.com.tw/upload/images/20211227/20097001f7aEMztwNy.png](https://ithelp.ithome.com.tw/upload/images/20211227/20097001f7aEMztwNy.png)


### Quantization

- 量化的誤差是有損壓縮的主要來源
- 均衡量化
    - 每個F[u,v]都同除以常數N
- 非均衡量化
    - 使用量化表
    - 最終在將量化表存於table之中

### Zig-zag Scan

![https://ithelp.ithome.com.tw/upload/images/20211227/20097001M79dlEYboZ.png](https://ithelp.ithome.com.tw/upload/images/20211227/20097001M79dlEYboZ.png)

### DPCM on DC component

- 直流分量大且變化多端，但通常接近先前值

### RLE on AC components

- 保留跳過和值，其中跳過是零的數量，值是下一個非零分量

### Entropy Coding

- 使用Huffman Tables
- Huffman Tables是可以自行定義的