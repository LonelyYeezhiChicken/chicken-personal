---
sidebar_position: 25
description: 門面模式  (Facade  Pattern) 
key: [設計模式, Design Pattern, 門面模式 , Facade  Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 門面模式

## 概述

門面模式（Facade Pattern）是一種結構型設計模式，它提供了一個簡化介面，用於較大、更複雜或不同系統中的一組介面互動

該模式旨在隱藏系統的複雜性，並為客戶端提供一個更簡單和統一的界面

在門面模式中，通常有一個稱為 `門面` 的類，它包裝了系統的一組複雜子系統，同時向客戶端提供一個簡單的介面，以便客戶端可以與子系統進行互動，而不必了解子系統的內部工作

## 門面模式的主要優點包括

- 封裝複雜性：它允許客戶端與系統的複雜性隔離，只需與門面互動，而不必理解系統的內部複雜性
- 簡化介面：提供了一個簡單的介面，以便客戶端能夠輕鬆使用系統的功能
- 降低耦合度：客戶端只與門面互動，而不必直接與多個子系統互動，從而降低了系統中各個組件之間的耦合度

## 範例

### 1. 定義多個子系統

```csharp
// 定義多個子系統
public class SubSystemA
{
    public void OperationA()
    {
        Console.WriteLine("SubSystemA Operation");
    }
}

public class SubSystemB
{
    public void OperationB()
    {
        Console.WriteLine("SubSystemB Operation");
    }
}

public class SubSystemC
{
    public void OperationC()
    {
        Console.WriteLine("SubSystemC Operation");
    }
}
```

### 2. 定義門面

```csharp
// 定義門面
public class Facade
{
    private SubSystemA systemA;
    private SubSystemB systemB;
    private SubSystemC systemC;

    public Facade()
    {
        systemA = new SubSystemA();
        systemB = new SubSystemB();
        systemC = new SubSystemC();
    }

    public void PerformOperation()
    {
        Console.WriteLine("Facade is performing operations...");
        systemA.OperationA(); // 與子系統A互動
        systemB.OperationB(); // 與子系統B互動
        systemC.OperationC(); // 與子系統C互動
    }
}
```

### 3. 主程式

```csharp
class Program
{
    static void Main(string[] args)
    {
        Facade facade = new Facade(); // 創建門面物件
        facade.PerformOperation(); // 執行門面操作
    }
}
```

### 4. 結果

> Facade is performing operations...
>
> SubSystemA Operation
>
> SubSystemB Operation
>
> SubSystemC Operation
