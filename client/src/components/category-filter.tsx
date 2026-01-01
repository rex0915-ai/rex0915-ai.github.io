import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { type WorkCategory, categoryLabels } from "@/types/work";
import { Camera, Video, Palette, PenTool, Box, Film, Layers } from "lucide-react";

const categoryIcons: Record<WorkCategory | "all", React.ReactNode> = {
  all: <Layers className="w-4 h-4" />,
  photo: <Camera className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  design: <Palette className="w-4 h-4" />,
  illustration: <PenTool className="w-4 h-4" />,
  "3d": <Box className="w-4 h-4" />,
  animation: <Film className="w-4 h-4" />,
};

interface CategoryFilterProps {
  selectedCategory: WorkCategory | "all";
  onCategoryChange: (category: WorkCategory | "all") => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (WorkCategory | "all")[] = ["all", "photo", "video", "design", "illustration", "3d", "animation"];

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 pb-4">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <Button
              key={category}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`flex items-center gap-2 rounded-full transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 shadow-lg shadow-cyan-500/25"
                  : "bg-card/50 backdrop-blur-sm border-border"
              }`}
              data-testid={`button-filter-${category}`}
            >
              {categoryIcons[category]}
              <span>{category === "all" ? "全部" : categoryLabels[category]}</span>
            </Button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
