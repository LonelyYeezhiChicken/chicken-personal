---
sidebar_position: 5
description: 職責鏈模式 (Chain of Responsibility Pattern) 
key: [設計模式, Design Pattern, 職責鏈模式 , Chain of Responsibility Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 職責鏈模式

## 概述

職責鏈模式是一種行為型設計模式，用於處理複雜的請求，並將請求傳遞給一個或多個處理者，直到有一個處理者能夠處理它

該模式的核心思想是將處理者組成一條鏈，每個處理者都可以決定是否處理請求，並將請求傳遞給下一個處理者

這樣可以實現請求的分離和處理者的解耦

### 職責鏈模式主要解決以下問題

- 優點
  - 分離請求和處理：職責鏈模式將請求的發起和處理者的職責分離，使系統更加靈活呼叫
  - 動態組合：可以動態組合不同的處理者，以滿足不同的需求呼叫
  - 減少耦合：處理者之間的耦合減少，每個處理者只需關心自己的處理邏輯呼叫
- 缺點
  - 風險：如果職責鏈設計不當，可能會導致請求無法處理或無法終止呼叫
  - 過多的處理者：過多的處理者可能導致性能下降呼叫

### 職責鏈模式包含以下角色

1. 抽象處理者（Handler）：定義處理請求的接口，包括處理請求的方法和設置下一個處理者的方法呼叫
2. 具體處理者（Concrete Handler）：實現抽象處理者接口，決定是否處理請求，如果不處理，則將請求傳遞給下一個處理者呼叫
3. 請求（Request）：包含需要處理的信息的對象呼叫
4. 客戶端（Client）：創建職責鏈，將請求傳遞給職責鏈的第一個處理者呼叫

## 範例

### 1. 定義抽象處理者

```csharp
// 抽象處理者
public abstract class Handler
{
    protected Handler nextHandler;

    public void SetNextHandler(Handler handler)
    {
        nextHandler = handler;
    }

    public abstract void HandleRequest(Request request);
}
```

### 2. 實作具體處理者

```csharp
// 具體處理者A
public class ConcreteHandlerA : Handler
{
    public override void HandleRequest(Request request)
    {
        if (request.Type == RequestType.TypeA)
        {
            Console.WriteLine("處理 TypeA 請求");
        }
        else if (nextHandler != null)
        {
            nextHandler.HandleRequest(request);
        }
    }
}

// 具體處理者B
public class ConcreteHandlerB : Handler
{
    public override void HandleRequest(Request request)
    {
        if (request.Type == RequestType.TypeB)
        {
            Console.WriteLine("處理 TypeB 請求");
        }
        else if (nextHandler != null)
        {
            nextHandler.HandleRequest(request);
        }
    }
}
```

### 3. 定義請求類型

```csharp
// 請求類型
public enum RequestType
{
    TypeA,
    TypeB
}

// 請求類
public class Request
{
    public RequestType Type { get; set; }

    public Request(RequestType type)
    {
        Type = type;
    }
}
```

### 4. 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 創建具體處理者
        Handler handlerA = new ConcreteHandlerA();
        Handler handlerB = new ConcreteHandlerB();

        // 設置處理者之間的關係
        handlerA.SetNextHandler(handlerB);

        // 創建請求
        Request requestA = new Request(RequestType.TypeA);
        Request requestB = new Request(RequestType.TypeB);

        // 處理請求
        handlerA.HandleRequest(requestA);
        handlerA.HandleRequest(requestB);
    }
}
```

### 5. 結果

- 輸出:

```text
處理 TypeA 請求
處理 TypeB 請求
```

---

> 在這個範例中，職責鏈模式允許不同的處理者（`ConcreteHandlerA` 和 `ConcreteHandlerB`）根據請求的類型來處理請求
>
> 如果某個處理者無法處理請求，它會將請求傳遞給下一個處理者，直到有一個處理者能夠處理它
>
> 這樣實現了請求的分離和處理者的解耦呼叫
