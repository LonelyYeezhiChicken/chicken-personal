---
sidebar_position: 20
description: 圖片存檔(base64 to image)
key: [Csharp, 雜記, 圖片存檔, base64 to image]
tags: [C#, C#雜記]
---

# 👩‍💻 圖片存檔(base64 to image)

```csharp
byte[] imageBytes = Convert.FromBase64String(syncImg.StrBase64Img);
 
using (var ms = new MemoryStream(imageBytes, 0, imageBytes.Length))
{
 System.Drawing.Image image = System.Drawing.Image.FromStream(ms, true);
 image.Save(path);
}
```

## 伺服器取得檔案路徑與建立目錄

```csharp
        /// <summary>
        /// 取得圖片資料夾
        /// 資料夾不存在就建立
        /// </summary>
        /// <returns></returns>
        private string GetFolder()
        {
            var storagePath = System.Web.Hosting.HostingEnvironment.MapPath("~/"+ type);
            if (!System.IO.Directory.Exists(storagePath))
            {
                System.IO.Directory.CreateDirectory(storagePath);
            }
            return storagePath;
        }
```

## 圖片資訊修改 (任意檔案通用)

```csharp
var folder = new DirectoryInfo(storagePath);
IEnumerable<FileInfo> imgList = folder.GetFiles().Where(fi => fi.Name == syncImg.Name);
imgList.First().CreationTime = syncImg.UpdateDateTime; // 建立時間
imgList.First().LastWriteTime = syncImg.UpdateDateTime;// 編輯時間
```

## 永久刪除圖片 (任意檔案通用)

```csharp
 imgList.Where(fi => fi.Name == del.Key).First().Delete();
```
