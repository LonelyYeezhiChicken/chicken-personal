---
sidebar_position: 15
description: Day4 C# 雞礎觀念- 核心的數據成員~變數(二)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 核心的數據成員~變數(二)

## 千變萬化的字串變數

- 他為什麼千變萬化呢?因為字串這種型別，別人給他什麼他就是什麼
- 就如同一位認真向學的小朋友，他如此天真無邪，老師教的都會認真記住
- 在 C#的世界中，我們要表明一個字串時都需要用`""`把他包起來

## 範例:我們來看看有`""`跟沒有`""`的差異吧

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
            //宣告一個整數叫做 hi，然後賦予他100的值
            int hi = 100;

            //我們來列印看看
            Console.WriteLine("我沒有加雙引號 : " + hi);
            Console.WriteLine("我有加雙引號 : " + "hi");
            Console.ReadKey();
        }

    }
}
```

結果:

> 我沒有加雙引號 : 100
>
> 我有加雙引號 : hi

### 由此我們可以發現，加上`""`的"hi"他是被當成文字的，沒有`""`的 hi 他則是整數變數，會直接印出他的值

### 我們接著開始介紹他們這型別的成員吧

### 首先歡迎字元型變數~char

- char 他顧名思義只能存一個字元
- 他跟大家不一樣的地方在於，他使用的是單引號`''`，而不是雙引號`""`

### 範例:使用一個 char 型別變數來印出 A B C 三個字母吧

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
            //宣告一個char型別的變數
            char hi;

            //先賦值A給變數hi，然後印出來
            hi = 'A';
            Console.WriteLine("1. " + hi);

            //再來賦值B給變數hi，然後印出來
            hi = 'B';
            Console.WriteLine("2. " + hi);

            //最後賦值C給變數hi，然後印出來
            hi = 'C';
            Console.WriteLine("3. " + hi);

            Console.ReadKey();
        }

    }
 }
```

結果:

>1. A
>2. B
>3. C

### 再來是善變的字串型變數~string

- string 類型可以存多個字元
- 我們常常會需要讓用戶輸入一長串的資訊，或是我們需要顯示一些提示給用戶，他就是最佳人選

### 範例:我們讓電腦自己跟自己來個尬聊

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
            //宣告一個string型別的變數
            string hi;

            //讓電腦來個問候
            hi = "安安，你好，幾歲?住哪裡?";
            Console.WriteLine(hi);

            //讓電腦回答自己
            hi = "你好，你是個好人，但我才不要告訴你勒";
            Console.WriteLine(hi);

            Console.ReadKey();
        }

    }
}
```

結果:

> 安安，你好，幾歲?住哪裡?
>
> 你好，你是個好人，但我才不要告訴你勒

### 我們來玩轉字串吧

### 1.字串的讀取

- 在這邊我們會用到`Console.ReadLine()`這個函式
- 我們來試著跟電腦對話吧

### 範例:我們來對電腦輸入自己的名字讓他回答

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
            //我們一開始使用Console.ReadLine()函式，讓電腦聽聽我們的心聲
            //並將輸入的名字賦值到字串變數中
            string name = Console.ReadLine();

            //接下來讓電腦回答我們
            Console.WriteLine(name + "，帥氣十足!");

            Console.ReadKey();
        }

    }
}
```

輸入:

> 孤獨一隻雞

結果:

> 孤獨一隻雞
>
> 孤獨一隻雞，帥氣十足!

### 2.字元的讀取

- 在這邊我們會用到`Console.Read()`這個函式
- `注意:Console.Read()讀出來會是字元的ASCII，所以會是整數`

### 範例:我們來對電腦輸入一個字母，來查詢他 ASCII 編碼

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
            //我們使用Console.Read()函式，讓電腦讀取我們輸入的字母
            //電腦會自動將他轉成ASCII編碼
            //並將ASCII編碼賦值到變數中
            int ch = Console.Read();

            //印出輸入字母的 ASCII
            Console.WriteLine("The ASCII code is " + ch);
            Console.ReadKey();
        }

    }
}
```

輸入:

> a

結果:

> a
>
> The ASCII code is 97

輸入:

> A

結果:

> A
>
> The ASCII code is 65

`註:對於電腦而言，大寫或小寫甚至是任何符號，都有自己特有的編碼所以我們這邊輸入大小寫後會得到的結果`

### 3.數字的讀取

- 在這邊我們會用到`Convert.ToInt32()`這個函式
- `Convert.ToInt32()這函式的用途，就是將其他型別轉成整數型別，稱為"轉型"`
- 就如同有人要移民來到美國，就必須到移民署辦理移民，而且要符合一些相關的規定，不然是辦理不成功的

### 範例:我們來對電腦輸入半徑，讓他自動算出圓面積

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
            //宣告半徑為整數變數
            int r;
            //宣告圓面積為浮點數變數
            double s;
            //宣告圓周率為浮點數變數
            double π = 3.1415926536;

            //我們輸入一個半徑，並將輸入的半徑轉成整數，賦值給變數r
            Console.Write("r = ");
            r = Convert.ToInt32(Console.ReadLine());

            //計算面積 面積 = 圓周率 X 半徑 X 半徑
            s = π * r * r;
            //印出答案
            Console.WriteLine("Ans:" + s);

            Console.ReadKey();
        }

    }
 }
```

輸入:

> 5

結果:

> r = 5
>
> Ans:78.53981634

### 4.字串的累加

- 當字串遇見了`運算子"+"`，究竟會產生什麼樣的愛恨糾葛呢?
- 字串會直接銜接，並不會合體
- 就如同我將隔壁鄰居的地買下來，那塊地還是在那個地方，並不會跟我的土地融合

### 範例:我們來產生各種口味的孤獨動物吧

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
            //宣告雞
            string chicken = "雞";
            //宣告魚
            string fish = "魚";
            //宣告狗
            string dog = "象";
            //宣告形容詞
            string lonely = "孤獨一隻";

            //將他們做累加
            Console.WriteLine(lonely + chicken);
            Console.WriteLine(lonely + fish);
            Console.WriteLine(lonely + dog);

            Console.ReadKey();
        }

    }
}
```

結果:

> 孤獨一隻雞
> 孤獨一隻魚
> 孤獨一隻象

### 變數的命名規則

- 最後在這邊跟各位說明一下命名規則

1. 變數第一個字必須是字母
2. 底線或是@之後的字符可以是字母、數字或底線
3. 變數不能和關鍵字重名

### 範例

正確命名:

> x
>
> a1
>
> myname
>
> flowersCheckedListBox
>
> \_number
>
> @float

錯誤命名:

> 8thStreet        //不能以數字開頭命名
>
> float               //不能和關鍵字同名

`注意: C#區分大小寫，比如name和Name是不同的變數，在為變數命名時，盡量選擇有意義的名稱。`

### 關於變數的淒美愛情故事，我們就介紹到這邊了，大家明天見
