export type WorkCategory = "photo" | "video" | "design" | "illustration" | "3d" | "animation";

export interface Work {
  id: string;
  title: string;
  description: string;
  category: WorkCategory;
  mediaType: "image" | "video";
  mediaUrl: string;
  thumbnailUrl: string;
  tags: string[];
  viewCount: number;
  featured: boolean;
  createdAt: string;
}

export const categoryLabels: Record<WorkCategory, string> = {
  photo: "攝影",
  video: "影片",
  design: "設計",
  illustration: "插畫",
  "3d": "3D",
  animation: "動畫",
};

