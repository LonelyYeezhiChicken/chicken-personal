---
sidebar_position: 1
description: FastAPI + Tortoise ORM
key: [FastAPI, Tortoise ORM, python]
tags: [FastAPI, Tortoise ORM, python]
---

# 👩‍💻 FastAPI + Tortoise ORM

## 說明

- FastAPI: python 的 webAPI 框架
- Tortoise ORM: python 的 ORM
- Database: 使用SQLite
- 部屬: docker

## 建置

### 1. 建置FastAPI

```shell
 pip install fastapi
```

### 2. 建置虛擬機

```shell
 pip install uvicorn
```

#### 3. 建置 tortoise-orm

```shell
 pip install tortoise-orm
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

### 5. 建立資料夾

- 由於這邊將資料庫指向 `sqlite://database//db.sqlite3`
- 需要到 `app/` 底下建立 `database` 資料夾

### 6. 依賴管理

- 新增檔案 `app/requirements.txt`
- 標註各套件的版本

```shell
fastapi==0.99.1
uvicorn==0.22.0
tortoise-orm==0.19.3
```


## 啟動

### 1. 安裝依賴包

- 如果在不同環境，從 git 上拉取下來才需要執行此步驟

```shell
    pip install -r requirements.txt
```

### 2. 執行

- 如果在不同環境，從 git 上拉取下來才需要執行此步驟

```py
    uvicorn main:app --reload
```

## Docker

### 1. dockerfile

- 新增檔案 `app/.dockerfile`

```shell
    FROM python:3.11.3

    WORKDIR /app

    COPY requirements.txt .

    RUN pip install -r requirements.txt

    COPY . .

    CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8099"]
```

### 2. build image

```shell
   docker build -t my-fast-app .
```

### 3. run container

```shell
   docker run -p 8099:8099 my-fast-app
```

---

## GitHub連結

### [連結](https://github.com/LonelyYeezhiChicken/fastapi-Tortoise-ORM-test)