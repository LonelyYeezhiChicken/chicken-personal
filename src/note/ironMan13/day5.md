### 運算子
程式的世界中，變數是無時無刻一直在變化的，\
變數的變化也成為程式的精隨所在，\
但為甚麼變數會一直變化呢?\
原來一切都是運算子惹的禍。

### 算術運算子
* 在程式之中運算子會連接兩個物件，並將這兩個物件在指定的運算
### C#之中的算術運算子


| 運算子 | 用途 | 範例 | 類別 |
| - | - | - | - |
|+ | 加 | a + b | 二元 |
|- | 減 | a - b | 二元 |
|* | 乘 | a * b | 二元 |
|/ | 除 | a / b | 二元 |
|% | 取餘數 | a % b | 二元 |

### 範例:使用基姆拉爾森計算公式，來算出今天禮拜幾
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
            //宣告今年
            int y = 2021;
            //宣告今月
            int m = 9;
            //宣告今日
            int d = 6;

            //套用基姆拉爾森計算公式
            int week = (d + 2 * m + 3 * (m + 1) / 5 + y + y / 4 - y / 100 + y / 400 + 1) % 7;

            //印出日期與星期
            Console.WriteLine("2021/9/6 星期" + week);

            Console.ReadKey();
        }

    }
}
```

結果:
>2021/9/6 星期1

`在這公式中我們一口氣用到了五個運算子，也體會到C#讓人十分驚豔的運算`

### 特別的除法
* 在C#中的除法肯定跟你想像的有所差異
* 在整數的除法中，小數點之後會自動被捨去
### 範例:試試看用3除以2吧(在我們觀念中應該答案是1.5)
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
            //做三除以二的運算
            int ans = 3 / 2;

            //印出解答
            Console.WriteLine("Ans : " + ans);
            Console.ReadKey();
        }

    }
}
```

結果:
>Ans : 1

* 由上我們可以得知整數除法小數點後會直接被`向0無條件捨去`
* 除非做浮點數除法，結果才會變成浮點數

### 範例:驗證除法後再賦值給浮點數變數與直接做浮點數除法的差異
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
            //做整數除法，並賦值給浮點數變數
            double x = 9 / 2;

            //直接做浮點數除法
            double y = 9.0 / 2;

            //印出答案
            Console.WriteLine("x = " + x + " ，y = " + y);
            Console.ReadKey();
        }

    }
}
```

結果
>x = 4 ，y = 4.5

###  餘數運算子~%
* 使用此運算子可以得到a/b的餘數
* 與方法[Math.DivRem](https://docs.microsoft.com/zh-tw/dotnet/api/system.math.divrem?view=net-5.0) 會得到一樣的結果
### 範例:我們分別將20~25除以4來看看他們的餘數分別是多少
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
            //分別將20~25與4做取餘運算
            int no20 = 20 % 4;
            int no21 = 21 % 4;
            int no22 = 22 % 4;
            int no23 = 23 % 4;
            int no24 = 24 % 4;
            int no25 = 25 % 4;

            //印結果
            Console.WriteLine("20 % 4 =" + no20);
            Console.WriteLine("21 % 4 =" + no21);
            Console.WriteLine("22 % 4 =" + no22);
            Console.WriteLine("23 % 4 =" + no23);
            Console.WriteLine("24 % 4 =" + no24);
            Console.WriteLine("25 % 4 =" + no25);

            Console.ReadKey();
        }
    }
}
```

結果:
>20 % 4 =0\
21 % 4 =1\
22 % 4 =2\
23 % 4 =3\
24 % 4 =0\
25 % 4 =1

### 方法(Math)
* C#也有提供我們很多數學方法
* 我們來介紹幾個比較常用的方法

| 功能 | 方法 | 範例 | 數學表示 |
| - | - |- |- |
|乘冪| Math.Pow() | Math.Pow(2,3) |` 2^3` |
|平方根| Math.Sqrt() | Math.Sqrt(4) | `√4` |
|絕對值| Math.Abs() | Math.Abs(-4) | `|-4|` |

* 另外方法中還為我們定義三個欄位

| 數學涵義 | 程式表示 | 近似值 |說明 |
| - | - |- |- |
| `τ` | Math.Tau | 6.2831853071795862 |弧度 |
|`π`| Math.PI | 3.1415926535897931 | 圓周率 |
|`e`| Math.E |2.7182818284590451 | 自然對數底數 |

### 隨堂小練習
### 題目:已知梯形面積公式為((上底+下底)X高/2)，目前知道上底是30，下底是52，高為46
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
            //宣告上底
            int x = 30;
            //宣告下底
            int y = 52;
            //宣告高
            int z = 46;

            //進行計算
            int ans = (x + y) * z / 2;

            //印出答案 
            Console.WriteLine("Ans : " + ans);

            Console.ReadKey();
        }
    }
}
```

