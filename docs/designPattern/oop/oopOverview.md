---
sidebar_position: 1
description: 設計模式筆記 
key: [設計模式, Design Pattern]
tags: [設計模式, Design Pattern,物件導向設計原則]
---

#  物件導向設計原則概述

### 物件導向設計

- 物件導向設計中主要目標為增加系統的可維護性與複用性
- 最常見的物件導向設計原則為 SOLID

| 名稱                                               | 定義                                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 單一責任原則 (SRP) Single Responsibility Principle | 一個類別應該只有一個改變的理由！ A class should have only one reason to change                                                                                      |
| 開放封閉原則 (OCP) Open Closed Principle           | 軟體實體 (類別、模組、函式等) 應能開放擴充但封閉修改 Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification |
| 里氏替換原則 (LSP) Liskov Substitution Principle   | 子型別必需可替換為他的基底型別 Subtypes must be substitutable for their base types                                                                                  |
| 介面隔離原則 (ISP) Interface Segregation Principle | 多個用戶端專用的介面優於一個通用需求介面 Many client specific interfaces are better than one general purpose interface                                              |
| 依賴反轉原則 (DIP) Dependency Inversion Principle  | 抽象不應該相依於細節。而細節則應該相依於抽象 Abstractions should not depend on details. Details should depend on abstractions                                       |
