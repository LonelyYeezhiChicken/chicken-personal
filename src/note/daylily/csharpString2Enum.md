
### 我們在某些情境下會應用到將字串轉為列舉
從客戶端傳入一個字串，我想將它轉換為我自定義的列舉


```csharp
    StatusEnum myStatus;
    Enum.TryParse("Active", out myStatus);
```