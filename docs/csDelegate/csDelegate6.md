---
sidebar_position: 25
description:  委派 (Delegate)(Func 委派) - 馬戲團
key: [委派, Delegate, Func, 委派]
---

# `Func<T>` 泛型委派 - 有回傳值

1. 定義函式

- 傳入值設定為 Func`<string>`
- `<T>` 設定回傳值型態
- Func`<string> -> `可以直接傳入函式

```csharp
    /// <summary>
    /// 定義函式
    /// </summary>
    /// <param name="animal">動物的委派</param>
    private static void RunCircus(Func<string> animal)
    {
        string sound = animal();
        Console.WriteLine(sound);
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
    public class DelegateExercise6
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
        private static void RunCircus(Func<string> animal)
        {
            string sound = animal();
            Console.WriteLine(sound);
        }

        /// <summary>
        /// 小狗函式
        /// </summary>
        /// <returns></returns>
        private static string Dog()
        {
            return "汪汪!";
        }
    }
}

```
