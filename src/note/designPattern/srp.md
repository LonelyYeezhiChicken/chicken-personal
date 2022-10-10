### [設計模式] 2-1 物件導向設計原則-單一責任原則 (single repository principle)

## 單一責任原則:
- 責任(Responsibility)
- 強調高內聚，低耦合
- 需將責任封裝於各個class之中
- 如果多個職責總是同時發生，可將其封裝於同一class 之中

```csharp
Public class CustomerDataChart{
    
    // connection
    Public void getConnection()
    {
        //TODO : connection to DB
    }
    
    // Read
    Public List<CustomersDto> Read()
    {
        // TODO : SELECT * FROM Custorm
    }

    // create
    Public void Creat(CustomersDto data)
    {
        // TODO : create
    }

    // 顯示圖表
    Public void displayChart()
    {
        // TODO : Show chart
    }

}
```


### 由以上程式碼可以發現：
- 一個class之中包含了
	- 資料庫連線
	- 查詢
	- 新增
	- 修改
- 此class違背了單一職責
- 如果需要修改資料庫連線方式


### 以單一職責進行重構
- 首先可以將其分為三個Class
	- DBUtil - 資料庫連線
	- CustomerDAO - 對Customer進行增刪改查
	- CustomerDataChart - 負責圖表生成

### 1. DBUtil
```csharp
Public class DBUtil
{
    //DB connection
    Public void getConnection()
    {
        // TODO : connection to db
    }
}
```

### 2. CustomerDao
  
```csharp
Public class CustomerDao
{
    // Read
    Public List<CustomersDTO> Read()
    {
        // TODO : get data list
    }

    // Create
    Public void Create()
    {
        // TODO : Create data
    }    
}
```

### 3. CustomerDataChart  
```csharp
Public class CustomerDataChart
{
    Public void displayChart()
    {
        // TODO : show chart
    }
}
```

### 常見問題:
- 將所有功能寫在同一個class
1. 造成 class 複雜度過高
2. 維護或修改時找不到問題
3. 使用 class 時不知道要呼叫哪個 function
4. 切分太細時會造成高耦合度的問題
