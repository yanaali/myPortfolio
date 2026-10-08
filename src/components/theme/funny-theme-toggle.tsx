"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();
  return (
    <Button variant="outline" size="icon"
      className={cn("relative shrink-0 border-border bg-background/80", className)}
      onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")}
      aria-label="Toggle light and dark mode" title="Toggle light and dark mode">
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
    </Button>
  );
}
