![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001lFLnXlnoY5.png)

今天是鐵人賽最後一天，\
我們來點不一樣的，\
就是Tailwind Css啦

### 一.先前準備
* 建立新資料夾
* 將資料夾命名為jit_init

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001JrGFEfSvst.png)

* 開啟資料夾位置

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001r3Xktr4LA5.png)

* 於路徑輸入CMD，並按下Enter

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/2009700104BcIsTBVZ.png)
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001XsVYxPv2oh.png)

### 二.導入tailwindcss
* 於主控台輸入 `npx tailwindcss-cli init  --jit`
* 成功之後會在jit_init資料夾看到tailwind.config.js檔案

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001zSFbq0QFnZ.png)

* 將附檔package.json複製到jit_init資料夾
* 輸入npm install tailwindcss autoprefixer postcss postcss-cli
* 成功之後會在jit_init資料夾看到node_modules目錄以及package-lock.json檔案
* [package.json (點我下載)](https://drive.google.com/file/d/11oIvQ_kwFEmAh6a5j2fphomlnFCexQQM/view)

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001MPLJKiuB44.png)

* 將附檔public.zip解壓縮並複製到jit_init資料夾
[public.zip (點我下載)](https://drive.google.com/file/d/1xuWGX7GPtmgpxQoAqTe8P89h1i6OHcWC/view)

* 開啟package.json修改css輸出路徑
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001LHLvJCIQQS.png)

* 開啟tailwind.config.js修改purge(tailwindcss作用範圍)
* MVC為例('../Views/**/*.cshtml')

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001UnxZwZL42u.png)

### 三.啟動tailwindcss-cli
* 於主控台輸入`npm install`
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001SgxAYmyaXy.png)

* 於主控台輸入`npm run jit`
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001UbwmaSsmwc.png)

### 四.MVC專案設定
* 將app.css引用到_Layout.cshtml
* `<link href="~/Content/app.css" rel="stylesheet">`

![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001HauTkJGUnc.png)

* 於方案總管點選顯示所有檔案
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001qtVFJpUf9f.png)

* 將app.css加入專案
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/200970014FtnA0pZSm.png)

### 注意:每次重新開啟專案時，皆需執行npm run jit 指令
* 這樣編輯CSS時，才有辦法做更新
![mdImg](https://ithelp.ithome.com.tw/upload/images/20210930/20097001umMArZ9DoB.png)

### 最後最後，我們謝謝兔兔當時花很多時間在幫我校這份稿
### 如果大家對Tailwind Css不熟，但很想入門，歡迎去看他的文章
### [兔兔傳送門 (點我來去找兔兔)](https://ithelp.ithome.com.tw/users/20138853/ironman/3928)