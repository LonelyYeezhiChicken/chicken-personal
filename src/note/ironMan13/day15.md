我們曾經認識過陣列(array)，\
今天來介紹他的兄弟 List 吧

### List< T >

- T 的部份我們可以用其他型別來替換他
- 常見的方式是將 string 或 int，甚至是將 class 做成物件模型來使用他
- 非常適合用於 foreach 迴圈

### 範例:我們將十二生肖填入 List 中

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
            //宣告一個List
            List<string> myList = new List<string>() { "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬" };

            Console.WriteLine("出來吧12生肖!");
            //我們使用foreach迴圈來列出List的值
            foreach(string item in myList)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
 }
```

結果:

> 出來吧 12 生肖!\
> 鼠\
> 牛\
> 虎\
> 兔\
> 龍\
> 蛇\
> 馬\
> 羊\
> 猴\
> 雞\
> 狗\
> 豬

`他的初始值給法跟陣列十分相似，但她不需要給初始長度`

### 新增資料

- 如果我們需要新增資料進到 List 呢，可以使用.Add()來新增單筆資料
- 如果需要新增多筆資料就須使用 AddRange()

### 範例:有一天，科學家發現，原來一年有 13 個月，因此必須幫第十三年補上熊的生肖

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
            //宣告一個List
            List<string> myList = new List<string>() { "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬" };

            //使用Add()新增熊
            myList.Add("熊");

            Console.WriteLine("出來吧13生肖!");
            //我們使用foreach迴圈來列出List的值
            foreach(string item in myList)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
 }
```

結果:

> 出來吧 13 生肖!\
> 鼠\
> 牛\
> 虎\
> 兔\
> 龍\
> 蛇\
> 馬\
> 羊\
> 猴\
> 雞\
> 狗\
> 豬\
> 熊

### 範例:後來科學家發現，一年不只 13 個月，實際上有 15 個月，所以還要補上象、魚這兩種動物

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
            //宣告一個List
            List<string> myList = new List<string>() { "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬" };
            //宣告一個要新增的List
            List<string> newList = new List<string>() { "熊", "象", "魚" };

            //AddRange()將newList新增到myList中
            myList.AddRange(newList);

            //使用Count()來表示List筆數
            Console.WriteLine("出來吧" + myList.Count() + "生肖!");
            //我們使用foreach迴圈來列出List的值
            foreach (string item in myList)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
  }
```

結果:

> 出來吧 15 生肖!\
> 鼠\
> 牛\
> 虎\
> 兔\
> 龍\
> 蛇\
> 馬\
> 羊\
> 猴\
> 雞\
> 狗\
> 豬\
> 熊\
> 象\
> 魚

`我們這邊多使用了myList.Count()來列出目前List的總筆數`

### 移除資料

- 單筆移除的方法我們使用 Remove()
- 多筆移除則是使用 RemoveRange(第幾筆,共刪幾筆)

### 範例:科學家發現原來是儀器故障才會算成 15 年，實際上只有 14 年，所以要把魚拿掉

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
            //宣告一個List
            List<string> myList = new List<string>() { "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬", "熊", "象", "魚" };

            //使用Remove()移除魚
            myList.Remove("魚");

            //使用Count()來表示List筆數
            Console.WriteLine("出來吧" + myList.Count() + "生肖!");
            //我們使用foreach迴圈來列出List的值
            foreach (string item in myList)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
 }
```

結果:

> 出來吧 14 生肖!\
> 鼠\
> 牛\
> 虎\
> 兔\
> 龍\
> 蛇\
> 馬\
> 羊\
> 猴\
> 雞\
> 狗\
> 豬\
> 熊\
> 象

### 範例:後來科學家又發現，原來研究儀器是玩具店買的，根本沒有那麼多個月，實際上只有 12 個月，所以要把動物復原

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
            //宣告一個List
            List<string> myList = new List<string>() { "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬", "熊", "象", "魚" };

            //由於第一筆是從0算起，所以要從12開始刪3筆
            myList.RemoveRange(12,3);

            //使用Count()來表示List筆數
            Console.WriteLine("出來吧" + myList.Count() + "生肖!");
            //我們使用foreach迴圈來列出List的值
            foreach (string item in myList)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }
    }
 }
```

結果:

> 出來吧 12 生肖!\
> 鼠\
> 牛\
> 虎\
> 兔\
> 龍\
> 蛇\
> 馬\
> 羊\
> 猴\
> 雞\
> 狗\
> 豬

### 進階用法:結合 class

- 我們可以利用 class 的屬性來建立資料模型
- 將資料模型做成 List

### 範例:我們將 12 個月與生肖結合吧

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsharpDemo
{
    //建立一個class
    class DataModel
    {
        //月份
        public int month;
        //動物
        public string animal;

    }
    class Program
    {
        static void Main(string[] args)
        {
            //宣告一個List
            List<DataModel> dataList = new List<DataModel>();
            //宣告一個List
            List<string> myList = new List<string>() { "鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬" };

            //宣告整數來算月份
            int Count = 1;
            //我們使用foreach迴圈來填寫dataList的值
            foreach (string item in myList)
            {
                //新增一筆新的資料所以我們要使用new
                dataList.Add(new DataModel
                {
                    month = Count,
                    animal = item
                });

                //進入下個月
                Count++;
            }

            //使用Count()來表示List筆數
            Console.WriteLine("出來吧" + dataList.Count() + "生肖!");
            //我們使用foreach迴圈來列出List的值
            foreach (DataModel item in dataList)
            {
                //這邊需要用item.物件名稱，才有辦法取到值
                Console.WriteLine(item.month + "月 , 屬 :" + item.animal);
            }
            Console.ReadKey();
        }
    }
  }
```

結果:

> 出來吧 12 生肖!\
> 1 月 , 屬 :鼠\
> 2 月 , 屬 :牛\
> 3 月 , 屬 :虎\
> 4 月 , 屬 :兔\
> 5 月 , 屬 :龍\
> 6 月 , 屬 :蛇\
> 7 月 , 屬 :馬\
> 8 月 , 屬 :羊\
> 9 月 , 屬 :猴\
> 10 月 , 屬 :雞\
> 11 月 , 屬 :狗\
> 12 月 , 屬 :豬
