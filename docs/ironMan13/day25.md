---
sidebar_position: 120
description: Day25 C# 雞礎觀念- 共產主義者~靜態成員
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 共產主義者~靜態成員

農場裡的雞飼料都是大把大把的撒在地上，<br/>
每隻雞都去吃那些飼料，吃完就沒了，<br/>
而不像其他寵物有獨立的飼養籠，<br/>
專用的飯碗，吃飯時都不用搶食，<br/>
C#中也有像雞飼料的用法，<br/>
撒在地上大家一起共用

### 靜態變數

- 一般情況下變數成員並不會互相影響
- 如同每個人都有自己的年齡，並不會互相影響
- 但靜態變數不一樣，他的值在記憶體中只會存一份，然後大家一起共用他
- 結構

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210925/20097001QhRt9Z7xf4.png)

#### 範例: 我們來做一個小遊戲

- 目前農場有 30 隻雞
- 一天會出生 3 隻雞
- 每過兩天，農夫就會載 8 隻雞去市場賣掉
- 只要農場的雞變成 0，那農場就倒閉了
- 那一個月後農場會不會倒閉呢?

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
            for(int i = 1; i <= 31; i++)
            {
                Console.WriteLine();
                Console.WriteLine("---新的一天--");
                Console.WriteLine("今天 : " + i + "號");
                //新的一天需要生新的雞
                Chicken chickenClass = new Chicken();
                chickenClass.NewDayChicken();
                Console.WriteLine("目前農場有 : " + Chicken.ChickenCount + "隻雞");

                //判斷今天是否有要去市場
                if ((i % 2) == 0)
                {
                    //農夫去市場賣雞
                    Farmer farmerClass = new Farmer();
                    Console.WriteLine("農夫載雞去賣了...");
                    farmerClass.GoToMarket();
                    Console.WriteLine("賣完雞後剩下 : " + Chicken.ChickenCount + "隻雞");
                }
                //判斷雞還剩幾隻
                if(Chicken.ChickenCount <= 0)
                {
                    Console.WriteLine();
                    Console.WriteLine("!!!!!!!雞被賣光光了!!!!!");
                    Console.WriteLine("農場倒閉!");

                    //既然營業不下去就跳脫迴圈吧
                    break;
                }
            }
            Console.ReadKey();
        }
    }
    //定義雞的類別
    class Chicken
    {
        //宣告一個雞數量的靜態變數
        public static int ChickenCount = 30;

        //新的一天生四隻雞
        public void NewDayChicken()
        {
            ChickenCount += 3;
        }
    }
    //定義農夫的類別
    class Farmer
    {
        public void GoToMarket()
        {
            //使用靜態變數不需要實例化
            Chicken.ChickenCount -= 8;
        }
    }
}
```

結果:

> ---新的一天--<br/>
> 今天 : 1 號<br/>
> 目前農場有 : 33 隻雞<br/>
> <br/>
> ---新的一天--<br/>
> 今天 : 2 號<br/>
> 目前農場有 : 36 隻雞<br/>
> 農夫載雞去賣了...<br/>
> 賣完雞後剩下 : 28 隻雞<br/>
> <br/>
> ---新的一天--<br/>
> 今天 : 3 號<br/>
> 目前農場有 : 31 隻雞<br/>
> <br/>
> ---新的一天--<br/>
> 今天 : 4 號<br/>
> 目前農場有 : 34 隻雞<br/>
> 農夫載雞去賣了...<br/>
> 賣完雞後剩下 : 26 隻雞<br/>
> .<br/>
> .<br/>
> .<br/>
> .<br/>
> ---新的一天--<br/>
> 今天 : 29 號<br/>
> 目前農場有 : 5 隻雞<br/>
> <br/>
> ---新的一天--<br/>
> 今天 : 30 號<br/>
> 目前農場有 : 8 隻雞<br/>
> 農夫載雞去賣了...<br/>
> 賣完雞後剩下 : 0 隻雞<br/>
> <br/>
> !!!!!!!雞被賣光光了!!!!!<br/>
> 農場倒閉!

` 最終雞還是供不應求賣光光了!農場難逃倒閉危機!`

### 靜態變數只有在創建類別的時候會做一次初始化而已，這點是大家須特別注意的，我們就明天見喽
