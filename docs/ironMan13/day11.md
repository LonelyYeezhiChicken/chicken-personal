---
sidebar_position: 50
description: Day11 C# 雞礎觀念- 把複雜的事情與關係簡單化~列舉與結構
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 把複雜的事情與關係簡單化~列舉與結構

在電腦世界中，很多編碼都是複雜且看不懂的，<br/>
例如顏色編碼，FF0000 代表紅色，800080 代表綠色，<br/>
你不說，我不說，沒人知道這編碼代表的意思，<br/>
我們今天就來將編碼簡化吧

### 列舉(enum)

- 列舉類型(Enueration type)能把字串映射到數字
- 增加可讀性也可參加計算
- 結構如下
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210909/20097001LTMmcCPN7j.png)

`!注意!:WeekDays不是變數，而是一種數據類型，是和int,double,string等一樣的數據類型，該列舉類型的值只能是七個列舉項之一，每個列舉表面上是一個字串，背後都關聯著一個整數值，默認情況第一個為0之後依序遞增`

### 範例:我們來用列舉定義星期吧

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
        //宣告星期的列舉
        enum WeekDays { 星期一, 星期二, 星期三, 星期四, 星期五, 星期六, 星期天 }
        static void Main(string[] args)
        {
            int a = Convert.ToInt32(Console.ReadLine());

            //將讀到的數字轉為星期
            WeekDays today = (WeekDays)a;

            //判斷今天是否為假日
            if ((today == WeekDays.星期天 || today == WeekDays.星期六))
            {
                Console.WriteLine("放!假!啦!!!!");
            }
            else
            {
                Console.WriteLine("無情上班日!");
            }
            Console.ReadKey();
        }
    }
  }
```

輸入:

> 1

結果:

> 1<br/>
> 無情上班日!

輸入:

> 6

結果:

> 6<br/>
> 放!假!啦!!!!

### 列舉規則

- 在默認情況之下，都是整數(int)類型
- 如果有其他需要，我們可以自定義列舉型態
- 關聯直可以是 byte,sbyte,short,ushort,int,uint,long 和 ulong 等類型

### 範例: 將列舉改成 short 型別

```csharp
 enum WeekDays : short
        {
            星期一,
            星期二,
            星期三,
            星期四,
            星期五,
            星期六,
            星期日
        }
```

### 使用列舉的好處:

- 使用值標示代替數字，增強程序的可讀性。
- 使每個列舉都關聯著一個數字，可參加計算和循環。
- 列舉變數只能舉列舉項中的值，有利於編譯器檢查出非法的賦值。

### 結構體(Structure)

- 很多互相聯繫的信息組成一個整體
- C#中我們可以把這些緊密聯繫的變數定義成結構體(Structure)

### 範例:我們來定義一個簡單的結構體與他的數據成員吧

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
        /// <summary>
        /// 學生，結構體
        /// </summary>
        struct Student
        {
            //學號
            public int number;
            //姓名
            public string name;
            //性別
            public string sex;
            //生日
            public string birthday;
        }

        static void Main(string[] args)
        {
            Student boy;//宣告變數boy
            boy.number = 5487;
            boy.name = "孤獨一隻雞";
            boy.sex = "公";
            boy.birthday = "1111.01.01";


            Student girl;//宣告變數girl
            girl.number = 9527;
            girl.name = "孤獨九十九隻雞";
            girl.sex = "母";
            girl.birthday = "9999.09.09";


            Console.WriteLine("學號:" + boy.number);
            Console.WriteLine("姓名:" + boy.name);
            Console.WriteLine("性別:" + boy.sex);
            Console.WriteLine("生日:" + boy.birthday);
            Console.WriteLine("");

            Console.WriteLine("學號:" + girl.number);
            Console.WriteLine("姓名:" + girl.name);
            Console.WriteLine("性別:" + girl.sex);
            Console.WriteLine("生日:" + girl.birthday);
            Console.ReadKey();
        }
    }
  }
```

結果:

> 學號:5487<br/>
> 姓名:孤獨一隻雞<br/>
> 性別:公<br/>
> 生日:1111.01.01

學號:9527<br/>
姓名:孤獨九十九隻雞<br/>
性別:母<br/>
生日:9999.09.09

### 有了列舉跟結構體，讓我們寫程式可以更加明確地去處理資料，也讓可讀性更好
