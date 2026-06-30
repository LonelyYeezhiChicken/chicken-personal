---
sidebar_position: 2
description: JavaScript 變數、型別、if 與 for
key: [JavaScript, 變數, if, for]
tags: [前端, JavaScript, 入門]
---

# 變數與流程

> 用 `let` / `const` 存資料，用 `if` 和 `for` 控制程式怎麼跑。

## 你會用到什麼

- [JavaScript 入門](./jsIntro.md)

## 步驟 1：變數

```javascript
let score = 85;
const name = "小明";

console.log(score);
console.log(name);
```

- `let`：之後可以改值。
- `const`：宣告後不應重新指定（常數、設定值用這個）。

## 步驟 2：基本型別

```javascript
const text = "你好";      // 字串 string
const count = 42;         // 數字 number
const passed = true;      // 布林 boolean
const nothing = null;     // 空值
let notDefined;           // undefined
```

字串模板（反引號 `` ` ``）：

```javascript
const user = "小明";
console.log(`你好，${user}！`);
```

## 步驟 3：比較與邏輯

```javascript
5 === 5    // true（值與型別都相同，建議用 ===）
5 !== 3    // true
score >= 60
```

`===` 比 `==` 嚴格，初學者一律用 `===` 較少踩坑。

## 步驟 4：if / else

```javascript
const score = 72;

if (score >= 90) {
  console.log("甲等");
} else if (score >= 80) {
  console.log("乙等");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
```

## 步驟 5：for 迴圈

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("第 " + i + " 次");
}
```

印出第 1 次到第 5 次。

走訪陣列（之後常用）：

```javascript
const hobbies = ["閱讀", "慢跑", "煮咖啡"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}
```

## 步驟 6：小程式 — 成績等級

`grade.js`：

```javascript
const score = 88;

if (score >= 90) {
  console.log("甲等");
} else if (score >= 80) {
  console.log("乙等");
} else if (score >= 70) {
  console.log("丙等");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

const subjects = ["HTML", "CSS", "JS"];
for (let i = 0; i < subjects.length; i++) {
  console.log("正在學：" + subjects[i]);
}
```

## 動手做

1. 建立 `grade.js`，設一個 `score`，印出等級。
2. 建立字串陣列 `skills`，用 `for` 印出每項技能。
3. 把 `score` 改成不同數字，確認等級會變。

**完成標準**：Console 等級正確；陣列每項都有印出。

## 常見卡關

| 問題 | 解法 |
|------|------|
| `Assignment to constant variable` | 對 `const` 重新賦值；改用 `let` 或新變數 |
| `if` 永遠走同一支 | 檢查條件與 `score` 型別是否為數字 |
| 陣列 `undefined` | 索引從 `0` 開始，最大是 `length - 1` |

## 參考

- [MDN：變數](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics#變數)
- [MDN：條件判斷](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals)