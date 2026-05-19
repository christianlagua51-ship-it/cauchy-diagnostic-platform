import { ArrowRight, UserRound } from "lucide-react";
import { InlineMath } from "react-katex";

import { Navbar } from "@/components/layout/navbar";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function MathGraph() {
  return (
    <div className="relative mx-auto min-h-[420px] w-full max-w-[690px] lg:min-h-[520px]">
      <p className="text-navy absolute top-5 left-24 hidden text-2xl md:block">
        <InlineMath math="f(x)=x^2-4x+1" />
      </p>
      <p className="text-navy absolute top-16 right-16 hidden text-xl md:block">
        <InlineMath math="E=mc^2" />
      </p>
      <p className="text-navy absolute right-5 bottom-40 hidden text-xl md:block">
        <InlineMath math="x^2+y^2=r^2" />
      </p>
      <p className="text-navy absolute right-6 bottom-14 hidden text-xl md:block">
        <InlineMath math={"\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}"} />
      </p>
      <div className="absolute top-28 right-9 hidden h-24 w-24 md:block">
        <svg viewBox="0 0 100 100" className="text-navy size-full">
          <path d="M18 82h64L18 18v64Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M18 66h16v16" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <text x="8" y="58" fill="currentColor" fontSize="14">
            a
          </text>
          <text x="63" y="48" fill="currentColor" fontSize="14">
            b
          </text>
          <text x="48" y="96" fill="currentColor" fontSize="14">
            c
          </text>
        </svg>
      </div>
      <svg
        viewBox="0 0 720 520"
        className="h-full w-full"
        role="img"
        aria-label="Grafica matematica"
      >
        <defs>
          <linearGradient id="surface" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#e4ebf5" />
            <stop offset="42%" stopColor="#6e8dc1" />
            <stop offset="100%" stopColor="#002a68" />
          </linearGradient>
          <linearGradient id="surface-dark" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#8ba5ce" />
            <stop offset="100%" stopColor="#00275f" />
          </linearGradient>
          <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0c4385" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <g opacity="0.32" stroke="#cbd6e5" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, index) => (
            <path key={`a-${index}`} d={`M${138 + index * 34} 315 360 ${430 - index * 12}`} />
          ))}
          {Array.from({ length: 12 }).map((_, index) => (
            <path key={`b-${index}`} d={`M130 ${330 + index * 10} 515 ${232 + index * 26}`} />
          ))}
        </g>
        <path
          d="M125 338 365 438 548 318 318 220Z"
          fill="url(#surface)"
          opacity="0.82"
          stroke="#315a94"
          strokeWidth="1"
        />
        <path
          d="M318 220c68-136 118-118 164 18 20 60 46 58 68 78-50 54-119 55-185 122-36-113-85-118-240-100 58-42 118-20 193-118Z"
          fill="url(#surface-dark)"
          opacity="0.86"
          stroke="#15386f"
          strokeWidth="1.5"
        />
        <path
          d="M145 333c44-54 72-12 106-20 42-10 50-64 88-70 38-5 50 50 72 83 29 43 72 12 110 0"
          fill="none"
          stroke="#d9e5f8"
          strokeWidth="1.1"
          opacity="0.55"
        />
        <ellipse cx="226" cy="291" rx="82" ry="32" fill="#0b4389" opacity="0.55" />
        <ellipse cx="226" cy="247" rx="77" ry="29" fill="#e9eef5" opacity="0.9" stroke="#7b8fac" />
        <path
          d="M149 247v92c0 17 34 31 77 31s77-14 77-31v-92"
          fill="url(#glass)"
          opacity="0.78"
          stroke="#8095b4"
        />
        <ellipse cx="226" cy="339" rx="77" ry="31" fill="#0b4389" opacity="0.26" />
        <path d="M370 414V145" stroke="#0b1f4f" strokeWidth="1.4" />
        <path d="M370 145l-6 10M370 145l6 10" stroke="#0b1f4f" strokeWidth="1.4" />
        <path d="M370 414l176-92" stroke="#0b1f4f" strokeWidth="1.4" />
        <path d="M546 322l-13-1M546 322l-5-12" stroke="#0b1f4f" strokeWidth="1.4" />
        <text x="382" y="150" fill="#0b1f4f" fontSize="16">
          y
        </text>
        <text x="540" y="352" fill="#0b1f4f" fontSize="16">
          x
        </text>
        <path
          d="M180 438h55M270 456h55"
          fill="none"
          stroke="#b8c7dc"
          strokeLinecap="round"
          strokeWidth="3"
          strokeDasharray="2 12"
        />
        <circle cx="442" cy="294" r="5" fill="#fff" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-8 sm:pb-12 lg:min-h-[675px] lg:pt-36"
    >
      <Navbar />
      <Container className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative z-10 max-w-[520px] pt-5">
          <h1 className="text-navy text-[3.4rem] leading-[1.14] font-black tracking-[0.01em] uppercase sm:text-[4.2rem] lg:text-[4.85rem]">
            Entender hoy,
            <span className="text-steel block">transformar</span>
            <span className="text-steel block">tu futuro.</span>
          </h1>
          <span className="mt-6 block h-0.5 w-12 bg-blue-700" />
          <p className="text-navy/90 mt-6 max-w-[460px] text-lg leading-8">
            Centro academico especializado en matematicas. Descubre tu potencial y alcanza tus
            metas.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/test-diagnostico" className="h-16 gap-4 rounded-lg px-6">
              <UserRound className="size-5" aria-hidden="true" />
              Realizar diagnostico
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#programas" variant="secondary" className="h-16 rounded-lg px-9">
              Ver cursos
            </ButtonLink>
          </div>
        </div>
        <MathGraph />
      </Container>
    </section>
  );
}
