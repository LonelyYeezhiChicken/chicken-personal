---
sidebar_position: 10
description: 合併多個commit
key: [git, 雜記, 合併多個commit, depth]
tags: [git, git雜記]
---

# 👩‍💻 合併多個commit

## 1: 檢查 commit log

- 查看目前的 Commit log
- 以便了解有多少個 commit 需要被合併

```bash
git log --oneline
```

### 2: 進行交互式 Rebase

- 合併最近的 n 個提交
- 可以使用 `git rebase -i` 命令來啟動一個交互式的 rebase

> ex: 合併最近4個 Commit

```bash
git rebase -i HEAD~4
```

這將會打開一個編輯器

顯示最近的 4 個Commit

每個 Commit 前面都標有 "pick"

### 3: 選擇 Commit 進行合併

> 在編輯器中，會看到類似這樣的列表：

```bash
pick e3a1b35 第一次提交的訊息
pick 7ac9a67 第二次提交的訊息
pick 1d2a3f4 第三次提交的訊息
pick 76f4da2 第四次提交的訊息
```

> 要將這些 Commit 合併成一個
>
> 需要將除了第一個 "pick" 之外的所有 "pick" 改為 "squash" 或 "s"
>
> 這告訴 Git 將這些 Commit 合併到第一個 Commit 中

```bash
pick e3a1b35 第一次提交的訊息
squash 7ac9a67 第二次提交的訊息
squash 1d2a3f4 第三次提交的訊息
squash 76f4da2 第四次提交的訊息
```

### 4: 重新編輯提交訊息

> 保存並關閉編輯器後，Git 將合併這些 Commit
>
> 如果使用 "squash"，Git 將會提示編輯新的 Commit 訊息
>
> 這是 Commit 所有舊提交訊息的預設行為
