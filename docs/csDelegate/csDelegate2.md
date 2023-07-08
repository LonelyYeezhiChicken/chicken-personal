---
sidebar_position: 5
description: 委派 (Delegate) - 馬戲團(多隻動物版)
key: [委派, Delegate]
---

# 馬戲團(多隻動物版)

### 1. 新增各種動物

```csharp

	/// <summary>
	/// 貓
	/// </summary>
	public static void Cat()
	{
		Console.WriteLine($"喵喵!");
	}

	/// <summary>
	/// 鴨
	/// </summary>
	public static void Duck()
	{
		Console.WriteLine($"呱呱!");
	}

	/// <summary>
	/// 雞
	/// </summary>
	public static void Chicken()
	{
		Console.WriteLine($"咕咕!");
	}
```

### 2. 取消掉委派傳入的名字

```csharp
    /// <summary>
    /// 定義委派
    /// </summary>
    /// <param name="name">姓名</param>
    private delegate void Animal();

    /// <summary>
    /// 定義函式
    /// </summary>
    /// <param name="animal">動物的委派</param>
    /// <param name="name">動物名字</param>
    private static void RunCircus(Animal animal)
    {
        animal();
    }
```

### 3. 使用迴圈建立動物 List

```csharp
   List<Animal> deleAnimal = new List<Animal>()
    {
        new Animal(Dog),
        new Animal(Cat),
        new Animal(Duck),
        new Animal(Chicken)
    };
```

### 4. 使用`foreach`執行馬戲團

```csharp
	foreach(var animalFunc in deleAnimal)
	{
		RunCircus(animalFunc);
	}
```

---

## 完整程式碼

```csharp
using System;
using System.Collections.Generic;

namespace csharpExercise.DelegateExercise
{
    public class DelegateExercise2
    {
        /// <summary>
        /// 主程式
        /// </summary>
        public void Main()
        {
            List<Animal> deleAnimal = new List<Animal>()
            {
                new Animal(Dog),
                new Animal(Cat),
                new Animal(Duck),
                new Animal(Chicken)
            };


            foreach(var animalFunc in deleAnimal)
            {
                RunCircus(animalFunc);
            }
        }


        /// <summary>
        /// 定義委派
        /// </summary>
        private delegate void Animal();

        /// <summary>
        /// 定義函式
        /// </summary>
        /// <param name="animal">動物的委派</param>
        private static void RunCircus(Animal animal)
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

        /// <summary>
        /// 貓
        /// </summary>
        public static void Cat()
        {
            Console.WriteLine($"喵喵!");
        }

        /// <summary>
        /// 鴨
        /// </summary>
        public static void Duck()
        {
            Console.WriteLine($"呱呱!");
        }

        /// <summary>
        /// 雞
        /// </summary>
        public static void Chicken()
        {
            Console.WriteLine($"咕咕!");
        }
    }
}

```
