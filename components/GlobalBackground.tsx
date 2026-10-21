"use client";

import { useTheme } from "next-themes";
import GhostFibers from "@/components/GhostFibers";

export default function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <GhostFibers
        glowColor={isDark ? "#2f6bff" : "#404040"}
        speed={0.2}
        scale={2}
        rotationSpeed={0.25}
        layers={4}
        twist={0.1}
        threads={1}
        glow={isDark ? 2 : 0.8}
        brightness={isDark ? 0.85 : 1.2}
        vignette={0}
        rotation={0}
        waves={0.015}
        spread={1}
        thickness={isDark ? 1 : 1.5}
        grain={0.01}
        mouseInteraction
        lightMode={!isDark}
      />
    </div>
  );
}