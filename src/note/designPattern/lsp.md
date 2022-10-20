## 里氏替換原則:
- 子類別可以擴充父類的功能，但不可以改變它原有的功能
- 實作繼承後，需要確保他的型別被轉換後還可以獲得正確的結果
- 只有在類別之間是is-a關係時才能用繼承

### 他必須符合四個繼承的規範:
1. 完全實作父類的方法
2. 子類別可以擁有他自己的特性
3. Overload 時要注意傳入參數型別的父子關係
4. 輸出的父子關係也需要注意