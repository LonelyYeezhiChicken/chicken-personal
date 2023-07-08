---
sidebar_position: 20
description: interface segregation principle
key: [設計模式, Design Pattern, 物件導向設計原則, interface segregation principle, 介面隔離原則]
---

# 介面隔離原則
## interface segregation principle
- 確保模組之間的耦合度低
- 所有模組之間的依賴關係應該要依賴他們所需要的 interface
- 確保後續的維護與修改可以更容易的進行

### 範例:

- 動物的介面

```csharp
public interface IAnimal
{
    //吃
    void Eat();
    //睡覺
    void Sleep();
}
```

- 貓咪類別

```csharp
public class Cat : IAnimal
{
    public void Eat()
    {
        // Eat implementation
    }

    public void Sleep()
    {
        // Sleep implementation
    }
}
```

- 狗狗類別

```csharp
public class Dog : IAnimal
{
    public void Eat()
    {
        // Eat implementation
    }

    public void Sleep()
    {
        // Sleep implementation
    }
}
```
