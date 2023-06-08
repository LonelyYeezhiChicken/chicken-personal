### 轉接器模式概述:

- 在寫程式的過程中，我們經常會面臨不能修改原始碼或不允許修改的情況。轉接器模式就是為了解決這種情境而出現的設計模式
- 它允許我們在不修改原有類的情況下，將其與客戶端代碼相適配

### 範例:

- 需求: 需要依照不同的情境，來輸出不同的檔案格式

1. 以下是目前現有的輸出檔案程式

```csharp
  internal interface IFileWitter
    {
        void Write();
    }

    internal class JsonFileWitter : IFileWitter
    {
        public void Write()
        {
            Console.WriteLine("File.json");
        }
    }

    internal class CsvFileWitter : IFileWitter
    {
        public void Write()
        {
            Console.WriteLine("File.csv");
        }
    }
```

2. 在不異動現有輸出檔案程式的情況下，我們需要新增一層轉接器

```csharp
    internal interface IFileTool
    {
        void Create();
    }

    internal class Adapter : IFileTool
    {
        private readonly IFileWitter _tool;

        public Adapter(IFileWitter tool)
        {
            _tool = tool;
        }

        public void Create()
        {
            _tool.Write();
        }
    }
```

3. 此處用簡單工廠來建立轉接器，並注入輸出檔案的類別

```csharp
    internal static class FileTool
    {
        public static IFileTool Factory(string fileType)
        {
            return fileType switch
            {
                "json" => new Adapter(new JsonFileWitter()),
                "csv" => new Adapter(new CsvFileWitter()),
                _ => throw new ArgumentException($"尚未實做 {fileType}"),
            };
        }
    }
```

4. 客戶端使用

```csharp
FileTool.Factory("json").Create();
FileTool.Factory("csv").Create();
```

- 輸出:

```text
File.json
File.csv
```
