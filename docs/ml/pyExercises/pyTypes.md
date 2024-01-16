---
sidebar_position: 5
description: Python 基本型別-字串
key: [Python, string]
tags: [Python]
---

# 🐍 Python 基本型別-字串

## 數字 (Number)

### 整數

```py
var1 = 1
var2 = 2

print(var1)
print(var2)
```

> 結果

```py
>>> var1 = 1
>>> var2 = 2
>>> print(var1)
1
>>> print(var2)
2
```

### 浮點數

```py
var1 = 1.5
var2 = 2.7

print(var1 + var2)
```

> 結果

```py
>>> var1 = 1.5
>>> var2 = 2.7
>>> print(var1 + var2)
4.2
```

## 字串

### 宣告字串

```py
str = 'HiHi'

print(str)
```

> 結果

```py
>>> str = 'HiHi'
>>> print(str)
HiHi
```

### 輸出第一個字

```py
str = 'HiHi'

print(str[0])
```

> 結果

```py
>>> str = 'HiHi'
>>> print(str[0])
H
```

### 輸出二到四之間的字

```py
str = 'HiHi'

print(str[1:3])
```

> 結果

```py
>>> str = 'HiHi'
>>> print(str[1:3])
iH
```

### 從第二個字開始輸出

```py
str = 'HiHi'

print(str[1:])
```

> 結果

```py
>>> str = 'HiHi'
>>> print(str[1:])
iHi
```

### 只輸出到第二個字

```py
str = 'HiHi'

print(str[:2])
```

> 結果

```py
>>> str = 'HiHi'
>>> print(str[:2])
Hi
```

### 輸出兩次

```py
str = 'HiHi'

print(str * 2)
```

> 結果

```py
>>> str = 'HiHi'
>>> print(str * 2)
HiHiHiHi
```
