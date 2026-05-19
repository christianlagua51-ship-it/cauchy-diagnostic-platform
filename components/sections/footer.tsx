import { Camera, Mail, MessageCircle, Music2 } from "lucide-react";

import { contactContent } from "@/constants/landing-content";
import { footerGroups } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerSocialIcons = {
  Instagram: Camera,
  TikTok: Music2,
  WhatsApp: MessageCircle,
  Correo: Mail,
};

export function Footer() {
  return (
    <footer
      id="blog"
      className="bg-[radial-gradient(circle_at_78%_12%,rgba(16,90,170,0.5),transparent_36%),linear-gradient(135deg,#001e52,#00306f_58%,#00224f)] py-10 text-white"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.35fr_repeat(3,1fr)_1.35fr]">
          <div>
            <Logo inverted />
            <p className="mt-7 max-w-[190px] text-base leading-7 text-white/90">
              Entender hoy, transformar tu futuro.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black tracking-wide uppercase">{group.title}</h3>
              <ul className="mt-6 space-y-4 text-sm text-white/86">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-black tracking-wide uppercase">Conecta con Cauchy</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/86">
              {contactContent.links.map((link) => {
                const Icon = footerSocialIcons[link.label as keyof typeof footerSocialIcons];

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.type === "external" ? "_blank" : undefined}
                      rel={link.type === "external" ? "noreferrer" : undefined}
                      className="flex items-center gap-3 transition hover:text-white"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/12">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span>{link.value ?? link.label}</span>
                    </a>
                  </li>
                );
              })}
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
