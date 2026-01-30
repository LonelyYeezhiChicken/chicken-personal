---
sidebar_position: 10
description: Gemini CLI 的 Skill 功能，允許你定義可重複使用的行為與指令集，讓 Gemini 代理更懂你的專案。
key: [Gemini, AI, CLI, Skill, Agent, OpenCode]
tags: [Gemini, AI, CLI, Skill, Agent, OpenCode, AI筆記]
---

# 🤖 Gemini CLI 的 Skill 功能

> Gemini CLI (OpenCode) 的 `Skill` 是一個強大的功能，它允許你將一系列的指令、提示和工作流程打包成一個可重複使用的「技能」，讓 AI 代理 (Agent) 能夠在需要時載入並執行，以完成更複雜、更具領域知識的任務。

## 什麼是 Skill？

你可以將 Skill 想像成是一本預先寫好的「教戰手冊」。這本手冊詳細描述了在特定情境下，代理應該遵循的思考模式、行為準則和具體步驟。

與其每次都給予代理冗長的指令，不如將這些指令標準化成一個 Skill。當代理需要執行特定任務時（例如「程式碼重構」或「發布新版本」），它可以直接「啟用」對應的 Skill，並根據手冊內容進行操作。

## 如何定義一個 Skill

一個 Skill 的核心是一個 `SKILL.md` 檔案，它通常被放置在你的專案或家目錄的特定位置（例如 `.gemini/skills/<skill-name>/SKILL.md`）。

這個 `SKILL.md` 檔案由兩個主要部分組成：

1.  **YAML Frontmatter**：檔案開頭的區塊，用來定義 Skill 的元數據。
2.  **Markdown 內容**：Skill 的具體說明，也就是給代理看的「教戰手冊」內容。

### 範例：一個用於「食譜推薦」的 Skill

假設我們想定義一個名為 `recipe-recommender` 的 Skill，讓 Gemini 能夠根據現有的食材提供食譜建議。

**檔案路徑**：`~/.gemini/skills/recipe-recommender/SKILL.md`

```markdown
---
# 必要的元數據
name: recipe-recommender
description: 根據使用者提供的食材，推薦合適的食譜。

# 可選的權限設定
permissions:
  # 允許此 Skill 使用哪些工具（如果此 Skill 涉及外部 API 調用或資料庫查詢，這裡可以指定）
  allowed_tools:
    - "google_web_search" # 假設需要上網搜尋食譜
---

# 食譜推薦指南

當使用者需要食譜推薦時，你應該遵循以下步驟：

## 1. 理解使用者提供的食材

仔細閱讀使用者提供的食材清單，理解他們擁有的主要成分。

## 2. 詢問偏好 (若有需要)

如果食材清單較為模糊，或食譜選擇太多，可以禮貌性地詢問使用者是否有特定的烹飪偏好 (例如：快手菜、健康餐、異國風味、素食等)。

## 3. 搜尋與篩選食譜

利用你可用的工具（例如 `google_web_search`）去搜尋符合食材和使用者偏好的食譜。
- 至少提供 2-3 個不同的食譜建議。
- 對於每個食譜，簡要說明其名稱、主要特色、所需時間和簡單的步驟。

## 4. 提供額外建議

除了食譜本身，你還可以提供：
- 替換食材的建議。
- 搭配飲品的建議。
- 其他烹飪小技巧。
```

## Skill 的運作方式

1.  **探索 (Discovery)**：Gemini CLI 啟動時會掃描特定目錄，找出所有可用的 Skills。
2.  **啟用 (Activation)**：當代理在對話中判斷需要某項特定技能時，它會使用內建的工具來「載入」這個 Skill 的內容。
3.  **遵循 (Adherence)**：一旦 Skill 被啟用，代理在接下來的行為中，就會嚴格遵循 `SKILL.md` 中定義的指南和步驟。

透過這種方式，Skills 讓 Gemini 代理的行為變得更可預測、更專業，也更容易被客製化以適應不同的專案需求。
