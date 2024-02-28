---
sidebar_position: 10
description: Python 基本型別(二)
key: [Python, List, bool]
tags: [Python]
---

# 🐍 Python 基本型別(二)

## 布林

### 宣告布林

```py
a = True
b = False

print(a)
print(b)
```

> 結果

```py
>>> a = True
>>> b = False
>>>
>>> print(a)
True
>>> print(b)
False
```

### 比較布林

```py
a = True
b = False

print(a and b)
print(a or b)
```

> 結果

```py
>>> a = True
>>> b = False
>>>
>>> print(a and b)
False
>>> print(a or b)
True
```

## List

### 宣告 List

- List 使用 `[]` 可以放入各種型別的物件

```py
list_a = ['1','2','3','4']
list_b = ['1', 2 , True , '4' ]

print(list_a)
print(list_b)
```

> 結果

```py
>>> list_a = ['1','2','3','4']
>>> list_b = ['1', 2 , True , '4' ]
>>> print(list_a)
['1', '2', '3', '4']
>>> print(list_b)
['1', 2, True, '4']
```

### 輸出第一個物件

- List 是從 `0` 算起

```py
list_a = ['1','2','3','4']
list_b = ['1', 2 , True , '4' ]

print(list_a[0])
print(list_b[0])
```

> 結果

```py
>>> list_a = ['1','2','3','4']
>>> list_b = ['1', 2 , True , '4' ]
>>> print(list_a[0])
1
>>> print(list_b[0])
1
```

### 輸出範圍物件

- 輸出第二到第四個物件，使用 `:` 指定第幾位到第幾位

```py
list_a = ['1','2','3','4']
list_b = ['1', 2 , True , '4' ]

print(list_a[1:3])
print(list_b[1:3])
```

> 結果

```py
>>> list_a = ['1','2','3','4']
>>> list_b = ['1', 2 , True , '4' ]
>>> print(list_a[1:3])
['2', '3']
>>> print(list_b[1:3])
[2, True]
```

### 輸出指定位數到頭或尾

```py
list_a = ['1','2','3','4']
list_b = ['1', 2 , True , '4' ]

print(list_a[1:]) # 第二到結尾
print(list_b[1:]) # 第二到結尾

print(list_a[:2]) # 第三到開頭
print(list_b[:2]) # 第三到開頭
```

> 結果

```py
>>> list_a = ['1','2','3','4']
>>> list_b = ['1', 2 , True , '4' ]
>>> print(list_a[1:]) # 第二到結尾
['2', '3', '4']
>>> print(list_b[1:]) # 第二到結尾
[2, True, '4']
>>> print(list_a[:2]) # 第三到開頭
['1', '2']
>>> print(list_b[:2]) # 第三到開頭
['1', 2]
```

### 輸出兩次

```py
list_a = ['1','2','3','4']
list_b = ['1', 2 , True , '4' ]

print(list_a * 2) 
print(list_b * 2)
```

> 結果

```py
>>> list_a = ['1','2','3','4']
>>> list_b = ['1', 2 , True , '4' ]
>>> print(list_a * 2)
['1', '2', '3', '4', '1', '2', '3', '4']
>>> print(list_b * 2)
['1', 2, True, '4', '1', 2, True, '4']
```

### 連接 List

```py
list_a = ['1','2','3','4']
list_b = ['1', 2 , True , '4' ]

print(list_a + list_b)
```

> 結果

```py
>>> list_a = ['1','2','3','4']
>>> list_b = ['1', 2 , True , '4' ]
>>> print(list_a + list_b)
['1', '2', '3', '4', '1', 2, True, '4']
```
