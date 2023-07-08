---
sidebar_position: 100
description: Day21 C# 雞礎觀念- 物件導向(oop)~類別(class)
key: [C#, 雞礎觀念, 鐵人賽, cSharp]
tags: [C#, 雞礎觀念, 鐵人賽]
---

# 物件導向(oop)~類別(class)
萬物皆有他的結構，<br/>
就如同世界上所有東西皆由元素所組成，<br/>
而定義這些結構在 C#中稱為 class，<br/>
他是一切的藍圖

### 變數成員與方法成員

- 結構:
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210920/20097001TE37hH4gKq.png)

### 範例:我們來實作貓的類別  

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
            //使用類別前要先實例化
            Cat cat = new Cat();

            //填寫變數成員
            Console.WriteLine("請輸入姓名:");
            cat.name = Console.ReadLine();

            Console.WriteLine("請輸入年齡:");
            cat.age =Convert.ToInt32(Console.ReadLine());

            //呼叫方法成員
            //喵喵叫
            cat.Meow();

            //抓到老鼠
            cat.CaseMice();

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
            Console.ReadKey();
        }
    }
}
```

輸入:

> 孤獨一隻雞<br/>
> 48

輸出:

> 請輸入姓名:<br/>
> 孤獨一隻雞<br/>
> 請輸入年齡:<br/>
> 48<br/>
> 嗨!我是孤獨一隻雞<br/>
> 喵~~~~~喵~~~<br/>
> 嗨!我是孤獨一隻雞<br/>
> 我已經抓了 1 隻老鼠

1. 在 Cat 這個類別之中，
   - 貓有三個屬性:<br/>
       1. 名字 <br/>
       2. 年齡 <br/>
       3. 捉到老鼠數量<br/>
     分別使用  name 、age、 miceCount  來表示，<br/>
     他們稱為類別的成員變數(Member Variable) 
     ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210920/20097001jyYIlCq1wD.png)
2. 公用和私用 (public/private)

- public/private 統稱為"修飾詞"

```csharp
	public string name;
	public int age;            ⇒ 公有成員
	public void Meow()
	public void CaseMice()

	private int miceCount = 0; 
	private void Hello()        ⇒私有成員
```

`  ※把變數或函數標記為private，可以確保這些數據不受到外界的影響`

| 已宣告存取範圍     | 意義                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| public             | 未限制存取。                                                          |
| protected          | 存取限於包含類別或衍生自包含類別的類型。                              |
| internal           | 存取限於目前組件。                                                    |
| protected internal | 存取限於目前組件或衍生自包含類別的類型。                              |
| private            | 存取限於包含類型。                                                    |
| private protected  | 存取限於目前組件內包含類別或衍生自包含類別的類型。 自 C# 7.2 起可用。 |

### 學會了類別之後，會發現原來程式碼，也可以這樣做分類鴨!
