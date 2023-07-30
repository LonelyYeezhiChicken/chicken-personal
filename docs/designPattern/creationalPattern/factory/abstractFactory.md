---
sidebar_position: 10
description: 抽象工廠 (Abstract Factory) 
key: [設計模式, Design Pattern, 抽象工廠, Abstract Factory]
tags: [設計模式, Design Pattern]
---

# 💡 抽象工廠

## Abstract Factory

## 概述

- 他用於創建物件的類別
- 提供一個 interface ，並且建立相關的物件
- 在使用時不用去指定他具體的類別

## 範例

- 首先我們有一個需求，會有一個車廠來生產各式車輛

### 1. 先建立一個汽車的 interface

```csharp
    internal interface ICar
    {
        /// <summary>
        /// 取得車種
        /// </summary>
        /// <returns>車種</returns>
        string GetCarType();
    }
```

### 2. 實作 `跑車` 與 `家庭車` 類別

```csharp
    /// <summary>
    /// 跑車
    /// </summary>
    internal class SportsCar : ICar
    {
        /// <summary>
        /// 取得車種
        /// </summary>
        /// <returns>跑車</returns>
        public string GetCarType()
        {
            return "Sports Car";
        }
    }

    /// <summary>
    /// 家庭式
    /// </summary>
    internal class FamilyCar : ICar
    {
        /// <summary>
        /// 取得車種
        /// </summary>
        /// <returns>家庭車</returns>
        public string GetCarType()
        {
            return "Family Car";
        }
    }
```

### 3. 建立抽象工廠 interface

```csharp
    internal interface ICarFactory
    {
        /// <summary>
        /// 創建車輛實體
        /// </summary>
        /// <returns></returns>
        ICar CreateCar();
    }
```

### 4. 實作 `跑車工廠` 與 `家庭車工廠`

```csharp
    /// <summary>
    /// 跑車工廠
    /// </summary>
    internal class SportsCarFactory : ICarFactory
    {
        /// <summary>
        /// 取得車輛實體
        /// </summary>
        /// <returns></returns>
        public ICar CreateCar()
        {
            return new SportsCar();
        }
    }

    /// <summary>
    /// 家庭車工廠
    /// </summary>
    internal class FamilyCarFactory : ICarFactory
    {
        /// <summary>
        /// 取得車輛實體
        /// </summary>
        /// <returns></returns>
        public ICar CreateCar()
        {
            return new FamilyCar();
        }
    }
```

### 5. 實際生產

```csharp

ICarFactory factory;

Console.WriteLine("請輸入要生產的車種代號:");
Console.WriteLine(@"1. 跑車
2. 家庭車");

string carNo = Console.ReadLine();

switch (carNo)
{
    case "1":
        factory = new SportsCarFactory();
        break;
    case "2":
        factory = new FamilyCarFactory();
        break;
    default:
        throw new Exception("無此車種");
}

ICar car = factory.CreateCar();
Console.WriteLine($"生產 {car.GetCarType()} X 1");
```

### 6. 結果

- 輸入 `1`
- 輸出

```text
請輸入要生產的車種代號:
1. 跑車
2. 家庭車
1
生產 Sports Car X 1
```

- 輸入 `2`
- 輸出

```text
請輸入要生產的車種代號:
1. 跑車
2. 家庭車
2
生產 Family Car X 1
```
