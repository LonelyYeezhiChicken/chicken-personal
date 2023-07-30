---
sidebar_position: 25
description: 將 list 轉為字串，並加入","
key: [Csharp, 雜記, ist 轉為字串]
tags: [C#, C#雜記]
---

# 👩‍💻 List to string 加入分隔符號

```csharp
void Main()
{
 List<string> testList = new List<string>(){"a","z","c","d","x"};
 string testStr = string.Join(",",testList);
 testStr.Dump();
}
```
