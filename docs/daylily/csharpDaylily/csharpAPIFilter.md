---
sidebar_position: 60
description: Web API 攔截器 (Interceptor)
key: [Csharp, 雜記]
tags: [C#, C#雜記]
---

# 👩‍💻 Web API 攔截器

## 實做

```csharp
using System;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

public class SampleApiInterceptorAttribute : ActionFilterAttribute
{
    public override async Task OnActionExecutingAsync(HttpActionContext actionContext, CancellationToken cancellationToken)
    {
        // 在執行操作之前攔截請求
        // 可以在這裡記錄請求資訊，進行驗證等操作
        string requestInfo = $"{DateTime.Now}: Request from {actionContext.Request.RequestUri}";
        Console.WriteLine(requestInfo);

        // 繼續處理請求
        await base.OnActionExecutingAsync(actionContext, cancellationToken);
    }

    public override async Task OnActionExecutedAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)
    {
        // 在執行操作之後攔截回應
        // 可以在這裡記錄回應資訊，進行後續處理等操作
        string responseInfo = $"{DateTime.Now}: Response to {actionExecutedContext.Request.RequestUri}";
        Console.WriteLine(responseInfo);

        // 繼續處理回應
        await base.OnActionExecutedAsync(actionExecutedContext, cancellationToken);
    }
}
```

## 使用

### 指定 Controller

```csharp
[SampleApiInterceptor]
public class MyController : ApiController
{
    // ......
}
```

### 全域註冊

- 在程式的起始點設定

```csharp
 GlobalConfiguration.Configuration.Filters.Add(new SampleApiInterceptorAttribute());
```
