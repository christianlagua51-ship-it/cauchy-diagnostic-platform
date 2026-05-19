import { ArrowUpRight, Camera, Mail, MessageCircle, Music2 } from "lucide-react";

import { contactContent } from "@/constants/landing-content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ContentSectionTitle } from "@/components/sections/content-section-title";

const socialIcons = {
  Instagram: Camera,
  TikTok: Music2,
  WhatsApp: MessageCircle,
  Correo: Mail,
};

export function ContactSection() {
  return (
    <section id="contacto" className="py-14 sm:py-16">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ContentSectionTitle
          label={contactContent.title}
          title={contactContent.messageTitle}
          description={[contactContent.message]}
        />

        <div className="rounded-lg border border-line/80 bg-white p-6 shadow-[0_14px_34px_rgba(16,35,69,0.07)] sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_0.75fr]">
            <div>
              <h3 className="text-navy text-xl font-black">{contactContent.socialTitle}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {contactContent.links.map((link) => {
                  const Icon = socialIcons[link.label as keyof typeof socialIcons];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.type === "external" ? "_blank" : undefined}
                      rel={link.type === "external" ? "noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 rounded-lg border border-line/80 px-4 py-4 text-navy transition hover:border-blue-700/45 hover:bg-mist/45"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="bg-mist grid size-10 shrink-0 place-items-center rounded-full">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-black">{link.label}</span>
                          {link.value ? (
                            <span className="block truncate text-xs text-navy/70">{link.value}</span>
                          ) : null}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-blue-700" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg bg-mist/70 p-5">
              <h3 className="text-navy text-lg font-black">{contactContent.scheduleTitle}</h3>
              <p className="text-navy/82 mt-3 text-sm leading-6">{contactContent.schedule}</p>
              <ButtonLink href="/test-diagnostico" className="mt-6 h-12 rounded-lg px-5">
                Diagnóstico
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
