---
sidebar_position: 5
sidebar_label: 🚀 agy 新手安裝
description: Google Antigravity (agy) 終端命令列 AI 開發助理的安裝與設定教學，包含 Windows、macOS 與 Linux 的安裝步驟、帳號授權與基本指令。
key: [Antigravity, agy, 安裝教學, 新手入門, AI, CLI]
tags: [Antigravity, agy, 安裝教學, 新手入門, 工具, AI筆記]
---

# 🚀 agy 新手安裝教學

> Antigravity (簡稱 `agy`) 是 Google 推出的新世代終端命令列 AI 開發助理工具，主要用於在終端機中進行代碼生成、重構、專案分析以及規格驅動開發。
>
> 本篇整理從零開始的完整安裝與環境設定流程，包含各作業系統的安裝指令、Google 帳號授權以及常用的基礎操作。

## 關於 Antigravity (agy)

- **定位：** Google 官方推出的終端 CLI 工具，為舊版 Gemini CLI 的後續替代方案
- **功能：** 支援直接讀取本機專案檔案、執行命令列指令、代碼分析與自動修改
- **進階特性：** 內建多代理人（Subagents）協作、平行背景任務（Background Tasks）與現代 Skills 架構

## 系統需求與環境準備

在安裝前，需確認電腦已具備終端機環境與網路連線：

- **Windows：** 系統內建之 PowerShell（建議 PowerShell 5.1 以上或 PowerShell 7）
- **macOS / Linux：** 系統內建之 Terminal (Bash / Zsh)

## 安裝步驟

Antigravity CLI 採用獨立二進位檔分發，官方提供安裝腳本自動配置環境路徑（PATH）。

### Windows (PowerShell)

開啟 PowerShell，貼上並執行以下指令：

```powershell
irm https://antigravity.google/cli/install.ps1 | iex
```

### macOS / Linux

開啟 Terminal，貼上並執行以下指令：

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

### 驗證安裝

安裝腳本執行完成後，輸入以下指令確認版本：

```bash
agy --version
```

若能正確輸出版本號碼（例如 `agy version 1.x.x`），即表示安裝完成。

## 登入與 Google 帳號授權

初次啟動 `agy` 時需完成身份驗證：

1. **啟動 CLI：**
   ```bash
   agy
   ```
2. **瀏覽器授權：**
   - 終端機會自動開啟預設瀏覽器跳轉至 Google 授權登入頁面（若未自動彈出，可複製終端機顯示的授權網址手動開啟）
   - 登入指定的 Google 帳號並點選「允許授權」
3. **返回終端機：**
   - 瀏覽器提示登入完成後即可切換回終端機
   - 認證憑證會儲存在本地端，日後啟動無需反覆登入

## 常用操作指令

進入 `agy` 互動介面後，可使用以下常用操作：

- **自然語言互動：** 直接在終端機輸入提示詞或需求後按 Enter 發送
- **查看所有功能與指令：** 輸入 `/help` 檢視所有內建的 Slash Commands
- **退出互動介面：** 連按兩次 `Ctrl + D`，或輸入 `/exit` / `/quit`
- **清空畫面：** 輸入 `/clear` 清空目前的終端對話畫面

## 常見問題排查 (FAQ)

### 1. Windows 提示「指令碼執行被停用」 (ExecutionPolicy)
若執行安裝時 PowerShell 回報 `File ... cannot be loaded because running scripts is disabled on this system`：
- 在 PowerShell 執行以下指令以開放權限：
  ```powershell
  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- 輸入 `Y` 確認後，再重新執行安裝指令即可。

### 2. 出現 `agy: command not found`
- 通常是因為當前終端機尚未重新載入 PATH 環境變數。
- 將現有的終端機視窗完全關閉後重新開啟即可正常使用。
