"use strict";(self.webpackChunkchicken_personal=self.webpackChunkchicken_personal||[]).push([[5189],{49613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=l,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(88028),l=(n(59496),n(49613));const o={sidebar_position:55,description:".NET Framework Self Host",key:["Csharp","\u96dc\u8a18"],tags:["C#","C#\u96dc\u8a18"]},a="\ud83d\udc69\u200d\ud83d\udcbb .NET Framework Self Host",i={unversionedId:"daylily/csharpDaylily/csharpSelfHost",id:"daylily/csharpDaylily/csharpSelfHost",title:"\ud83d\udc69\u200d\ud83d\udcbb .NET Framework Self Host",description:".NET Framework Self Host",source:"@site/docs/daylily/csharpDaylily/csharpSelfHost.md",sourceDirName:"daylily/csharpDaylily",slug:"/daylily/csharpDaylily/csharpSelfHost",permalink:"/en/docs/daylily/csharpDaylily/csharpSelfHost",draft:!1,editUrl:"https://github.com/LonelyYeezhiChicken/chicken-personal/tree/main/docs/daylily/csharpDaylily/csharpSelfHost.md",tags:[{label:"C#",permalink:"/en/docs/tags/c"},{label:"C#\u96dc\u8a18",permalink:"/en/docs/tags/c-\u96dc\u8a18"}],version:"current",lastUpdatedAt:1709356183,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:55,frontMatter:{sidebar_position:55,description:".NET Framework Self Host",key:["Csharp","\u96dc\u8a18"],tags:["C#","C#\u96dc\u8a18"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb dotnet6 \u7684 dockerfile",permalink:"/en/docs/daylily/csharpDaylily/dotnet6Dockerfile"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb Web API \u6514\u622a\u5668",permalink:"/en/docs/daylily/csharpDaylily/csharpAPIFilter"}},s={},c=[{value:"Self Host",id:"self-host",level:2},{value:"\u5efa\u69cb\u6b65\u9a5f",id:"\u5efa\u69cb\u6b65\u9a5f",level:2},{value:"\u5efa\u7acb\u5c08\u6848",id:"\u5efa\u7acb\u5c08\u6848",level:3},{value:"\u5b89\u88dd SelfHost",id:"\u5b89\u88dd-selfhost",level:3},{value:"\u555f\u52d5\u8a2d\u5b9a",id:"\u555f\u52d5\u8a2d\u5b9a",level:3},{value:"Controller",id:"controller",level:3},{value:"\u555f\u52d5",id:"\u555f\u52d5",level:3},{value:"Ref",id:"ref",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-net-framework-self-host"},"\ud83d\udc69\u200d\ud83d\udcbb .NET Framework Self Host"),(0,l.kt)("h2",{id:"self-host"},"Self Host"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u5728 .NET Framework \u4e2d\u4e0d\u9808\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"IIS"),"\uff0c\u76f4\u63a5\u555f\u52d5 REST API")),(0,l.kt)("h2",{id:"\u5efa\u69cb\u6b65\u9a5f"},"\u5efa\u69cb\u6b65\u9a5f"),(0,l.kt)("h3",{id:"\u5efa\u7acb\u5c08\u6848"},"\u5efa\u7acb\u5c08\u6848"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5efa\u7acb\u4e00\u500b Console App (.NET Framework) \u7684\u5c08\u6848")),(0,l.kt)("h3",{id:"\u5b89\u88dd-selfhost"},"\u5b89\u88dd SelfHost"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Install-Package Microsoft.AspNet.WebApi.SelfHost -Version 5.3.0\n")),(0,l.kt)("h3",{id:"\u555f\u52d5\u8a2d\u5b9a"},"\u555f\u52d5\u8a2d\u5b9a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a94\u6848: Program.cs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'internal class Program\n{\n    static void Main(string[] args)\n    {\n        // \u6307\u5b9a\u8046\u807d\u7684URL\n        string host = "localhost", port = "8080";\n        string hostPort = $@"http://{host}:{port}";\n        var config = new HttpSelfHostConfiguration(hostPort);\n\n        // \u8a2d\u5b9a\u8def\u7531\n        config.Routes.MapHttpRoute("API", "{controller}/{action}/{id}",\n                                  new { id = RouteParameter.Optional });\n        // \u555f\u7528 Cors\n        // config.EnableCors();\n\n        // \u79fb\u9664 XML \u683c\u5f0f\n        config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();\n        \n        // \u4f7f\u7528 Json \u683c\u5f0f\n        config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;\n\n        // \u555f\u52d5\u670d\u52d9\n        Task.Factory.StartNew(async () =>\n        {\n            try\n            {\n                using (var httpServer = new HttpSelfHostServer(config))\n                {\n                    httpServer.OpenAsync().Wait(); // \u9700\u7b49\u5230 Open \u4e4b\u5f8c\u624d\u80fd\u9032\u884c\u5176\u4ed6\u4e8b\u9805\n\n                    Console.WriteLine("Web API host started...");\n\n                    //\u8f38\u5165exit \u6309 Enter \u7d50\u675f httpServer\n                    string line = null;\n                    do\n                    {\n                        line = Console.ReadLine();\n                    }\n                    while (line != "exit");\n\n                    Console.WriteLine("Web API host closed...");\n                    //\u7d50\u675f\u9023\u7dda\n                    await httpServer.CloseAsync();\n                }\n            }\n            catch (Exception ex)\n            {\n                Console.WriteLine($"Web API host error={ex}");\n            }\n        });\n    }\n}\n')),(0,l.kt)("h3",{id:"controller"},"Controller"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a94\u6848: Controllers/TestController.cs")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'public class TestController : ApiController\n{\n    [HttpGet]\n    public async Task<IHttpActionResult> Get()\n    {\n        await Task.Delay(100);\n        return Ok("Hi Hi");\n    }\n}\n')),(0,l.kt)("h3",{id:"\u555f\u52d5"},"\u555f\u52d5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u700f\u89bd\u5668\u8f38\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:port")),(0,l.kt)("p",{parentName:"blockquote"},"\u756b\u9762\u986f\u793a\u7d50\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"Hi Hi"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"ref"},"Ref"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.darkthread.net/blog/self-host-web-api/"},"\u4e0d\u7528IIS\u4e5f\u80fd\u57f7\u884cASP.NET Web API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dotblogs.com.tw/yc421206/2020/02/01/via_self_host_create_web_api"},"[ASP.NET Web API] \u4f7f\u7528 Self-Host \u639b\u8f09 Web API 1"))))}d.isMDXComponent=!0}}]);