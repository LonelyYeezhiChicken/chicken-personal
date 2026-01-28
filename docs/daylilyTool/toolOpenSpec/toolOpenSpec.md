---
sidebar_position: 5
description: OpenSpec 的核心概念與常用指令，用於與 AI 代理進行高效的軟體開發協作。
key: [OpenSpec, AI, Agent, CLI, Software Development]
tags: [OpenSpec, AI, Agent, CLI, Software Development]
---

# ⚙️ OpenSpec 簡介

> OpenSpec 是一個開源標準，旨在定義一套清晰、可執行的規範，讓人們可以與 AI 代理（如 Gemini）更高效地協作開發軟體。它的核心是將複雜的軟體變更拆解成結構化的「提案 (Proposal)」和「規格 (Spec)」。

## 核心工作流程

OpenSpec 的工作流程主要分為兩個階段：**提案 (Proposal)** 和 **應用 (Apply)**。

1.  **提案階段 (`/openspec:proposal`)**：
    -   **目的**：定義「要做什麼」和「為什麼要做」。在這個階段，主要產出是設計文件，**不應撰寫任何正式的程式碼**。
    -   **動作**：與 AI 代理討論需求，代理會根據討論結果建立一個變更提案。
    -   **產出**：在 `openspec/changes/<change-id>/` 目錄下生成 `proposal.md`, `tasks.md` 等文件。

2.  **應用階段 (`/openspec:apply`)**：
    -   **目的**：執行提案中定義的任務，將變更「實作」出來。
    -   **動作**：AI 代理會依照 `tasks.md` 中列出的步驟，逐一修改程式碼、建立檔案。
    -   **產出**：實際的程式碼變更。

## 常用指令

### `/openspec:proposal [description]`

> 建立一個新的變更提案。

這是整個流程的起點。你需要用一段文字描述你的需求。

**範例**：
```
/openspec:proposal 幫我重構登入頁面，改用新的 UI 設計。
```

### `/openspec:apply [change-id]`

> 應用一個已經存在的提案。

當你和代理都同意提案的內容後，使用此指令來開始實作。

**範例**：
```
/openspec:apply refactor-login-page
```

### `/openspec:archive [change-id]`

> 將一個已完成的變更封存。

當一個變更的所有實作都已完成並驗證後，使用此指令將其標記為「完成」並歸檔。這通常是流程的最後一步。

**範例**：
```
/openspec:archive refactor-login-page
```

## 檔案結構

-   `openspec/`
    -   `project.md`: 專案的整體說明文件，幫助 AI 了解專案背景。
    -   `specs/`: 存放專案的「現行規格」，是所有功能的最終真實來源。
    -   `changes/`: 存放進行中和已封存的變更。
        -   `archive/`: 存放已完成的變更。
        -   `<change-id>/`: 每個進行中的變更都有自己的目錄。

透過這套結構化的流程，可以確保每一次的程式碼變更都是經過清晰定義且可追蹤的，大幅提升了人機協作的效率與準確性。
