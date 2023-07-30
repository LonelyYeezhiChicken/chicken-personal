---
sidebar_position: 10
description: 單例模式 (Singleton Pattern) 
key: [設計模式, Design Pattern, 單例模式, Singleton Pattern]
tags: [設計模式, Design Pattern]
---

# 💡 單例模式

## Singleton Pattern

## 概述

單例模式用於確保一個類別僅有一個實例存在，並提供一個全域訪問點來取得這個實例。

### 單例模式主要解決以下兩個問題

- 優點
  1. 控制實例數量：單例模式確保一個類別只能有一個實例。這對於某些場景很有用，例如: 限制系統中某些資源的使用量或確保某個物件的狀態全域的
  2. 提供全域訪問點：單例模式提供一個全域的方式來訪問唯一實例。這使得其他部分能夠輕鬆地取得這個實例並進行操作，而不需要知道詳細的實例創建邏輯
- 缺點
  - 為了解決這兩個問題，導致單例模式違反單一原則
  - 單一職責原則強調一個類別應該只有一個變化的原因，即只有一個職責。
  - 單例模式在保護唯一實例的同時，往往也包含了該類別的創建邏輯，導致這個類別承擔了兩個職責

### 單例模式包含

1. 單例類別（Singleton Class）：確保只有一個實例存在並提供一個全域訪問點來取得這個唯一實例，這個類別會將其構造函數設為私有（private）
2. 唯一實例（Singleton Instance）：這是單例模式中唯一存在的實例，該實例通常是由單例類別在內部自行創建並保持著
3. 創建方法（Creation Method）：通常是一個靜態（static）方法，負責在需要時創建唯一實例並返回給呼叫者

## 範例

以「家」為例，房子就可以視為一個類別，而這個類別只能有一個實例，即這座房子。在這個例子中，房子的建造與拆除是由房屋公司掌管的，它們允許你透過特定的機制，只能取得這一座特定的房子實例

### 1. 唯一實例（Singleton Instance）

``` csharp
    // 宣告一個私有靜態變數來保存唯一的實例
    private static House instance;
```

### 2. 單例類別（Singleton Class）

``` csharp
public class House
{
    // 宣告一個私有靜態變數來保存唯一的實例
    private static House instance;

    // 宣告私有建構函式，防止外部實例化
    private House()
    {
        // 在此處初始化房子的一些屬性
    }

    public void OpenDoor()
    {
        Console.WriteLine("房子的門打開了。");
    }
}
```

### 3. 創建方法（Creation Method）

``` csharp
public class House
{
    // 宣告一個私有靜態變數來保存唯一的實例
    private static House instance;

    // 宣告私有建構函式，防止外部實例化
    private House()
    {
        // 在此處初始化房子的一些屬性
    }

    // 提供一個全域的訪問點，讓客戶端程式碼可以取得這唯一的實例
    public static House GetInstance()
    {
        // 如果還沒有建立實例，則建立一個新的實例
        if (instance == null)
        {
            instance = new House();
        }

        // 回傳唯一的實例
        return instance;
    }

    public void OpenDoor()
    {
        Console.WriteLine("房子的門打開了。");
    }
}
```

### 4. 實際使用

``` csharp
public class Program
{
    static void Main(string[] args)
    {
        // 取得房子的實例
        House myHouse = House.GetInstance();

        // 嘗試取得另一個實例，但因為單例模式的限制，實際上會取得同一個實例
        House anotherHouse = House.GetInstance();

        // 檢查兩個實例是否相同
        if (myHouse == anotherHouse)
        {
            Console.WriteLine("兩個房子實例是相同的");
        }
        else
        {
            Console.WriteLine("這裡不應該被執行，因為單例模式限制了只能有一個實例");
        }

        // 使用房子的方法
        myHouse.OpenDoor();

        // 輸出結果：
        // 兩個房子實例是相同的。
        // 房子的門打開了。
    }
}
```

### 5. 結果

- 輸出:

```text
    兩個房子實例是相同的
    房子的門打開了
```
