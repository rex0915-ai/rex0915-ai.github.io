import { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { CategoryFilter } from "@/components/category-filter";
import { WorksGrid } from "@/components/works-grid";
import { StatsSection } from "@/components/stats-section";
import { type WorkCategory } from "@/types/work";
import { works } from "@/data/content";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | "all">("all");

  const featuredWorks = useMemo(() => {
    return works.filter((work) => work.featured);
  }, [works]);

  const filteredWorks = useMemo(() => {
    if (selectedCategory === "all") {
      return featuredWorks;
    }
    return featuredWorks.filter((work) => work.category === selectedCategory);
  }, [featuredWorks, selectedCategory]);

  const stats = useMemo(() => {
    return {
      totalWorks: works.length,
      totalPhotos: works.filter((w) => w.category === "photo").length,
      totalVideos: works.filter((w) => w.category === "video").length,
      totalViews: works.reduce((sum, w) => sum + w.viewCount, 0),
    };
  }, [works]);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <StatsSection {...stats} />

      <section id="featured-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">精選作品</h2>
              <p className="text-muted-foreground mt-1">探索我最引以為傲的創作</p>
            </div>
            <Link href="/works">
              <Button variant="ghost" className="group" data-testid="button-view-all-works">
                查看全部作品
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <WorksGrid works={filteredWorks} isLoading={false} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            想看更多作品嗎？
          </h2>
          <p className="text-muted-foreground mb-8">
            前往作品集頁面，瀏覽我所有的攝影、影片和設計作品。
          </p>
          <Link href="/works">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-full px-8 shadow-lg shadow-cyan-500/25"
              data-testid="button-goto-works"
            >
              探索完整作品集
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
