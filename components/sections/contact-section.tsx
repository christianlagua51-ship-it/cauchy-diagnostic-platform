import { ArrowRight } from "lucide-react";

import { contactContent } from "@/constants/landing-content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ContactSection() {
  return (
    <section id="contacto" className="py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-navy text-4xl leading-tight font-black tracking-tight sm:text-5xl">
            {contactContent.title}
          </h2>
          <span className="mx-auto mt-6 block h-0.5 w-12 bg-blue-700" />
          <p className="text-navy/84 mx-auto mt-6 max-w-[620px] text-lg leading-8">
            {contactContent.message}
          </p>
          <ButtonLink href="/test-diagnostico" className="mt-9 h-14 gap-3 rounded-lg px-7">
            Realizar diagnóstico
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
