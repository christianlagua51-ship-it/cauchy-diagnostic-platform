import { BookOpen, Brain, Calculator, LineChart, Medal, Users } from "lucide-react";

export const siteConfig = {
  name: "Cauchy",
  fullName: "Cauchy Centro Academico",
  navItems: [
    { label: "Inicio", href: "#inicio" },
    { label: "Programas", href: "#programas" },
    { label: "Metodo", href: "#metodo" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export const stats = [
  { value: "+500", label: "estudiantes acompanados" },
  { value: "95%", label: "mejora academica" },
  { value: "8+", label: "areas de refuerzo" },
];

export const subjects = [
  {
    title: "Matematicas",
    description: "Algebra, calculo, geometria y razonamiento.",
    icon: Calculator,
  },
  {
    title: "Fisica",
    description: "Modelos, ejercicios guiados y resolucion aplicada.",
    icon: LineChart,
  },
  { title: "Quimica", description: "Fundamentos, practica estructurada y examenes.", icon: Brain },
  {
    title: "Lectura critica",
    description: "Comprension, argumentacion y tecnica de prueba.",
    icon: BookOpen,
  },
];

export const features = [
  {
    title: "Metodo claro",
    description: "Diagnostico inicial, ruta personalizada y sesiones con objetivos medibles.",
    icon: Medal,
  },
  {
    title: "Mentoria cercana",
    description: "Docentes que explican con precision y acompanamiento continuo.",
    icon: Users,
  },
  {
    title: "Practica inteligente",
    description: "Ejercicios progresivos, revision de errores y simulacros academicos.",
    icon: LineChart,
  },
];
