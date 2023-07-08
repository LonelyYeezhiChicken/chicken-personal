---
sidebar_position: 1
description: 原型模式 (Prototype Pattern) 
key: [設計模式, Design Pattern, 原型模式, Prototype Pattern]
---

# 原型模式
## Prototype Pattern
### 概述:

- 可複製一個物件，並把原有的狀態都傳遞給新的物件
- 優點: 可以降低建立物件的成本
- 缺點: 如需要實現 ICloneable 介面, 有時會使程式碼變得複雜，也不容易控制物件的狀態

### 原型模式包含:

1. 原型介面（Prototype Interface）：定義了用於創建複製的方法
2. 原型物件 （Concrete Prototype）： 實作原型介面的類別
3. 客戶端（Client）：使用原型創建新物件

### 範例:

- 今天有一個定義 x y 的類別，我需要複製並沿用他的 x y 設定

### 1. 首先定義一個原型 interface

```csharp
    internal interface IPrototype
    {
        IPrototype Clone();
    }
```

### 2. 建立定義 x y 的類別

```csharp
    internal class ConcretePrototypeA : IPrototype
    {
        public int x;
        public int y;
        public string? Name;

        /// <summary>
        ///  深拷貝介面
        /// </summary>
        /// <returns></returns>
        public IPrototype Clone()
        {
            return (IPrototype)MemberwiseClone();
        }

        public override string ToString()
        {
            return $"x = {x}, y = {y}, Name = {Name}";
        }
    }
```

### 3. 使用

```csharp
ConcretePrototypeA prototypeA = new()
{
    x = 1,
    y = 2,
    Name = "ProtoTypeA"
};
Console.WriteLine(prototypeA.ToString());

ConcretePrototypeA prototypeAClone = (ConcretePrototypeA)prototypeA.Clone();
prototypeAClone.Name = "ProtoTypeAClone";
Console.WriteLine(prototypeAClone.ToString());
```

### 4. 結果
- 輸出:

```text
x = 1, y = 2, Name = ProtoTypeA
x = 1, y = 2, Name = ProtoTypeAClone
```
