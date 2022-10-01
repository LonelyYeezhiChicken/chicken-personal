### Acton 泛型委派

1. 定義函式
- 傳入值設定為 Action
- Action -> 可以直接傳入函式
```csharp
	/// <summary>
    /// 定義函式
    /// </summary>
    /// <param name="animal">動物的委派</param>
    private static void RunCircus(Action animal)
    {
        animal();
    }
```

2. 呼叫馬戲團
- 直接傳入狗函式
- 無須做任何實例化
```csharp
 RunCircus(Dog);
```


---

## 完整程式碼
```csharp
using System;

namespace csharpExercise.DelegateExercise
{
    public class DelegateExercise4
    {
        /// <summary>
        /// 主程式
        /// </summary>
        public void Main()
        {
            RunCircus(Dog);
        }


        /// <summary>
        /// 定義函式
        /// </summary>
        /// <param name="animal">動物的委派</param>
        private static void RunCircus(Action animal)
        {
            animal();
        }

        /// <summary>
        /// 小狗函式
        /// </summary>
        private static void Dog()
        {
            Console.WriteLine($"汪汪!");
        }
    }
}
```