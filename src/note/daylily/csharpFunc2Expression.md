### Func to Expression (Compile())

```csharp
void Main() 
{ 
	data.Where(GetNo5().Compile()).Dump(); 
} 
public Expression<Func<int,bool>> GetNo5() 
{ 
	return x => x == 5; 
} 
public List<int> data = new List<int>(){1,2,3,4,5,6,7,8,9};
```


### Expression to Func 

```csharp
void Main() 
{ 
	data.Where(GetNo(No1()).Compile()).Dump(); 
	data.Where(GetNo(No5()).Compile()).Dump(); 
}

public Expression<Func<int,bool>> GetNo(Func<int,bool> func) 
{ 
	return x => func(x); 
}

public Func<int,bool> No1() => x => x == 1;

public Func<int,bool> No5() => x => x == 5;

public List<int> data = new List<int>(){1,2,3,4,5,6,7,8,9};
```
