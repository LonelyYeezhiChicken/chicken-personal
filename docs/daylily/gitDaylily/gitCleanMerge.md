---
sidebar_position: 20
description: 乾淨合併分支
key: [git, 雜記, rebase, fast-forward, merge, ff-only]
tags: [git, git雜記]
---

# 👩‍💻 乾淨合併分支

## 1: 為什麼要這樣做？（觀念）

- **傳統 3-way Merge 的問題**：
  - 分支分岔時直接 `git merge` 會自動產生多餘的 `Merge branch 'xxx'` commit
  - 讓 commit 歷史線圖交錯雜亂，日後查 log 或 cherry-pick 不便
- **解法**：
  - 透過 **Rebase（變基）** + **Fast-Forward（快轉合併）**
  - 保持單純乾淨的線性歷史（Linear History）

---

## 2: 標準操作 SOP（指令流程）

### 步驟 1：切換到功能分支

```bash
git checkout <feature-branch>
```

### 步驟 2：將功能分支 Rebase 接上主分支頂端

```bash
git rebase <main-branch>
```

> 💡 若主分支在遠端有更新，建議先 pull 最新代碼再進行 rebase。

### 步驟 3：切回主分支

```bash
git checkout <main-branch>
```

### 步驟 4：執行快轉合併（嚴格防呆）

```bash
git merge --ff-only <feature-branch>
```

> 此時主分支指標直接快轉至最新 commit，不產生任何 Merge Commit。

### 步驟 5：驗證歷史線圖

```bash
git log --graph --oneline -n 10
```

### 步驟 6：推送到遠端

```bash
git push origin <main-branch>
```

---

## 3: 關鍵防呆與提醒（備忘事項）

### 1. `--ff-only` 的作用

- 確保只在「能夠快轉（一直線）」時才執行合併
- 無法快轉時直接拒絕並報錯，防止手滑產生 3-way merge commit

### 2. Rebase 遇到衝突時的處理流程

1. 開啟衝突檔案手動修正
2. 將修正好的檔案加入暫存區：
   ```bash
   git add .
   ```
3. 繼續完成 rebase（⚠️ **切勿使用 `git commit`**）：
   ```bash
   git rebase --continue
   ```
4. 若想放棄本次 rebase 回復原狀：
   ```bash
   git rebase --abort
   ```

### 3. 功能分支已推過遠端時的推送方式

- Rebase 會改寫歷史，若功能分支先前已推過遠端，直接 push 會被拒絕
- 請使用具備安全檢查的強制推送：
  ```bash
  git push origin <feature-branch> --force-with-lease
  ```
- > 💡 `--force-with-lease` 在遠端無其他人推送新 commit 時才覆蓋，避免誤刪他人代碼。
