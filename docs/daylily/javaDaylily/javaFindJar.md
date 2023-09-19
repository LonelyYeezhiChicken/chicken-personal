---
sidebar_position: 30
description: 使用 power shell 搜尋 class 來自哪個 jar
key: [java, 雜記]
tags: [java, java雜記]
---

# 👩‍💻 搜尋 class 來自哪個 jar

## 環境

> OS: windows11
>
> power shell

## 用途

> 使用 class name 搜尋這個 class 來自目錄底下哪個 jar

- 先移動到目錄
  
```shell
cd [目錄]
```

```shell
Get-ChildItem -Recurse -Filter "*.jar" | ForEach-Object {
    $jarFile = $_.FullName
    $result = jar tf $jarFile 2>&1 | Select-String -Pattern "[class name].class"
    if ($result) {
        Write-Host "Found in $jarFile"
    }
}
```
