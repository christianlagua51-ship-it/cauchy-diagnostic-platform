import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-navy text-white shadow-[0_16px_34px_rgba(21,37,63,0.18)] hover:bg-navy-2",
  secondary:
    "border border-line bg-white text-navy shadow-[0_12px_28px_rgba(21,37,63,0.08)] hover:border-navy/25",
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
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200",
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
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
