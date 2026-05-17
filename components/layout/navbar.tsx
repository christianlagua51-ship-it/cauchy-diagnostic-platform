import { siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="flex h-24 items-center justify-between gap-5">
        <Logo />

        <nav className="text-navy hidden items-center gap-11 text-[0.93rem] font-bold lg:flex">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-3 transition hover:text-blue-700"
            >
              {item.label}
              {item.label === "Inicio" ? (
                <span className="absolute right-0 -bottom-0.5 left-0 h-0.5 rounded-full bg-blue-700" />
              ) : null}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contacto" className="hidden h-14 rounded-lg px-8 md:inline-flex">
          Iniciar sesion
        </ButtonLink>
      </Container>
    </header>
  );
}
