"use client";

import { ArrowRight, ClipboardCheck, Clock, Target } from "lucide-react";

import { Button } from "@/components/ui/button";

type DiagnosticIntroProps = {
  questionCount: number;
  onStart: () => void;
};

export function DiagnosticIntro({ questionCount, onStart }: DiagnosticIntroProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <p className="text-blue-700 text-sm font-black uppercase tracking-[0.16em]">
          Examen diagnostico
        </p>
        <h1 className="text-navy mt-4 max-w-[700px] text-4xl leading-tight font-black tracking-tight uppercase sm:text-5xl">
          Descubre como piensas matematicamente.
        </h1>
        <span className="mt-6 block h-0.5 w-12 bg-blue-700" />
        <p className="text-navy/84 mt-6 max-w-[610px] text-lg leading-8">
          Este diagnostico identifica fortalezas y oportunidades de mejora en tus bases
          matematicas. No califica tu valor como estudiante: muestra un punto de partida para
          aprender con metodo.
        </p>
        <Button type="button" className="mt-9 h-14 rounded-lg px-7" onClick={onStart}>
          Iniciar diagnostico
          <ArrowRight className="ml-3 size-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="border-line/80 rounded-lg border bg-white p-6 shadow-[0_18px_44px_rgba(16,35,69,0.08)] sm:p-8">
        <h2 className="text-navy text-2xl font-black">Instrucciones</h2>
        <div className="mt-6 grid gap-4">
          {[
            {
              icon: ClipboardCheck,
              title: `${questionCount} preguntas`,
              copy: "Responde cada pregunta seleccionando una sola alternativa.",
            },
            {
              icon: Target,
              title: "Cinco areas",
              copy: "Aritmetica, algebra, logica, funciones y geometria.",
            },
            {
              icon: Clock,
              title: "Sin presion",
              copy: "Avanza a tu ritmo y revisa tus respuestas antes de finalizar.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex gap-4 rounded-lg border border-line/80 p-4">
                <span className="bg-mist text-navy grid size-11 shrink-0 place-items-center rounded-full">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-navy font-black">{item.title}</h3>
                  <p className="text-navy/78 mt-1 text-sm leading-6">{item.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
