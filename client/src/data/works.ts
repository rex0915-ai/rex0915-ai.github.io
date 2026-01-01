import type { Work } from "@/types/work";
import cityNightscape from "@assets/generated_images/City_nightscape_photography_work_a1b2c3d4.png";
import natureLandscape from "@assets/generated_images/Nature_landscape_photography_work_e5f6g7h8.png";

// TODO: 將此處的 mock 數據替換為實際的作品內容
// 建議未來可以改用 YAML 檔案管理
export const works: Work[] = [
  {
    id: "1",
    title: "城市夜景",
    description: "捕捉城市夜晚的燈光與氛圍",
    category: "photo",
    mediaType: "image",
    mediaUrl: cityNightscape,
    thumbnailUrl: cityNightscape,
    tags: ["夜景", "城市", "攝影"],
    viewCount: 1250,
    featured: true,
    createdAt: "2024-11-07T00:00:00Z",
  },
  {
    id: "2",
    title: "自然風光",
    description: "記錄大自然的美麗瞬間",
    category: "photo",
    mediaType: "image",
    mediaUrl: natureLandscape,
    thumbnailUrl: natureLandscape,
    tags: ["自然", "風景", "戶外"],
    viewCount: 980,
    featured: true,
    createdAt: "2024-11-05T00:00:00Z",
  },
];

