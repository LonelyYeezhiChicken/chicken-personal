---
sidebar_position: 20
description: 迭代器模式 (Iterator Pattern)
key: [設計模式, Design Pattern, 迭代器模式, Iterator Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 迭代器模式

## 概述

迭代器模式是一種行為型設計模式，旨在提供一種方法來順序訪問集合中的元素，而不需要了解集合的底層表示

這種模式的關鍵點是將集合的遍歷行為抽象出來，使得在不暴露集合的內部結構的情況下，外部可以透過迭代器來進行遍歷

## 迭代器模式主要解決以下問題

### 優點

- 支持多種遍歷方式：不同的迭代器可以實現不同的遍歷方式

- 簡化集合介面：集合只需要提供一個創建迭代器的方法，遍歷的細節由迭代器負責

- 解耦集合和遍歷行為：迭代器模式將集合的遍歷行為抽象出來，使得集合和遍歷行為之間的依賴關係降低

### 缺點

- 額外的類別：引入了迭代器類別，增加了系統的複雜度

## 迭代器模式包含以下角色

1. **迭代器（Iterator）**：定義訪問和遍歷元素的介面，包括 `hasNext()`、`next()` 等方法
2. **具體迭代器（Concrete Iterator）**：實現迭代器介面，負責具體的遍歷邏輯
3. **聚合（Aggregate）**：定義創建相應迭代器物件的介面
4. **具體聚合（Concrete Aggregate）**：實現聚合介面，返回一個具體的迭代器實例

## 範例

### 1. 定義迭代器介面

```csharp
// 迭代器介面
public interface IIterator
{
    bool HasNext();
    object Next();
}
```

### 2. 定義聚合介面

```csharp
// 聚合介面
public interface IAggregate
{
    IIterator CreateIterator();
}
```

### 3. 實作具體迭代器

```csharp
// 具體迭代器
public class ConcreteIterator : IIterator
{
    private List<object> collection;
    private int currentIndex = 0;

    public ConcreteIterator(List<object> collection)
    {
        this.collection = collection;
    }

    public bool HasNext()
    {
        return currentIndex < collection.Count;
    }

    public object Next()
    {
        return collection[currentIndex++];
    }
}
```

### 4. 實作具體聚合

```csharp
// 具體聚合
public class ConcreteAggregate : IAggregate
{
    private List<object> items = new List<object>();

    public IIterator CreateIterator()
    {
        return new ConcreteIterator(items);
    }

    public void Add(object item)
    {
        items.Add(item);
    }
}
```

### 5. 實際使用

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 創建具體聚合物件
        ConcreteAggregate aggregate = new ConcreteAggregate();
        aggregate.Add("項目 A");
        aggregate.Add("項目 B");
        aggregate.Add("項目 C");

        // 創建迭代器
        IIterator iterator = aggregate.CreateIterator();

        // 使用迭代器遍歷元素
        while (iterator.HasNext())
        {
            Console.WriteLine(iterator.Next());
        }
    }
}
```

### 6. 結果

- 輸出:

```text
項目 A
項目 B
項目 C
```

---

> 在這個範例中，迭代器模式允許對集合進行遍歷，而不需要暴露集合的內部結構
>
> 具體聚合（`ConcreteAggregate`）實現了聚合介面，並提供了創建迭代器的方法
>
> 具體迭代器（`ConcreteIterator`）實現了迭代器介面，並負責具體的遍歷邏輯
>
> 通過這種方式，迭代器模式實現了集合和遍歷行為的解耦，提高了系統的靈活性和可擴展性
