---
sidebar_position: 15
description:  匯出 匯入 image
key: [Docker, tool, 虛擬容器, windows]
tags: [Docker, 工具]
---

# 🐳 匯入匯出 Image

## 匯出

```bash
docker save -o "[檔名.tar]" [image id]
```

## 匯入

```bash
cd [tar 目錄]
```

```bash
docker image import [檔名.tar] [image name]:[image tag]
```
