---
sidebar_position: 140
description: Day29 C# 雞礎觀念- 物件導向(oop)~介面(Interface)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 物件導向(oop)~介面(Interface)
書同文，車同軌，<br/>
聽說召喚惡魔時，需要與惡魔簽訂契約，<br/>
契約內容雙方都得遵守，<br/>
C#也擁有跟類別簽訂契約的功能

### 介面(Interface)

- 在介面命名中大家習慣以`I`開頭
- 在介面中，我們要去定義與規範類別成員
- 介面中不會去寫任何得邏輯
- 而且介面的成員永遠都是公用的，所以不需要也不能加上`public`
- 如果需要簽合約的類別就必須繼承介面

### 範例:每台 ATM 都需要統一他們的方法，因此我們來建立一個 ATM 的介面吧

```csharp
 //ATM介面
    interface IATM
    {
        //方法:存款
        void PayIn(int amount);
        //方法:收款
        bool GetMoney(int amount);
        //屬性:帳戶餘額
        int Balance { get; }
    }
```

`這就是一個介面的樣子介面最大的用途就是讓所有與他簽合約的類別保持方法與成員一致`

### 範例:我們來實作一台雞頭牌 ATM，並與介面簽合約吧

```csharp
    //雞頭牌ATM
    public class ChickenATM : IATM //需要繼承介面
    {
        //私有變數
        private int blance;

        //繼承後，就必須有介面裡面定義的方法
        //方法:存款
        public void PayIn(int amount)
        {
            blance += amount;
        }
        //方法:收款
        public bool GetMoney(int amount)
        {
            //判斷餘額是否足夠
            if (blance >= amount)
            {
                blance -= amount;
                return true;
            }
            else
            {
                Console.WriteLine("餘額不足，取款失敗!");
                return false;
            }
        }

        //屬性:帳戶餘額
        public int Balance
        {
            get
            {
                return blance;
            }
        }
    }
```

### 範例:既然 Atm 都蓋好了，我們就來測一下

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
        ///有包含介面的宣告方式,前面可先選方式
       public static IATM chickenAtm = new ChickenATM();

        static void Main(string[] args)
        {
            //先讓客人選擇功能
            Console.WriteLine();
            Console.WriteLine("請選擇需要模式");
            Console.WriteLine("存款請按1，領款請按2");
            string goFuncton = Console.ReadLine();


            //判斷要使用哪個方法
            if (goFuncton == "1")//領錢
            {
                Console.WriteLine("請輸入要存入的金額!");
                int amount = Convert.ToInt32(Console.ReadLine());
                //付款方法
                chickenAtm.PayIn(amount);
            }
            else if(goFuncton == "2")
            {
                Console.WriteLine("請輸入要領取的金額!");
                int amount = Convert.ToInt32(Console.ReadLine());
                //付款方法
                chickenAtm.GetMoney(amount);
            }

            Console.WriteLine("目前餘額 : " + chickenAtm.Balance);

            //這邊用遞迴來讓方法可以持續輪迴
            string[] array = new string[0];
            Main(array);
        }
    }
    //ATM介面
    interface IATM
    {
        //方法:存款
        void PayIn(int amount);
        //方法:收款
        bool GetMoney(int amount);
        //屬性:帳戶餘額
        int Balance { get; }
    }
    //雞頭牌ATM
    public class ChickenATM : IATM //需要繼承介面
    {
        //私有變數
        private int blance;

        //繼承後，就必須有介面裡面定義的方法
        //方法:存款
        public void PayIn(int amount)
        {
            blance += amount;
        }
        //方法:收款
        public bool GetMoney(int amount)
        {
            //判斷餘額是否足夠
            if (blance >= amount)
            {
                blance -= amount;
                return true;
            }
            else
            {
                Console.WriteLine("餘額不足，取款失敗!");
                return false;
            }
        }

        //屬性:帳戶餘額
        public int Balance
        {
            get
            {
                return blance;
            }
        }
    }
   }
```

### 來玩看看以下劇情會產生的結果吧

1. 先領 50 元
2. 今天發工資啦，共 500 元，把錢都存進去吧
3. 忘記把吃飯錢領出來了，趕快領 100 來吃飯

結果:

> 請選擇需要模式<br/>
> 存款請按 1，領款請按 2<br/>
> 2<br/>
> 請輸入要領取的金額!<br/>
> 50<br/>
> 餘額不足，取款失敗!<br/>
> 目前餘額 : 0

> 請選擇需要模式<br/>
> 存款請按 1，領款請按 2<br/>
> 1<br/>
> 請輸入要存入的金額!<br/>
> 500<br/>
> 目前餘額 : 500

> 請選擇需要模式<br/>
> 存款請按 1，領款請按 2<br/>
> 2<br/>
> 請輸入要領取的金額!<br/>
> 100<br/>
> 目前餘額 : 400

> 請選擇需要模式<br/>
> 存款請按 1，領款請按 2

### 以上就是我們的介面，他主要用途是在統一天下的，我們明天再見了鴨
