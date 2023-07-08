---
sidebar_position: 15
description:  knn 演算法 (近鄰演算法)
key: [ML, 機器學習, K 近鄰演算法, knn, k-nearest neighbor, k-NN]
---

# K 近鄰演算法 (k-NN)
## k-nearest neighbor

K 近鄰演算法 (k-nearest neighbor, k-NN) 是一種基本的分類與回歸方法，屬於非監督式學習。其主要功能是根據輸入的特徵向量來預測實體的類別。該演算法通過計算不同數據之間的相似度來進行分類或回歸，並根據最近鄰的特徵向量來進行預測。

## K-NN 三大要素

1. 距離度量：此演算法會計算兩個數據之間的相似度，常見的距離度量包括歐基里德距離、曼哈頓距離和切比雪夫距離等。
2. K 值：K 值定義了使用多少個最近鄰點來進行預測，通常 K 值越小，模型會越複雜，相反地，K 值越大，模型相對簡單。
3. 分類決策規則：演算法需要一種方式來決定最終的分類結果，例如投票決策或加權投票決策等。

### K-NN 的運作方式如下：

1. 給定的特徵向量和相似度度量方法，計算待預測數據點與訓練集中各數據點之間的距離或相似度。
2. 距離或相似度的大小，選取最接近待預測數據點的 K 個訓練集中的數據點。
3. 選取的 K 個訓練集中的數據點的類別，使用投票決策規則或加權投票決策規則來預測待預測數據點的類別。

### K-NN 的優點包括：

- 簡單且易於實現。
- 不需要進行模型訓練，因此可以直接進行預測。
- 對於多類別分類問題和多標籤分類問題都適用。

### K-NN 的缺點包括：

1. 預測速度相對較慢，因為需要計算與訓練集中所有數據點的距離或相似度。
2. 對於高維特徵空間或大規模數據集可能效果不佳，因為在高維空間中，距離度量容易受到"維度災難"的影響，且需要較大的存儲空間。
3. 對於不平衡數據集或噪聲數據集容易受到干擾，可能會產生誤判。
4. K 值的選擇對預測結果具有重要影響，需要仔細調參。
5. 無法處理缺失值或不完整的數據。

### 結論

K 近鄰演算法 (k-nearest neighbor, k-NN) 是一種簡單且易於實現的非監督式學習方法，主要用於分類和回歸問題。其基本思想是根據特徵向量的相似度來進行預測，並通過選取最近的 K 個鄰居來進行分類或回歸。儘管 K-NN 有一些缺點，但在特定的應用場景中仍然可以是一個有效的機器學習工具。在實際應用中，我們應該根據數據集的特點和需求來選擇合適的距離度量、K 值和分類決策規則，並進行適當的特徵工程和模型評估，以獲得較好的預測效果。

### ref

---

1. Cover, T., & Hart, P. (1967). Nearest neighbor pattern classification. IEEE Transactions on Information Theory, 13(1), 21-27.
2. Duda, R. O., Hart, P. E., & Stork, D. G. (2012). Pattern classification. John Wiley & Sons.
3. Zhang, D. (2011). Nearest neighbor search: a database perspective. ACM SIGMOD Record, 40(2), 18-25.
4. Altman, N. S. (1992). An introduction to kernel and nearest-neighbor nonparametric regression. The American Statistician, 46(3), 175-185.
5. Beyer, K., Goldstein, J., Ramakrishnan, R., & Shaft, U. (1999). When is "nearest neighbor" meaningful?. In International Conference on Database Theory (pp. 217-235). Springer.
