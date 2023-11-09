---
sidebar_position: 5
description: PowerShell 常用指令
key: [PowerShell, tool, windows, CMD]
tags: [PowerShell, tool, windows, CMD]
---

# 🧊 PowerShell 常用指令

## 常見的 PowerShell 指令

### **`Get-Help`**

- 獲取指令的幫助資訊，可以使用 `-Name` 參數指定指令名稱

```powershell
Get-Help Get-Process
```

### **`Get-Command`**

- 獲取系統中所有可用的指令

### **`Get-Process`**

- 顯示目前系統上運行的 Process 列表

### **`Get-Service`**

- 顯示系統服務的資訊，例如啟動狀態和服務名稱

### **`Get-EventLog`**

- 檢索系統事件日誌的內容

### **`Set-ExecutionPolicy`**

- 設置 PowerShell 腳本執行策略

```powershell
Set-ExecutionPolicy RemoteSigned
```

### **`Get-Host`**

- 顯示 PowerShell 主機資訊，包括版本號和運行環境

### **`cd`**

- 切換當前目錄

```shell
cd C:\Users
```

### **`dir`**

- 顯示當前目錄中的文件和子目錄

### **`Copy-Item`**

- 複製文件或文件夾

```powershell
Copy-Item C:\source\fileTxt C:\destination\
```

### **`Remove-Item`**

- 刪除文件或文件夾

```powershell
Remove-Item C:\path\to\fileTxt
```

### **`New-Item`**

- 建立新的文件或文件夾

```powershell
New-Item -ItemType File -Path C:\path\to\newFileTxt
```

### **`Restart-Computer`**

- 重新啟動電腦

### **`Stop-Process`**

- 停止指定的 Process

```powershell
Stop-Process -Name notepad
```

### **`Test-Connection`**

- 測試與目標主機的連接

```powershell
Test-Connection google.com
```

### **`ipconfig`**

- 確認本機 ip

### **`ipconfig -all`**

- 確認本機 ip 的詳細資訊
