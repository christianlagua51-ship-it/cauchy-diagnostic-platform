import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";

export function CTASection() {
  return (
    <article
      id="contacto"
      className="relative min-h-[315px] overflow-hidden rounded-xl bg-[radial-gradient(circle_at_86%_18%,rgba(16,90,170,0.5),transparent_32%),linear-gradient(135deg,#08235a,#002760_62%,#013c84)] px-8 py-9 text-white shadow-[0_18px_42px_rgba(0,36,90,0.18)] sm:px-10"
    >
      <h2 className="max-w-[360px] text-3xl leading-tight font-black sm:text-4xl">
        Comienza hoy tu viaje hacia la excelencia
      </h2>
      <p className="mt-5 max-w-[330px] text-base leading-7 text-white/90">
        Realiza nuestro diagnostico gratuito y descubre tu nivel actual.
      </p>
      <ButtonLink
        href="/test-diagnostico"
        variant="secondary"
        className="mt-9 h-14 rounded-lg px-7"
      >
        Realizar diagnostico
        <ArrowRight className="ml-4 size-4" aria-hidden="true" />
      </ButtonLink>
      <svg
        viewBox="0 0 230 150"
        className="absolute right-6 bottom-8 hidden w-[210px] opacity-90 sm:block"
        aria-hidden="true"
      >
        <g fill="#dfe9f6" opacity="0.48">
          <rect x="10" y="122" width="18" height="15" />
          <rect x="47" y="102" width="18" height="35" />
          <rect x="84" y="74" width="18" height="63" />
          <rect x="121" y="46" width="18" height="91" />
          <rect x="158" y="18" width="18" height="119" />
        </g>
        <path
          d="M10 100 45 64 65 80 103 42 122 52 165 10 176 20 216 -18"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
        />
        <path d="M207 -18h9v34" fill="none" stroke="#fff" strokeWidth="4" />
      </svg>
    </article>
  );
}
