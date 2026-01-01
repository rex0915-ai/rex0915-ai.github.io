import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, Eye, Tag, Play, Share2, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { WorkCard } from "@/components/work-card";
import { type Work, categoryLabels } from "@/types/work";
import { works } from "@/data/content";
import { useToast } from "@/hooks/use-toast";
import MarkdownContent from "@/components/MarkdownContent";

export default function WorkDetail() {
  const [, params] = useRoute("/works/:slug");
  const { toast } = useToast();

  const work = works.find((w) => w.slug === params?.slug);
  const isLoading = false;

  const relatedWorks = works
    .filter((w) => w.category === work?.category && w.id !== work?.id)
    .slice(0, 3);

  const currentIndex = works.findIndex((w) => w.slug === params?.slug);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: work?.title,
          text: work?.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "已複製連結",
        description: "作品連結已複製到剪貼簿",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-24 mb-8" />
          <Skeleton className="aspect-video w-full rounded-xl mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-24 w-full" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!work) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">找不到作品</h2>
          <p className="text-muted-foreground mb-6">該作品可能已被移除或不存在</p>
          <Link href="/works">
            <Button data-testid="button-back-to-works">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回作品集
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/works">
          <Button variant="ghost" className="mb-6 -ml-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回作品集
          </Button>
        </Link>

        <div className="relative rounded-xl overflow-hidden bg-black mb-8">
          {work.mediaType === "video" ? (
            <div className="aspect-video">
              <video
                src={work.mediaUrl}
                controls
                poster={work.thumbnailUrl}
                className="w-full h-full object-contain"
                data-testid="video-player"
              >
                您的瀏覽器不支援影片播放
              </video>
            </div>
          ) : (
            <div className="relative">
              <img
                src={work.mediaUrl}
                alt={work.title}
                className="w-full max-h-[70vh] object-contain"
                data-testid="image-display"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-work-title">
                {work.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-work-description">
                {work.description}
              </p>
            </div>

            {work.content && (
              <div className="border-t border-border pt-6">
                <MarkdownContent content={work.content} />
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-accent/50"
                  data-testid={`badge-tag-${tag}`}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" onClick={handleShare} data-testid="button-share">
                <Share2 className="w-4 h-4 mr-2" />
                分享
              </Button>
              <Button variant="outline" asChild data-testid="button-download">
                <a href={work.mediaUrl} download target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  下載
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              {prevWork ? (
                <Link href={`/works/${prevWork.slug}`}>
                  <Button variant="ghost" data-testid="button-prev-work">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    上一件作品
                  </Button>
                </Link>
              ) : (
                <div />
              )}
              {nextWork && (
                <Link href={`/works/${nextWork.slug}`}>
                  <Button variant="ghost" data-testid="button-next-work">
                    下一件作品
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-foreground">作品資訊</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">分類</span>
                  <Badge variant="secondary" className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    {categoryLabels[work.category]}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">類型</span>
                  <span className="text-foreground flex items-center gap-1">
                    {work.mediaType === "video" ? (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        影片
                      </>
                    ) : (
                      "圖片"
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">瀏覽次數</span>
                  <span className="text-foreground flex items-center gap-1 font-mono">
                    <Eye className="w-3.5 h-3.5" />
                    {work.viewCount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">發布日期</span>
                  <span className="text-foreground flex items-center gap-1 font-mono text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(work.createdAt).toLocaleDateString("zh-TW")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedWorks.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-foreground mb-6">相關作品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedWorks.map((relatedWork) => (
                <WorkCard key={relatedWork.id} work={relatedWork} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
