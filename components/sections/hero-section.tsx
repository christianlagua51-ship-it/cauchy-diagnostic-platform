import { ArrowRight, PlayCircle } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function MathGraph() {
  return (
    <div className="relative mx-auto aspect-[1.08] w-full max-w-[440px] rounded-[2rem] border border-white bg-white p-6 shadow-[0_28px_70px_rgba(21,37,63,0.16)]">
      <div className="bg-navy absolute top-10 -right-5 rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(21,37,63,0.24)]">
        y = f(x)
      </div>
      <svg
        viewBox="0 0 420 420"
        className="h-full w-full"
        role="img"
        aria-label="Grafica matematica"
      >
        <defs>
          <linearGradient id="curve" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#15253f" />
            <stop offset="100%" stopColor="#5f7597" />
          </linearGradient>
        </defs>
        <rect width="420" height="420" rx="28" fill="#f7f9fc" />
        {Array.from({ length: 8 }).map((_, index) => (
          <g key={index} stroke="#dfe6f0" strokeWidth="1">
            <line x1={40 + index * 48} y1="32" x2={40 + index * 48} y2="388" />
            <line x1="32" y1={40 + index * 48} x2="388" y2={40 + index * 48} />
          </g>
        ))}
        <line x1="46" y1="322" x2="376" y2="322" stroke="#172033" strokeWidth="2" />
        <line x1="98" y1="370" x2="98" y2="54" stroke="#172033" strokeWidth="2" />
        <path
          d="M66 332 C116 302 133 242 164 214 C201 181 238 201 264 156 C286 116 310 94 358 84"
          fill="none"
          stroke="url(#curve)"
          strokeLinecap="round"
          strokeWidth="10"
        />
        <path
          d="M80 276 C132 252 164 262 196 228 C238 184 266 132 344 116"
          fill="none"
          stroke="#9aaabe"
          strokeDasharray="8 12"
          strokeLinecap="round"
          strokeWidth="4"
        />
        {[164, 264, 344].map((x, index) => (
          <circle
            key={x}
            cx={x}
            cy={[214, 156, 116][index]}
            r="9"
            fill="#15253f"
            stroke="#fff"
            strokeWidth="5"
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 sm:pb-24 lg:min-h-[760px] lg:pt-32"
    >
      <Navbar />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-2xl">
          <p className="border-line text-accent mb-5 inline-flex rounded-full border bg-white/80 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase shadow-[0_10px_30px_rgba(24,38,60,0.06)]">
            Centro academico premium
          </p>
          <h1 className="text-navy text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Aprende matematicas con metodo, calma y precision.
          </h1>
          <p className="text-steel mt-6 max-w-xl text-lg leading-8">
            Cauchy acompana a estudiantes con rutas personalizadas, docentes expertos y una
            experiencia de aprendizaje clara, moderna y medible.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto" className="gap-2">
              Agendar diagnostico
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#programas" variant="secondary" className="gap-2">
              <PlayCircle className="size-4" aria-hidden="true" />
              Ver programas
            </ButtonLink>
          </div>
        </div>
        <MathGraph />
      </Container>
    </section>
  );
}
