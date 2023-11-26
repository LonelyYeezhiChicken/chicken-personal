---
sidebar_position: 10
description: 命令模式 (Command Pattern) 
key: [設計模式, Design Pattern, 職責鏈模式 , Command Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 命令模式

## 概述

命令模式是一種行為型設計模式，旨在將請求轉換為一個包含請求的獨立物件，使得請求的參數化、排隊、操作和日誌記錄等功能成為可能

這種模式的關鍵點是將發送命令的物件和執行命令的物件進行解耦

## 命令模式主要解決以下問題

### 優點
  
- 解耦發送者和接收者：發送者無需知道具體的接收者，只需知道如何發送命令即可

- 可擴展性：易於擴展新的命令和接收者，因為它們是獨立的物件呼叫

- 支持取消和恢復操作：命令物件可以記錄操作，支持撤銷（取消）和恢復操作

### 缺點

- 額外的類別：引入了許多額外的命令類別，可能會導致類別爆炸

## 命令模式包含以下角色

1. **命令（Command）**：定義執行操作的介面，包括一個執行（execute）方法
2. **具體命令（Concrete Command）**：實現命令介面，通常包括一個接收者物件和實際執行命令的操作
3. **發送者（Invoker）**：要求命令的物件，將命令發送給相應的接收者
4. **接收者（Receiver）**：實際執行命令的物件
5. **客戶端（Client）**：創建具體命令物件，設置其接收者，並將其發送給發送者

## 範例

### 1. 定義命令介面

```csharp
// 命令介面
public interface ICommand
{
    void Execute();
}
```

### 2. 實作具體命令

```csharp
// 具體命令A
public class ConcreteCommandA : ICommand
{
    private Receiver receiver;

    public ConcreteCommandA(Receiver receiver)
    {
        this.receiver = receiver;
    }

    public void Execute()
    {
        receiver.ActionA();
    }
}

// 具體命令B
public class ConcreteCommandB : ICommand
{
    private Receiver receiver;

    public ConcreteCommandB(Receiver receiver)
    {
        this.receiver = receiver;
    }

    public void Execute()
    {
        receiver.ActionB();
    }
}
```

### 3. 定義接收者

```csharp
// 接收者
public class Receiver
{
    public void ActionA()
    {
        Console.WriteLine("執行 ActionA");
    }

    public void ActionB()
    {
        Console.WriteLine("執行 ActionB");
    }
}
```

### 4. 實作發送者

```csharp
// 發送者
public class Invoker
{
    private ICommand command;

    public void SetCommand(ICommand command)
    {
        this.command = command;
    }

    public void ExecuteCommand()
    {
        command.Execute();
    }
}
```

### 5. 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 創建接收者
        Receiver receiver = new Receiver();

        // 創建具體命令
        ICommand commandA = new ConcreteCommandA(receiver);
        ICommand commandB = new ConcreteCommandB(receiver);

        // 創建發送者
        Invoker invoker = new Invoker();

        // 設置並執行命令A
        invoker.SetCommand(commandA);
        invoker.ExecuteCommand();

        // 設置並執行命令B
        invoker.SetCommand(commandB);
        invoker.ExecuteCommand();
    }
}
```

### 6. 結果

- 輸出:

```text
執行 ActionA
執行 ActionB
```

---

> 在這個範例中，命令模式允許將發送者（`Invoker`）和接收者（`Receiver`）解耦，並將命令（`ICommand`）作為一個獨立的物件呼叫，從而實現了命令的參數化和排隊功能
>
> 具體命令（`ConcreteCommandA`和`ConcreteCommandB`）實現了命令介面，並包含對應的接收者和實際執行的操作
>
> 發送者設置具體命令，並執行命令，而不需要了解命令的內部實現這提高了系統的靈活性和可擴展性
