import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

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

export interface InsertWork {
  title: string;
  description: string;
  category: WorkCategory;
  mediaType: "image" | "video";
  mediaUrl: string;
  thumbnailUrl: string;
  tags: string[];
  featured?: boolean;
}

export const insertWorkSchema = z.object({
  title: z.string().min(1, "標題不能為空"),
  description: z.string().min(1, "描述不能為空"),
  category: z.enum(["photo", "video", "design", "illustration", "3d", "animation"]),
  mediaType: z.enum(["image", "video"]),
  mediaUrl: z.string().url("請輸入有效的媒體網址"),
  thumbnailUrl: z.string().url("請輸入有效的縮圖網址"),
  tags: z.array(z.string()),
  featured: z.boolean().optional(),
});

export const categoryLabels: Record<WorkCategory, string> = {
  photo: "攝影",
  video: "影片",
  design: "設計",
  illustration: "插畫",
  "3d": "3D",
  animation: "動畫",
};
