老闆我要一個豬排漢堡，\
不要番茄，不要小黃瓜，\
洋蔥加量，加起司，\
現實生活中，我們常常會在點餐時跟老闆指定一些配料，\
而不是餐點上了，才把不喜歡的挑掉，\
C#世界中，也有這樣的點餐方式，\
那就是所謂的建構方法

### 建構方法
* 在我們創建物件時，系統為物件的成員分配記憶體，然後通過建構方法來初始化物件的成員變數

### 1. 默認建構方法 : 每個類別都有一個默認的與類別同名的建構方法
- 建構方法總是存在的，即使沒有特別顯示定義，編譯器也會為類別分配一個默認的建構方法
- 每當類別實例化時，每個成員都會在記憶體分到內存空間，並寫存入初始值\
	EX:\
		整型變數 初始 >> 0\
		實型變數 初始 >> 0.0\
		布林變數 初始 >> false\
		字串變數 初始 >> null
        
### 範例:我們建立一個豬的類別來看看結果
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
            Pig pig = new Pig();
            Console.WriteLine("name = " + pig.name);
            Console.WriteLine("age = " + pig.age);

            Console.ReadKey();
        }
    }
    //豬的類別
    class Pig
    {
        //名稱
        public string name;
        //年齡
        public int age;
    }
 }
```

結果:
>name =\
age = 0

### 2. 帶參數的建構方法
`※建構方法是一種特殊涵式，她必須和類別同名，並且沒有返回類型(連void也沒有)`

### 範例:我們修改一下豬類別吧
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
            //使用建構方法
            Pig pig = new Pig("肥嘟嘟一隻豬", 3);

            Console.WriteLine("姓名: " + pig.name);
            Console.WriteLine("年齡: " + pig.age);

            Console.ReadKey();
        }
    }
    //豬的類別
    class Pig
    {
        //名稱
        public string name;
        //年齡
        public int age;

        //使用建構方法
        public Pig()
        {
            //初始化變數
            name = nameValue;
            age = ageValue;
        }
    }
  }
  ```
  
  結果:
>姓名: 肥嘟嘟一隻豬
>年齡: 3

  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210925/20097001st53NPtdIy.png)
  
### 3.無參數建構方法
* 當我們定義建構方法後，默認的函數就失效了，如果想繼續用無參數建構方，就必須顯式定義
    
### 範例:我們在修改一下豬的類別
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
            Pig pig = new Pig();
            Console.WriteLine("name = " + pig.name);
            Console.WriteLine("age = " + pig.age);
            Console.ReadKey();
        }
    }
    //豬的類別
    class Pig
    {
        //名稱
        public string name;
        //年齡
        public int age;

        //使用建構方法
        public Pig()
        {
            //初始化變數
            name = "肥肥一隻豬";
            age = 20;
        }
    }
   }
   ```
   
   結果:
   >name = 肥肥一隻豬\
age = 20

### 以上就是我們今天的建構方法，期待大家在點餐前就能想好自己要什麼了