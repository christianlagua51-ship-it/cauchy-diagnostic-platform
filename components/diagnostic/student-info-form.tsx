"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { StudentInformation } from "@/services/diagnostic-results";

const ageRanges: StudentInformation["ageRange"][] = ["14–16", "17–19", "20–23", "24+"];

const academicLevels = ["Colegio", "Preuniversitario", "Universidad", "Otro"];

type StudentInfoFormProps = {
  onSubmit: (student: StudentInformation) => void;
};

type FieldName = keyof Pick<
  StudentInformation,
  "fullName" | "academicLevel" | "institution" | "whatsapp"
>;

type FieldErrors = Partial<Record<FieldName, string>>;

const namePattern = /^[\p{L}]+(?:\s[\p{L}]+)*$/u;
const institutionPattern = /^[\p{L}\d .-]+$/u;
const whatsappMinLength = 8;

function normalizeSpaces(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function sanitizeWhatsapp(value: string) {
  return value.replace(/\s+/g, "").replace(/\D/g, "");
}

function validateField(field: FieldName, value: string) {
  const normalizedValue = field === "whatsapp" ? sanitizeWhatsapp(value) : normalizeSpaces(value);

  if (field === "fullName") {
    if (!normalizedValue) {
      return "Escribe tu nombre completo.";
    }

    if (!namePattern.test(normalizedValue)) {
      return "Usa solo letras, espacios, acentos y ñ.";
    }
  }

  if (field === "academicLevel" && !normalizedValue) {
    return "Selecciona tu nivel académico.";
  }

  if (field === "institution" && normalizedValue && !institutionPattern.test(normalizedValue)) {
    return "Usa letras, números, espacios, puntos o guiones.";
  }

  if (field === "whatsapp" && normalizedValue.length > 0 && normalizedValue.length < whatsappMinLength) {
    return `Ingresa al menos ${whatsappMinLength} dígitos.`;
  }

  return "";
}

function FieldMessage({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-xs font-semibold text-red-700">{message}</p>;
}

export function StudentInfoForm({ onSubmit }: StudentInfoFormProps) {
  const [student, setStudent] = useState<StudentInformation>({
    fullName: "",
    ageRange: "14–16",
    academicLevel: "",
    institution: "",
    whatsapp: "",
    learningGoal: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  function updateField<Key extends keyof StudentInformation>(
    field: Key,
    value: StudentInformation[Key],
  ) {
    const nextValue = field === "whatsapp" ? sanitizeWhatsapp(String(value)) : value;

    setStudent((current) => ({ ...current, [field]: nextValue }));

    if (field in touched && touched[field as FieldName]) {
      setErrors((current) => ({
        ...current,
        [field]: validateField(field as FieldName, String(nextValue)),
      }));
    }
  }

  function validateOnBlur(field: FieldName) {
    const rawValue = String(student[field] ?? "");
    const normalizedValue = field === "whatsapp" ? sanitizeWhatsapp(rawValue) : normalizeSpaces(rawValue);

    setTouched((current) => ({ ...current, [field]: true }));
    setStudent((current) => ({ ...current, [field]: normalizedValue }));
    setErrors((current) => ({ ...current, [field]: validateField(field, normalizedValue) }));
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedStudent: StudentInformation = {
      fullName: normalizeSpaces(student.fullName),
      ageRange: student.ageRange,
      academicLevel: student.academicLevel,
      institution: normalizeSpaces(student.institution ?? ""),
      whatsapp: sanitizeWhatsapp(student.whatsapp ?? ""),
      learningGoal: normalizeSpaces(student.learningGoal ?? ""),
    };
    const nextErrors: FieldErrors = {
      fullName: validateField("fullName", normalizedStudent.fullName),
      academicLevel: validateField("academicLevel", normalizedStudent.academicLevel),
      institution: validateField("institution", normalizedStudent.institution ?? ""),
      whatsapp: validateField("whatsapp", normalizedStudent.whatsapp ?? ""),
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);

    setStudent(normalizedStudent);
    setTouched({
      fullName: true,
      academicLevel: true,
      institution: true,
      whatsapp: true,
    });
    setErrors(nextErrors);

    if (hasErrors) {
      return;
    }

    onSubmit({
      fullName: normalizedStudent.fullName,
      ageRange: normalizedStudent.ageRange,
      academicLevel: normalizedStudent.academicLevel,
      institution: normalizedStudent.institution || undefined,
      whatsapp: normalizedStudent.whatsapp || undefined,
      learningGoal: normalizedStudent.learningGoal || undefined,
    });
  }

  const fieldClass = (field: FieldName) =>
    cn(
      "mt-2 h-12 w-full rounded-lg border bg-white px-4 text-sm text-navy outline-none transition focus:border-blue-700",
      errors[field] ? "border-red-300 bg-red-50/30" : "border-line",
    );

  return (
    <section className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <div>
        <p className="text-blue-700 text-sm font-black uppercase tracking-[0.16em]">
          Antes de empezar
        </p>
        <h1 className="text-navy mt-4 max-w-[620px] text-4xl leading-tight font-black tracking-tight uppercase sm:text-5xl">
          Queremos orientarte mejor.
        </h1>
        <span className="mt-6 block h-0.5 w-12 bg-blue-700" />
        <p className="text-navy/84 mt-6 max-w-[560px] text-lg leading-8">
          Completa tus datos para que el resultado del diagnóstico tenga más contexto académico.
        </p>
        <div className="mt-8 flex gap-4 rounded-lg border border-line/80 bg-white p-5 text-navy/82 shadow-[0_14px_34px_rgba(16,35,69,0.06)]">
          <ShieldCheck className="mt-1 size-6 shrink-0 text-blue-700" aria-hidden="true" />
          <p className="text-sm leading-6">
            Usaremos esta información únicamente para orientarte académicamente y mejorar tu
            experiencia de aprendizaje.
          </p>
        </div>
      </div>

      <form
        onSubmit={submitForm}
        noValidate
        className="border-line/80 rounded-lg border bg-white p-6 shadow-[0_18px_44px_rgba(16,35,69,0.08)] sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="text-navy text-sm font-black">Nombre completo</span>
            <input
              value={student.fullName}
              onBlur={() => validateOnBlur("fullName")}
              onChange={(event) => updateField("fullName", event.target.value)}
              className={fieldClass("fullName")}
              placeholder="Tu nombre"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            <span id="fullName-error">
              <FieldMessage message={errors.fullName} />
            </span>
          </label>

          <label>
            <span className="text-navy text-sm font-black">Rango de edad</span>
            <select
              value={student.ageRange}
              onChange={(event) =>
                updateField("ageRange", event.target.value as StudentInformation["ageRange"])
              }
              className="mt-2 h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-navy outline-none transition focus:border-blue-700"
            >
              {ageRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="text-navy text-sm font-black">Nivel académico</span>
            <select
              value={student.academicLevel}
              onBlur={() => validateOnBlur("academicLevel")}
              onChange={(event) => updateField("academicLevel", event.target.value)}
              className={fieldClass("academicLevel")}
              aria-invalid={Boolean(errors.academicLevel)}
              aria-describedby={errors.academicLevel ? "academicLevel-error" : undefined}
            >
              <option value="">Selecciona una opción</option>
              {academicLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <span id="academicLevel-error">
              <FieldMessage message={errors.academicLevel} />
            </span>
          </label>

          <label>
            <span className="text-navy text-sm font-black">Institución</span>
            <input
              value={student.institution}
              onBlur={() => validateOnBlur("institution")}
              onChange={(event) => updateField("institution", event.target.value)}
              className={fieldClass("institution")}
              placeholder="Opcional"
              aria-invalid={Boolean(errors.institution)}
              aria-describedby={errors.institution ? "institution-error" : undefined}
            />
            <span id="institution-error">
              <FieldMessage message={errors.institution} />
            </span>
          </label>

          <label>
            <span className="text-navy text-sm font-black">WhatsApp</span>
            <input
              value={student.whatsapp}
              inputMode="numeric"
              onBlur={() => validateOnBlur("whatsapp")}
              onChange={(event) => updateField("whatsapp", event.target.value)}
              className={fieldClass("whatsapp")}
              placeholder="Opcional"
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            />
            <span id="whatsapp-error">
              <FieldMessage message={errors.whatsapp} />
            </span>
          </label>

          <label className="sm:col-span-2">
            <span className="text-navy text-sm font-black">Meta principal de aprendizaje</span>
            <textarea
              value={student.learningGoal}
              onBlur={() => updateField("learningGoal", normalizeSpaces(student.learningGoal ?? ""))}
              onChange={(event) => updateField("learningGoal", event.target.value)}
              className="mt-2 min-h-28 w-full resize-none rounded-lg border border-line bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-blue-700"
              placeholder="Opcional"
            />
          </label>
        </div>

        <Button type="submit" className="mt-7 h-14 w-full gap-3 rounded-lg px-7 sm:w-auto">
          Empezar diagnóstico
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </form>
    </section>
  );
}
