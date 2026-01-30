---
sidebar_position: 5
description: Gemini CLI 的核心概念與常用指令，用於與 Gemini AI 進行互動。
key: [Gemini, AI, CLI, Google, Development]
tags: [Gemini, AI, CLI, Google, Development, AI筆記]
---

# 🤖 Gemini CLI 簡介

> Gemini CLI 是 Google 提供的一個命令列介面工具，它允許開發者直接透過終端機與 Gemini AI 模型進行互動，執行如文字生成、程式碼生成、圖片描述等任務。

## 安裝與設定

在使用 Gemini CLI 之前，你需要先安裝它並進行基本設定。

### 1. 安裝 Gemini CLI

通常可以透過 npm (Node Package Manager) 進行安裝：

```bash
npm install -g @google/gemini-cli
```

### 2. 進行身份驗證 (Auth Login)

Gemini CLI 支援透過瀏覽器進行互動式身份驗證。運行以下指令，它將引導你透過 Google 帳戶登入並授權 CLI 工具：

```bash
gemini auth login
```
完成登入後，你的憑證將會被安全地儲存在本地，Gemini CLI 即可開始運作。

如果你需要切換或重新整理憑證，可以再次運行此指令。

## 常用指令

### `gemini generate`

> 這是 Gemini CLI 的核心功能，用於呼叫 Gemini 模型進行內容生成。

**範例**：生成一個關於 Python 程式碼的說明。

```bash
gemini generate "給我一個 Python 函式，用於計算費波那契數列的前 N 個數字。"
```

### `gemini chat`

> 進入互動式聊天模式，你可以像與聊天機器人對話一樣與 Gemini 互動。

**範例**：

```bash
gemini chat
```
然後你就可以在終端機中輸入問題，Gemini 會即時回應。

### `gemini version`

> 檢查當前安裝的 Gemini CLI 版本。

**範例**：

```bash
gemini version
```

### `gemini help`

> 顯示所有可用指令的幫助資訊。

**範例**：

```bash
gemini help
```

## 應用場景

-   **快速原型開發**：快速生成程式碼片段、測試用例或文檔草稿。
-   **學習與探索**：直接在終端機中探索 Gemini 模型的能力。
-   **自動化腳本**：將 Gemini 的生成能力整合到你的自動化工作流程中。

透過 Gemini CLI，開發者可以更便捷地將強大的 AI 能力整合到日常開發和探索中。
