---
sidebar_position: 20
description: 裝飾者模式  (Decorator Pattern) 
key: [設計模式, Design Pattern, 裝飾者模式 , Decorator Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 裝飾者模式

## 概述

裝飾者模式是一種結構型設計模式，它允許你在不修改現有物件的情況下，動態地將新行為添加到物件這種模式是繼承的一個替代方案，可以用來擴充 class 的功能

裝飾者模式通常涉及一個抽象組件（Component），具體組件（ConcreteComponent），裝飾者（Decorator），以及具體裝飾者（ConcreteDecorator）抽象組件定義了介面，具體組件實現了具體的功能，裝飾者包含一個指向抽象組件的引用並實現了相同的介面，具體裝飾者擴充了裝飾者並添加了新的功能

## 裝飾者模式的主要優點

- 靈活性：你可以動態添加新功能，而不需要修改現有代碼
- 開放/封閉原則：不需要修改現有代碼，就可以擴充物件的行為
- 簡單性：你可以用多個簡單的裝飾者組合來實現複雜的功能，而不需要一個龐大的類層次結構

## 裝飾者模式的範例

### 1. 定義 Component 介面

```csharp
public interface IComponent
{
    void Operation();
}
```

### 2. 定義具體組件

```csharp
public class ConcreteComponent : IComponent
{
    public void Operation()
    {
        Console.WriteLine("具體組件操作");
    }
}
```

### 3. 定義裝飾者抽象類別

```csharp
public abstract class Decorator : IComponent
{
    protected IComponent component;

    public Decorator(IComponent component)
    {
        this.component = component;
    }

    public virtual void Operation()
    {
        component.Operation();
    }
}
```

### 4. 定義具體裝飾者

```csharp
public class ConcreteDecoratorA : Decorator
{
    public ConcreteDecoratorA(IComponent component) : base(component)
    {
    }

    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("具體裝飾者 A 的操作");
    }
}
```

```csharp
public class ConcreteDecoratorB : Decorator
{
    public ConcreteDecoratorB(IComponent component) : base(component)
    {
    }

    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("具體裝飾者 B 的操作");
    }
}
```

### 5. 主程式

```csharp
class Program
{
    static void Main(string[] args)
    {
        IComponent component = new ConcreteComponent();
        Decorator decoratorA = new ConcreteDecoratorA(component);
        Decorator decoratorB = new ConcreteDecoratorB(decoratorA);

        decoratorB.Operation();
    }
}
```

### 6. 結果

> 具體組件操作
>
> 具體裝飾者 A 的操作
>
> 具體裝飾者 B 的操作
