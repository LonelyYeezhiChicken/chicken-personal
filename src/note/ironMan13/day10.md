日子一天一天過，
周而復始，無限循環
C#裡面也有重複不斷的語句，while

### while迴圈
* 執行前會先判斷條件是否為真
* 如果條件為真就繼續執行，直到條件變成否
* 如果條件式真，程式會永遠執行

### 範例:我們來倒數10~1，數到1時就喊新年快樂
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
            //先宣告一個開關
            bool open = true;

            //宣告一個倒數用的整數變數
            int number = 10;

            //開始執行倒數
            while (open)
            {
                //如果數到1就把開關關掉，下次就不會執行
                if(number == 1)
                {
                    open = false;
                }

                //印出當前數字，印完後就減一
                Console.WriteLine(number--);
            }
            //都倒數完後就喊新年快樂
            Console.WriteLine("新年快樂!");

            Console.ReadKey();
        }
    }
  }
  ```
  
  結果:
  >10\
9\
8\
7\
6\
5\
4\
3\
2\
1\
新年快樂!

### break
* 只要在迴圈中加入break，無論迴圈條件如何就都直接結束迴圈
* 即使條件為true還是會結束迴圈
### 範例:我們來用剛剛的範例來實驗break吧
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
            //先宣告一個開關
            bool open = true;

            //宣告一個倒數用的整數變數
            int number = 10;

            //開始執行倒數
            while (open)
            {
               
                //印出當前數字
                Console.WriteLine(number);

                //如果數到1就break，放後面的原因是berak後就不會執行了
                if (number == 1)
                {
                    //執行到這邊就中斷
                    break;
                }
                //break後就不會執行了，所以遞減放到後面
                number--;
            }
            //都倒數完後就喊新年快樂
            Console.WriteLine("新年快樂!");
            
             //我們寫看看開關的值
             Console.WriteLine("開關 = " + open);

            Console.ReadKey();
        }
    }
  }
  ```
  
  結果:
  >10\
9\
8\
7\
6\
5\
4\
3\
2\
1\
新年快樂!\
開關 = True

`在這邊我們可以看到開關的值明明還是true，但一執行Break迴圈就停掉了`

### continue
* 他跟break一樣是中斷迴圈
* 但不一樣的點，他是中斷`本次迴圈`
* 這次迴圈執行不執行，但下次還會執行

### 範例:我們印出1~10的偶數吧
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
            //宣告一個計數用的整數變數
            int number = 0;

            //開始執行計數
            while (number <11)
            {
                //先做加一
                number++;
                //如果不是偶數，本次後面就不執行了
                if (number % 2 !=0)
                {
                    continue;
                }
                //印出當前數字，並加一
                Console.WriteLine(number);
            }

            Console.ReadKey();
        }
    }
  }
  ```
  
  結果:
  >2\
4\
6\
8\
10

`我們就可以發現，當基數的時候迴圈就沒往下執行了，偶數才會執行`

### 我們今天的故事就到這邊，To be continue....