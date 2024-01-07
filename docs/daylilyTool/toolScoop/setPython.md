---
sidebar_position: 25
description: 在 scoop 底下安裝 Python 
key: [scoop, tool, windows, Python]
tags: [scoop, 工具, Python]
---

# 🥣 Python 安裝

## 安裝

### 將 versions 加入 bucket

```shell
scoop bucket add versions
```

### 確認現有 bucket

```shell
scoop bucket list
```

> 出現以下文字表示加入成功

```shell
Name     Source                                     Updated                 Manifests
----     ------                                     -------                 ---------
java     https://github.com/ScoopInstaller/Java     2023/12/9 下午 12:16:42       267
main     https://github.com/ScoopInstaller/Main     2023/12/9 下午 04:25:02      1265
versions https://github.com/ScoopInstaller/Versions 2024/1/7 下午 04:30:28        435
```

### 搜尋可用 Python

```shell
scoop search python
```

```shell
Name              Version   Source   Binaries
----              -------   ------   --------
python            3.12.1    main
winpython         3.11.6.0  main
anaconda2         2019.10   versions python.exe | pythonw.exe | python.exe
anaconda3-2022.05 2022.05   versions python.exe | pythonw.exe | python.exe
miniconda2        4.8.3     versions python.exe | pythonw.exe | python.exe
miniconda3-4.12.0 4.12.0    versions python.exe | pythonw.exe | python.exe
python-alpha      3.13.0a2  versions
python-beta       3.13.0a2  versions
python-pre        3.13.0a2  versions
python-rc         3.12.0rc3 versions
python27          2.7.18    versions
python310         3.10.11   versions
python311         3.11.7    versions
python312         3.12.1    versions
python35          3.5.4     versions
python36          3.6.8     versions
python37          3.7.9     versions
python38          3.8.10    versions
python39          3.9.13    versions
winpython37       3.7.7.1   versions
winpython3741     3.7.4.1   versions
winpython37cod    3.7.7.1   versions
winpython37ps2    3.7.6.0   versions
winpython38       3.8.9.0   versions
winpython38cod    3.8.7.0   versions
winpython38ps2    3.8.1.0   versions
```

### 下載 Python

```shell
scoop install python
```

### 切換 Python

```shell
scoop reset python
```

### Python 版本確認

```shell
python --version
```
