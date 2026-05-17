import { ChevronRight } from "lucide-react";

import { siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Cauchy inicio">
          <span className="bg-navy grid size-10 place-items-center rounded-full text-sm font-bold text-white shadow-[0_14px_28px_rgba(21,37,63,0.2)]">
            C
          </span>
          <span className="text-navy text-base font-bold tracking-tight">{siteConfig.name}</span>
        </a>

        <nav className="text-steel hidden items-center gap-8 rounded-full border border-white/80 bg-white/70 px-6 py-3 text-sm font-medium shadow-[0_16px_44px_rgba(24,38,60,0.08)] backdrop-blur md:flex">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-navy transition">
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contacto" className="hidden gap-2 md:inline-flex">
          Inscribirse
          <ChevronRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </Container>
    </header>
  );
}
