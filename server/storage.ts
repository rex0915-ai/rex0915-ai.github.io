import { type Work, type InsertWork } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllWorks(): Promise<Work[]>;
  getWorkById(id: string): Promise<Work | undefined>;
  getWorksByCategory(category: string): Promise<Work[]>;
  getFeaturedWorks(): Promise<Work[]>;
  createWork(work: InsertWork): Promise<Work>;
  updateWork(id: string, work: Partial<InsertWork>): Promise<Work | undefined>;
  deleteWork(id: string): Promise<boolean>;
  incrementViewCount(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private works: Map<string, Work>;

  constructor() {
    this.works = new Map();
    this.seedData();
  }

  private seedData() {
    const sampleWorks: Work[] = [
      {
        id: "1",
        title: "城市夜景攝影",
        description: "透過長曝光技術捕捉都市夜晚的璀璨燈火，展現城市獨特的生命力與美感。這組作品探索了現代都市在夜幕下的另一種面貌。",
        category: "photo",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
        tags: ["城市", "夜景", "長曝光", "攝影"],
        viewCount: 1247,
        featured: true,
        createdAt: new Date("2024-11-15").toISOString(),
      },
      {
        id: "2",
        title: "自然風光紀實",
        description: "記錄台灣山林之美，從日出到日落，用相機捕捉大自然最純粹的色彩與光影變化。",
        category: "photo",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        tags: ["自然", "風景", "山林", "日出"],
        viewCount: 892,
        featured: true,
        createdAt: new Date("2024-11-10").toISOString(),
      },
      {
        id: "3",
        title: "品牌形象影片",
        description: "為新創公司製作的品牌形象影片，結合動態圖像與實拍素材，傳達品牌的核心價值與願景。",
        category: "video",
        mediaType: "video",
        mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800",
        tags: ["品牌", "影片", "商業", "形象"],
        viewCount: 2156,
        featured: true,
        createdAt: new Date("2024-11-05").toISOString(),
      },
      {
        id: "4",
        title: "極簡海報設計",
        description: "以極簡主義為設計核心，運用幾何形狀與留白空間，創造視覺衝擊力與美感的平衡。",
        category: "design",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        tags: ["設計", "海報", "極簡", "平面"],
        viewCount: 678,
        featured: true,
        createdAt: new Date("2024-10-28").toISOString(),
      },
      {
        id: "5",
        title: "數位插畫系列",
        description: "融合東方美學與當代插畫風格，創作出獨特的數位藝術作品系列，探索傳統與現代的對話。",
        category: "illustration",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        tags: ["插畫", "數位藝術", "東方", "創作"],
        viewCount: 1534,
        featured: true,
        createdAt: new Date("2024-10-20").toISOString(),
      },
      {
        id: "6",
        title: "產品3D渲染",
        description: "使用 Blender 進行產品3D建模與渲染，展現產品細節與材質質感，適用於電商與廣告展示。",
        category: "3d",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        tags: ["3D", "渲染", "產品", "Blender"],
        viewCount: 945,
        featured: true,
        createdAt: new Date("2024-10-15").toISOString(),
      },
      {
        id: "7",
        title: "旅行紀錄片",
        description: "記錄一段穿越日本的旅程，從東京到京都，用影像述說沿途的故事與感動。",
        category: "video",
        mediaType: "video",
        mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        tags: ["旅行", "紀錄片", "日本", "vlog"],
        viewCount: 3421,
        featured: false,
        createdAt: new Date("2024-10-08").toISOString(),
      },
      {
        id: "8",
        title: "人像攝影作品",
        description: "探索光影與人物情感的互動，透過自然光線呈現人物最真實的樣貌。",
        category: "photo",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        tags: ["人像", "攝影", "光影", "藝術"],
        viewCount: 1876,
        featured: false,
        createdAt: new Date("2024-09-25").toISOString(),
      },
      {
        id: "9",
        title: "動態圖像設計",
        description: "為社群媒體製作的一系列動態圖像，融合趣味性與資訊傳達，提升品牌互動率。",
        category: "animation",
        mediaType: "video",
        mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        tags: ["動態", "設計", "社群", "創意"],
        viewCount: 2234,
        featured: false,
        createdAt: new Date("2024-09-18").toISOString(),
      },
      {
        id: "10",
        title: "建築攝影",
        description: "捕捉現代建築的線條與光影，展現建築設計的美學與空間感。",
        category: "photo",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
        tags: ["建築", "攝影", "設計", "城市"],
        viewCount: 756,
        featured: false,
        createdAt: new Date("2024-09-10").toISOString(),
      },
      {
        id: "11",
        title: "UI介面設計",
        description: "為行動應用程式設計的使用者介面，注重易用性與視覺一致性，提供流暢的使用體驗。",
        category: "design",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
        tags: ["UI", "設計", "App", "介面"],
        viewCount: 1123,
        featured: false,
        createdAt: new Date("2024-09-05").toISOString(),
      },
      {
        id: "12",
        title: "街頭紀實攝影",
        description: "在城市街頭捕捉日常生活中的瞬間，記錄人們真實的樣貌與故事。",
        category: "photo",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800",
        tags: ["街頭", "紀實", "攝影", "生活"],
        viewCount: 543,
        featured: false,
        createdAt: new Date("2024-08-28").toISOString(),
      },
    ];

    sampleWorks.forEach((work) => {
      this.works.set(work.id, work);
    });
  }

  async getAllWorks(): Promise<Work[]> {
    return Array.from(this.works.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getWorkById(id: string): Promise<Work | undefined> {
    return this.works.get(id);
  }

  async getWorksByCategory(category: string): Promise<Work[]> {
    return Array.from(this.works.values())
      .filter((work) => work.category === category)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getFeaturedWorks(): Promise<Work[]> {
    return Array.from(this.works.values())
      .filter((work) => work.featured)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createWork(insertWork: InsertWork): Promise<Work> {
    const id = randomUUID();
    const work: Work = {
      ...insertWork,
      id,
      viewCount: 0,
      featured: insertWork.featured ?? false,
      createdAt: new Date().toISOString(),
    };
    this.works.set(id, work);
    return work;
  }

  async updateWork(id: string, updateData: Partial<InsertWork>): Promise<Work | undefined> {
    const existing = this.works.get(id);
    if (!existing) return undefined;

    const updated: Work = {
      ...existing,
      ...updateData,
    };
    this.works.set(id, updated);
    return updated;
  }

  async deleteWork(id: string): Promise<boolean> {
    return this.works.delete(id);
  }

  async incrementViewCount(id: string): Promise<void> {
    const work = this.works.get(id);
    if (work) {
      work.viewCount += 1;
      this.works.set(id, work);
    }
  }
}

export const storage = new MemStorage();
