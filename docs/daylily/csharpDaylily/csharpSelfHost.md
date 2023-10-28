---
sidebar_position: 55
description: .NET Framework Self Host 
key: [Csharp, 雜記]
tags: [C#, C#雜記]
---

# 👩‍💻 .NET Framework Self Host

## Self Host

> 可以在 .NET Framework 中不須透過 `IIS`，直接啟動 REST API

## 建構步驟

### 建立專案

> 建立一個 Console App (.NET Framework) 的專案

### 安裝 SelfHost

```shell
Install-Package Microsoft.AspNet.WebApi.SelfHost -Version 5.3.0
```

### 啟動設定

- 檔案: Program.cs

```csharp
internal class Program
{
    static void Main(string[] args)
    {
        // 指定聆聽的URL
        string host = "localhost", port = "8080";
        string hostPort = $@"http://{host}:{port}";
        var config = new HttpSelfHostConfiguration(hostPort);

        // 設定路由
        config.Routes.MapHttpRoute("API", "{controller}/{action}/{id}",
                                  new { id = RouteParameter.Optional });
        // 啟用 Cors
        // config.EnableCors();

        // 移除 XML 格式
        config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
        
        // 使用 Json 格式
        config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;

        // 啟動服務
        Task.Factory.StartNew(async () =>
        {
            try
            {
                using (var httpServer = new HttpSelfHostServer(config))
                {
                    httpServer.OpenAsync().Wait(); // 需等到 Open 之後才能進行其他事項

                    Console.WriteLine("Web API host started...");

                    //輸入exit 按 Enter 結束 httpServer
                    string line = null;
                    do
                    {
                        line = Console.ReadLine();
                    }
                    while (line != "exit");

                    Console.WriteLine("Web API host closed...");
                    //結束連線
                    await httpServer.CloseAsync();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Web API host error={ex}");
            }
        });
    }
}
```

### Controller

- 檔案: Controllers/TestController.cs

```csharp
public class TestController : ApiController
{
    [HttpGet]
    public async Task<IHttpActionResult> Get()
    {
        await Task.Delay(100);
        return Ok("Hi Hi");
    }
}
```

### 啟動

> 使用瀏覽器輸入 `http://localhost:port`
>
> 畫面顯示結果 `Hi Hi`

---

## Ref

- [不用IIS也能執行ASP.NET Web API](https://blog.darkthread.net/blog/self-host-web-api/)
- [[ASP.NET Web API] 使用 Self-Host 掛載 Web API 1](https://dotblogs.com.tw/yc421206/2020/02/01/via_self_host_create_web_api)
