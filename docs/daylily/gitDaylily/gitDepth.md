---
sidebar_position: 10
description: 抓取最後一個commit
key: [git, 雜記, 抓取最後一個commit, depth]
tags: [git, git雜記]
---

# 👩‍💻 抓取最後一個commit

要只下載最後一個 commit，您可以使用以下命令：

```shell
git clone --depth 1 <repository_url>
```

這個命令會只下載最後一個 commit，而不是整個 repository 的歷史版本。使用 --depth 選項，可以限制 git 克隆 repository 的歷史版本的深度。在此例中，我們將它設置為 1，這表示只下載最後一個 commit。

注意!! 使用 --depth 選項克隆的 repository 不包括歷史版本的信息。如果您需要查看更早期的 commit，則需要重新克隆 repository 或克隆整個 repository 歷史版本的深度
