import { CheckCircle2, Circle } from "lucide-react";

import { diagnosticAreas } from "@/constants/diagnostic-questions";
import { cn } from "@/lib/cn";

type ProgressBarProps = {
  currentIndex: number;
  totalQuestions: number;
  answeredCount: number;
  currentAreaId: string;
};

export function ProgressBar({
  currentIndex,
  totalQuestions,
  answeredCount,
  currentAreaId,
}: ProgressBarProps) {
  const progress = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <aside className="border-line/80 rounded-lg border bg-white p-5 shadow-[0_14px_34px_rgba(16,35,69,0.06)] lg:p-6">
      <p className="text-navy text-sm font-black">Progreso</p>
      <div className="mt-5 flex items-center gap-5">
        <div
          className="grid size-24 place-items-center rounded-full"
          style={{
            background: `conic-gradient(#07398c ${progress * 3.6}deg, #edf1f7 0deg)`,
          }}
          aria-label={`${progress}% completado`}
        >
          <div className="grid size-16 place-items-center rounded-full bg-white">
            <span className="text-navy text-2xl font-black">{progress}%</span>
          </div>
        </div>
        <div>
          <p className="text-navy text-lg font-black">
            {answeredCount} / {totalQuestions}
          </p>
          <p className="text-steel mt-1 text-sm">preguntas respondidas</p>
        </div>
      </div>

      <div className="bg-line/80 mt-6 h-px" />

      <div className="mt-6">
        <p className="text-navy text-sm font-black">Seccion actual</p>
        <div className="mt-4 space-y-2">
          {diagnosticAreas.map((area, index) => {
            const isCurrent = area.id === currentAreaId;
            return (
              <div
                key={area.id}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition",
                  isCurrent ? "bg-mist text-navy font-black" : "text-navy/82",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-black">{index + 1}</span>
                  {area.shortLabel}
                </span>
                {isCurrent ? <CheckCircle2 className="size-4 text-blue-700" /> : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-line/80 mt-6 h-px" />
      <div className="mt-6 flex items-center gap-3 text-sm text-navy/80">
        <Circle className="size-4" aria-hidden="true" />
        Pregunta {currentIndex + 1} de {totalQuestions}
      </div>
    </aside>
  );
}
