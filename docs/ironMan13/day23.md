---
sidebar_position: 110
description: Day23 C# 雞礎觀念- 物件導向(oop)~屬性(Property)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 物件導向(oop)~屬性(Property)
每天都在思考，<br/>
如果事情自己會做好就好了，<br/>
程式自己會自動檢查就好了，<br/>
今天 C#也有自動檢查變數是否符合要求的功能，<br/>
我們有請屬性!

### 訪問器 (Assessor)

- 把變數改為私用`private int age;`
- 並加入兩行限制

### 範例:我們建立一個狗的類別做練習

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
            Dog dog = new Dog();
            //設定為三歲
            dog.SetAge(3);
            Console.WriteLine(dog.GetAge());

            //設定為-1歲
            dog.SetAge(-1);
            Console.WriteLine(dog.GetAge());

            Console.ReadKey();
        }
    }
    //狗的類別
    class Dog
    {
        //名稱
        public string name;
        //年齡
        private int age;

        //設定年齡
        public void SetAge(int ageValue)
        {
            //如果年齡為負數就改成0
            if (ageValue <= 0)
            {
                age = 0;
            }
            else
            {
                age = ageValue;
            }
        }
        //回傳設定後的年齡
        public int GetAge()
        {
            return age;
        }
    }
   }
```

結果:

> 3<br/>
> 0

`※訪問器雖然解決了問題，但大家還是習慣把年齡作為變數使用。`
`屬性就是這而生的`

### 屬性(Property)

- 屬性的好處:
  - 有封裝性
  - 可以進行合法性的檢查
  - 符合變數的使用方式
- 用法:
  - 習慣將變數命名成小寫，屬性命名為大寫
- 定義了 get 與 set 兩個訪問器  
  ➀get 訪問器用來讀取變數的值
  ➁set 訪問器用來修改變數的值

### 範例:我們來建立一個鴨子類別來練習吧

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
            Duck duck = new Duck();
            //設定為三歲
            duck.duckAge = 3;
            Console.WriteLine(duck.duckAge);

            //設定為-1歲
            duck.duckAge = -1;
            Console.WriteLine(duck.duckAge);

            Console.ReadKey();
        }
    }
    /// <summary>
    /// Day23-02
    /// 鴨的類別
    /// </summary>
    class Duck
    {
        //名稱
        public string name;
        //年齡
        private int age;
        //屬性
        public int duckAge
        {
            get//回傳值
            {
                //回傳設定後的值
                return age;
            }
            set //設定值
            {
                if (value <= 0)
                {
                    age = 0;
                }
                else
                {
                    age = value;
                }
            }
        }
    }
  }
```

結果:

> 3<br/>
> 0

### 屬性解決了我們喜換用變數，又可以自動檢查，並且又具有封裝性，一次解決三種問題