結果:
>Ans : 1886

### 遞增運算子~++
* 他是屬於一元運算子
* 增加的量為1
### 範例1(後置遞增運算子):我們來算算我今年48歲，明年我幾歲?
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
            //宣告我今年48歲
            int age = 48;
            Console.WriteLine("我今年" + age + "歲");

            //使用後置遞增運算子，計算明年年紀
            age++;
            Console.WriteLine("我明年" + age + "歲");

            Console.ReadKey();
        }
    }
}
```

結果:
>我今年48歲\
我明年49歲

### 範例2(前置遞增運算子):我們來比較看看前置跟後置的差異吧
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
            //後置遞增運算子，印出它的變化過程
            Console.WriteLine("--後置運算子--");
            int x = 1;
            Console.WriteLine(x);
            Console.WriteLine(x++);
            Console.WriteLine(x);

            //前置遞增運算子，印出它的變化過程
            Console.WriteLine("--前置運算子--");
            int y = 1;
            Console.WriteLine(y);
            Console.WriteLine(++y);
            Console.WriteLine(y);

            Console.ReadKey();
        }
    }
}
```

結果:
>--後置運算子--\
1\
1\
2\
--前置運算子--\
1\
2\
2

`由此我們可以看到前置跟後置的差異會是，在運算「之後」或「之前」某數的值`

### 既然有遞增那必然有遞減運算子~--
### 範例:
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
            //遞減運算子
            int x = 5;
            //後置
            Console.WriteLine(x--);
            //前置
            Console.WriteLine(--x);

            Console.ReadKey();
        }
    }
 }
 ```
 
 結果:
 >5\
3

大家可能會覺得，這結果也太奇怪了吧?!
為什麼不是5，4呢?
原因很簡單，因為我們先用後置遞減運算子，所以他是在輸出5之後，x變成4了，
接下來使用前置遞減運算子，所以4先被減成3，然後才輸出

### 指派運算子

| 功能 | 範例 | 等值寫法 |類別 |
| - | - |- |- |
| `+=` |x += 100 | x = x + 100 |二元 |
|`-=`| x -= 100 | x = x - 100 | 二元 |
|`*=`| x *= 100 |x = x * 100 | 二元 |
|`/=`| x /= 100 | x = x / 100 | 二元 |
|`%=`| x %= 100 |x = x % 100 | 二元 |

### 範例:來試試看加法指派運算子 += 
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
            //加法指派運算子 += (整數版)
            Console.WriteLine("--整數版--");
            int x = 10;
            x += 100;
            Console.WriteLine(x);

            //加法指派運算子 += (字串版)
            Console.WriteLine("--字串版--");
            string name = "孤獨一隻雞";
            name += " 史上最帥!";
            Console.WriteLine(name);

            Console.ReadKey();
        }
    }
 }
```

結果:
>--整數版--
110
--字串版--
孤獨一隻雞 史上最帥!

### 優先等級
* 小時候學數學時，常常會說先乘除後加減，但這麼多運算子中到底優先順序是什麼呢?
* 雖然有優先順序這東西，但實際上程式撰寫時，還是建議各位搭配`()`做使用，這樣能增加程式的可讀性
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210905/20097001WtB02pvpAV.png)

### 當大家學會這些運算之後呢?就可以試著去練習做一些簡易的加減乘除啦!
### 那我們今天的運算子故事就到這邊了，大家明天見