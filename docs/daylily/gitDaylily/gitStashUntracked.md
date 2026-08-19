---
sidebar_position: 15
description: 打包暫存目前的修改
key: [git, 雜記, stash, untracked, 暫存]
tags: [git, git雜記]
---

# 👩‍💻 打包暫存目前的修改

## 1: 為什麼預設的 git stash 不夠用？

- 一般的 `git stash` 預設只會暫存「已被 Git 追蹤（Tracked）」的檔案變更
- 若工作目錄中有新建立、尚未被追蹤的檔案（Untracked files），預設會被留在工作目錄中
- 如果想要連同這些新檔案一併打包暫存，就需要加上 `-u` 或 `--include-untracked` 參數

## 2: 暫存包含未追蹤的檔案

- 使用 `git stash -u` 或 `git stash --include-untracked`
- 這會將 Working Directory 中的所有修改（包含已追蹤與未追蹤的檔案）一併儲存至 stash 堆疊中

```bash
git stash -u
```

> 若想要加上自訂備註訊息，方便後續識別：

```bash
git stash push -u -m "暫存訊息：包含新增檔案的修改"
# 或較舊版本的寫法
git stash save -u "暫存訊息：包含新增檔案的修改"
```

## 3: 檢查 Stash 暫存清單

- 查看目前的 stash 清單，確認修改與檔案是否已成功收進暫存

```bash
git stash list
```

> 在終端機中會看到類似這樣的清單：

```bash
stash@{0}: On main: 暫存訊息：包含新增檔案的修改
```

## 4: 還原暫存的修改

- 切換分支或處理完其他緊急任務後，可以將剛才暫存的內容還原出來

> 取出暫存並同時從 stash 列表中刪除：

```bash
git stash pop
```

> 若只想取出暫存但保留該筆 stash 紀錄：

```bash
git stash apply
```
