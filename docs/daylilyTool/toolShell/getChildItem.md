---
sidebar_position: 10
description: PowerShell 關鍵字查詢
key: [PowerShell, tool, windows, CMD]
tags: [PowerShell, tool, windows, CMD]
---

# 🧊 PowerShell 關鍵字查詢

## 目錄底下查詢

- 在目錄底下查詢，所有檔案

```shell
Get-ChildItem -File -Recurse | ForEach-Object {Get-Content $_.FullName | Select-String -Pattern "要查詢的字串"}
```

- 在目錄底下查詢，所有檔案，並列出檔案位置

```shell
Get-ChildItem -File -Recurse | ForEach-Object { $file = $_; Get-Content $file.FullName | Select-String -Pattern "要查詢的字串" | ForEach-Object { "{0} from {1}" -f $_.Line, $file.FullName } }
```
