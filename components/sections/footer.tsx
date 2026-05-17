import { Camera, Mail, MapPin, Music2, Phone, Play } from "lucide-react";

import { footerGroups } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer
      id="blog"
      className="bg-[radial-gradient(circle_at_78%_12%,rgba(16,90,170,0.5),transparent_36%),linear-gradient(135deg,#001e52,#00306f_58%,#00224f)] py-10 text-white"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.35fr_repeat(3,1fr)_1.25fr]">
          <div>
            <Logo inverted />
            <p className="mt-7 max-w-[190px] text-base leading-7 text-white/90">
              Entender hoy, transformar tu futuro.
            </p>
            <div className="mt-6 flex gap-4">
              {[Camera, Music2, Play].map((Icon) => (
                <a
                  key={Icon.displayName}
                  href="#inicio"
                  className="grid size-9 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
                  aria-label="Red social de Cauchy"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
              <a
                href="#inicio"
                className="grid size-9 place-items-center rounded-full bg-white/12 text-sm font-black text-white transition hover:bg-white/20"
                aria-label="Facebook de Cauchy"
              >
                f
              </a>
            </div>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black tracking-wide uppercase">{group.title}</h3>
              <ul className="mt-6 space-y-4 text-sm text-white/86">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#inicio" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-black tracking-wide uppercase">Contactanos</h3>
            <ul className="mt-6 space-y-5 text-sm text-white/86">
              <li className="flex gap-4">
                <Mail className="size-5 shrink-0" aria-hidden="true" />
                info@cauchy.edu.co
              </li>
              <li className="flex gap-4">
                <Phone className="size-5 shrink-0" aria-hidden="true" />
                +57 300 123 4567
              </li>
              <li className="flex gap-4">
                <MapPin className="size-5 shrink-0" aria-hidden="true" />
                Bogota, Colombia
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-6 text-center text-sm text-white/82">
          <span className="h-px bg-white/18" />
          <p>© 2026 Cauchy Centro Academico. Todos los derechos reservados.</p>
          <span className="h-px bg-white/18" />
        </div>
      </Container>
    </footer>
  );
}
