---
sidebar_position: 30
description: Day7 C# 雞礎觀念- 你有選擇障礙嗎? 交給if陳述式解決吧!
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 你有選擇障礙嗎? 交給if陳述式解決吧!

在生活中，我們常常面臨選擇，<br/>
今天午餐吃什麼好呢?飯還是麵呢?<br/>
明天要去哪裡玩?山上還是海邊呢?<br/>
那這些選擇的邏輯結構在 C#中我們稱為`選取範圍語句`

### if 陳述式

- 在日常對話中，我們常常說，如果...就...
- 如果下雨，就待在家
- 在 C#的表達方式則是，`if....else...`
  它的樣子會是
  > if ( 條件 )\
  > {\
      ..............\
  }\
  else\
  {\
   ...............\
  }

### 範例 1:如果下雨，那就待在家，沒下雨就出去玩

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
            //宣告天氣
            string weather = "下雨";
            Console.WriteLine("今天天氣 : " + weather);

            //使用if陳述句來做判斷
            if(weather == "下雨")
            {
                Console.WriteLine("待在家");
            }
            else
            {
                Console.WriteLine("出去玩");
            }

            //把天氣改成晴天，再做一次判斷試試看
            weather = "晴天";
            Console.WriteLine("今天天氣 : " + weather);

            //使用if陳述句來做判斷
            if (weather == "下雨")
            {
                Console.WriteLine("待在家");
            }
            else
            {
                Console.WriteLine("出去玩");
            }

            Console.ReadKey();
        }
    }
}
```

結果:

> 今天天氣 : 下雨<br/>
> 待在家<br/>
> 今天天氣 : 晴天<br/>
> 出去玩

### 判斷數字的大小

### 範例:招牌上面寫說未成年請勿進入，那我們來做一個輸入年齡，讓電腦判斷能不能進入吧

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
            Console.WriteLine("請輸入年齡");
            //宣告年齡，並將輸入的值賦予給他
            int age = Convert.ToInt32(Console.ReadLine());

            //判斷年齡
            if(age < 18)
            {
                Console.WriteLine(age + " 歲是未成年，不可進入!");
            }
            else
            {
                Console.WriteLine(age + " 歲已成年，歡迎光臨!");
            }

            Console.ReadKey();
        }
    }
 }
```

輸入:

> 48

結果:

> 請輸入年齡<br/>
> 48<br/>
> 48 歲已成年，歡迎光臨!

輸入:

> 15

結果:

> 請輸入年齡<br/>
> 15<br/>
> 15 歲是未成年，不可進入!

### else if

- 如果有多個要判斷的條件我們可以搭配`else if`做使用

### 範例:如果我滿 18 歲就可以考機車駕照，但要滿 20 歲才能考重機駕照

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
            Console.WriteLine("請輸入年齡");
            //宣告年齡，並將輸入的值賦予給他
            int age = Convert.ToInt32(Console.ReadLine());

            //判斷年齡
            if (age < 18)
            {
                Console.WriteLine(age + " 歲是未成年，任何駕照都不能考!");
            }
            else if (age < 20)
            {
                Console.WriteLine(age + " 歲，可以考機車駕照，但不能考重機駕照!");
            }
            else
            {
                Console.WriteLine(age + " 歲，任何駕照都可以考!");
            }
           Console.ReadKey();
        }
    }
  }
```

輸入:

> 15

結果:

> 請輸入年齡<br/>
> 15<br/>
> 15 歲是未成年，任何駕照都不能考!

輸入:

> 19

結果:

> 請輸入年齡<br/>
> 19<br/>
> 19 歲，可以考機車駕照，但不能考重機駕照!

輸入:

> 48

結果:

> 請輸入年齡<br/>
> 48<br/>
> 48 歲，任何駕照都可以考!

### 巢狀 if

- 我們可能會先第一個決定，之後再做第二個決定

### 範例:如果是假日我就要出去玩，平日就得乖乖上課，如果晴天我就要去海邊，不然就去爬山

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
            //今天
            Console.WriteLine("今天星期幾?");
            string today = Console.ReadLine();
            //天氣
            Console.WriteLine("今天天氣?");
            string weather = Console.ReadLine();

            //先判斷今天日是不是假日
            if (today == "星期六" || today == "星期日")
            {
                if(weather == "晴天")
                {
                    Console.WriteLine("今天" + today + "，" + weather + ",來去海邊玩");
                }
                else
                {
                    Console.WriteLine("今天" + today + "，" + weather + ",來去爬山");
                }
            }
            else
            {
                Console.WriteLine("今天" + today + "，所以要上課");
            }

            Console.ReadKey();
        }
    }
 }
```

輸入:

> 星期六<br/>
> 晴天

結果:

> 今天星期幾?<br/>
> 星期六<br/>
> 今天天氣?<br/>
> 晴天<br/>
> 今天星期六，晴天,來去海邊玩

輸入:

> 星期日<br/>
> 陰天

結果:

> 今天星期幾?<br/>
> 星期日<br/>
> 今天天氣?<br/>
> 陰天<br/>
> 今天星期日，陰天,來去爬山

輸入:

> 星期一<br/>
> 陰天

結果:

> 今天星期幾?<br/>
> 星期一<br/>
> 今天天氣?<br/>
> 陰天<br/>
> 今天星期一，所以要上課

### 自從學會 if 之後再也沒有選擇障礙了，今天的故事就到這邊了，謝謝大家，我們明天再見
