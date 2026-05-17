import type { Metadata } from "next";

import "katex/dist/katex.min.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Cauchy Centro Academico",
  description: "Acompanamiento academico premium para estudiantes que quieren aprender con metodo.",
  metadataBase: new URL("https://cauchy-centro-academico.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
