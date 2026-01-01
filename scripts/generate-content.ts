import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  portfolio: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    portfolio: [],
  };

  // Load portfolio
  try {
    const portfolioDir = resolve(contentPath, "portfolio");
    const portfolioFiles = await readdir(portfolioDir);
    for (const file of portfolioFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(portfolioDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const work = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          work.slug = slug;
          // 驗證圖片 URL
          if (work.mediaUrl && !work.mediaUrl.startsWith("/attached_assets/") && !work.mediaUrl.startsWith("http")) {
            console.warn(`警告: 作品 "${work.title}" 的 mediaUrl "${work.mediaUrl}" 應該以 "/attached_assets/" 開頭或使用完整 URL`);
          }
          if (work.thumbnailUrl && !work.thumbnailUrl.startsWith("/attached_assets/") && !work.thumbnailUrl.startsWith("http")) {
            console.warn(`警告: 作品 "${work.title}" 的 thumbnailUrl "${work.thumbnailUrl}" 應該以 "/attached_assets/" 開頭或使用完整 URL`);
          }
          data.portfolio.push(work);
        }
      }
    }
    // Sort by createdAt descending
    data.portfolio.sort((a, b) => {
      try {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load portfolio:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Portfolio: ${data.portfolio.length}`);
}

generateContent().catch(console.error);

