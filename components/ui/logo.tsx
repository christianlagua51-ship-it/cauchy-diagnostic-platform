import Image from "next/image";

import { cn } from "@/lib/cn";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#inicio"
      className="flex min-w-0 items-center gap-3.5 sm:gap-4"
      aria-label="Cauchy Centro Academico inicio"
    >
      <span
        className={cn(
          "relative grid size-12 shrink-0 place-items-center sm:size-14",
          inverted && "brightness-0 invert",
        )}
        aria-hidden="true"
      >
        <Image
          src="/logo-symbol.svg"
          alt=""
          width={56}
          height={64}
          className="h-full w-auto object-contain"
          priority
        />
      </span>
      <span className={cn("min-w-0 leading-none", inverted ? "text-white" : "text-navy")}>
        <span className="block text-[1.28rem] font-black tracking-[0.2em] sm:text-[1.55rem]">
          CAUCHY
        </span>
        <span className="mt-1.5 block text-[0.48rem] font-bold tracking-[0.24em] uppercase opacity-80 sm:text-[0.55rem]">
          CENTRO ACADÉMICO
        </span>
      </span>
    </a>
  );
}
