---
sidebar_position: 125
description: Day26 C# 雞礎觀念- 物件導向(oop)~ 多載(Overload)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 物件導向(oop)~ 多載(Overload)
很多便利商店都有他們的制服，<br/>
穿著一模一樣的制服，<br/>
就算離開店面，<br/>
大家都還是擁有極高的辨識度，<br/>
C#也擁有共同制服的功能

### 多載

### 範例:我們先來看一段程式

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
            Console.WriteLine("Int : " + Calculate.DivideInt(10, 20));
            Console.WriteLine("Double : " + Calculate.DivideDouble(10.11, 20.22));
            Console.ReadKey();
        }
    }
    //定義計算的類別
    class Calculate
    {
        //宣告靜態法來計算整數
        public static int DivideInt(int x, int y)
        {
            return x * y;
        }
        //宣告靜態法來計算浮點數
        public static double DivideDouble(double x, double y)
        {
            return x * y;
        }
    }
  }
```

結果:

> Int : 200<br/>
> Double : 204.4242

`如果需要不同的算法，我們就需要寫種方法，但對於多載來說它可以幫他們穿上制服`

### 範例:使用多載來處理上面的程式吧

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
            Console.WriteLine("Int : " + Calculate.Divide(10, 20));
            Console.WriteLine("Double : " + Calculate.Divide(10.11, 20.22));
            Console.ReadKey();
        }
    }
    // 定義計算的類別
    class Calculate
    {
        //宣告靜態法來計算整數
        public static int Divide(int x, int y)
        {
            return x * y;
        }
        //宣告靜態法來計算浮點數
        public static double Divide(double x, double y)
        {
            return x * y;
        }
    }
 }
```

結果:

> Int : 200<br/>
> Double : 204.4242

`各位可能會突然頓悟，啊原來多載就是一樣名字的方法，卻可以做不同事情`

### 希望大家都學會幫自己的程式穿上一樣的制服喔，我們明天見
