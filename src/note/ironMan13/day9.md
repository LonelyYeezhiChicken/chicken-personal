好煩好煩，有時候就為了 1+2+..+100，\
寫了超長程式，\
那又臭又長的程度堪比裹腳布啊。

### for 迴圈

- 在 for 迴圈中，我們需要宣告一個初始值
- 再來是宣告條件什麼時候該停下來
- 以下是 for 迴圈的結構
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210907/200970016wwyC09wTd.png)

### 範例:我們來練習 1+2+3+...+100

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
            //宣告一個整數，來讓他自增
            int sum = 0;

            //開始使用for迴圈
            for (int i = 1; i <= 100; i++)
            {
                sum += i;//使用指派運算子
            }

            //看結果
            Console.WriteLine(sum);
            Console.ReadKey();
        }
    }
 }
```

結果:

> 5050

### 隨堂小練習

### 範例:我們來用 for 迴圈實現數學公式的階乘，n!=1 X 2 X.....Xn

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
            //讀取用戶輸入的數字
            int n = Convert.ToInt32(Console.ReadLine());

            //宣告一個長整數變數
            long a = 1;
            for (int i = 1; i <= n; i++)
            {
                //做乘法的累計
                a *= i;
            }
            Console.WriteLine(n + "! = " + a);
            Console.ReadKey();
        }
    }
  }
```

輸入:

> 20

結果:

> 20\
> 20! = 2432902008176640000

### 以上就是我們今天的 for 迴圈，匯了迴圈之後可以大大的降低程式的重複性，我們就明天再見啦!
