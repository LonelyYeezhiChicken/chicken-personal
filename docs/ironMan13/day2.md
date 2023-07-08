---
sidebar_position: 5
description:  Day2 C# 雞礎觀念- 與C#開發千里來相見
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 🤖 與C#開發千里來相見

### 開發工具:

我們這邊使用 Visual Studio 2017 來做為程式的編譯工具，
其他版本來做練習也是沒有問題的。

### 專案建立:

1. 首先我們開啟 VS 2017 建立一個主控台應用程式

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/20097001Kr0msktqBx.png)

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/2009700106rLE7iJkk.png)

記得幫專案命名，選擇路徑，命名方案，一個方案下可以包含多個專案

2. 建立完成後就可以看到自動產生的程式碼啦

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
        }
    }
}
```

### 結構介紹

- 在 C#之中就像一台車子
- 我們可以想像**專案(project)**-就是車子本體
- 接下來**類別(class)**- 如同各式模組(例如:引擎)
- 更往下就是**物件(object)**-物件則是個瑣碎的零件(如:螺絲)
- 沒錯 C#簡單來說就是由他們組成的，他們之間往往環環相扣缺一不可

### 實戰演練

在說明完結構後想必各位也手癢癢想來寫寫看了

- 我們就來寫個 Hello world 讓程式來跟這世界打聲招呼吧!

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
            //印出文字
            Console.WriteLine("Hello world");
            Console.ReadKey();
        }
    }
}
```

### 執行:我們可以按快捷鍵(Ctrl+F5)或是點選功能列的開始執行程式

- 結果我們會看到
  > Hello world

恭喜你!你的程式誕生了!
但剛剛究竟發生什麼事情呢?讓我們繼續看下去!

### 知識小學堂

- 原來它的結構是這樣啊!?
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210903/20097001rsm3GQhopw.png)

- 在未來我們會更詳細的說明他們其中的含意，我們今天先來教大家之後常常會看到的函式

| 函式                | 用途                               |
| ------------------- | ---------------------------------- |
| Console.WriteLine() | 輸出(會換行)                       |
| Console.Write()     | 輸出(不換行)                       |
| Console.ReadLine()  | 讀取輸入的資料                     |
| Console.ReadKey()   | 取得使用者按下的下一個字元或功能鍵 |

> 我們這邊的 Console.ReadKey() 主要用途只是要讓主控台不會跑完程式就關閉

### 隨堂小練習

- 既然大家都會了那我們就來做個小練習，結束今天這一回合吧!

#### 題目:

- 請大家用 C#來做個簡單自我介紹吧!介紹內容需有(姓名，年齡，血型，星座，自我介紹)
  **範例:**

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
            //印出文字
            Console.WriteLine("姓名 : 孤獨一隻雞");
            Console.WriteLine("年齡 : 48歲");
            Console.WriteLine("血型 : O型");
            Console.WriteLine("星座 : 金牛座");
            Console.WriteLine("自我介紹 : 我像是一隻你可有可無的小雞");
            Console.ReadKey();

        }
    }
}
```

結果:

> 姓名 : 孤獨一隻雞
> 
> 年齡 : 48 歲
> 
> 血型 : O 型
> 
> 星座 : 金牛座
> 
> 自我介紹 : 我像是一隻你可有可無的小雞

### 我們今天故事就告一段落了，敬請期待明天的故事~ 我們明天再見!
