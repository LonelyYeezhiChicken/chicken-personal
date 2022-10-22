## 開閉原則:
- 程式碼都有可能因為需求的增加需要擴充
- 而擴充不應該修改原始的程式碼
- 應該新增加是程式碼來擴充原本的系統

### 可擴充的作法:
1. 透過繼承
2. C# 有擴充方法

### 範例: 需要可以支援各式圖表

### 1. 初期方案
- 圓餅圖類
```csharp
public class PicChart
{
    public void display()
    {
        // Create pie chart
    }
}
```

- 柱狀圖類
```csharp
public class BarChart 
{ 
    public void display() 
    { 
        // Create bar chart 
    } 
}
```

- service
```csharp
public class ChartService  
{ 
    public void displayChart(string type) 
    { 
        switch(type)
        {
            case type.Equals("pie") :
                PicChart chart = new PicChart();
                chart.display();
            case type.Equals("bar") : 
                BarChart chart = new BarChart(); 
                chart.display();
        }
    } 
}
```

### 2. 使用OCP原則重構
- 圖表介面
```csharp
public interface IChart
{
    void display();
}
```

- 圓餅圖類
```csharp
public class PicChart : IChart
{
    public void display()
    {
        // Create pie chart
    }
}
```

- 柱狀圖類
```csharp
public class BarChart : IChart
{
    public void display()
    {
        // Create bar chart 
    }
}
```


- service
```csharp
public class ChartService  
{
    // 工廠模式
    private IChart SetChart(string type)
    {        
        switch(type) 
        { 
            case type.Equals("pie") : 
                return new PicChart();
            case type.Equals("bar") :
               return new BarChart();
            default
                throw new NotImplementedException();
        }
    }

    public void displayChart(string type) 
    {
        IChart chart = SetChart(type);
        chart.display();
    }
}
```
