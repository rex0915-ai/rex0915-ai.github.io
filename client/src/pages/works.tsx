import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CategoryFilter } from "@/components/category-filter";
import { WorksGrid } from "@/components/works-grid";
import { type WorkCategory } from "@/types/work";
import { works } from "@/data/content";

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorks = useMemo(() => {
    let result = works;

    if (selectedCategory !== "all") {
      result = result.filter((work) => work.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (work) =>
          work.title.toLowerCase().includes(query) ||
          work.description.toLowerCase().includes(query) ||
          work.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              作品集
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              瀏覽我的攝影、影片和設計作品，每一件都是創意與技術的結晶
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="搜尋作品..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full bg-card/50 backdrop-blur-sm border-border"
                data-testid="input-search-works"
              />
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {filteredWorks.length > 0 && (
              <p className="text-sm text-muted-foreground">
                共 <span className="font-mono text-foreground">{filteredWorks.length}</span> 件作品
              </p>
            )}

            <WorksGrid works={filteredWorks} isLoading={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
