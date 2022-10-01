電視可以倒帶，\
然後重播，\
喜歡看幾次就看幾次，\
C#中也能讓程式倒帶，重新執行，\
執行到滿意為止

### 遞迴
* 遞迴就是在方法中呼叫方法自己
* 通常會使用遞迴的程式碼都比較簡潔
* 遞迴通常執行效率較低

### 範例:我們來讓20一直倒扣到0，然後喊出新年快樂吧
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
            //呼叫遞迴方法
            Fac(20);
            
            Console.WriteLine("新年快樂!");
            Console.ReadKey();
        }
    //宣告一個遞迴方法
        static void Fac(int n)
        {
            Console.WriteLine("n = " + n);
            //如果n等於0之後就不呼叫自己
            if (n != 0)
            {
                Fac(n - 1);
            }
        }
    }
}
```
結果:
>n = 20\
n = 19\
n = 18\
n = 17\
n = 16\
n = 15\
n = 14\
n = 13\
n = 12\
n = 11\
n = 10\
n = 9\
n = 8\
n = 7\
n = 6\
n = 5\
n = 4\
n = 3\
n = 2\
n = 1\
n = 0\
新年快樂!

### 進階練習:
### 費波那契數列:
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
            //宣告一個整數，看要輸出多少項
            int n = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Fibonacci : ");
            for (int i = 1; i <= n; i++)
            {
                //輸出費波那契數列的第i項
                Console.Write(Fibonacci(i) + "\t");

                //每輸出五項換一行
                if ((i % 5) == 0)
                {
                    Console.WriteLine();
                }
            }

            Console.ReadKey();
        }

        //宣告方法
        static int Fibonacci(int n)
        {
            if (n == 1 || n == 2)
            {
                //初始值
                return 1;
            }
            else
            {
                //遞迴
                return (Fibonacci(n - 1) + Fibonacci(n - 2));
            }
        }


    }
  }
  ```
  
  輸入:
  >30

輸出:
>30
>Fibonacci :
```text
1       1       2       3       5
8       13      21      34      55
89      144     233     377     610
987     1597    2584    4181    6765
10946   17711   28657   46368   75025
121393  196418  317811  514229  832040
```

### 這就一個C#倒帶按鍵的故事~