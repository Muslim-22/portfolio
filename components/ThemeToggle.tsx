"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Rang rejimini almashtirish"
      title="Dark / Light mode"
      className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-foreground transition-colors"
    >
      <Sun size={17} />

      <span className="h-3 w-3 rounded-full bg-black dark:bg-white" />

      <Moon size={17} />
    </button>
  );
}