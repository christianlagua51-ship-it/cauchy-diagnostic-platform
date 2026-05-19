"use client";

import { Award, BarChart3, BookOpenCheck, RotateCcw } from "lucide-react";

import {
  diagnosticAreas,
  diagnosticPhilosophy,
  type DiagnosticAreaId,
} from "@/constants/diagnostic-questions";
import { Button } from "@/components/ui/button";
import { RecommendationCard } from "@/components/diagnostic/recommendation-card";

export type AreaResult = {
  areaId: DiagnosticAreaId;
  label: string;
  score: number;
  correct: number;
  total: number;
};

export type DiagnosticSummary = {
  totalScore: number;
  correctAnswers: number;
  totalQuestions: number;
  interpretationLevel: string;
  interpretationCopy: string;
  areaResults: AreaResult[];
  strengths: AreaResult[];
  weakAreas: AreaResult[];
  recommendationSummary: string;
  radarData: Array<{ axis: string; value: number }>;
};

type DiagnosticResultsProps = {
  summary: DiagnosticSummary;
  onRestart: () => void;
};

export function DiagnosticResults({ summary, onRestart }: DiagnosticResultsProps) {
  const priorityAreas = summary.weakAreas.length > 0 ? summary.weakAreas : summary.areaResults.slice(-2);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="border-line/80 rounded-lg border bg-white p-6 shadow-[0_14px_34px_rgba(16,35,69,0.06)] sm:p-8">
        <div className="flex items-center gap-4">
          <span className="bg-mist text-navy grid size-14 place-items-center rounded-full">
            <Award className="size-7" aria-hidden="true" />
          </span>
          <div>
            <p className="text-blue-700 text-sm font-black">Resultado del diagnostico</p>
            <h1 className="text-navy text-3xl font-black">{summary.totalScore}%</h1>
          </div>
        </div>

        <div className="mt-7 rounded-lg bg-mist/70 p-5">
          <p className="text-navy text-lg font-black">{summary.interpretationLevel}</p>
          <p className="text-navy/82 mt-2 text-sm leading-6">{summary.interpretationCopy}</p>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-3">
          <div className="border-line rounded-lg border p-4">
            <dt className="text-steel text-xs font-bold uppercase">Correctas</dt>
            <dd className="text-navy mt-2 text-xl font-black">
              {summary.correctAnswers}/{summary.totalQuestions}
            </dd>
          </div>
          <div className="border-line rounded-lg border p-4">
            <dt className="text-steel text-xs font-bold uppercase">Nivel</dt>
            <dd className="text-navy mt-2 text-xl font-black">{summary.interpretationLevel}</dd>
          </div>
        </dl>

        <div className="mt-7">
          <h2 className="text-navy flex items-center gap-3 text-base font-black">
            <BookOpenCheck className="size-5" aria-hidden="true" />
            Fortalezas detectadas
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {summary.strengths.length > 0 ? (
              summary.strengths.map((area) => (
                <span key={area.areaId} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">
                  {area.label} {area.score}%
                </span>
              ))
            ) : (
              <p className="text-navy/78 text-sm leading-6">
                Aun no aparece una fortaleza dominante. Este resultado sirve para construir bases
                con orden desde el inicio.
              </p>
            )}
          </div>
        </div>

        <p className="text-navy/72 mt-7 border-t border-line pt-5 text-sm leading-6">
          {diagnosticPhilosophy} Tu resultado representa un punto de partida para seguir creciendo.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-line/80 rounded-lg border bg-white p-6 shadow-[0_14px_34px_rgba(16,35,69,0.06)] sm:p-8">
          <h2 className="text-navy flex items-center gap-3 text-xl font-black">
            <BarChart3 className="size-5" aria-hidden="true" />
            Puntaje por area
          </h2>
          <div className="mt-6 space-y-5">
            {summary.areaResults.map((area) => (
              <div key={area.areaId}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                  <span className="text-navy font-black">{area.label}</span>
                  <span className="text-navy/76">
                    {area.score}% ({area.correct}/{area.total})
                  </span>
                </div>
                <div className="h-2 rounded-full bg-mist">
                  <div className="h-full rounded-full bg-blue-700" style={{ width: `${area.score}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-steel mt-5 text-xs">
            Datos listos para radar: {summary.radarData.length} ejes preparados.
          </p>
        </div>

        <div>
          <h2 className="text-navy mb-4 text-xl font-black">Areas prioritarias</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {priorityAreas.map((area) => {
              const areaConfig = diagnosticAreas.find((item) => item.id === area.areaId);
              return (
                <RecommendationCard
                  key={area.areaId}
                  title={area.label}
                  score={area.score}
                  description={areaConfig?.recommendation ?? summary.recommendationSummary}
                />
              );
            })}
          </div>
        </div>

        <div className="border-line/80 rounded-lg border bg-white p-6">
          <h2 className="text-navy text-lg font-black">Recomendacion general</h2>
          <p className="text-navy/82 mt-3 text-sm leading-6">{summary.recommendationSummary}</p>
          <Button type="button" className="mt-6 h-12 rounded-lg px-6" onClick={onRestart}>
            <RotateCcw className="mr-3 size-4" aria-hidden="true" />
            Repetir diagnostico
          </Button>
        </div>
      </div>
    </section>
  );
}
