---
sidebar_position: 35
description: 反射類別屬性，取值與改值
key: [Csharp, 雜記, 反射]
tags: [C#, C#雜記]
---

# 👩‍💻 反射類別屬性，取值與改值

```csharp
void Main()
{
 string jsonKey ="Email";
 var user = new User();
 user.Name = "Dog";
 user.Email = "Dog@gmail.com";

 Type t = user.GetType();
 PropertyInfo[] pArray = t.GetProperties();
 Console.WriteLine(pArray.Select(x => x.Name));

 string emailKey = pArray.Where(x=>x.Name == jsonKey).Select(x => x.Name).First();
 Console.WriteLine(emailKey);

 // 取值
 var emailValue = t.GetProperty(emailKey).GetValue(user);
 Console.WriteLine(emailValue);

 // 改值
 t.GetProperty(emailKey).SetValue(user,"Hi");
 Console.WriteLine(user.Email);
}

public class User
{
 public string Name {get;set;}
 public string Email {get;set;}
}
```
