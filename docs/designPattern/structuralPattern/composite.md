---
sidebar_position: 15
description: 組合模式  (Composite Pattern) 
key: [設計模式, Design Pattern, 組合模式 , Composite Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 組合模式

## 概述

組合模式是一種結構性設計模式，用於將物件組合成樹狀結構，表示部分-整體層次結構組合模式使客戶可以以一致的方式處理單一物件和物件組合

## 組合模式主要解決以下問題

### 優點

- 客戶端代碼不需要區分葉子物件和容器物件，可以統一處理它們
- 簡化客戶端代碼，減少使用條件語句的需求
- 可輕鬆添加新類型的組件，無需更改現有客戶端代碼

### 缺點

- 限制了組件類型，某些操作可能無法在所有組件上執行，需要客戶端進行類型檢查

### 組合模式包含

1. 組件（Component）角色：定義葉子和容器物件的通用接口，以便客戶端以一致的方式操作它們
2. 葉節點（Leaf）角色：組合中的葉子節點，沒有子節點
3. 容器（Composite）角色：組合中的容器節點，可以包含子節點，包括葉子和其他容器
4. 客戶端（Client）角色：使用組合模式的客戶端代碼，以統一的方式處理葉子和容器物件

## 範例

### 1. 定義 Component 介面

```csharp
public interface IComponent
{
    void Operation();
}
```

### 2. 定義葉節點角色

```csharp
public class Leaf : IComponent
{
    public void Operation()
    {
        Console.WriteLine("葉節點操作");
    }
}
```

### 3. 定義容器角色

```csharp
public class Composite : IComponent
{
    private List<IComponent> children = new List<IComponent>();

    public void Add(IComponent component)
    {
        children.Add(component);
    }

    public void Remove(IComponent component)
    {
        children.Remove(component);
    }

    public void Operation()
    {
        Console.WriteLine("容器操作");
        foreach (IComponent child in children)
        {
            child.Operation();
        }
    }
}
```

### 4. 主程式

```csharp
class Program
{
    static void Main(string[] args)
    {
        IComponent leaf1 = new Leaf();
        IComponent leaf2 = new Leaf();

        Composite composite = new Composite();
        composite.Add(leaf1);
        composite.Add(leaf2);

        IComponent leaf3 = new Leaf();

        Composite root = new Composite();
        root.Add(composite);
        root.Add(leaf3);

        root.Operation();
    }
}
```

### 5. 結果

> 容器操作
>
> 葉節點操作
>
> 葉節點操作
>
> 葉節點操作
