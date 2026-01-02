import { Camera, Video, Palette, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { works } from "@/data/content";

export default function About() {

  const stats = {
    totalWorks: works.length,
    totalPhotos: works.filter((w) => w.category === "photo").length,
    totalVideos: works.filter((w) => w.category === "video").length,
    totalDesigns: works.filter((w) => w.category === "design" || w.category === "illustration").length,
  };

  const skills = [
    "攝影",
    "影片製作",
    "平面設計",
    "插畫",
    "動態設計",
    "3D建模",
    "色彩調校",
    "構圖設計",
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-mono text-muted-foreground">創作者 / Creator</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                你好，我是一位
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  多媒體創作者
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                我熱衷於用視覺語言訴說故事。從攝影到影片製作，從平面設計到動態圖像，
                我相信每一個創作都是一次與世界對話的機會。這個作品集記錄了我的創作歷程，
                也是我與同學們分享創意的空間。
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>台灣</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-full px-8 shadow-lg shadow-cyan-500/25"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                聯繫我
              </Button>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-20" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      C
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">創作數據</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-foreground font-mono mb-1">{stats.totalWorks}</div>
              <div className="text-sm text-muted-foreground">總作品數</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <Camera className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground font-mono mb-1">{stats.totalPhotos}</div>
              <div className="text-sm text-muted-foreground">攝影作品</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <Video className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground font-mono mb-1">{stats.totalVideos}</div>
              <div className="text-sm text-muted-foreground">影片作品</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <Palette className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground font-mono mb-1">{stats.totalDesigns}</div>
              <div className="text-sm text-muted-foreground">設計作品</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">專業技能</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 sm:p-12 text-center border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              想要合作或交流？
            </h2>
            <p className="text-muted-foreground mb-8">
              如果你對我的作品感興趣，或者想要討論任何創意項目，歡迎隨時聯繫我！
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 rounded-full px-8 shadow-lg shadow-cyan-500/25"
              data-testid="button-get-in-touch"
            >
              <Mail className="w-4 h-4 mr-2" />
              發送訊息
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
