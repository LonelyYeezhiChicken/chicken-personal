---
sidebar_position: 20
description:  將容器建立為一個新的Image
key: [Docker, tool, 虛擬容器, windows]
tags: [Docker, 工具]
---

# 🐳 建立 Image

## 說明

> 將容器建立成一個新的 Image

## 指令

### docker commit

```shell
docker commit [動作(選填)] [容器] [Image Name:tag]
```

### 動作

- `-a` : Image 作者
- `-c` : 使用 Dockerfile 指令來建立 Image
- `-m` : 加入文字說明
- `-p` : 建立過程先將容器暫停
