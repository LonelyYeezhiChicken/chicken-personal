---
sidebar_position: 20
description:  委派 (Delegate)(Action 委派(傳參數)) - 馬戲團
key: [委派, Delegate, Action, 委派]
---

# Acton 泛型委派 - 傳參數

- [程式碼](https://github.com/LonelyYeezhiChicken/csharp-Exercise/blob/main/csharpExercise/DelegateExercise/DelegateExercise5.cs)

### 1. 定義函式

- 傳入值設定為 Action `<string>`
- `<T>` 之中帶入要傳遞的變數型別
- Action -> 可以直接傳入函式

```csharp
    /// <summary>
    /// 定義函式
    /// </summary>
    /// <param name="animal">動物的委派</param>
    private static void RunCircus(Action<string> animal, string name)
    {
        animal(name);
    }
```

### 2. 呼叫馬戲團

- 直接傳入狗函式
- 無須做任何實例化

```csharp
 RunCircus(Dog, "狗狗");
```

---

## 完整程式碼

```csharp
using System;

namespace CSharpExercise.DelegateExercise
{
    public class DelegateExercise5
    {
        /// <summary>
        /// 主程式
        /// </summary>
        public void Main()
        {
            RunCircus(Dog, "狗狗");
        }


        /// <summary>
        /// 定義函式
        /// </summary>
        /// <param name="animal">動物的委派</param>
        private static void RunCircus(Action<string> animal, string name)
        {
            animal(name);
        }

        /// <summary>
        /// 小狗函式
        /// </summary>
        private static void Dog(string name)
        {
            Console.WriteLine($"汪汪!我是{name}");
        }
    }
}

```
