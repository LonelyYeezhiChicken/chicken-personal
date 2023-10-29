---
sidebar_position: 70
description: 字串擷取
key: [Csharp, 雜記, 字串擷取, Substring]
tags: [C#, C#雜記]
---

# 👩‍💻 字串擷取

> 擷取指定的字串長度

## 取得字串的末五碼

```csharp
string originalString = "這是一個很長的字串";
int length = originalString.Length;

if (length >= 5)
{
    string lastThreeCharacters = originalString.Substring(length - 5);
    Console.WriteLine("末五碼: " + lastThreeCharacters);
}
else
{
    // 處理字符串長度不足五個char的情況
    Console.WriteLine("字串長度不足三個char");
}
```
