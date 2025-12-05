import { Camera, Video, Eye, FolderOpen } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mb-4">
          {icon}
        </div>
        <div className="text-3xl font-bold text-foreground mb-1 font-mono">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

interface StatsSectionProps {
  totalWorks: number;
  totalPhotos: number;
  totalVideos: number;
  totalViews: number;
}

export function StatsSection({ totalWorks, totalPhotos, totalVideos, totalViews }: StatsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={<FolderOpen className="w-6 h-6 text-cyan-500" />}
            value={totalWorks}
            label="作品總數"
          />
          <StatCard
            icon={<Camera className="w-6 h-6 text-purple-500" />}
            value={totalPhotos}
            label="攝影作品"
          />
          <StatCard
            icon={<Video className="w-6 h-6 text-blue-500" />}
            value={totalVideos}
            label="影片作品"
          />
          <StatCard
            icon={<Eye className="w-6 h-6 text-emerald-500" />}
            value={totalViews.toLocaleString()}
            label="總瀏覽數"
          />
        </div>
      </div>
    </section>
  );
}
