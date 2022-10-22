## 簡單工廠概述:
- 他不屬於GoF 23經典設計模式
- 不過他常常被拿來當作學習其他工廠模式的基礎
- 主要概念為: 傳入正確參數，就可以獲得所需要的物件，而且不需知道細節
- 由於建立物件通常由靜態函式實現，因此又稱 `靜態工廠方法`

### 範例: 
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

## 簡單工廠角色:
### 由簡單工廠的結構中，可以歸納出以下幾個角色
1. 工廠角色 `Factory` : 
   - 他是整個模式的核心，負責實現所有產品
   - 應該為靜態方法
   - 必須回傳抽象類別
2. 抽象產品角色 `Product` :
   - 為所有商品的父類
   - 他必須定義所有商品的規格
   - 也會是工廠回傳的對象
3. 實際產品角色 `Concrete` :
   - 是工廠角色實現的目標
   - 必須繼承並實作抽象產品

> 由於需要對抽象商品進行重構\
> 因此商品規格不可以包山包海\
> 應該為單一層次的結構