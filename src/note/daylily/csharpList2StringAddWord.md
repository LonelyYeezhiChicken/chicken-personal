### 將list轉為字串，並加入","


```csharp
void Main() 
{ 
	List<string> testList = new List<string>(){"a","z","c","d","x"}; 
	string testStr = string.Join(",",testList); 
	testStr.Dump(); 
}
```