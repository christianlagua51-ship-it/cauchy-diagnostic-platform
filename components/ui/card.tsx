import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-white/80 bg-white p-6 shadow-[0_18px_48px_rgba(24,38,60,0.08)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
