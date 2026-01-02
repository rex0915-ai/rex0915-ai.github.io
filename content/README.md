# 內容管理說明

這個資料夾用於管理部落格的所有內容，使用 YAML 格式儲存。

## 資料夾結構

- `portfolio/` - 作品集，每個 YAML 檔案對應一件作品

## 作品集格式

在 `portfolio/` 資料夾中建立 YAML 檔案，例如 `城市夜景.yaml`：

```yaml
id: "1"
title: "作品標題"
description: "作品簡介"
category: "photo"  # photo, video, design, illustration, 3d, animation
mediaType: "image"  # image 或 video
mediaUrl: "/attached_assets/generated_images/image.png"
thumbnailUrl: "/attached_assets/generated_images/image.png"
tags: ["標籤1", "標籤2"]
viewCount: 1250
featured: true
createdAt: "2024-11-07T00:00:00Z"
content: |
  # 作品標題
  
  作品內容可以使用 **Markdown** 語法撰寫。
```

**重要**：
- **檔案名稱就是 URL slug**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動用作作品 URL
- `mediaUrl` 和 `thumbnailUrl` 必須以 `/attached_assets/` 開頭或使用完整 URL
- `content` 欄位是可選的，支援完整的 Markdown 語法
- `category` 可以是：`photo`（攝影）、`video`（影片）、`design`（設計）、`illustration`（插畫）、`3d`（3D）、`animation`（動畫）

## 生成內容

每次修改 YAML 檔案後，執行以下命令重新生成內容：

```bash
npm run content:generate
```

或者在開發時，內容會自動生成：

```bash
npm run dev
```

或者在建置時，內容會自動生成：

```bash
npm run build
```

## Markdown 支援

`content` 欄位支援完整的 Markdown 語法：

- 標題（# ## ###）
- **粗體** 和 *斜體*
- 列表（有序和無序）
- 程式碼區塊和行內程式碼
- 引用
- 連結和圖片
- 表格（透過 GFM 擴展）

## 注意事項

1. **檔案名稱就是 URL**：檔案名稱（不含 `.yaml` 或 `.yml` 副檔名）會自動成為作品的 URL slug
2. 檔案名稱必須是唯一的，建議使用有意義的中文名稱或英文名稱
3. 圖片 URL 必須以 `/attached_assets/` 開頭
4. 每次修改內容後記得執行 `npm run content:generate` 或重新啟動開發伺服器
5. **所有新增功能已移除**：內容只能透過編輯 YAML 檔案來管理

