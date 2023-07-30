---
sidebar_position: 15
description: Liskov substitution principle
key: [設計模式, Design Pattern, 物件導向設計原則, Liskov substitution principle, 里氏替換原則]
tags: [設計模式, Design Pattern,物件導向設計原則]
---

# 💡 里氏替換原則

## Liskov substitution principle

- 子類別可以擴充父類的功能，但不可以改變它原有的功能
- 實作繼承後，需要確保他的型別被轉換後還可以獲得正確的結果
- 只有在類別之間是 is-a 關係時才能用繼承

## 必須符合四個繼承的規範

1. 完全實作父類的方法
2. 子類別可以擁有他自己的特性
3. Overload 時要注意傳入參數型別的父子關係
4. 輸出的父子關係也需要注意

## 範例

```csharp
using System;

// 父類 Animal
public class Animal
{
    // 父類方法 MakeSound
    public virtual void MakeSound()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

// 子類 Dog
public class Dog : Animal
{
    // 子類重寫父類方法 MakeSound
    public override void MakeSound()
    {
        Console.WriteLine("The dog barks.");
    }

    // 子類自己的方法 Fetch
    public void Fetch()
    {
        Console.WriteLine("The dog fetches the ball.");
    }
}

// 子類 Cat
public class Cat : Animal
{
    // 子類重寫父類方法 MakeSound
    public override void MakeSound()
    {
        Console.WriteLine("The cat meows.");
    }

    // 子類自己的方法 Scratch
    public void Scratch()
    {
        Console.WriteLine("The cat scratches the furniture.");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // 使用父類引用變數指向子類對象
        Animal animal1 = new Dog();
        animal1.MakeSound();  // 輸出: The dog barks.

        Animal animal2 = new Cat();
        animal2.MakeSound();  // 輸出: The cat meows.

        // 調用子類特有的方法
        Dog dog = new Dog();
        dog.Fetch();  // 輸出: The dog fetches the ball.

        Cat cat = new Cat();
        cat.Scratch();  // 輸出: The cat scratches the furniture.
    }
}
```
