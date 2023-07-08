---
sidebar_position: 1
description: 多List 比較
key: [Csharp, 雜記, 多List 比較]
tags: [C#, C#雜記]
---

# 👩‍💻 多List 比較

## 在 C# 中比較兩個列表

1. 用 C# 中的 `Linq` 方法比較列表以查詢差異
2. 用 C# 中的 `List.Contains()` 函式比較列表以尋找差異

### 用 C# 中的 Linq 方法比較列表以查詢差異

### 考慮以下情況:

我們有兩個列表，分別是 `list1` 和 `list2` ，我們想知道:

- `list1` 中哪些元素不在 `list2` 中
- `list2` 中哪些元素不在 `list1` 中

可以使用 `Linq` 中的 `Except()` 函式來完成。`Linq` 或語言整合查詢用於查詢 C# 中的資料結構。

- Except() 函式返回一個列表的一組元素，這些元素在另一個列表中不存在。
- 下面的程式碼例子向我們展示瞭如何用 C# 中的 Linq 來比較兩個列表的差異。

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace compare_lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list1 = new List<int> { 1, 1, 2, 3, 4 };
            List<int> list2 = new List<int> { 3, 4, 5, 6 };
            List<int> firstNotSecond = list1.Except(list2).ToList();
            var secondNotFirst = list2.Except(list1).ToList();
            Console.WriteLine("Present in List1 But not in List2");
            foreach (var x in firstNotSecond)
            {
                Console.WriteLine(x);
            }
            Console.WriteLine("Present in List2 But not in List1");
            foreach (var y in secondNotFirst)
            {
                Console.WriteLine(y);
            }
        }
    }
}
```

輸出：

```text
Present in List1 But not in List2
1
2
Present in List2 But not in List1
5
6
```

用 C# 中的 List.Contains() 函式比較列表以尋找差異

`List.Contains()` 函式用於確定 C# 中列表中是否存在元素。

- 如果列表中存在元素 x，則 `List.Contains(x)` 函式將返回 true；
- 如果元素 x 不存在，則該函式將返回 false。

  我們可以對 Linq 使用 List.Contains() 方法來確定哪些元素存在於一個列表中，而不存在於另一個列表中。下面的程式碼示例向我們展示瞭如何使用 C# 中的 List.Contains() 函式比較兩個列表的差異。

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace compare_lists
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list1 = new List<int> { 1, 2, 3, 4 };
            List<int> list2 = new List<int> { 3, 4, 5, 6 };
            var firstNotSecond = list1.Where(i => !list2.Contains(i)).ToList();
            var secondNotFirst = list2.Where(i => !list1.Contains(i)).ToList();
            Console.WriteLine("Present in List1 But not in List2");
            foreach (var x in firstNotSecond)
            {
                Console.WriteLine(x);
            }
            Console.WriteLine("Present in List2 But not in List1");
            foreach (var y in secondNotFirst)
            {
                Console.WriteLine(y);
            }
        }
    }
}
```

輸出：

```text
Present in List1 But not in List2
1
2
Present in List2 But not in List1
5
6
```

我們比較了列表 list1 和 list2 在上述程式碼中的區別。

我們首先將元素存在於列表 1 中，而不是儲存在新列表 firstNotSecond 中的列表 2 中。

然後，我們將存在於列表 2 中但不存在於列表 1 中的元素儲存在新列表 secondNotFirst 中。

最後，我們同時列印了 firstNotSecond 和 secondNotFirst 列表中的元素。

在此，輸出被重複與重複值一樣多的次數。如果我們要考慮重複值，則該方法應該比以前的方法更可取。
