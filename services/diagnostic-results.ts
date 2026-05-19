import type { AreaResult } from "@/components/diagnostic/diagnostic-results";

export type StudentInformation = {
  fullName: string;
  ageRange: "14–16" | "17–19" | "20–23" | "24+";
  academicLevel: string;
  institution?: string;
  whatsapp?: string;
  learningGoal?: string;
};

export type DiagnosticResultPayload = {
  timestamp: string;
  testStartedAt: string;
  testCompletedAt: string;
  durationSeconds: number;
  averageSecondsPerQuestion: number;
  student: StudentInformation;
  totalScore: number;
  areaScores: {
    aritmetica: number;
    algebra: number;
    logica: number;
    funciones: number;
    geometria: number;
  };
  scoreByArea: Array<{
    areaId: AreaResult["areaId"];
    area: string;
    score: number;
    correct: number;
    total: number;
  }>;
  strongestArea: {
    areaId: AreaResult["areaId"];
    area: string;
    score: number;
  };
  weakestArea: {
    areaId: AreaResult["areaId"];
    area: string;
    score: number;
  };
  recommendation: string;
};

export async function sendDiagnosticResult(payload: DiagnosticResultPayload) {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT;

  if (!endpoint) {
    return { ok: false, skipped: true };
  }

  try {
    console.log("Diagnostic areaScores payload", payload.areaScores);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return { ok: response.ok, skipped: false };
  } catch {
    return { ok: false, skipped: false };
  }
}
