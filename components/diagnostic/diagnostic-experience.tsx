"use client";

import { useMemo, useState } from "react";

import {
  diagnosticAreas,
  diagnosticQuestions,
  type DiagnosticAreaId,
  type DiagnosticOption,
} from "@/constants/diagnostic-questions";
import { DiagnosticIntro } from "@/components/diagnostic/diagnostic-intro";
import {
  DiagnosticResults,
  type AreaResult,
  type DiagnosticSummary,
} from "@/components/diagnostic/diagnostic-results";
import { ProgressBar } from "@/components/diagnostic/progress-bar";
import { QuestionCard } from "@/components/diagnostic/question-card";
import { StudentInfoForm } from "@/components/diagnostic/student-info-form";
import {
  sendDiagnosticResult,
  type DiagnosticResultPayload,
  type StudentInformation,
} from "@/services/diagnostic-results";

type AnswerMap = Partial<Record<number, DiagnosticOption["id"]>>;
type DiagnosticStep = "intro" | "student-info" | "questions" | "results";

function getInterpretation(score: number) {
  if (score >= 90) {
    return {
      level: "Excelente",
      copy: "Tus bases son solidas y muestran una preparacion consistente para temas mas avanzados.",
    };
  }

  if (score >= 75) {
    return {
      level: "Bueno",
      copy: "Tienes una base favorable. Conviene afinar los temas con menor desempeno para ganar seguridad.",
    };
  }

  if (score >= 60) {
    return {
      level: "Intermedio",
      copy: "Hay comprension en varias areas, pero todavia existen vacios que pueden limitar temas posteriores.",
    };
  }

  if (score >= 40) {
    return {
      level: "En desarrollo",
      copy: "El resultado sugiere trabajar fundamentos con calma, priorizando comprension antes que memorizacion.",
    };
  }

  return {
    level: "Requiere refuerzo",
    copy: "Es recomendable reconstruir bases esenciales con acompanamiento y practica guiada paso a paso.",
  };
}

function buildSummary(answers: AnswerMap): DiagnosticSummary {
  const areaResults = diagnosticAreas.map<AreaResult>((area) => {
    const questions = diagnosticQuestions.filter((question) => question.areaId === area.id);
    const correct = questions.filter((question) => answers[question.id] === question.correctAnswer).length;
    const score = Math.round((correct / questions.length) * 100);

    return {
      areaId: area.id,
      label: area.label,
      score,
      correct,
      total: questions.length,
    };
  });

  const totalScore = Math.round(
    areaResults.reduce((score, area) => {
      const areaWeight = diagnosticAreas.find((item) => item.id === area.areaId)?.weight ?? 0;
      return score + area.score * (areaWeight / 100);
    }, 0),
  );
  const interpretation = getInterpretation(totalScore);
  const strengths = areaResults.filter((area) => area.score >= 75).sort((a, b) => b.score - a.score);
  const weakAreas = areaResults.filter((area) => area.score < 60).sort((a, b) => a.score - b.score);
  const sortedAreas = [...areaResults].sort((a, b) => a.score - b.score);
  const focusAreas = weakAreas.length > 0 ? weakAreas : sortedAreas.slice(0, 2);
  const focusLabels = focusAreas.map((area) => area.label.toLowerCase()).join(" y ");

  return {
    totalScore,
    correctAnswers: diagnosticQuestions.filter(
      (question) => answers[question.id] === question.correctAnswer,
    ).length,
    totalQuestions: diagnosticQuestions.length,
    interpretationLevel: interpretation.level,
    interpretationCopy: interpretation.copy,
    areaResults,
    strengths,
    weakAreas,
    recommendationSummary: `Prioriza ${focusLabels}. La meta inicial es comprender el procedimiento, explicar el razonamiento y luego aumentar velocidad con practica dirigida.`,
    radarData: areaResults.map((area) => ({ axis: area.label, value: area.score })),
  };
}

