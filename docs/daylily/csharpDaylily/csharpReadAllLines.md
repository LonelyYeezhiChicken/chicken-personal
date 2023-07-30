---
sidebar_position: 40
description: 讀文檔 逐行讀取
key: [Csharp, 雜記, 讀文檔 逐行讀取]
tags: [C#, C#雜記]
---

# 👩‍💻 讀文檔 逐行讀取

## 1. File.ReadAllLines

```text
File.ReadAllLines(FileName);
```

## 2. ReadLine()

```csharp
//We have to create Streader Object to use this method
StreamReader ObjectName = new StreamReader(FileName);
ObjectName.ReadLine();
```

```csharp
using System;
using System.IO;

public class ReadFile
{
    public static void Main()
    {
      string FileToRead = @"D:\New folder\textFile.txt";
      using (StreamReader ReaderObject = new StreamReader(FileToRead))
      {
          string Line;
          // ReaderObject reads a single line, stores it in Line string variable and then displays it on console
          while((Line = ReaderObject.ReadLine()) != null)
          {
              Console.WriteLine(Line);
          }
      }
        
    }
}
```

ref: [C# 逐行讀取文字檔案 | D棧 - Delft Stack](https://www.delftstack.com/zh-tw/howto/csharp/how-to-read-a-text-file-line-by-line-in-csharp/#%e4%bd%bf%e7%94%a8-c-%e4%b8%ad%e7%9a%84-filereadalllines-%e6%96%b9%e6%b3%95%e9%80%90%e8%a1%8c%e8%ae%80%e5%8f%96%e6%96%87%e5%ad%97%e6%aa%94%e6%a1%88)
