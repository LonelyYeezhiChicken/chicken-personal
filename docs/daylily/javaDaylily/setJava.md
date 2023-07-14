---
sidebar_position: 0
description: Spring Data JPA 與 Hibernate 的關係
key: [java, 雜記, 環境變數]
tags: [java, java雜記]
---

# 👩‍💻 JDK與環境變數安裝
## JAVA 優點:

- 跨平台
- 物件導向特性
- 廣泛應用於企業及 Web 應用開發和行動應用開發。

## 編譯語言轉譯過程:

原始碼（Source code）-> 編譯器（Compiler）-> 機器碼（Machine code）

## 環境安裝:

1.JDK下載   [官網載點](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)

![https://ithelp.ithome.com.tw/upload/images/20220413/20097001cTNzcx5W0D.png](https://ithelp.ithome.com.tw/upload/images/20220413/20097001cTNzcx5W0D.png)

2.設定環境變數

• 進入環境變數設定介面

![https://ithelp.ithome.com.tw/upload/images/20220413/20097001eJdlBm4HW6.png](https://ithelp.ithome.com.tw/upload/images/20220413/20097001eJdlBm4HW6.png)

• 點選環境變數

![https://ithelp.ithome.com.tw/upload/images/20220413/20097001uQotXCHtm0.png](https://ithelp.ithome.com.tw/upload/images/20220413/20097001uQotXCHtm0.png)

• 點選Path

![https://ithelp.ithome.com.tw/upload/images/20220413/20097001cldSlQXj14.png](https://ithelp.ithome.com.tw/upload/images/20220413/20097001cldSlQXj14.png)

• 將JDK的bin路徑加入
• 預設路徑為:C:\Program Files\Java\jdk-17.0.1\bin
• 開啟CMD
• 輸入 `javac`
• 跑出許多JAVA資訊表示新增成功
**IDE**
1. VS Code  [官方載點](https://code.visualstudio.com/)
2. eclipse  [官方載點](https://www.eclipse.org/downloads/packages/)
3. IntelliJ IDEA  [官方載點](https://www.jetbrains.com/idea/)

**VS Code**
• 安裝java extension pack，安裝完重啟

![https://ithelp.ithome.com.tw/upload/images/20220413/20097001T8FSXVmNby.png](https://ithelp.ithome.com.tw/upload/images/20220413/20097001T8FSXVmNby.png)

**gitignore**
• 用來過濾不需要上傳的檔案/.settings/  

```shell

/target/  
# built application files  
*.apk  
*.ap_  
# files for the dex VM  
*.dex  
# Java class files  
*.class  
*.jar  
# generated files  
bin/  
gen/  
# Eclipse project files  
.classpath  
.project  
.DS_Store
```