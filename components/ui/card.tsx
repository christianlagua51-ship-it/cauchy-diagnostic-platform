import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "border-line/70 rounded-xl border bg-white p-6 shadow-[0_14px_34px_rgba(16,35,69,0.07)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
