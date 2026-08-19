---
sidebar_position: 70
description: 避免 Static Dictionary 在多執行緒初始化時 Race Condition 讀到半成品
key: [C#, 雜記, 多執行緒, Race Condition, Dictionary, static, 執行緒安全]
tags: [C#, C#雜記]
---

# 👩‍💻 Dictionary 讀到空值問題

## 1: 問題現象

- 程式開機啟動時，Log 偶發印出：
  > `服務 '' 的 URL 為空`
- 導致系統誤判服務端點不存在，微服務整組連線失效

## 2: 發生原因分析

- **多執行緒撞車（Race Condition）**：`_endpoints` 為共用的 `static Dictionary`，開機時有多個執行緒併發存取，且沒有加鎖保護
- **讀到半成品結構**：
  - 當執行緒 A 剛執行 `_endpoints = new Dictionary<string, string>()` 並開始在迴圈中逐筆寫入資料時
  - 執行緒 B 剛好進來讀取 `_endpoints`
  - 此時執行緒 B 直接讀到了字典底層尚未填值的空白預設結構（Key 與 Value 均為空字串 `""`），而非 `null` 或完整資料

## 3: 解決方式（三道防線）

### 1. 改用區域變數組裝後再一次性賦值（最核心）

- 先在方法內的 Local 變數把 Dictionary 全部建立與填值完成
- 最後一行才一次性指定給 `_endpoints`
- > **核心原理**：在 .NET 中，物件參考（指標）的賦值是不可分割的（Atomic）。讀取端拿到的要嘛是舊字典，要嘛是已完整填值的新字典，永遠不會看到「填到一半」的半成品

### 2. 宣告時給予安全預設值

- 宣告 `_endpoints` 時直接給 `new Dictionary<string, string>()`（或空字典）
- 防止在尚未完成初始化或極端邊界情況下被讀出 `null` 造成 `NullReferenceException`

### 3. 初始化流程加鎖（Lock）

- 在初始化流程中加上 `lock (_lockObj)` 機制
- 確保耗時的端點載入與解析邏輯在開機併發時只會被執行一次

---

## 4: 代碼對比

### ❌ 錯誤寫法（容易讀到半成品）

```csharp
public class ServiceEndpointManager
{
    private static Dictionary<string, string> _endpoints;

    public static void Initialize()
    {
        // 危險：直接指向新實體，此時其他執行緒讀取會看到空字典或半成品
        _endpoints = new Dictionary<string, string>();

        foreach (var service in LoadFromConfig())
        {
            // 逐筆寫入期間，其他執行緒可能剛好進來讀到空值
            _endpoints[service.Name] = service.Url;
        }
    }

    public static string GetUrl(string serviceName)
    {
        if (_endpoints != null && _endpoints.TryGetValue(serviceName, out var url))
        {
            return url;
        }
        return string.Empty;
    }
}
```

### ✔️ 正確寫法（執行緒安全 + 原子切換）

```csharp
public class ServiceEndpointManager
{
    // 防線 1：宣告時給預設值，避免 null
    private static Dictionary<string, string> _endpoints = new Dictionary<string, string>();
    private static readonly object _lockObj = new object();
    private static bool _isInitialized = false;

    public static void Initialize()
    {
        if (_isInitialized) return;

        // 防線 2：加鎖避免重複初始化撞車
        lock (_lockObj)
        {
            if (_isInitialized) return;

            // 防線 3（最核心）：先用區域變數組裝好
            var tempEndpoints = new Dictionary<string, string>();

            foreach (var service in LoadFromConfig())
            {
                tempEndpoints[service.Name] = service.Url;
            }

            // 最後一次性原子替換指標，讀取端永遠不會看到半成品
            _endpoints = tempEndpoints;
            _isInitialized = true;
        }
    }

    public static string GetUrl(string serviceName)
    {
        if (_endpoints.TryGetValue(serviceName, out var url))
        {
            return url;
        }
        return string.Empty;
    }
}
```
