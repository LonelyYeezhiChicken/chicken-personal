---
sidebar_position: 40
description: Tomcat 切換 JVM 版本
key: [java, 雜記, Tomcat, JVM]
tags: [java, java雜記, JVM, Tomcat]
---

# 👩‍💻 Tomcat 切換 JVM 版本

> 要將在 Windows 上以服務方式運行的 Tomcat 服務從使用 JDK 21 切換到 JDK 1.8
>
> 可以透過修改服務設定來指定 JDK 的路徑

## 1. 確認 JDK 1.8 的安裝路徑

> 確認已經安裝了 JDK 1.8，並記下其安裝路徑
>
> 可能是 `C:\Program Files\Java\jdk1.8.0_XX`

## 2. 修改 Tomcat 服務的配置

> 在 Tomcat 已設為服務的前提之下
>
> 可以使用 `tomcatXw.exe`（X 代表 Tomcat 版本，例如 `tomcat9w.exe`）工具來更改 JDK 的路徑
>
> 這個工具位於 Tomcat 安裝目錄下的 `bin` 文件夾

### 步驟如下

  1. 打開命令提示符（CMD）
  2. 移動到 Tomcat 的 `bin` 目錄
  3. 執行以下命令來啟動 Tomcat 服務配置界面
  4. 將 `<TomcatVersion>` 替換成實際 Tomcat 版本，例如 `tomcat9`

   ```bash
   .\<TomcatVersion>w.exe //ES//<服務名稱>
   ```

   如果 Tomcat 版本是 9 並且服務名稱是 `ServiceApp`，則輸入：

   ```bash
   .\tomcat9w.exe //ES//ServiceApp
   ```

> 在配置界面中，找到「Java」標籤頁
>
> 在「Java Virtual Machine」框中，更新 JDK 的路徑為 JDK 1.8 的路徑
>
> 例如 `C:\Program Files\Java\jdk1.8.0_XX\bin\server\jvm.dll`

## 3. 重啟 Tomcat 服務

更改完成後，你需要重啟 Tomcat 服務來應用這些更改，

這可以通過服務管理員（services.msc）來完成，找到 Tomcat 服務，先停止它，然後再啟動
