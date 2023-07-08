---
sidebar_position: 60
description: Day13 C# 雞礎觀念- 來個輪迴吧~foreach迴圈
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 來個輪迴吧~foreach迴圈
我們曾經認識過 for，<br/>
後來也遇到 While，<br/>
如今又出現一個 foreach

### foreach 迴圈

- foreach 是一個為集合而生的迴圈
- 他的用法很類似 for 迴圈，但相較下來語法較為簡單
- 以下是 foreach 的結構

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210912/20097001BMhTFE799o.png)

#### 範例:我們來用 foreach 列出雞的成長過程

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
            //宣告一個字串陣列
            string[] storyArray = { "1.我是一顆蛋", "2.破殼而出", "3.吃了幾顆飼料，好飽", "4.漸漸長大成肉雞", "5.農場主人來在大家去市場玩", "6.因為太邊緣所以沒上到車", "7.大家一去就沒回來", "8.成為孤獨一隻雞" };

            Console.WriteLine("這是很久很久以前，有一隻雞的故事");
            //使用foreach處理陣列
            foreach(string story in storyArray)
            {
                Console.WriteLine(story);
            }


            Console.ReadKey();
        }
    }
}
```

結果

> 這是很久很久以前，有一隻雞的故事<br/>
> 1.我是一顆蛋<br/>
> 2.破殼而出<br/>
> 3.吃了幾顆飼料，好飽<br/>
> 4.漸漸長大成肉雞<br/>
> 5.農場主人來在大家去市場玩<br/>
> 6.因為太邊緣所以沒上到車<br/>
> 7.大家一去就沒回來<br/>
> 8.成為孤獨一隻雞
