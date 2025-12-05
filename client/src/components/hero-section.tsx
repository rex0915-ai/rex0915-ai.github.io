import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById("featured-works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <span className="text-sm font-mono text-muted-foreground">歡迎來到我的創作空間</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block text-foreground">用創意</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            打造無限可能
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          這裡收錄了我的攝影作品、影片創作和設計專案。
          <br className="hidden sm:block" />
          每一件作品都是對美學與技術的探索與實踐。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/works">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-full px-8 shadow-lg shadow-cyan-500/25 group"
              data-testid="button-explore-works"
            >
              <span>探索作品集</span>
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 bg-card/50 backdrop-blur-sm"
              data-testid="button-about-me"
            >
              關於我
            </Button>
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToWorks}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 animate-bounce cursor-pointer"
        aria-label="向下滾動"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </button>
    </section>
  );
}
