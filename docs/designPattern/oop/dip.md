---
sidebar_position: 25
description: dependency inversion principle
key: [設計模式, Design Pattern, 物件導向設計原則, dependency inversion principle, 依賴反轉原則]
tags: [設計模式, Design Pattern,物件導向設計原則]
---

# 💡 依賴反轉原則
## dependency inversion principle
- 抽象不應該依賴於細節，細節則應該要依賴於抽象
- 因此我們需要先寫出抽象介面，在實作功能
- 所有類別都要相依於抽象，而不是具體的實作
- 可透過 DI Container 達到目的
- 為了達到低耦合的目的
  - 所有的類別之間都需要透過抽象介面

### 範例:

- controller:

```csharp
public class UserController
{
   private readonly IUserService userService
    // DI
    public UserController( IUserService userService )
    {
        this.userService = userService;
    }
}
```

- service :

```csharp
public interface IUserService
{
    //define function
}

public class UserService:IUserService
{
    // Do something

}
```
