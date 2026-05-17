import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
