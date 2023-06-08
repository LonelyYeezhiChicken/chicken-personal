鮭魚出生後會往下游生活，\
到了產卵季節，會逆游而上，\
回到最初的起點，進行產卵產卵，\
C#也有像鮭魚一樣的行為，\
一個參數盡方法進行加工，\
加工完成後就會回家了

### ref 關鍵字

- 上回我們說好了，參數有分為傳值與傳址
- ref 關鍵字的用途就是將參數指定為傳址
- 因此做任何修改都會影響到原參數

### 範例:我們來讓一隻雞進化吧

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
            //宣告一隻雞
            string chicken = "一隻雞";
            Console.WriteLine("小時候 : " + chicken);

            //呼叫成長方法
            ChangAChicken(ref chicken);

            Console.WriteLine("漂泊完回家後的雞 : " + chicken);
            Console.ReadKey();
        }
        //宣告小雞長大的方法，這邊使用常數方法，不需要做return
        static void ChangAChicken(ref string newChicken)
        {
            //讓雞進化
            newChicken = "孤獨" + newChicken;
        }
    }
  }
```

結果:

> 小時候 : 一隻雞\
> 漂泊完回家後的雞 : 孤獨一隻雞

### out 參數修飾詞

- Out 的存在是為了解決一個方法只能回傳一個值
- 但使用 Out 就能回來多個值
- Out 的參數，使用前是不能賦值的，即使賦值也會被忽略

### 範例:我們知道一個圓的半徑，求它的面積與圓周長吧

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
            //宣告圓半徑
            double x = 4;
            Console.WriteLine("圓半徑 : " + x);

            //宣告圓周長
            double y;

            //呼叫計算方法
            double area = GetArea(x, out y);

            Console.WriteLine("圓周長 = " + y);
            Console.WriteLine("圓面積 = " + area);
            Console.ReadKey();
        }
        //宣告方法來計算面積，要return 面積，out  圓周長
        static double GetArea(double r, out double y)
        {
            //計算圓周長
            y = 2 * r * Math.PI;

            //計算圓面積
            double s = (r * r) * Math.PI;
            return s;
        }
    }
  }
```

結果:

> 圓半徑 : 4\
> 圓周長 = 25.1327412287183\
> 圓面積 = 50.2654824574367

### ref 與 Out 的差異

- ref : 使用前可以給傳遞的參數 值
- Out : 使用前是不能賦值的，即使賦值也會被忽略
- 因此 Out 無法拿來做數據傳遞，只能取得返回值

### 今天的文章就到這邊，大家記得像鮭魚一樣，明天記得回來看我的文章哦!
