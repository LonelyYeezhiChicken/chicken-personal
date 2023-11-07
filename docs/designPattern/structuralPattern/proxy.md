---
sidebar_position: 35
description: 代理模式 (Proxy Pattern) 
key: [設計模式, Design Pattern, 代理模式 , Proxy Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 代理模式

## 概述

代理模式是一種結構型設計模式，用於控制對其他物件的呼叫，它提供了一個代理物件，允許代理物件控制客戶端對實際物件的呼叫

代理模式的核心思想是在不改變實際物件的情況下，提供一個代理物件，客戶端通過代理物件呼叫實際物件

這可以用於實現不同的功能，例如遠程代理、虛擬代理、保護代理等

### 代理模式主要解決以下問題

- 優點
  - 遠程代理：代理模式可以用於實現遠程代理，允許客戶端呼叫遠程物件，就像呼叫本地物件一樣
  - 虛擬代理：代理模式可以用於實現虛擬代理，延遲實際物件的創建和初始化，以提高性能
  - 保護代理：代理模式可以用於實現保護代理，控制客戶端對實際物件的呼叫權限
- 缺點
  - 增加複雜性：引入代理物件可能增加系統的複雜性，需要額外的代理類別和代理邏輯
  
### 代理模式包含以下角色

1. 客戶端（Client）：使用代理物件的物件，不直接呼叫實際物件，而是通過代理物件進行呼叫。
2. 抽象主題（Subject）：定義了實際物件和代理物件的共同介面，客戶端通常面向此介面進行呼叫。
3. 實際主題（Real Subject）：實際的物件，代理模式的目的是控制對實際主題的呼叫。
4. 代理（Proxy）：代理物件，實現了抽象主題介面，通常包含對實際主題的引用，並在必要時對呼叫進行控制。

## 範例

### 1. 定義抽象主題

```csharp
// 抽象主題
public interface ISubject
{
    void Request();
}
```

### 2. 實作實際主題

```csharp
// 實際主題
public class RealSubject : ISubject
{
    public void Request()
    {
        Console.WriteLine("執行實際主題的請求");
    }
}
```

### 3. 實作代理

```csharp
// 代理
public class Proxy : ISubject
{
    private RealSubject realSubject;

    public void Request()
    {
        if (realSubject == null)
        {
            realSubject = new RealSubject();
        }

        // 在這裡可以添加控制邏輯

        realSubject.Request();
    }
}
```

### 4. 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        ISubject subject = new Proxy();
        subject.Request();
    }
}
```

### 5. 結果

- 輸出:

```text
執行實際主題的請求
```

---

> 在這個範例中，代理模式允許代理物件（`Proxy`）控制對實際主題（`RealSubject`）的呼叫
>
> 客戶端通過代理物件呼叫實際主題，並且代理物件可以在必要時添加控制邏輯，而不需要改變實際主題的程式碼
>
> 這種結構可以用於實現各種代理功能，例如遠程代理、虛擬代理、保護代理等。
