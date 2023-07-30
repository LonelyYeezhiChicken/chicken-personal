---
sidebar_position: 10
description: 橋接模式  (Bridge Pattern) 
key: [設計模式, Design Pattern, 橋接模式 , Bridge Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 橋接模式

## Bridge Pattern

## 概述

橋接模式用於將抽象部分和實作部分分離，使它們可以獨立地變化。這種模式允許把一個類別的實作與其抽象部分分離，從而能夠在兩者之間建立一個橋樑

### 橋接模式主要解決以下問題

- 優點
  - 分離抽象和實作：橋接模式讓抽象和實作可以獨立地變化，讓它們之間解耦。這樣一來，修改實作部分不會影響抽象部分的代碼，反之亦然
  - 增加擴展性：橋接模式允許在抽象和實作之間增加新的子類別，從而擴展系統的功能
  - 改善可讀性：橋接模式可以讓複雜的類別拆分成兩個獨立的層次，提高代碼的可讀性和可維護性
- 缺點
  - 增加類別數量：橋接模式引入了多個額外的類別，這可能會增加系統的複雜性。
  - 設計過度：如果對系統中的每一個類別都應用橋接模式，而且沒有足夠的理由去這麼做，可能會造成設計過度

### 橋接模式包含

1. 抽象化（Abstraction）角色：
   - 定義了抽象部分的介面，通常包含高層次的操作，並且可能包含對實作部分的參考
   - 可以是抽象類別或介面
2. 具體抽象化（Refined Abstraction）角色：
   - 是抽象化角色的具體實現
   - 通常為抽象類別的子類別
3. 實作化（Implementor）角色：
   - 定義了實作部分的介面，通常包含低層次的操作
   - 可以是抽象類別或介面
4. 具體實作化（Concrete Implementor）角色：
   - 是實作化角色的具體實現
   - 通常為實作化類別的子類別

## 範例

### 1. 定義實作化（Implementor）角色

```csharp
// 實作化角色 - 引擎介面
public interface IEngine
{
    void Start();
}
```

### 2. 實作具體實作化（Concrete Implementor）角色

```csharp
// 具體實作化角色 - 汽油引擎
public class PetrolEngine : IEngine
{
    public void Start()
    {
        Console.WriteLine("汽油引擎啟動！");
    }
}

// 具體實作化角色 - 電動引擎
public class ElectricEngine : IEngine
{
    public void Start()
    {
        Console.WriteLine("電動引擎啟動！");
    }
}

```

### 3. 定義抽象化（Abstraction）角色

```csharp
// 抽象化角色
public abstract class Car
{
    // 引擎
    protected IEngine engine;

    // 注入引擎
    public Car(IEngine engine)
    {
        this.engine = engine;
    }

    // 啟動
    public abstract void Drive();
}
```

### 4. 實作具體抽象化（Refined Abstraction）角色

```csharp
// 具體抽象化角色 - 跑車
public class SportsCar : Car
{
    public SportsCar(IEngine engine) : base(engine)
    {
    }

    public override void Drive()
    {
        Console.WriteLine("跑車啟動！");
        engine.Start();
    }
}

// 具體抽象化角色 - 越野車
public class SUV : Car
{
    public SUV(IEngine engine) : base(engine)
    {
    }

    public override void Drive()
    {
        Console.WriteLine("越野車啟動！");
        engine.Start();
    }
}
```

### 5. 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 創建汽車實例並使用汽油引擎
        Car sportsCar = new SportsCar(new PetrolEngine());
        sportsCar.Drive();

        // 創建汽車實例並使用電動引擎
        Car suvCar = new SUV(new ElectricEngine());
        suvCar.Drive();
    }
}
```

### 6. 結果

- 輸出:

```text
跑車啟動！
汽油引擎啟動！
越野車啟動！
電動引擎啟動！
```
