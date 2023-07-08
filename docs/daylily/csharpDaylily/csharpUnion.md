---
sidebar_position: 15
description: 取得兩個 list 得聯集
key: [Csharp, 雜記, 聯集]
tags: [C#, C#雜記]
---

# 👩‍💻 聯集
### 取得兩個 list 得聯集

```csharp
void Main()
{
	List<int> A = new List<int>(){1,2,3,5,7};
	List<int> B = new List<int>(){2,3,4,5,6,7};
	List<int> C = new List<int>(){2,3,4,5,6,7,9,10,11,12};
	A = A.Union(B).ToList();
	A.OrderBy(x => x).Dump();
	A = A.Union(C).ToList();
	A.OrderBy(x => x).Dump();
}
```
