---
sidebar_position: 25
description:  建立 bridge
key: [Docker, tool, 虛擬容器, windows]
tags: [Docker, 工具]
---

# 🐳 建立 bridge

## 關於 docker bridge

> Docker Bridge 網絡是 Docker 默認使用的網絡模式
>
> 它提供了一種方式，讓 Docker 容器可以在主機上創建一個虛擬網絡，容器可以相互通訊，
>
> 但通常不會直接暴露給外部網絡。這對於構建內部微服務架構或多容器應用程序非常有用

## docker bridge 指令

### 建立 bridge

```shell
docker network create -d bridge [bridge name]
```

### 查詢目前 bridge

```shell
docker network bridge ls
```

- -d bridge 指定網絡驅動程式為橋接（bridge）
- [bridge name] 為網絡指定的名稱

### 移除 bridge

```shell
docker network rm [bridge name]
```
