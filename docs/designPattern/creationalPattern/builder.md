---
sidebar_position: 5
description: 創造者模式 (Builder Pattern) 
key: [設計模式, Design Pattern, 創造者模式, Builder Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 創造者模式

## Builder Pattern

## 概述

- 它適用於各式物件都需分開建立的複雜情境
- 優點:
  - 容易擴充
  - 有一個統一的介面來規範複雜物件的建立
  - 分開了物件的建立過程，讓物件建立過程可以建立不同的組合
- 缺點:
  - 在需求複雜度增加時，需要更多的類別來建立物件，導致開發與維護成本提高

### 創造者模式包含

- 創造者介面 (Builder interface): 規範建立物件所需要的方法
- 具體創造者 (Concrete Builder): 實作創造者介面的功能
- 指揮者 (Director): 負責處理建立流程
- 產品 (Product): 要被建立的物件

## 範例

- 需求: 我需要建立一棟房子，房子要有門、有窗、有牆

### 1. 先定義產品 - 房子

```csharp
    internal class House
    {
        /// <summary>
        /// 門
        /// </summary>
        public string Door { get; set; }
        /// <summary>
        /// 牆
        /// </summary>
        public string Wall { get; set; }
        /// <summary>
        /// 窗戶
        /// </summary>
        public string Window { get; set; }

        public override string ToString()
        {
            return $"房子包含: {Door}、{Wall}、{Window}";
        }
    }
```

### 2. 定義創造者介面

```csharp
    internal abstract class Builder
    {
        public abstract void BuildDoor();
        public abstract void BuildWall();
        public abstract void BuildWindow();
        public abstract House GetProduct();
    }
```

### 3. 實作創造者介面 - 具體創造者

```csharp
    internal class ConcreteBuilder : Builder
    {
        private House _product = new();

        public override void BuildDoor()
        {
            _product.Door = "門";
        }

        public override void BuildWall()
        {
            _product.Wall = "牆壁";
        }

        public override void BuildWindow()
        {
            _product.Window = "窗戶";
        }

        public override House GetProduct()
        {
            return _product;
        }
    }
```

### 4. 建立指揮者

```csharp
    internal class Director
    {
        public static void Construct(Builder builder)
        {
            builder.BuildDoor();
            builder.BuildWall();
            builder.BuildWindow();
        }
    }
```

### 5. 客戶端使用

```csharp
Builder builder = new ConcreteBuilder();
Director.Construct(builder);

var house = builder.GetProduct();

Console.WriteLine(house.ToString());
```

### 6.結果

- 輸出:

```text
房子包含: 門、牆壁、窗戶
```
