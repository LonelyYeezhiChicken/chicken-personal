---
sidebar_position: 55
description: Day12 C# 雞礎觀念- 當我們同在一起~陣列(Array)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 當我們同在一起~陣列(Array)
成績單上有國，英，數，物理四科<br/>
分數分別 70、89、72、93<br/>
這時候我們就可以用陣列將他們綁再一起

### 陣列(array)

- `注意:C#索引是從0開始計算`
- 陣列的語法如下

- 整數陣列:
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210911/200970019VZBEZhIvR.png)

- 字串陣列:
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210912/20097001MJDkMN4u2w.png)

- 當此句被執行時，系統就會在內存中分配一段連續的空間來儲存這四個 int 型數據
- 陣列元素的初始值列在大括號裡面，並且用逗號隔開

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210911/20097001y7N7yOQaCc.png)

### 範例:我有國，英，數，物理四科，分數分別 70、89、72、93，請幫我算平均分數

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
            //宣告整數陣列
            int[] scores = { 70, 89, 72, 93 };

            //計算總合
            int sum = scores[0] + scores[1] + scores[2] + scores[3];

            Console.WriteLine("總合 : " + sum);

            //計算平均值
            Console.WriteLine("平均值 : " + (sum / 4));

            Console.ReadKey();
        }
    }
 }
```

結果:

> 總合 : 324<br/>
> 平均值 : 81

### 陣列進階用法

- 取得陣列長度

  - 使用 `array.Length`

- 陣列非常適合搭配 for 迴圈服用

### 範例:將前面的範例使用 for 迴圈改寫

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
            //宣告整數陣列
            int[] scores = { 70, 89, 72, 93 };

            //宣告總和
            int sum = 0;

            //使用for迴圈，條件為陣列的長度
            for (int i = 0; i < scores.Length; i++)
            {
                Console.WriteLine(scores[i]);
                sum += scores[i];
            }

            //將總和的分數除以陣列長度(總共幾門科)
            float average = sum / (scores.Length);
            Console.WriteLine("總分" + sum);
            Console.WriteLine("平均值" + average);

            Console.ReadKey();
        }
    }
  }
```

結果:

> 70<br/>
> 89<br/>
> 72<br/>
> 93<br/>
> 總分 324<br/>
> 平均值 81

### 使用陣列來處理同樣類型但很多筆的資料是非常方便的，就讓我們同在一起吧!
