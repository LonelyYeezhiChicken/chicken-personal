---
sidebar_position: 2
description: 綜合練習：待辦清單（JavaScript + localStorage + 選做 fetch）
key: [前端, 作品, 待辦清單, JavaScript, localStorage]
tags: [前端, 入門, 作品]
---

# 🐄 作品二：待辦清單

> 用 JavaScript 做可新增、刪除、標記完成的待辦清單，資料存在 `localStorage`，重新整理不消失。

## 你會用到什麼

- [DOM 與事件](../js/jsDom.md)
- [用 fetch 讀 API](../js/jsFetch.md)（選做進階）

## 作品規格

### 必備功能

| 功能 | 說明 |
|------|------|
| 新增 | 輸入文字 + 按鈕，加入列表 |
| 完成 | 勾選後項目有刪除線或變灰 |
| 刪除 | 每項有刪除按鈕 |
| 持久化 | 用 `localStorage` 存陣列，載入時還原 |

### 選做（進階）

- 按「從 API 載入範例」按鈕，用 fetch 從 JSONPlaceholder 取 3 筆 `title` 當初始待辦

## 步驟 1：HTML

`todo.html`：

```html
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>待辦清單</title>
    <link rel="stylesheet" href="todo.css" />
  </head>
  <body>
    <main class="todo-app">
      <h1>待辦清單</h1>
      <form id="todo-form">
        <input id="todo-input" type="text" placeholder="新增待辦…" required />
        <button type="submit">新增</button>
      </form>
      <button type="button" id="load-api-btn">從 API 載入範例（選做）</button>
      <ul id="todo-list"></ul>
    </main>
    <script src="todo.js"></script>
  </body>
</html>
```

## 步驟 2：資料結構

每個待辦項目：

```javascript
{
  id: "1730000000000",
  text: "學會 fetch",
  done: false
}
```

`id` 可用 `Date.now().toString()` 產生。

## 步驟 3：localStorage 讀寫

```javascript
const STORAGE_KEY = "my-todos";

function loadTodos() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  return JSON.parse(raw);
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
```

## 步驟 4：渲染列表

```javascript
const todoList = document.querySelector("#todo-list");

function renderTodos(todos) {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const li = document.createElement("li");
    if (item.done) {
      li.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.addEventListener("change", () => {
      toggleTodo(item.id);
    });

    const span = document.createElement("span");
    span.textContent = item.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "刪除";
    deleteBtn.addEventListener("click", () => {
      deleteTodo(item.id);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}
```

## 步驟 5：新增、切換、刪除

```javascript
let todos = loadTodos();
renderTodos(todos);

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    return;
  }

  todos.push({
    id: Date.now().toString(),
    text: text,
    done: false,
  });

  saveTodos(todos);
  renderTodos(todos);
  input.value = "";
});

function toggleTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].done = !todos[i].done;
      break;
    }
  }
  saveTodos(todos);
  renderTodos(todos);
}

function deleteTodo(id) {
  const next = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      next.push(todos[i]);
    }
  }
  todos = next;
  saveTodos(todos);
  renderTodos(todos);
}
```

## 步驟 6：選做 — fetch 範例待辦

```javascript
const loadApiBtn = document.querySelector("#load-api-btn");

loadApiBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    const posts = await response.json();

    for (let i = 0; i < posts.length; i++) {
      todos.push({
        id: Date.now().toString() + i,
        text: posts[i].title,
        done: false,
      });
    }

    saveTodos(todos);
    renderTodos(todos);
  } catch (error) {
    alert("API 載入失敗：" + error.message);
  }
});
```

用 Live Server 開啟，避免 CORS 問題。

## 步驟 7：簡單樣式

`todo.css`：

```css
body {
  font-family: system-ui, "Microsoft JhengHei", sans-serif;
  background: #f1f5f9;
  margin: 0;
  padding: 24px;
}

.todo-app {
  max-width: 480px;
  margin: 0 auto;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

#todo-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

#todo-input {
  flex: 1;
  padding: 8px 12px;
}

#todo-list {
  list-style: none;
  padding: 0;
}

#todo-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

#todo-list li.done span {
  text-decoration: line-through;
  color: #94a3b8;
}
```

## 動手做

完成 `todo.html`、`todo.js`、`todo.css`：

1. 可新增、勾選完成、刪除。
2. 重新整理後資料還在。
3. （選做）API 按鈕可載入 3 筆範例。

**完成標準**：連續操作 5 次新增/刪除不報錯；重整後列表一致。

## 常見卡關

| 問題 | 解法 |
|------|------|
| 重整後資料不見 | 是否呼叫 `saveTodos`？`STORAGE_KEY` 是否一致？ |
| JSON 解析錯誤 | `localStorage` 被手動改壞時可 `localStorage.removeItem("my-todos")` 重來 |
| API 按鈕失敗 | 用 `http://` Live Server；見 [jsFetch](../js/jsFetch.md) |

## 參考

- [MDN：localStorage](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)
- [MDN：createElement](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/createElement)

## 系列畢業

完成兩個作品後，你已具備 **HTML + CSS + JavaScript** 入門能力。下一步可學框架（React / Vue）或 Git 版控與靜態網站部署。