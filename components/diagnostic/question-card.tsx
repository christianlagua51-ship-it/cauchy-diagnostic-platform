"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";

import type { DiagnosticOption, DiagnosticQuestion } from "@/constants/diagnostic-questions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type QuestionCardProps = {
  question: DiagnosticQuestion;
  areaLabel: string;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: DiagnosticOption["id"];
  onSelect: (answerId: DiagnosticOption["id"]) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

function MathOption({ label }: { label: string }) {
  const hasMath = /\\|\^|pi|x|f\(|!/.test(label);

  if (!hasMath) {
    return <span>{label}</span>;
  }

  return <InlineMath math={label.replaceAll("pi", "\\pi")} />;
}

export function QuestionCard({
  question,
  areaLabel,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelect,
  onPrevious,
  onNext,
  onSubmit,
}: QuestionCardProps) {
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const questionProgress = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <section className="border-line/80 rounded-lg border bg-white p-5 shadow-[0_14px_34px_rgba(16,35,69,0.06)] sm:p-8">
      <div className="flex flex-col gap-4 border-b border-line/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-blue-700 text-sm font-black">{areaLabel}</p>
          <h1 className="text-navy mt-2 text-2xl font-black">Pregunta {currentIndex + 1}</h1>
        </div>
        <div className="w-full max-w-[340px]">
          <p className="text-navy/78 mb-2 text-sm">
            Pregunta {currentIndex + 1} de {totalQuestions}
          </p>
          <div className="h-2 rounded-full bg-mist">
            <div
              className="h-full rounded-full bg-blue-700 transition-all"
              style={{ width: `${questionProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="py-7">
        <p className="text-navy text-lg leading-8 font-black">{question.prompt}</p>
        {question.expression ? (
          <div className="text-navy my-6 text-xl">
            <BlockMath math={question.expression} />
          </div>
        ) : null}
        <div className="mt-7 space-y-4">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelect(option.id)}
                className={cn(
                  "border-line flex min-h-16 w-full items-center gap-4 rounded-lg border bg-white px-5 py-4 text-left text-navy transition hover:border-blue-700/45 hover:bg-mist/40",
                  isSelected && "border-blue-700 bg-mist/70 shadow-[0_12px_28px_rgba(0,58,150,0.08)]",
                )}
              >
                <span
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-full border text-xs font-black",
                    isSelected
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-300 text-navy/70",
                  )}
                >
                  {option.id}
                </span>
                <span className="text-base font-semibold">
                  <MathOption label={option.label} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-line/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="button"
          variant="secondary"
          className="h-13 rounded-lg px-6"
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          <ArrowLeft className="mr-3 size-4" aria-hidden="true" />
          Anterior
        </Button>
        <Button
          type="button"
          className="h-13 rounded-lg px-7"
          onClick={isLastQuestion ? onSubmit : onNext}
          disabled={!selectedAnswer}
        >
          {isLastQuestion ? "Finalizar diagnostico" : "Siguiente"}
          <ArrowRight className="ml-3 size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
