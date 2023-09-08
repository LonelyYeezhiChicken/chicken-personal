---
sidebar_position: 50
description: dotnet6 dockerfile
key: [Csharp, 雜記, Docker, Dockerfile]
tags: [C#, C#雜記, Docker, Dockerfile]
---

# 👩‍💻 dotnet6 的 dockerfile

## 建立檔案

> 在專案底下建立一個檔案 `dockerfile`

```shell
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Foreteller-Backend.dll"]
```

> 在專案底下建立一個檔案 `.dockerignore`，來過濾用不到的檔案

```shell
dockerfile
.dockerignore
```

## 建立 image

```shell
docker build -t dotnet6-app .
```

## 啟動 dotnet6 容器

```shell
docker run -p 80:3050 dotnet6-app 
```
