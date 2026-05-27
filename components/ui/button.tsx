import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-navy text-white shadow-[0_18px_38px_rgba(0,35,87,0.22)] hover:bg-navy-2",
  secondary:
    "border border-line bg-white text-navy shadow-[0_12px_28px_rgba(21,37,63,0.06)] hover:border-navy/30",
  ghost: "text-steel hover:text-navy",
};

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "interactive-lift inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "interactive-lift inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
