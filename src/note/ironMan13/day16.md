人類的世界有許多的工廠，\
將原料送入後就會變成商品，\
C#的世界裡也是，\
方法就像一間間的工廠一樣，\
一發包就能得到想要的東西

### 方法(function)

- 為了解決以下問題: 1.程式碼的重複 2.結構很不清晰 3.有利於修改與維護
- 他就像是一間代工廠一樣

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210916/20097001aX9kdraTMz.png)

### 字串方法

- 會回傳處理後的字串
- 可以自己定義傳入的參數

### 範例:我們來回傳孤獨一隻雞的字串

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpDemo
{

    class Program
    {
        static void Main(string[] args)
        {
            //我們來呼叫方法並賦值給變數
            string animal = GetChicken();
            Console.WriteLine(animal);
            Console.ReadKey();
        }
        //宣告字串方法
        static string GetChicken()
        {
            return "孤獨一隻雞";
        }
    }
  }
```

結果:

> 孤獨一隻雞

`使用static關鍵字時，表示他是靜態的，所以不需要去new他`
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210917/200970012uV77UtFx6.png)

### 範例:我們拋今天的日期到方法中，讓他自動組成年月日

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpDemo
{

    class Program
    {
        static void Main(string[] args)
        {
            //來取得過去的一個時間吧
            string MtDate = GetDate(1995, 4, 9);
            Console.WriteLine(MtDate);

            //來取得今日的時間吧
            MtDate = GetDate(2021, 9, 17);
            Console.WriteLine(MtDate);
            Console.ReadKey();
        }
        //宣告一個組合日期的方法
        static string GetDate(int y,int M,int d)
        {
            //因為值傳進來是正數所以需要轉成字串
            string Date_y = Convert.ToString(y);//第一種轉型方式Convert.To...
            string Date_M = M.ToString();//第二種轉型方式 參數.ToString()
            string Date_d = d.ToString();

            //組合回傳字串，用return回傳
            return Date_y + "年 " + Date_M + "月 " + Date_d + "日";
        }

    }
  }
```

結果:

> 1995 年 4 月 9 日\
> 2021 年 9 月 17 日

### 有了方法，可以大大降低程式碼的重複率，也可以隨處呼叫他
