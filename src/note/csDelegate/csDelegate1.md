## 委派練習 1

- [程式碼](https://github.com/LINDuke-Lin/csharp-Exercise/blob/main/csharpExercise/DelegateExercise/delegateExercise1.cs)

1. 定義要使用的委派

- 使用`delegate`關鍵字
- 定義傳入參數`string name`

```csharp
    /// <summary>
    /// 定義委派
    /// </summary>
    /// <param name="name">姓名</param>
    private delegate void Animal(string name);
```

2. 定義要接收委派的函式

- 定義馬戲團表演的函式
- 傳入委派與動物姓名
- 在函式裡實現委派`animal(name);`

```csharp
    /// <summary>
    /// 定義函式
    /// </summary>
    /// <param name="animal">動物的委派</param>
    /// <param name="name">動物名字</param>
    private static void RunCircus(Animal animal, string name)
    {
        animal(name);
    }
```

3. 定義小狗函式

```csharp
    /// <summary>
    /// 小狗函式
    /// </summary>
    /// <param name="name">姓名</param>
    private static void Dog(string name)
    {
        Console.WriteLine($"汪汪! 我是{name}");
    }
```

4. 在主程式實例化動物委派

- 將小狗作為函式帶入

```csharp
   Animal deleDog = new Animal(Dog);
```

5. 將呼叫馬戲團函式

- 將動物委派傳入

```csharp
  RunCircus(deleDog, "小狗");
```

---

## 完整程式碼

```csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpExercise.EventDemo
{
    public class DelegateExercise1
    {
        /// <summary>
        /// 主程式
        /// </summary>
        public void Main()
        {
            Animal deleDog = new Animal(Dog);

            RunCircus(deleDog, "小狗");

        }

        /// <summary>
        /// 定義委派
        /// </summary>
        /// <param name="name">姓名</param>
        private delegate void Animal(string name);

        /// <summary>
        /// 定義函式
        /// </summary>
        /// <param name="animal">動物的委派</param>
        /// <param name="name">動物名字</param>
        private static void RunCircus(Animal animal, string name)
        {
            animal(name);
        }

        /// <summary>
        /// 小狗函式
        /// </summary>
        /// <param name="name">姓名</param>
        private static void Dog(string name)
        {
            Console.WriteLine($"汪汪! 我是{name}");
        }


    }
}
```
