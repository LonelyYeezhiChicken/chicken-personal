---
sidebar_position: 135
description: Day28 C# 雞礎觀念- 物件導向(oop)~ 繼承
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 物件導向(oop)~ 繼承
在人類中，基因肯定是世世代代在傳承，<br/>
下一代除了接收了上一代的基因之外，<br/>
可能還會偷偷的進化，<br/>
C#中也是如此，<br/>
我們就來一探究竟 C#演化的奧妙吧

### 繼承概述

- 繼承的概念就如同生物學裡面的，`界門綱目科屬種`
- 關係是一層一層繼承下來的
- 就如同脊椎動物的特徵都是，`有脊椎，有體溫，會呼吸`，鳥類也有以上特徵，因此只需要去繼承脊椎動物的特徵，並加上自己的特徵，`有翅膀，會下蛋`，雞更屬於他們的下層，因此雞也可以繼承以上的特徵，並且加上自己的特徵，`有雞冠，會咕咕叫`
- 如同上面條件`脊椎動物`，我們會把它稱為`基底類別(Base class)`
- 再來就是繼承他的類別我們稱之為`衍生類別（Derived class）`

### 小練習

### 1. 建立`雞`底類別

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
            vertebrate vertebrateClass = new vertebrate();
            //先個別印特徵
            Console.WriteLine("各別顯示特徵");
            vertebrateClass.VertebrateFeature1();
            vertebrateClass.VertebrateFeature2();
            vertebrateClass.VertebrateFeature3();
            //一次全印
            Console.WriteLine();
            Console.WriteLine("一次列出所有特徵");
            vertebrateClass.ShowALLVertebrateFeature();
            Console.ReadKey();
        }
    }
    //脊椎動物類
    class vertebrate
    {
        //特徵1:會呼吸
        public void VertebrateFeature1()
        {
            Console.WriteLine("我會呼吸");
        }
        //特徵2:有脊椎
        public void VertebrateFeature2()
        {
            Console.WriteLine("我有脊椎");
        }
        //特徵3:有體溫
        public void VertebrateFeature3()
        {
            Console.WriteLine("我有體溫");
        }
        //顯示所有特徵
        public void ShowALLVertebrateFeature()
        {
            VertebrateFeature1();
            VertebrateFeature2();
            VertebrateFeature3();
        }
    }
  }
```

結果:

> 各別顯示特徵<br/>
> 我會呼吸<br/>
> 我有脊椎<br/>
> 我有體溫<br/>
> <br/>
> 一次列出所有特徵<br/>
> 我會呼吸<br/>
> 我有脊椎<br/>
> 我有體溫<br/>

### 2. 建立衍生類別~鳥類

- 繼承用法就是在新的衍生類別後面加上:基底類別
- 如:` class Birds: vertebrate`
- 這時他將會擁有上一個類別的所有特性

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
            //實例化鳥類
            Birds birdsClass = new Birds();
            //先個別印特徵
            Console.WriteLine("各別顯示特徵");
            birdsClass.BirdsFeature1();
            birdsClass.BirdsFeature2();
            birdsClass.VertebrateFeature1();
            birdsClass.VertebrateFeature2();
            birdsClass.VertebrateFeature3();

            //一次全印
            Console.WriteLine();
            Console.WriteLine("一次列出所有特徵");
            birdsClass.ShowALLBirdsFeature();
            Console.ReadKey();
        }
    }
    //鳥類，並且繼承脊椎動物類
    class Birds : vertebrate
    {
        //特徵1:會呼吸
        public void BirdsFeature1()
        {
            Console.WriteLine("我有翅膀");
        }
        //特徵2:有脊椎
        public void BirdsFeature2()
        {
            Console.WriteLine("我會下蛋");
        }
        //顯示所有特徵
        public void ShowALLBirdsFeature()
        {
            //直接用脊椎動物類的全部顯示方法
            ShowALLVertebrateFeature();
            BirdsFeature1();
            BirdsFeature2();
        }
    }
    //脊椎動物類
    class vertebrate
    {
        //特徵1:會呼吸
        public void VertebrateFeature1()
        {
            Console.WriteLine("我會呼吸");
        }
        //特徵2:有脊椎
        public void VertebrateFeature2()
        {
            Console.WriteLine("我有脊椎");
        }
        //特徵3:有體溫
        public void VertebrateFeature3()
        {
            Console.WriteLine("我有體溫");
        }
        //顯示所有特徵
        public void ShowALLVertebrateFeature()
        {
            VertebrateFeature1();
            VertebrateFeature2();
            VertebrateFeature3();
        }
    }
  }
```

