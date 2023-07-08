---
sidebar_position: 105
description: Day22 C# 雞礎觀念- 物件導向(oop)~物件(Object)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 物件導向(oop)~物件(Object)
在程式語言中萬物皆物件，<br/>
就如同真實世界中，<br/>
所有物質接由元素組成一般

### 物件基本原理

- C#通過 new 來創建物件，執行 new 後系統會在記憶體分配一個空間給數據成員，這過程我們將其稱為實例化
- 實例化之後的所有成員都會被初始化為 null,整數成員也會被初始化為 0
- 如果我們創建多個物件但都是同一個類別，那麼大家都共用同樣的程式碼，但不共用數據，而且每個物件都會在記憶體中擁有自己的內存空間

### 實例化語句如下:

- 記憶體將切割一個內存空間給 Kitty 做使用，並且 Kitty 將會擁有 Cat 類別的所有成員

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210922/20097001hEsxwvPiIB.png)

### 如何使用成員呢?

- 這邊我們需要使用到點運算符，透過點運算符我們可以呼叫到 Kitty 底下的`公有成員`

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210922/20097001oQCmWOEFf4.png)

### 如何呼叫函式呢?

- 一樣使用點運算符，我們就能呼叫到 Kitty 底下的`公有函數`
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210922/20097001cVi1nCAJFU.png)

### 範例:我們沿用 Day21 的程式碼來做練習

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
            //我們實例化兩個類
            Cat cat1 = new Cat();
            Cat cat2 = new Cat();

            //填寫cat1數據成員
            cat1.name = "慚愧一隻貓";
            cat1.age = 10;

            //填寫cat2數據成員
            cat2.name = "無悔一隻貓";
            cat2.age = 35;

            //顯示結果
            Console.WriteLine("姓名 : " + cat1.name + ",年齡 : " + cat1.age);
            Console.WriteLine("姓名 : " + cat2.name + ",年齡 : " + cat2.age);
            Console.ReadKey();
        }
    }
    class Cat
    {
        //名稱
        public string name;
        //年齡
        public int age;
        //老鼠數量
        public int miceCount = 0; //記錄抓幾隻老鼠
        //方法成員
        //方法:打招呼
        public void Hello()
        {
            Console.WriteLine("嗨!我是{0} ", name);
        }
        //方法:喵喵叫
        public void Meow()
        {
            Hello();
            Console.WriteLine("喵~~~~~喵~~~");
        }
        //方法:捉老鼠
        public void CaseMice()
        {
            miceCount++;
            Hello();
            Console.WriteLine("我已經抓了 {0} 隻老鼠", miceCount);
        }
    }
}
```

結果:

> 姓名 : 慚愧一隻貓,年齡 : 10<br/>
> 姓名 : 無悔一隻貓,年齡 : 35

### 範例:我們看看方法的狀況

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
            //我們實例化兩個類
            Cat cat1 = new Cat();
            Cat cat2 = new Cat();

            //填寫cat1數據成員
            cat1.name = "慚愧一隻貓";
            cat1.age = 10;

            //填寫cat2數據成員
            cat2.name = "無悔一隻貓";
            cat2.age = 35;

            //讓慚愧一隻貓抓兩隻老鼠
            cat1.CaseMice();
            cat1.CaseMice();

            //讓無悔一隻貓抓一隻老鼠
            cat2.CaseMice();

            //顯示結果
            Console.WriteLine("姓名 : " + cat1.name + ",年齡 : " + cat1.age + ",共抓 " + cat1.miceCount + " 隻老鼠");
            Console.WriteLine("姓名 : " + cat2.name + ",年齡 : " + cat2.age + ",共抓 " + cat2.miceCount + " 隻老鼠");
            Console.ReadKey();
        }
    }
    class Cat
    {
        //名稱
        public string name;
        //年齡
        public int age;
        //老鼠數量
        public int miceCount = 0; //記錄抓幾隻老鼠
        //方法成員
        //方法:打招呼
        public void Hello()
        {
            Console.WriteLine("嗨!我是{0} ", name);
        }
        //方法:喵喵叫
        public void Meow()
        {
            Hello();
            Console.WriteLine("喵~~~~~喵~~~");
        }
        //方法:捉老鼠
        public void CaseMice()
        {
            miceCount++;
            Hello();
            Console.WriteLine("我已經抓了 {0} 隻老鼠", miceCount);
        }
    }
   }
```

結果:

> 嗨!我是慚愧一隻貓<br/>
> 我已經抓了 1 隻老鼠<br/>
> 嗨!我是慚愧一隻貓<br/>
> 我已經抓了 2 隻老鼠<br/>
> 嗨!我是無悔一隻貓<br/>
> 我已經抓了 1 隻老鼠<br/>
> 姓名 : 慚愧一隻貓,年齡 : 10,共抓 2 隻老鼠<br/>
> 姓名 : 無悔一隻貓,年齡 : 35,共抓 1 隻老鼠

### 以上就是物件，最基本元素的用法，我們明天見喽
