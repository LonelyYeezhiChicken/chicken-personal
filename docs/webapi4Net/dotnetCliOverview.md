---
sidebar_position: 6
description: dotnet CLI 概觀
key: [dotnet CLI, ASP.NET, C#]
tags: [dotnet CLI, C#, ASP.NET]
---

# 🛰 dotnet CLI 概觀

## 什麼是 dotnet CLI

> dotnet CLI (Command Line Interface) 是一個跨平台的命令列工具，允許開發者使用命令列來建立、編譯、運行及發布 .NET 應用程式

## 基本概念

### dotnet CLI 的優勢

- **跨平台**：dotnet CLI 可以在 Windows、macOS 和 Linux 上運行
- **輕量且高效**：通過命令列進行開發，可以減少對 IDE 的依賴
- **自動化**：能夠輕鬆地整合到 CI/CD 管道中，支持自動化的構建和部署流程
- **模組化**：支持不同的 SDK 和工具，可以根據需求擴展功能

## 常用命令

### 初始化與建立專案

- `dotnet new`：建立新的 .NET 專案或文件

  ```bash
  dotnet new console -n MyConsoleApp
  ```

- 查詢可以使用的範本

  ```bash
  dotnet new list
  ```

> 此命令將建立一個名為 `MyConsoleApp` 的新的控制台應用程式

### 恢復依賴項

- `dotnet restore`：恢復專案所需的 NuGet 套件

  ```bash
  dotnet restore
  ```

### 構建專案

- `dotnet build`：編譯專案並生成組件

  ```bash
  dotnet build
  ```

### 執行應用程式

- `dotnet run`：編譯並運行應用程式

  ```bash
  dotnet run
  ```

### 發布應用程式

- `dotnet publish`：發布應用程式以供部署

  ```bash
  dotnet publish -c Release -o ./publish
  ```

> 此命令將在 `Release` 配置下發布應用程式並將其輸出到 `./publish` 目錄中

## dotnet CLI 的常見應用場景

### 開發和測試

開發者可以使用 `dotnet new` 命令快速建立新的應用程式專案

並使用 `dotnet run` 命令在本地進行測試

`dotnet test` 命令可以用來運行單元測試，確保代碼質量

### CI/CD

在持續整合和持續部署 (CI/CD) 管道中，dotnet CLI 可以用來自動化構建、測試和部署流程

常用的命令如 `dotnet build`、`dotnet test` 和 `dotnet publish` 等，都可以整合到 CI/CD 腳本中

### 部署

使用 `dotnet publish` 命令可以生成適合於部署的應用程式包，並可選擇不同的目標框架和運行時

這些發布包可以部署到各種環境，如雲端服務器、容器和本地伺服器等

## 常用指令集

| 指令                    | 說明                                                             | 範例                                           |
|-------------------------|------------------------------------------------------------------|------------------------------------------------|
| `dotnet new`            | 建立新的 .NET 專案或文件                                         | `dotnet new console -n MyConsoleApp`           |
| `dotnet new list`       | 列出所有可用的模板                                               | `dotnet new list`                              |
| `dotnet restore`        | 恢復專案所需的 NuGet 套件                                       | `dotnet restore`                               |
| `dotnet build`          | 編譯專案並生成組件                                               | `dotnet build`                                 |
| `dotnet run`            | 編譯並運行應用程式                                               | `dotnet run`                                   |
| `dotnet publish`        | 發布應用程式以供部署                                             | `dotnet publish -c Release -o ./publish`       |
| `dotnet test`           | 執行單元測試                                                     | `dotnet test`                                  |
| `dotnet clean`          | 清理專案生成的中間文件                                           | `dotnet clean`                                 |
| `dotnet pack`           | 建立 NuGet 套件                                                  | `dotnet pack -c Release -o ./nupkgs`           |
| `dotnet add package`    | 向專案中新增 NuGet 套件                                          | `dotnet add package Newtonsoft.Json`           |
| `dotnet remove package` | 從專案中移除 NuGet 套件                                          | `dotnet remove package Newtonsoft.Json`        |
| `dotnet list package`   | 列出專案中使用的所有 NuGet 套件                                  | `dotnet list package`                          |
| `dotnet --version`      | 顯示已安裝的 .NET SDK 版本                                       | `dotnet --version`                             |
| `dotnet tool install`   | 安裝 .NET 全域工具                                               | `dotnet tool install -g dotnet-ef`             |
| `dotnet tool update`    | 更新 .NET 全域工具                                               | `dotnet tool update -g dotnet-ef`              |
| `dotnet tool uninstall` | 移除 .NET 全域工具                                               | `dotnet tool uninstall -g dotnet-ef`           |
| `dotnet sln`            | 管理 .NET 解決方案                                               | `dotnet sln add MyProject/MyProject.csproj`    |
| `dotnet migrate`        | 將專案從 project.json 轉換為 .csproj                             | `dotnet migrate`                               |
| `dotnet nuget`          | 管理 NuGet 組件                                                  | `dotnet nuget push MyPackage.nupkg -k MyKey`   |
| `dotnet publish`        | 發布應用程式以供部署                                             | `dotnet publish -c Release -o ./publish`       |
| `dotnet watch`          | 自動重建和運行應用程式                                           | `dotnet watch run`                             |
| `dotnet dev-certs`      | 管理開發用的 HTTPS 憑證                                          | `dotnet dev-certs https --trust`               |
| `dotnet ef`             | 使用 Entity Framework Core 的命令列工具                          | `dotnet ef migrations add InitialCreate`       |

## 參考

- [dotnet CLI 官方文檔](https://docs.microsoft.com/zh-tw/dotnet/core/tools/)
