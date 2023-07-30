---
sidebar_position: 5
description: 簡單工廠 (Simple Factory Pattern) 
key: [設計模式, Design Pattern, 簡單工廠, Simple Factory Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 簡單工廠

## Simple Factory Pattern

## 概述

- 他不屬於 GoF 23 經典設計模式
- 不過他常常被拿來當作學習其他工廠模式的基礎
- 主要概念為: 傳入正確參數，就可以獲得所需要的物件，而且不需知道細節
- 由於建立物件通常由靜態函式實現，因此又稱 `靜態工廠方法`

## 優缺點

- 優點:
  1. 可以將建立物件，與物件的使用分離
  2. 開發者不用知道類別的名稱，只需要知道參數的代號即可，可大幅減少使用複查命名的錯誤率
  3. 如果參數透過檔案傳入，那可以增加系統的靈活性
- 缺點:
  1. 由於它包含了所有類別的建立，因使職責極重，當他無法運作會對系統造成極大的影響
  2. 如果產品很多，容易造成系統的複雜度提高與程式可讀性降低
  3. 不易擴展，每當有新的產品加入，就不得不修改工廠邏輯

## 應用場景

1. 需建立的產品比較少，才不會對提高工廠的複雜維度
2. 客戶端只需要知道參數即可，對如何建立物件無須知道

## 範例

### 1. 建立報表介面

```csharp
public interface IChart {
     void display();
}
```

### 2. 實作介面

```csharp
public class HistogramChart:IChart {
    public void display()
    {
       // 顯示 柱狀圖
    }
}

public class PiChart:IChart {
    public void display()
    {
        // 顯示 圓餅圖
    }
}

public class LineChart:IChart {
    public void display()
    {
        // 顯示 折線圖
    }
}
```

### 3. 建立列舉

```csharp
public enum ChartType
{
    histogram,
    pie,
    line
}
```

### 4. 工廠類別

```csharp
public class Factory {
    // 靜態工廠方法
   public static IChart GetChart(ChartType chartType)
   {
    switch (chartType)
    {
        case ChartType.histogram :
            return new HistogramChart();
        case ChartType.pie :
            return new PiChart();
        case ChartType.line :
            return new LineChart();
        default:
        throw new Exception("無此類型的報表!");
    }
   }
}
```

### 5. 實際使用

```csharp
void Main()
{
    // 柱狀圖
    Factory.GetChart(ChartType.histogram).display();
    // 圓餅圖
    Factory.GetChart(ChartType.pie).display();
    // 折線圖
    Factory.GetChart(ChartType.line).display();
}
```

## 簡單工廠角色

由簡單工廠的結構中，可以歸納出以下幾個角色

### 1. 工廠角色 `Factory`

- 他是整個模式的核心，負責實現所有產品
- 應該為靜態方法
- 必須回傳抽象類別

### 2. 抽象產品角色 `Product`

- 為所有商品的父類
- 他必須定義所有商品的規格
- 也會是工廠回傳的對象

### 3. 實際產品角色 `Concrete`

- 是工廠角色實現的目標
- 必須繼承並實作抽象產品

> 由於需要對抽象商品進行重構\
> 因此商品規格不可以包山包海\
> 應該為單一層次的結構
