---
sidebar_position: 30
description: 享元模式 (Flyweight Pattern) 
key: [設計模式, Design Pattern, 門面模式 , Flyweight Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 享元模式

## 概述

享元模式是一種結構型設計模式，用於最小化或共享物件，以節省記憶體或提高性能

該模式的核心思想是將共享的狀態（也就是內部狀態）與物件的其餘部分（外部狀態）分開

這樣多個物件可以共享相同的內部狀態，從而減少記憶體使用

享元模式主要用於管理大量相似的物件，並確保它們在記憶體中僅有一個實體

這種共享的方式可用於提高系統的效率，特別是當有大量相似物件需要處理時

### 享元模式主要解決以下問題

- 優點
  - 減少記憶體消耗：享元模式允許多個物件共享相同的內部狀態，從而減少記憶體消耗
  - 提高性能：通過共享內部狀態，享元模式可以提高系統的性能，特別是在處理大量相似物件時
  - 支持大量物件：享元模式適用於需要管理大量相似物件的情況
- 缺點
  - 複雜性增加：實現享元模式可能需要引入額外的複雜性，如內部狀態的管理和外部狀態的處理

### 享元模式包含

1. 享元工廠（Flyweight Factory）：負責建立和管理享元物件，它維護一個享元池，以便重複使用享元物件
2. 享元（Flyweight）：表示一個共享的內部狀態，該狀態可以被多個物件共享，享元物件包含內部狀態和可以變化的外部狀態
3. 客戶端（Client）：使用享元物件的物件，客戶端可以通過享元工廠獲取享元物件，並設置外部狀態

## 範例

### 1. 定義享元介面

```csharp
// 享元介面
public interface IFlyweight
{
    void Operation(string externalState);
}
```

### 2. 實作具體享元類別

```csharp
// 具體享元類別
public class ConcreteFlyweight : IFlyweight
{
    private string intrinsicState; // 內部狀態

    public ConcreteFlyweight(string intrinsicState)
    {
        this.intrinsicState = intrinsicState;
    }

    public void Operation(string externalState)
    {
        Console.WriteLine($"內部狀態：{intrinsicState}, 外部狀態：{externalState}");
    }
}
```

### 3. 實作享元工廠

```csharp
// 享元工廠
public class FlyweightFactory
{
    private Dictionary<string, IFlyweight> flyweights = new Dictionary<string, IFlyweight>();

    public IFlyweight GetFlyweight(string key)
    {
        if (!flyweights.ContainsKey(key))
        {
            flyweights[key] = new ConcreteFlyweight(key);
        }
        return flyweights[key];
    }
}
```

### 4. 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        FlyweightFactory factory = new FlyweightFactory();

        IFlyweight flyweight1 = factory.GetFlyweight("A");
        flyweight1.Operation("X");

        IFlyweight flyweight2 = factory.GetFlyweight("B");
        flyweight2.Operation("Y");

        IFlyweight flyweight3 = factory.GetFlyweight("A");
        flyweight3.Operation("Z");
    }
}
```

### 5. 結果

- 輸出:

```text
內部狀態：A, 外部狀態：X
內部狀態：B, 外部狀態：Y
內部狀態：A, 外部狀態：Z
```

---

享元模式允許共享內部狀態，從而減少記憶體消耗並提高性能，這在需要處理大量相似物件的情況下特別有用，通過將內部狀態和外部狀態分離，享元模式實現了對物件的有效共享
