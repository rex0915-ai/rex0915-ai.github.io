import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWorkSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/works", async (req, res) => {
    try {
      const { category, featured } = req.query;
      
      let works;
      if (featured === "true") {
        works = await storage.getFeaturedWorks();
      } else if (category && typeof category === "string") {
        works = await storage.getWorksByCategory(category);
      } else {
        works = await storage.getAllWorks();
      }
      
      res.json(works);
    } catch (error) {
      console.error("Error fetching works:", error);
      res.status(500).json({ message: "Failed to fetch works" });
    }
  });

  app.get("/api/works/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const work = await storage.getWorkById(id);
      
      if (!work) {
        return res.status(404).json({ message: "Work not found" });
      }
      
      res.json(work);
    } catch (error) {
      console.error("Error fetching work:", error);
      res.status(500).json({ message: "Failed to fetch work" });
    }
  });

  app.post("/api/works/:id/view", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.incrementViewCount(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error incrementing view count:", error);
      res.status(500).json({ message: "Failed to increment view count" });
    }
  });

  app.post("/api/works", async (req, res) => {
    try {
      const parsed = insertWorkSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid work data", 
          errors: parsed.error.errors 
        });
      }
      
      const work = await storage.createWork(parsed.data);
      res.status(201).json(work);
    } catch (error) {
      console.error("Error creating work:", error);
      res.status(500).json({ message: "Failed to create work" });
    }
  });

  app.patch("/api/works/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const work = await storage.updateWork(id, req.body);
      
      if (!work) {
        return res.status(404).json({ message: "Work not found" });
      }
      
      res.json(work);
    } catch (error) {
      console.error("Error updating work:", error);
      res.status(500).json({ message: "Failed to update work" });
    }
  });

  app.delete("/api/works/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteWork(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "Work not found" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting work:", error);
      res.status(500).json({ message: "Failed to delete work" });
    }
  });

  return httpServer;
}
