---
sidebar_position: 1
description: tag
key: [git, 雜記, tag]
tags: [git, git雜記]
---

# 👩‍💻 tag

首先，先查詢目前 commit 的 SHA-1 碼，確認想要貼到哪個 commit 上

```shell
git log --oneline
```

接下來，使用以下語法就可以貼上 tag 了。後面的 &lt;commit_SHA-1&gt; 也可以忽略不打，這樣的話是直接貼到最新的 commit 上。

```shell
git tag <tag_name> <commit_SHA-1>
```

## annotated tag

而 annotated tag 跟 lightweight tag 最大的差異就是 annotated tag 可以添加訊息作為註解，而創建的方式和 lightweight tag 也只差一點點而已。

```shell
git tag <tag_name> <commit_SHA-1> -a -m "message"
```

## 查看 tag

創建完成後，想要查看已經存在的 tag 該怎麼做呢？

只要直接輸入以下指令，就會一次列出所有 tag 囉！

```shell
git tag
```

## 倘若只想看到 1.8.5 系列的標籤，你可以執行以下指令

```shell
git tag -l "v1.8.5*"
```

## 将tag同步到遠端

同提交代码后，使用git push来推送到远程服务器一样，tag

也需要进行推送才能到远端服务器。
 使用
git push origin [tagName]推送单个分支。

```shell
git push origin v1.0
```

ref:

- [给指定的某个commit号加tag并推送 转 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1430091#:~:text=%E5%90%8C%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81%E5%90%8E%EF%BC%8C%E4%BD%BF%E7%94%A8%20git%20push%20%E6%9D%A5%E6%8E%A8%E9%80%81%E5%88%B0%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%80%E6%A0%B7%EF%BC%8C%20tag%20%E4%B9%9F%E9%9C%80%E8%A6%81%E8%BF%9B%E8%A1%8C%E6%8E%A8%E9%80%81%E6%89%8D%E8%83%BD%E5%88%B0%E8%BF%9C%E7%AB%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E3%80%82%20%E4%BD%BF%E7%94%A8%20git,origin%20v1.0%20%E6%8E%A8%E9%80%81%E6%9C%AC%E5%9C%B0%E6%89%80%E6%9C%89tag%EF%BC%8C%E4%BD%BF%E7%94%A8%20git%20push%20origin%20--tags%20%E3%80%82)
- [【Day20】Git 版本控制 - git tag - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10277747)
