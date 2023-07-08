---
sidebar_position: 80
description: Day17 C# 雞礎觀念- 像個郵差一樣~值與址的傳遞
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 像個郵差一樣~值與址的傳遞
在呼叫方法時，難免會需要傳遞參數，<br/>
那這些參數該如何傳遞呢?<br/>
在傳遞的過程中，究竟是傳值還是傳址呢?

### 傳值

- 在呼叫方法時我們難免需要將參數做傳遞
- 值得傳遞，表示他們在記憶體中，會佔不同的空間
- 當值傳遞完成後他們之間將毫無關係

### 範例:我們來輸入兩個數字，並且將他們比大小

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
            //宣告X整數
            int x = Convert.ToInt32(Console.ReadLine());
            //宣告y整數
            int y = Convert.ToInt32(Console.ReadLine());

            //呼叫Bigger方法，並將x，y的直傳入
            int reault = Bigger(x, y);

            Console.WriteLine("x = " + x + " ,y = " + y);
            Console.WriteLine("最大值為" + reault);
            Console.ReadKey();
        }

        //比較兩數大小的方法，將x y 傳入
        static int Bigger(int x, int y)
        {
            //判斷x y誰大
            int maxValue = (x >= y) ? x : y;
            return maxValue;
        }

    }
  }
```

輸入:

> 1<br/>
> 5

結果:

> 1<br/>
> 5<br/>
> x = 1 ,y = 5<br/>
> 最大值為 5

我們這邊使用到了`三元條件運算子`，它的結構如下:
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210918/20097001jjic7kGdDH.png)

### 中斷點

- 中斷點，是 debug 時非常好用的一個功能
- 如果對程式碼的執行有任何疑問，基本上都是可以使用中斷點做逐步執行的

### 中斷點使用方式:

1. 在想要停止的程式前面點一下，會出現小紅點(快捷鍵:F9)
   ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210918/20097001fVyeIJeDkP.png)

2. 接下來我們執行程式，會發現執行到此行時程式停下來了
   ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210918/20097001a0GKCS8w0E.png)

3. 這時候我們到功能列上按逐步執行(快捷鍵:F11)，會發現按一下就執行一行程式，這樣我們就可以了解程式如何執行了
   ![mdImg](https://ithelp.ithome.com.tw/upload/images/20220303/20097001yw7hyHsdQF.png)

`如果我們逐步執行程式後，會發現原來呼叫方法時，程式會先進入方法執行，執行完再回到原本程式繼續執行`

### 址的傳遞

- 假設有一個擁有上百的參數的陣列，做參數的傳遞，等於又得在記憶體中切割一樣大小的空間出來
- 因此像陣列或結構體複雜的傳遞，他傳的是記憶體所在的位址，而不是傳遞參數
- 傳遞後新的陣列也會指向相同的記憶體位置，因此做任何異動時都會影響到原來的陣列

### 範例:我們用 List 來驗證傳址的行為吧

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
            //宣告一個Llist
            List<string> myList = new List<string>() { "孤獨一隻雞", "人生一條蟲", "寂寞一隻鳥", "爆肝一隻鵝" };
            Console.WriteLine("原始筆數 = " + myList.Count());

            //呼叫方法並傳入List
            int newCount = ListCount(myList);
            Console.WriteLine("目前筆數 = " + newCount);

            //這時候我們用foreach迴圈來拆解原本的List
            foreach(string item in myList)
            {
                Console.Write(item + "  ");
            }
            Console.ReadKey();
        }
        //我們使用一個方法並接收list的傳遞，然後回傳list的筆數
        static int ListCount(List<string> newList)
        {
            //我們在這list偷偷加一隻魚
            newList.Add("高冷一隻魚");
            return newList.Count();
        }
}
```

結果:

> 原始筆數 = 4<br/>
> 目前筆數 = 5<br/>
> 孤獨一隻雞 人生一條蟲 寂寞一隻鳥 爆肝一隻鵝 高冷一隻魚

`我們可以發現，我們明明在新的方法，新的List去修改List，結果原來的List卻受到影響，這就是因為他們指向的記憶體位置是同一個地方，所以只要一有變動所有資料都會受到影響`

### 以上就是我們今天小郵差的故事，我們明天見喽!
