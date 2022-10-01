在真實世界中，大家都很愛比較，我比你有錢，\
我長得比你高，我比你帥，\
我比你漂亮，C#世界也是非常愛比較的

### 比較運算子
* 隨便兩個數字抓來都是可以做比較的，C#的世界也不例外

| 運算子 | 用途 |  類別 |
| - | - | - |
|< | 小於 | 二元 |
|> | 大於 | 二元 |
|<= | 小於等於 | 二元 |
|>= | 大於等於 | 二元 |
|==| 等於 | 二元 |
|!=| 不等於 | 二元 |

`注意! 各位千萬不要把 " == " 與 " = "搞混了，前者是比較，後者是賦值`

### 邏輯表達式
* 搭配著比較運算子，我們可以列出邏輯表達式
* 如果答案是正確的我們稱之為"真(true)"
* 反之答案是不正確的我們稱之為"假(false)"

邏輯表達式 | 結果 
------------- | -------------
|1 < 2 | 真
| 3 > 2 | 真 
| 4 == 5 | 假 
| (6 / 2) != 3 | 假 

### 範例:我們來驗證上面的例子
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
            //直接印出結果
            Console.WriteLine(1 < 2);
            Console.WriteLine(3 > 2);
            Console.WriteLine(4 == 5);
            Console.WriteLine((6 / 2) != 3);

            Console.ReadKey();
        }
    }
}
```

結果:
>True\
True\
False\
False

### 邏輯運算子
裡頭包含了:
1. `&&` 且 (and) 
2. `||` 或 (or)
3. `!` 非 (not)

### 1. `&&` 且 (and) :兩者條件都要滿足

|P | Q |  P and Q |
| - | - |- |
|true | true | true |
|true | false | false |
|false | true | false |
|false | false | false |

### 我們來看看電路圖，必須兩個開關都導通，才會通電
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210905/20097001UVjpqXfioN.png)

### 範例:x是大於10的偶數
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
            //宣告x為12
            int x = 12;

            //x要大於10，因為是偶數所以可以被2整除
            Console.WriteLine((x > 10) && (x % 2 == 0));
            Console.ReadKey();
        }
    }
 }
 ```
 
 結果:
 >True

### 2. `||` 或 (or):其中之一滿足則成立

P | Q |  P and Q
| - | - |- |
|true | true | true |
|true | false | true |
|false | true | true |
|false | false | false |

### 我們來看看電路圖，只要有一個開關都導通，就會通電
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210905/20097001XrHDlQUZwh.png)

### 範例:x是負數或是 x 是3的倍數
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
            //宣告x為12
            int x = 12;

            //x是正數，但x是三的倍數
            Console.Write("x = " + x+" , ");
            Console.WriteLine((x < 10) || (x % 3 == 0));

            //x是負數，但x不是三的倍數
            x = -10;
            Console.Write("x = " + x + " , ");
            Console.WriteLine((x < 10) || (x % 3 == 0));

            //x是正數，也x不是三的倍數
            x = 10;
            Console.Write("x = " + x + " , ");
            Console.WriteLine((x < 10) || (x % 3 == 0));

            Console.ReadKey();
        }
    }
 }
 ```
 
 結果:
 >x = 12 , True
x = -10 , True
x = 10 , False

### 4. `!` 非 (not):與事實相反
* 如果1不等於2，我們就 `1 != 2` 也可以使用 `!(1 == 2)` 表示

### 布林變數~bool 
* 布林變數也是C#變數成員的一種型別，他的種族代號是`bool`
* 他的值只會有兩種，不是真就是假，從來不騙人

### 範例:我們輸入一個整數，讓電腦來告訴我們它是不是偶數
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
            //宣告一個布林變數
            bool isEven;

            Console.WriteLine("來輸入一個整數吧!");
            int x = Convert.ToInt32(Console.ReadLine());

            //判斷是不是偶數
            isEven = (x % 2) == 0;

            //列印結果
            Console.Write("請問神奇一隻雞，" + x + "是偶數嗎 ? ");
            Console.WriteLine(isEven);
            Console.ReadKey();
        }
    }
}
```

輸入:
>10

結果:
>來輸入一個整數吧!\
10\
請問神奇一隻雞，10是偶數嗎 ? True

輸入:
>11

結果:
>來輸入一個整數吧!\
1\
請問神奇一隻雞，1是偶數嗎 ? False

### 就說電腦不會騙人吧，對就對，不對就不對，我們現在已經可以讓電腦算數學，也讓電腦擁有明辨是非的能力了，請大家期待之後的文章，電腦會越來越聰明的