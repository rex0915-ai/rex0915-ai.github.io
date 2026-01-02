import { Link } from "wouter";
import { Play, Eye, ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Work, categoryLabels } from "@/types/work";

interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/works/${work.slug}`}>
      <article
        className="group relative overflow-visible rounded-xl bg-card border border-card-border transition-all duration-300 hover:border-cyan-500/30 cursor-pointer hover-elevate"
        data-testid={`card-work-${work.id}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
          <img
            src={work.thumbnailUrl}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {work.mediaType === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {work.mediaType === "image" && (
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ImageIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0 text-xs">
              {categoryLabels[work.category]}
            </Badge>
            <div className="flex items-center gap-1 text-white/80 text-xs">
              <Eye className="w-3.5 h-3.5" />
              <span>{work.viewCount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-cyan-500 transition-colors">
            {work.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {work.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {work.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs px-2 py-0.5 bg-accent/50 border-border"
              >
                {tag}
              </Badge>
            ))}
            {work.tags.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs px-2 py-0.5 bg-accent/50 border-border"
              >
                +{work.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      </article>
    </Link>
  );
}
