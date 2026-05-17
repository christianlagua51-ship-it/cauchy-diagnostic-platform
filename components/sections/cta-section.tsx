import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTASection() {
  return (
    <section id="contacto" className="py-20">
      <Container>
        <div className="bg-navy overflow-hidden rounded-[2rem] px-6 py-12 text-center shadow-[0_30px_70px_rgba(21,37,63,0.2)] sm:px-12">
          <p className="text-xs font-bold tracking-[0.18em] text-white/65 uppercase">Primer paso</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight font-bold text-white sm:text-4xl">
            Agenda un diagnostico y recibe una ruta academica personalizada.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/72">
            Ideal para estudiantes que necesitan ordenar sus bases, preparar examenes o recuperar
            confianza academica.
          </p>
          <ButtonLink
            href="mailto:admisiones@cauchy.academy"
            variant="secondary"
            className="mt-8 gap-2"
          >
            Contactar admisiones
            <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
