---
sidebar_position: 145
description: Day30 C# 不雞礎觀念- Install Tailwind Css with ASP.NET MVC5
key: [C#, 雞礎觀念, 鐵人賽, cSharp, Tailwind]
tags: [C#, 雞礎觀念, 鐵人賽, Tailwind]
---

# 🤖 Install Tailwind Css with ASP.NET MVC5

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001lFLnXlnoY5.png)

今天是鐵人賽最後一天，<br/>
我們來點不一樣的，<br/>
就是 Tailwind Css 啦

### 一.先前準備

- 建立新資料夾
- 將資料夾命名為 jit_init

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001JrGFEfSvst.png)

- 開啟資料夾位置

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001r3Xktr4LA5.png)

- 於路徑輸入 CMD，並按下 Enter

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/2009700104BcIsTBVZ.png)
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001XsVYxPv2oh.png)

### 二.導入 tailwindcss

- 於主控台輸入 `npx tailwindcss-cli init  --jit`
- 成功之後會在 jit_init 資料夾看到 tailwind.config.js 檔案

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001zSFbq0QFnZ.png)

- 將附檔 package.json 複製到 jit_init 資料夾
- 輸入 npm install tailwindcss autoprefixer postcss postcss-cli
- 成功之後會在 jit_init 資料夾看到 node_modules 目錄以及 package-lock.json 檔案
- [package.json (點我下載)](https://drive.google.com/file/d/11oIvQ_kwFEmAh6a5j2fphomlnFCexQQM/view)

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001MPLJKiuB44.png)

- 將附檔 public.zip 解壓縮並複製到 jit_init 資料夾
  [public.zip (點我下載)](https://drive.google.com/file/d/1xuWGX7GPtmgpxQoAqTe8P89h1i6OHcWC/view)

- 開啟 package.json 修改 css 輸出路徑
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001LHLvJCIQQS.png)

- 開啟 tailwind.config.js 修改 purge(tailwindcss 作用範圍)
- MVC 為例('../Views/\*_/_.cshtml')

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001UnxZwZL42u.png)

### 三.啟動 tailwindcss-cli

- 於主控台輸入`npm install`

  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001SgxAYmyaXy.png)

- 於主控台輸入`npm run jit`
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001UbwmaSsmwc.png)

### 四.MVC 專案設定

- 將 app.css 引用到\_Layout.cshtml
- `<link href="~/Content/app.css" rel="stylesheet">`

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001HauTkJGUnc.png)

- 於方案總管點選顯示所有檔案
  
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001qtVFJpUf9f.png)

- 將 app.css 加入專案
  
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/200970014FtnA0pZSm.png)

### 注意:每次重新開啟專案時，皆需執行 npm run jit 指令

- 這樣編輯 CSS 時，才有辦法做更新
  ![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001umMArZ9DoB.png)

### 最後最後，我們謝謝兔兔當時花很多時間在幫我校這份稿

### 如果大家對 Tailwind Css 不熟，但很想入門，歡迎去看他的文章

### [兔兔傳送門 (點我來去找兔兔)](https://ithelp.ithome.com.tw/users/20138853/ironman/3928)
