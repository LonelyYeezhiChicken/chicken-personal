---
sidebar_position: 45
description: 判斷字串是否為數字
key: [Csharp, 雜記, 判斷字串是否為數字]
tags: [C#, C#雜記]
---

# 👩‍💻 判斷字串是否為數字

```text
StringName.All(char.IsDigit);
```

```text
using System;
using System.Linq;

public class IdentifyString
{
    public static void Main()
    {
      string number = "123456";
      if(number.All(char.IsDigit))
      {
          Console.WriteLine("The Given String is a Number.");
      }
      else
      {
          Console.WriteLine("The Given String is Not a Number.");
      }
    }
}
```

ref: [C# 識別字串是否為數字 | D棧 - Delft Stack](https://www.delftstack.com/zh-tw/howto/csharp/how-to-identify-if-a-string-is-a-number-in-csharp/#c-%e4%bd%bf%e7%94%a8-enumerableall-%e6%96%b9%e6%b3%95%e4%be%86%e8%ad%98%e5%88%a5%e5%ad%97%e4%b8%b2%e6%98%af%e5%90%a6%e7%82%ba%e6%95%b8%e5%ad%97)
