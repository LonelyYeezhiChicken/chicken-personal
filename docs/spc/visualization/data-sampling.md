---
sidebar_position: 2
description: LTTB 降採樣與動態 LOD，繪圖層與計算層分離
key: [SPC, 數據採樣, LTTB, LOD, 性能優化]
tags: [SPC, 數據視覺化, 演算法, AI筆記]
---

# 📊 海量數據採樣策略

本章節只做一件事：說明百萬點控制圖如何**降採樣顯示**又不丟 OOC 特徵。渲染架構見 [`layer-rendering`](./layer-rendering.md)。

## 讀完本篇你能回答

- 為什麼 SPC 不能隨機抽樣顯示？
- LTTB 保留了什麼視覺特徵？
- Cpk 計算能不能用採樣後的數據？

## 1. 隨機抽樣為何不行

| 方式 | 問題 |
|------|------|
| 隨機抽樣 | 極易丟失 OOC 尖峰 |
| 均值抽樣 | 抹平波動，假裝穩定 |

SPC 在乎的是異常點，不是平均輪廓。

## 2. LTTB 算法

在每個 Bucket 選能構成**最大三角形面積**的點，保留視覺輪廓與尖峰。

## 3. 動態 LOD

依螢幕像素寬度決定傳輸點數（如 1024px → 約千點）；多層快照快取實現瞬間載入。

:::info 實務提醒
採樣**只用於繪圖層**。$C_{pk}$ 等指標必須用全量數據計算。高倍率採樣時應提示使用者放大區間再細讀。
:::

## 延伸閱讀

| 主題 | 文章 |
|------|------|
| 圖層渲染 | [`layer-rendering`](./layer-rendering.md) |
| 計算引擎 | [`calculation-engine`](../engine/calculation-engine.md) |