人總是會有犯錯的一天，\
程式想必也是如此，\
但犯錯之後該怎麼辦呢?\
我們今天來探討 C#的錯誤處理

### 異常(Exception)

- 程式不可能萬無一失，總會有出錯的一天
- 但如果不處理這些錯誤，可能會造成程式崩潰

### 範例:我們寫一個分數，並看看分母為零會發生什麼事情吧

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
            //宣告分子
            int x = 100;

            //宣告分母
            int y = 0;

            int z = x / y;

            Console.WriteLine("結果 : " + z);

            Console.ReadKey();
        }
    }
  }
```

結果:

> 未處理的例外狀況: System.DivideByZeroException: 嘗試以零除。\
>  於 CsharpDemo.Program.Main(String[] args) 於 C:\CsharpDemo\Program.cs: 行 21

`我們會發現程式拋出了一個DivideByZeroException類別的錯誤，來提醒開發者發生什麼事情了`

### 捕捉異常~try-catch

- try-chatch 能幫我們把異常捕捉出來，並且讓我們決定後續的處理

### 範例:我們讓使用者輸入分母，並且來捕捉錯誤吧

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
            try
            {
                Console.WriteLine("請輸入分母");
                //宣告分子
                int x = 100;

                //宣告分母
                int y = Convert.ToInt32(Console.ReadLine());

                int z = x / y;

                Console.WriteLine("結果 : " + z);
            }
            catch (DivideByZeroException)//捕捉分母為0的錯誤
            {
                Console.WriteLine("分母不可以為0");
            }
            catch (FormatException)//捕捉格式錯誤
            {
                Console.WriteLine("格式不正確");
            }

            Console.ReadKey();
        }
    }
  }
```

輸入:

> 0

結果:

> 請輸入分母\
> 0\
> 分母不可以為 0

輸入:

> 孤獨一隻雞

結果:

> 請輸入分母\
> 孤獨一隻雞\
> 格式不正確

### 最後的處理~try-catch-finally

- 人不管有沒有犯錯，還是得吃飯
- 程式也一樣，有些事情就算犯錯了還是得吧他做完

### 範例:我們來試試看吧

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
            try
            {
                Console.WriteLine("請輸入分母");
                //宣告分子
                int x = 100;

                //宣告分母
                int y = Convert.ToInt32(Console.ReadLine());

                int z = x / y;

                Console.WriteLine("結果 : " + z);
            }
            catch (Exception ex)//捕捉所有發生的錯誤，如果不知道可能會發生的錯誤可以使用此類別
            {
                //ex.Message可得到簡易的錯誤描述，如果需要詳情，建議使用 ex.ToString()
                Console.WriteLine(ex.Message);
            }
            finally//最終要處理的事情
            {
                Console.WriteLine("既然都犯錯了，那就收工吃飯吧!");
            }


            Console.ReadKey();
        }
    }
  }
```

輸入:

> 0

結果:

> 請輸入分母\
> 0\
> 嘗試以零除。\
> 既然都犯錯了，那就收工吃飯吧!

### 把異常丟出來~throw

- 如果原本的異常不夠我們用，那我們就人工來拋異常吧

### 範例:我們來輸入 1~10 的數字吧，超過就把錯誤拋出來

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
            try
            {
                Console.WriteLine("請輸入1~10任一數");
                int number = Convert.ToInt32(Console.ReadLine());

                //判斷是否有超過範圍
                if (number < 1 || number > 10)
                {
                    //拋出超出範圍的異常
                    throw new IndexOutOfRangeException();
                }
                else
                {
                    Console.WriteLine("你輸入了 : " + number);
                }
            }
            catch (Exception ex)//捕捉所有發生的錯誤，如果不知道可能會發生的錯誤可以使用此類別
            {
                //ex.Message可得到簡易的錯誤描述，如果需要詳情，建議使用 ex.ToString()
                Console.WriteLine(ex.Message);
            }
            finally//最終要處理的事情
            {
                Console.WriteLine("既然都犯錯了，那就收工吃飯吧!");
            }


            Console.ReadKey();
        }
    }
  }
```

輸入:

> 11

結果:

> 請輸入 1~10 任一數\
> 11\
> 索引在陣列的界限之外。\
> 既然都犯錯了，那就收工吃飯吧!

### 今天學會錯誤處理之後，程式就不會因為一點點小毛病就當掉啦，期待我們明天再會啦
