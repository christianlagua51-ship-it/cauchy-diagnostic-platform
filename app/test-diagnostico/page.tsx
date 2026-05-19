import type { Metadata } from "next";

import { DiagnosticExperience } from "@/components/diagnostic/diagnostic-experience";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Diagnostico matematico | Cauchy Centro Academico",
  description: "Diagnostico matematico gratuito para identificar fortalezas y areas de mejora.",
};

export default function DiagnosticTestPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f9fd_0%,#eef3f9_100%)]">
      <header className="border-line/70 bg-background/88 border-b backdrop-blur">
        <Container className="flex h-24 items-center justify-between gap-5">
          <Logo />
          <ButtonLink href="/" variant="secondary" className="h-12 rounded-lg px-6">
            Volver al inicio
          </ButtonLink>
        </Container>
      </header>

      <Container className="py-8 sm:py-12 lg:py-14">
        <DiagnosticExperience />
      </Container>
    </main>
  );
}