結果:

> 各別顯示特徵<br/>
> 我有翅膀<br/>
> 我會下蛋<br/>
> 我會呼吸<br/>
> 我有脊椎<br/>
> 我有體溫<br/>
> <br/>
> 一次列出所有特徵<br/>
> 我會呼吸<br/>
> 我有脊椎<br/>
> 我有體溫<br/>
> 我有翅膀<br/>
> 我會下蛋

`你會發現太神奇了吧，繼承了別的類別，就能擁有它的功能，還可以自己增加新東西`

### 我們來個課後練習吧

### 練習題:請繼承上面鳥類來生出一隻雞

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
            //實例化雞類
            Chicken chickenClass = new Chicken();
            //先個別印特徵
            Console.WriteLine("各別顯示特徵");
            chickenClass.ChickenFeature1();
            chickenClass.ChickenFeature2();
            chickenClass.BirdsFeature1();
            chickenClass.BirdsFeature2();
            chickenClass.VertebrateFeature1();
            chickenClass.VertebrateFeature2();
            chickenClass.VertebrateFeature3();

            //一次全印
            Console.WriteLine();
            Console.WriteLine("一次列出所有特徵");
            chickenClass.ShowALLChickenFeature();
            Console.ReadKey();
        }
    }
    //雞類病繼承鳥類
    class Chicken : Birds
    {
        //特徵1:會呼吸
        public void ChickenFeature1()
        {
            Console.WriteLine("我有有雞冠");
        }
        //特徵2:有脊椎
        public void ChickenFeature2()
        {
            Console.WriteLine("我會咕咕叫");
        }
        //顯示所有特徵
        public void ShowALLChickenFeature()
        {
            //直接用脊椎動物類的全部顯示方法
            ShowALLBirdsFeature();
            ChickenFeature1();
            ChickenFeature2();
        }
    }

    //鳥類，並且繼承脊椎動物類
    class Birds : vertebrate
    {
        //特徵1:會呼吸
        public void BirdsFeature1()
        {
            Console.WriteLine("我有翅膀");
        }
        //特徵2:有脊椎
        public void BirdsFeature2()
        {
            Console.WriteLine("我會下蛋");
        }
        //顯示所有特徵
        public void ShowALLBirdsFeature()
        {
            //直接用脊椎動物類的全部顯示方法
            ShowALLVertebrateFeature();
            BirdsFeature1();
            BirdsFeature2();
        }
    }
    //脊椎動物類
    class vertebrate
    {
        //特徵1:會呼吸
        public void VertebrateFeature1()
        {
            Console.WriteLine("我會呼吸");
        }
        //特徵2:有脊椎
        public void VertebrateFeature2()
        {
            Console.WriteLine("我有脊椎");
        }
        //特徵3:有體溫
        public void VertebrateFeature3()
        {
            Console.WriteLine("我有體溫");
        }
        //顯示所有特徵
        public void ShowALLVertebrateFeature()
        {
            VertebrateFeature1();
            VertebrateFeature2();
            VertebrateFeature3();
        }
    }
  }
```

結果:

> 各別顯示特徵<br/>
> 我有有雞冠<br/>
> 我會咕咕叫<br/>
> 我有翅膀<br/>
> 我會下蛋<br/>
> 我會呼吸<br/>
> 我有脊椎<br/>
> 我有體溫<br/>
> <br/>
> 一次列出所有特徵<br/>
> 我會呼吸<br/>
> 我有脊椎<br/>
> 我有體溫<br/>
> 我有翅膀<br/>
> 我會下蛋<br/>
> 我有有雞冠<br/>
> 我會咕咕叫

### 繼承是物件導向語言的超強功能，要好好利用他，能更精簡程式碼，明天見喽
