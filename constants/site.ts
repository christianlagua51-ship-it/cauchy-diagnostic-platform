import {
  Atom,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Compass,
  FunctionSquare,
  Gem,
  MoveDiagonal2,
  TrendingUp,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Cauchy",
  fullName: "Cauchy Centro Academico",
  navItems: [
    { label: "Inicio", href: "#inicio" },
    { label: "Cursos", href: "#programas" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export const stats = [
  {
    value: "5",
    label: "Áreas evaluadas",
    subtitle: "Aritmética, álgebra, lógica, funciones y geometría.",
    icon: Compass,
  },
  {
    value: "Resultados",
    label: "Personalizados",
    subtitle: "Diagnóstico y recomendaciones adaptadas al estudiante.",
    icon: TrendingUp,
  },
  {
    value: "Diagnóstico",
    label: "Instantáneo",
    subtitle: "Obtén resultados al finalizar la evaluación.",
    icon: ClipboardCheck,
  },
];

export const subjects = [
  {
    title: "Algebra",
    description: "Desde lo basico hasta avanzado",
    icon: MoveDiagonal2,
  },
  {
    title: "Calculo",
    description: "Diferencial e integral, limites y mas",
    icon: FunctionSquare,
  },
  {
    title: "Geometria",
    description: "Plana, espacial y trigonometria",
    icon: Compass,
  },
  {
    title: "Estadistica",
    description: "Probabilidad, distribuciones y mas",
    icon: BarChart3,
  },
  {
    title: "Fisica",
    description: "Mecanica, dinamica y mucho mas",
    icon: Atom,
  },
];

export const features = [
  {
    title: "Metodo probado",
    description: "Ensenanza basada en logica y comprension profunda.",
    icon: BookOpen,
  },
  {
    title: "Docentes expertos",
    description: "Profesionales con amplia experiencia academica.",
    icon: Users,
  },
  {
    title: "Evaluacion inteligente",
    description: "Diagnosticos personalizados con analisis detallado.",
    icon: TrendingUp,
  },
  {
    title: "Resultados reales",
    description: "Mejoramos tu rendimiento academico garantizado.",
    icon: Gem,
  },
];

export const footerGroups = [
  {
    title: "Academia",
    links: [
      { label: "Cursos", href: "#programas" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Metodologia", href: "#metodologia" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Diagnostico", href: "/test-diagnostico" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terminos y condiciones", href: "#inicio" },
      { label: "Privacidad", href: "#inicio" },
    ],
  },
];
