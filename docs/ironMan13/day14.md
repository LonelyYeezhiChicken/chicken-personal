---
sidebar_position: 60
description: Day14 C# 雞礎觀念- 不同層次的陣列~二維陣列
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 不同層次的陣列~二維陣列
既然空間有維度，<br/>
陣列也像是空間一樣，<br/>
他是擁有維度的，<br/>
就讓我們探索看看吧

### 二維陣列

- 就如同象棋棋盤，我們要知道旗子的位置，就得說他是第幾行第幾列
- 結構如下

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210912/20097001sufcdURA6n.png)

- 他看起來的樣子就像

| X       | 第 0 列 | 第 1 列 | 第 2 列 |
| ------- | ------- | ------- | ------- |
| 第 0 行 | 1       | 2       | 3       |
| 第 1 行 | 4       | 5       | 6       |
| 第 2 行 | 7       | 8       | 9       |

- 使用方式跟一維陣列很像

### 範例:印出上面陣列的排列樣子

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
            //宣告一個二維陣列
            int[,] Matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

            //開始照著陣列的樣子排列吧
Console.Write(Matrix[0, 0]); Console.Write(Matrix[0, 1]); Console.WriteLine(Matrix[0, 2]);//第一行
Console.Write(Matrix[1, 0]); Console.Write(Matrix[1, 1]); Console.WriteLine(Matrix[1, 2]);//第二行
Console.Write(Matrix[2, 0]); Console.Write(Matrix[2, 1]); Console.WriteLine(Matrix[2, 2]);//第三行


            Console.ReadKey();
        }
    }
 }
```

結果:

> 123<br/>
> 456<br/>
> 789

### 使用 for 迴圈處理二維陣列

- 這部分比較進階，需要使用兩層的 for 迴圈來處理

### 範例:使用雙重 for 迴圈，拆開二維陣列

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
            //宣告一個二維陣列
            int[,] Matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

            //使用雙重迴圈
            //第一層，表示第幾行
            for(int i=0; i < 3; i++)
            {
                //第二層，表示第幾列，由於變數i已用過所以習慣上會用j
                for (int j = 0; j < 3; j++)
                {
                    Console.Write(Matrix[i, j]+" ");
                }
                //我們這邊要用一個特別的符號，換行符號"\n"在C#中表示換行
                Console.Write("\n");
            }

            Console.ReadKey();
        }
    }
 }
```

結果:

> 1 2 3<br/>
> 4 5 6<br/>
> 7 8 9

### 二維陣列可以做到 XY 軸的維度，但使用上也相對比較進階了，所以有興趣的朋友在深入研究
