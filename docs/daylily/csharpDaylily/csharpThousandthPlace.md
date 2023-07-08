---
sidebar_position: 10
description: 千分位符
key: [Csharp, 雜記, 千分位符]
---

# 千分位符
### 如果需要將數字每三位做一個逗號可以使用

```csharp
12345567.ToString("N0");
```

結果:

```text
=> 12,345,567
```
