---
sidebar_position: 30
description: Basics of Video (筆記)
key: [ML, 機器學習, video]
tags: [video]
---

# Basics of Video
## Types of Color Video Signals

### Component video

- 主要作為單獨的影片訊號發送
- 主要為RGB或是luminance-chrominance transformation

### Composite video

- 顏色和亮度訊號混合到一個carrier wave
- 無法避免兩個訊號之間產生的干擾

### S-Video

- 為Component video與Composite video的折衷
- 他使用兩條線，一條為luminance與一條複合訊號

# Analog Video

### NTSC Video

- 每幀 525 條掃描線，每秒 30 幀（或者準確地說，29.97 fps，33.37 毫秒/幀）

### PAL Video

- 每幀 625 條掃描線，每秒 25 幀（40 毫秒/幀）
- 使用 YUV 顏色模型

# Digital Video

### 好處:

- 可以直接做非線性的編輯
- 可以重複錄音
- 不用blanking and sync pulse
- 幾乎所有的digital video 都使用 component video