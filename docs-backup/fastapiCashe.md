---
sidebar_position: 5
description: FastAPI + fastapi-cache
key: [FastAPI, cache, python]
tags: [FastAPI, cache, python]
---

# 👩‍💻 FastAPI + fastapi-cache

## 說明

[fastapi-cache 套件連結](https://github.com/long2ice/fastapi-cache)

- 支援 redis, memcache, dynamodb, in-memory
- 此處只使用 memcache 功能
- 在一些需要短時間大量讀寫 DB 的情境時，會使用 cache 來做緩衝層

## 建置

### 1. 建置FastAPI

```shell
 pip install fastapi
```

### 2. 建置虛擬機

```shell
 pip install uvicorn
```

### 3. 建置 fastapi-cache

- 官方文件有提到可以只安裝需使用的功能

1. 全部安裝

    ```shell
     pip install fastapi-cache2
    ```

2. 只使用 redis

    ```shell
     pip install "fastapi-cache2[redis]"
    ```

3. 只使用 memcache ，本文只使用此功能，所以執行此行就可

    ```shell
     pip install "fastapi-cache2[memcache]"
    ```

4. 只使用 dynamodb

    ```shell
     pip install "fastapi-cache2[dynamodb]"
    ```

### 4. 主程式

- 程式路徑 `app/main.py`

    ```python
        from fastapi import FastAPI
        from tortoise import fields
        from tortoise.models import Model
        from tortoise.contrib.fastapi import register_tortoise
        from pydantic import BaseModel

        app = FastAPI()

        class User(Model):
            id = fields.IntField(pk=True)
            name = fields.CharField(max_length=100)
            email = fields.CharField(max_length=100)

            class Meta:
                table = "users"

        class UserCreateRequest(BaseModel):
            name: str
            email: str

        @app.get("/users")
        async def get_users():
            users = await User.all().values()
            return {"users": users}

        @app.post("/users")
        async def create_user(user_data: UserCreateRequest):
            user = await User.create(name=user_data.name, email=user_data.email)
            return {"message": "User created successfully", "user": user}

        register_tortoise(
            app,
            db_url="sqlite://database//db.sqlite3",
            modules={"models": ["main"]},
            generate_schemas=True,
            add_exception_handlers=True,
        )

        if __name__ == "__main__":
            import uvicorn

            uvicorn.run(app, host="0.0.0.0", port=8099)

    ```
