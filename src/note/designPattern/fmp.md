## 工廠模式:

- 工廠模式是最常用的一種設計模式
- 我們通常指的工廠模式指 工廠方法模式
- 簡單工場則是在軟體之中，使用的十分平凡

### 範例: 將圖表功能封裝在一個 Chart 類別中

```csharp
public class Chart {
    private string type;

    public Chart(object[][] data, string type)
    {
        this.type = type;
        if( type == "histogram")
        {
            // init 柱狀圖
        }
        else if( type == "pie")
        {
            // init 圓餅圖
        }
        else if( type == "line")
        {
            // init 折線圖
        }
    }

    public void display()
    {
         if( type == "histogram")
        {
            // 顯示 柱狀圖
        }
        else if( type == "pie")
        {
            // 顯示 圓餅圖
        }
        else if( type == "line")
        {
            // 顯示 折線圖
        }
    }
}
```

缺點:

1. Chart 裡面存在著非常多的 `if - else` ，code 非常的壟長、難以閱讀，並且難以維護與測試，尤其經過大量的條件句後也會對效能造成影響
2. 而且將初始化都集中在一個 class 中違反了單一原則，不利於程式碼的重用性與維護
3. 當需要新增新的 Chart 時，需要修改 Chart class，違反了開閉原則
4. 客戶端只能透過 `new` 關鍵字來實例化 Chart ，Chart class 與客戶端耦合度高，實例化與物件無法分離
5. 客戶端如果想要更彈性的使用 Chart 的話，比如說:顏色、高度等等，構造函數則無提供初始化的功能，那每次都得由客戶端來完成，那容易造成大量重複的程式碼

以上會成 高耦合，多職責，因此延伸出了簡單工廠設計模式，他在一定的程度上解決了以上的問題
