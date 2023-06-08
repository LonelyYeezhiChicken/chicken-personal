### Func<T,TResult> 泛型委派 -> 有回傳值

1. 定義函式

- 傳入值設定為 `Func<int, string>`
- `<T,TResult>`
  - `T` -> 傳入參數
  - `TResult` -> 設定回傳值型態
- Func<string> -> 可以直接傳入函式

```csharp
    /// <summary>
    /// 定義函式
    /// </summary>
    /// <param name="animal">動物的委派</param>
    private static void RunCircus(Func<int, string> animal, int age)
    {
        string sound = animal(age);
        Console.WriteLine(sound);
    }
```

2. 呼叫馬戲團

- 直接傳入狗函式
- 無須做任何實例化
- 帶入年紀

```csharp
  RunCircus(Dog, 5);
```

---

## 完整程式碼

```csharp
using System;

namespace csharpExercise.DelegateExercise
{
    public class DelegateExercise7
    {

        /// <summary>
        /// 主程式
        /// </summary>
        public void Main()
        {
            RunCircus(Dog, 5);
        }


        /// <summary>
        /// 定義函式
        /// </summary>
        /// <param name="animal">動物的委派</param>
        private static void RunCircus(Func<int, string> animal, int age)
        {
            string sound = animal(age);
            Console.WriteLine(sound);
        }

        /// <summary>
        /// 小狗函式
        /// </summary>
        /// <returns></returns>
        private static string Dog(int age)
        {
            return $"汪汪!{age.ToString()} 歲";
        }
    }
}

```