function buildResultPayload(
  student: StudentInformation,
  summary: DiagnosticSummary,
  testStartedAt: Date,
  testCompletedAt: Date,
): DiagnosticResultPayload {
  const sortedByScore = [...summary.areaResults].sort((a, b) => b.score - a.score);
  const strongestArea = sortedByScore[0];
  const weakestArea = sortedByScore[sortedByScore.length - 1];
  const scoreByAreaId = Object.fromEntries(
    summary.areaResults.map((area) => [area.areaId, area.score]),
  ) as Record<DiagnosticAreaId, number>;
  const durationSeconds = Math.max(
    0,
    Math.round((testCompletedAt.getTime() - testStartedAt.getTime()) / 1000),
  );

  return {
    timestamp: testCompletedAt.toISOString(),
    testStartedAt: testStartedAt.toISOString(),
    testCompletedAt: testCompletedAt.toISOString(),
    durationSeconds,
    averageSecondsPerQuestion: Number((durationSeconds / summary.totalQuestions).toFixed(2)),
    student,
    totalScore: summary.totalScore,
    areaScores: {
      aritmetica: scoreByAreaId.arithmetic,
      algebra: scoreByAreaId.algebra,
      logica: scoreByAreaId.logic,
      funciones: scoreByAreaId.functions,
      geometria: scoreByAreaId.geometry,
    },
    scoreByArea: summary.areaResults.map((area) => ({
      areaId: area.areaId,
      area: area.label,
      score: area.score,
      correct: area.correct,
      total: area.total,
    })),
    strongestArea: {
      areaId: strongestArea.areaId,
      area: strongestArea.label,
      score: strongestArea.score,
    },
    weakestArea: {
      areaId: weakestArea.areaId,
      area: weakestArea.label,
      score: weakestArea.score,
    },
    recommendation: summary.recommendationSummary,
  };
}

export function DiagnosticExperience() {
  const [step, setStep] = useState<DiagnosticStep>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [studentInfo, setStudentInfo] = useState<StudentInformation | null>(null);
  const [testStartedAt, setTestStartedAt] = useState<Date | null>(null);

  const currentQuestion = diagnosticQuestions[currentIndex];
  const currentArea = diagnosticAreas.find((area) => area.id === currentQuestion.areaId);
  const answeredCount = Object.keys(answers).length;
  const summary = useMemo(() => buildSummary(answers), [answers]);

  function selectAnswer(answerId: DiagnosticOption["id"]) {
    setAnswers((current) => ({ ...current, [currentQuestion.id]: answerId }));
  }

  function restart() {
    setAnswers({});
    setStudentInfo(null);
    setTestStartedAt(null);
    setCurrentIndex(0);
    setStep("intro");
  }

  function submitStudentInfo(student: StudentInformation) {
    setStudentInfo(student);
    setTestStartedAt(new Date());
    setStep("questions");
  }

  function finishDiagnostic() {
    const testCompletedAt = new Date();

    if (studentInfo && testStartedAt) {
      const payload = buildResultPayload(studentInfo, summary, testStartedAt, testCompletedAt);
      void sendDiagnosticResult(payload);
    }

    setStep("results");
  }

  if (step === "intro") {
    return <DiagnosticIntro questionCount={diagnosticQuestions.length} onStart={() => setStep("student-info")} />;
  }

  if (step === "student-info") {
    return <StudentInfoForm onSubmit={submitStudentInfo} />;
  }

  if (step === "results") {
    return <DiagnosticResults summary={summary} onRestart={restart} />;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]">
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={diagnosticQuestions.length}
        answeredCount={answeredCount}
        currentAreaId={currentQuestion.areaId as DiagnosticAreaId}
      />
      <QuestionCard
        question={currentQuestion}
        areaLabel={currentArea?.label ?? "Diagnostico"}
        currentIndex={currentIndex}
        totalQuestions={diagnosticQuestions.length}
        selectedAnswer={answers[currentQuestion.id]}
        onSelect={selectAnswer}
        onPrevious={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
        onNext={() => setCurrentIndex((index) => Math.min(index + 1, diagnosticQuestions.length - 1))}
        onSubmit={finishDiagnostic}
      />
    </div>
  );
}
