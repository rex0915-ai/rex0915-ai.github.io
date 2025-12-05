import { Link } from "wouter";
import { Sparkles, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-sm opacity-75" />
                  <div className="relative bg-background rounded-lg p-1.5">
                    <Sparkles className="h-5 w-5 text-cyan-500" />
                  </div>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  創作空間
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              記錄創作的每一個瞬間，分享靈感與技術的結合。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">快速連結</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-home">
                首頁
              </Link>
              <Link href="/works" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-works">
                作品集
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground transition-colors" data-testid="link-footer-about">
                關於我
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">聯繫方式</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-github">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-social-email">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 創作空間. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Made with creativity and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
