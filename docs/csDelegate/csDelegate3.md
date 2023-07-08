---
sidebar_position: 10
description:  委派 (Delegate(多點傳送委派) - 馬戲團(多隻動物版)
key: [委派, Delegate, MulticastDelegate, 多點傳送委派]
tags: [委派, Delegate]
---

# 多點傳送委派-馬戲團(多隻動物版)

## MulticastDelegate

### 1. 使用 `+=` 進行註冊

```csharp
	Animal deleAnimal = new Animal(Dog);

    deleAnimal += new Animal(Cat);
    deleAnimal += new Animal(Duck);
    deleAnimal += new Animal(Chicken);
```

---

## 完整程式碼

```csharp
using System;

namespace csharpExercise.DelegateExercise
{
    public class DelegateExercise3
    {

        /// <summary>
        /// 主程式
        /// </summary>
        public void Main()
        {
            Animal deleAnimal = new Animal(Dog);

            deleAnimal += new Animal(Cat);
            deleAnimal += new Animal(Duck);
            deleAnimal += new Animal(Chicken);


            RunCircus(deleAnimal);
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
