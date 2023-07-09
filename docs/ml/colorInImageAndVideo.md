---
sidebar_position: 20
description:  Color in Image and Video (筆記)
key: [ML, 機器學習, Color in Image and Video, Multimedia , RGB, video]
tags: [顏色模型, 超媒體, 量化, video]
---

# 影片與圖片的色彩
## Color in Image and Video
## Basics of Color

### Light and Spectra(光和光譜)

- 可見光(visible light)為 `400mm~700mm` 的電磁波(electromagnetic wave)
- 我們看到的光為各種不同波長所組合的

### The Human Retina(人類視網膜)

- 人類的眼睛就像是相機
- 每個神經元為一個rod或是一個cone
- Rod對顏色不敏感

### Cones and Perception

- cones有三種類型:
    1. 紅色(R)
    2. 綠色(G)
    3. 藍色(B)
- 在每種頻率的光之下都會有不同的反應
- 大腦顏色信號來自三個cones，也就是說信號由三個數字組成
- 一個顏色為三種顏色的總和，所以顏色會形成一個三維的向量空間

### CIE Chromaticity Diagram

- CIE (Commission Internationale de L'Eclairage, or International Commission on Illumination)
- 定義了三個標準原色(X,Y,Z)

# Color Models in Images

### 一張彩色圖片由(R,G,B)整數三元組的2維陣列

### RGB Color Model for CRT Displays

- CRT 顯示器具有三種的磷光體(phosphors)
- 當他被激發時會產生多種的波長

### CMY Color Model

- Cyan, Magenta, and Yellow (CMY)維RGB的互補色
- CMY主要用於影印設備，紙張上的顏料會吸收某些顏色

# Color Models in Video

### YIQ and YUV是影片中常用的顏色模型

### YUV Color Model

- 最初用於PAL模擬影像中，現在也適用於數字影像的CCIR 601標準
- Y(luminance)是CIE的Y原色
- U與V可以用來表示色差
    - U=B-Y
    - V=R-Y
- 如果黑白圖像時U=V=0

### YCbCr Color Model

- YCbCr 與 YUV密切相關
- 他就是一個縮放與位移的YUV
- 通常用於JPEG與MPEG

### YIQ Color Model

- YIQ 用於NTSC彩色電視廣播
- 向下兼容只使用Y的黑白電視
- I → orange-blue axis
- Q → purple-green axis
- 眼睛敏感程度
    - Y → I →Q

### 總結

- 彩色圖像由三個數值所組成
- 最常見的兩種成像顏色模型 → `RGB,CMY`
- 最常見的兩種影像顏色模型 → `YUV,YIQ`
- RGB → 是一種加色模型，常用於發光設備
- CMY → 是一種減色模型，常用於影印設備
- YUV → 是使用人眼特性來確定訊息的優先等級
    - Y黑白(亮度)圖像
    - V和U是色差(色度)圖像
    - YIQ也是使用類似的想法