---
sidebar_position: 1
description: SPC 入門：變異、管制界限、Cp/Cpk 與 OOC/OOS 的最小概念閉環
key: [SPC, 變異理論, 控制圖, Cp, Ca, Cpk, OOC, OOS]
tags: [SPC, 統計學, 品質管理, AI筆記]
---

# 📊 基礎理論與名詞解釋

本章節只做一件事：幫你建立 SPC 的**最小概念閉環**——從「製程為什麼會波動」到「什麼叫失控、什麼叫不合格」。系統架構與資料流程請讀 [`endToEndLifecycle`](./core-model/endToEndLifecycle.md)；術語速查請用 [`glossary`](./glossary.md)。

## 讀完本篇你能回答

- 隨機原因與異常原因差在哪？
- 管制界限（UCL/LCL）與規格界限（USL/LSL）為什麼不能混用？
- Cp、Ca、Cpk 各代表什麼？OOC 與 OOS 差在哪？

## 一個比喻貫穿全文：車庫停車

後文都用同一個場景——**把車停進車庫**，避免換多套說法：

| 現實概念 | 比喻 | 統計符號 |
|----------|------|----------|
| 客戶允許的範圍 | 車庫寬度 | USL、LSL |
| 製程自然波動 | 車身寬度 | $6\sigma$ |
| 製程中心位置 | 車停在哪裡 | $\mu$ |
| 製程自己的穩定區間 | 車庫內你習慣的停車帶 | UCL、LCL |

記住：**規格是客戶畫的線，管制界限是機台歷史數據算出來的線**——兩者來源不同，不能互相取代。深入比較見 [`control-vs-spec-limits`](./core-model/control-vs-spec-limits.md)。

## 1. 變異從哪來

沒有兩個產品會完全一樣，這種差異就是**變異**。SPC 只關心你能不能把變異分成兩類：

| 類型 | 白話 | 車庫比喻 | 該怎麼辦 |
|------|------|----------|----------|
| **隨機原因**（Common Cause） | 製程固有的正常波動 | 車子怠速時輕微晃動 | 要改善通常得改設備或製程設計 |
| **異常原因**（Special Cause） | 可歸因的突發狀況 | 輪胎洩氣、突然歪一邊 | 要立刻找出原因並排除 |

**SPC 的核心任務**：在異常原因剛出現時就發現，別等產品已經變廢品。

## 2. 為什麼要分群（Subgroup）

統計學用**樣本**推論**母體**。在工廠裡，我們把短時間內、條件相近的量測點收成一組，稱為 **Subgroup（理性分群）**。

設計原則很單純：

- **組內**波動：盡量只剩隨機原因（正常晃動）
- **組間**差異：用來抓異常原因（突然歪掉）

$X$-bar 圖常見每組樣本數 $n = 3 \sim 5$。分群邏輯與監控計畫的關係見 [`monitoring-strategy`](./core-model/monitoring-strategy.md)。

## 3. 兩種界限，兩種問題

這是 SPC 最常搞混的一點，用車庫比喻一次分清：

### 管制界限（UCL / CL / LCL）—— 機台在說話

- 由**歷史數據**統計得出，常見為 $\mu \pm 3\sigma$
- 回答的問題：**「製程還穩不穩？」**
- 點出界 → **OOC**（Out of Control，統計失控）

### 規格界限（USL / LSL）—— 客戶在說話

- 由**工程規格或客戶需求**訂定，與歷史數據無關
- 回答的問題：**「產品合不合格？」**
- 點出界 → **OOS**（Out of Specification，產品不合格）

兩者可以同時發生、也可以只發生其一：

- **OOC 但沒 OOS**：產品還合格，但製程已不穩定，要預防惡化
- **沒 OOC 但有 OOS**：製程看起來穩，但能力不足以滿足規格

## 4. 製程能力：Cp、Ca、Cpk

界限搞清楚之後，才談**能力指標**。仍用車庫比喻：

### Cp（精密度）—— 車夠不夠窄

$$C_p = \frac{USL - LSL}{6\sigma}$$

車身（$6\sigma$）比車庫（規格寬度）窄多少？$C_p > 1.33$ 通常代表精密度足夠。

### Ca（準確度）—— 停得正不正

衡量中心 $\mu$ 偏離規格中心（Target）的程度。偏得越多，越容易刮到牆。

### Cpk（綜合表現）—— 實際會不會撞牆

$$C_{pk} = \min \left( \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right)$$

看**離牆最近的那一側**。車再窄，停太歪一樣會撞（$C_p$ 高但 $C_{pk}$ 低）。

### 短期 Cpk vs 長期 Ppk（一句話）

| 指標 | 看什麼變異 | 白話 |
|------|-----------|------|
| **Cpk** | 組內變異 $\sigma_{\text{within}}$ | 機台「最好狀態」下的能力 |
| **Ppk** | 全體變異 $\sigma_{\text{overall}}$ | 含換班、換料後的「真實表現」 |

公式與計算細節見 [`calculation-engine`](./engine/calculation-engine.md)。

:::info 先穩定，再算數
控制圖點位亂跳時，算出的 Cpk 沒有意義。要先讓製程受控（OOC 消除），再評估能力。
:::

## 5. 怎麼判定失控：OOC 與 OOS

判定分兩條獨立路徑，在數據寫入時同時檢查：

| 類型 | 觸發條件 | 意義 |
|------|----------|------|
| **OOS** | 超出 USL 或 LSL | 產品可能已是廢品 |
| **OOC** | 超出 UCL/LCL，或出現非隨機模式 | 製程已不穩定，但產品未必不合格 |

OOC 不只看出界。常見還有：**連續 9 點在中心線同側**（偏移）、**連續 6 點遞增或遞減**（趨勢）等。完整規則與診斷樹見 [`decision-rules`](./core-model/decision-rules.md)。

雙圖（X-bar + R/S）為什麼要一起看，見 [`dual-chart-philosophy`](./core-model/dual-chart-philosophy.md)。

## 6. 帶走三條原則

1. **先穩定後優化**：先把車變窄（縮小波動），再調停車位置（對準中心）。
2. **看圖不看單一數字**：Cpk 是結果；控制圖才是過程。
3. **分清兩種線**：規格是客戶要的，管制界限是機台給的——別用手調寬界限來「消音」。

## 延伸閱讀

| 想繼續學什麼 | 讀哪篇 |
|-------------|--------|
| 學習順序總覽 | [`index`](./index.md) |
| 縮寫一行查 | [`glossary`](./glossary.md) |
| 資料怎麼走完系統 | [`endToEndLifecycle`](./core-model/endToEndLifecycle.md) |
| 非常態分佈怎麼處理 | [`advanced-calculation`](./engine/advanced-calculation.md) |
| 看圖除錯 | [`spcDebugging`](./exception-handling/spcDebugging.md) |