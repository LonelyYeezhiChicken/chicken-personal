---
sidebar_position: 65
description: 取得 Windows Product Id
key: [Csharp, 雜記, 取得 Windows Product Id]
tags: [C#, C#雜記]
---

# 👩‍💻 取得 Windows Product Id

> 使用查詢 `Win32_OperatingSystem` 類別，
>
> 然後獲取操作系統的產品識別碼（ `SerialNumber` 屬性）

:::caution
根據操作系統版本和權限，有時可能無法獲取操作系統的產品識別碼

這個訊息有時會受到保護，只有系統管理員權限才能訪問
:::

```csharp
using System;
using System.Management;

class Program
{
    static void Main()
    {
        try
        {
            ManagementObjectSearcher searcher = new ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem");
            ManagementObjectCollection collection = searcher.Get();

            foreach (ManagementObject m in collection)
            {
                // 獲取產品識別碼
                string productId = m["SerialNumber"].ToString();
                Console.WriteLine("操作系統產品識別碼: " + productId);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("無法獲取操作系統產品識別碼: " + e.Message);
        }
    }
}
```
