---
sidebar_position: 35
description: Day8 C# 雞礎觀念- 如果沒有如果，只有太多的如果switch陳述式
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 如果沒有如果，只有太多的如果switch陳述式

你是否曾經內心充滿各種如果呢?
如果....我就....，
一組`if`已經滿足不了你時，
那該如何是好呢?

## Switch 陳述式

- 單憑 if..else..只能處理一個條件，但 Switch 是專門用來處理多分支的語句
  `Switch語句中的測試量可以是一個變數，也可以是一個表達式。程式一一測試case分支中的值，測試匹配到哪個分支中的值，就執行哪個分支中的語句。
每個分支都已break語句結束，敘述句一旦遇到break，就會結束整個語句。`

### 範例:來玩玩我們小時候的猴子繞口令吧

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
            //禮拜幾
            string week = Console.ReadLine();

            //使用switch
            switch (week)
            {
                case "星期一":
                    Console.WriteLine("猴子穿新衣");
                    break;
                case "星期二":
                    Console.WriteLine("猴子肚子餓");
                    break;
                case "星期三":
                    Console.WriteLine("猴子去爬山");
                    break;
                case "星期四":
                    Console.WriteLine("猴子去考試");
                    break;
                case "星期五":
                    Console.WriteLine("猴子去跳舞");
                    break;
                case "星期六":
                    Console.WriteLine("猴子去斗六");
                    break;
                case "星期日":
                    Console.WriteLine("猴子過生日");
                    break;
            }

            Console.ReadKey();
        }
    }
  }
```

輸入:

> 星期一

結果:

> 星期一
> 猴子穿新衣

輸入:

> 星期二

結果:

> 星期二
> 猴子肚子餓

###隨堂小練習

- 還記的基姆拉爾森計算公式嗎?我們今天來用 switch 實現吧
- 這過程程式可能會複雜點，屬於比較進階的公式，有興趣的朋友在研究就可以了

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
            Console.WriteLine("請輸入年月日");
            int y = Convert.ToInt32(Console.ReadLine());
            int m = Convert.ToInt32(Console.ReadLine());
            int d = Convert.ToInt32(Console.ReadLine());
            int total = 365; //平年
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
                total = 366;
            switch (m)
            {
               case 1:
                    total -= 31;
                    goto case 2;
                case 2:
                    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) //閏年
                    {
                        total -= 29;
                    }
                    else
                    {
                        total -= 28;
                    }
                    goto case 3;
                case 3:
                    total -= 31;
                    goto case 4;
                case 4:
                    total -= 30;
                    goto case 5;
                case 5:
                    total -= 31;
                    goto case 6;
                case 6:
                    total -= 30;
                    goto case 7;
                case 7:
                    total -= 31;
                    goto case 8;
                case 8:
                    total -= 31;
                    goto case 9;
                case 9:
                    total -= 30;
                    goto case 10;
                case 10:
                    total -= 31;
                    goto case 11;
                case 11:
                    total -= 30;
                    goto case 12;
                case 12:
                    total -= 31;
                    goto default;
                default: total += d; break;
            }
            Console.WriteLine(m+"月"+d+"日是"+y+"年的第"+ total + "天");

            Console.ReadKey();
        }
    }
  }
```

輸入

> 2021
> 09
> 09

結果:

> 請輸入年月日
> 2021
> 09
> 09
> 9 月 9 日是 2021 年的第 252 天

`go to 可以指定要去的條件，如果一個條件之下要跑好幾個分支就可以拿來做使用`
`在switch中的else，寫作default`

### 一千個如果...就...，只要一個 switch 就能把程式碼排的整整齊齊的了，好啦大家明天見喽!
