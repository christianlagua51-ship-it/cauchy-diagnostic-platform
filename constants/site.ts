import {
  Atom,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Compass,
  FunctionSquare,
  Gem,
  Medal,
  MoveDiagonal2,
  Sigma,
  Target,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Cauchy",
  fullName: "Cauchy Centro Academico",
  navItems: [
    { label: "Inicio", href: "#inicio" },
    { label: "Cursos", href: "#programas" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Metodologia", href: "#metodo" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export const stats = [
  { value: "1,250+", label: "Estudiantes", icon: UserRound },
  { value: "98%", label: "Satisfaccion", icon: Target },
  { value: "7,500+", label: "Evaluaciones", icon: ClipboardCheck },
  { value: "95%", label: "Aprobados", icon: Medal },
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
  { title: "Academia", links: ["Cursos", "Nosotros", "Metodologia"] },
  { title: "Recursos", links: ["Blog", "Material gratuito", "Preguntas frecuentes"] },
  { title: "Legal", links: ["Terminos y condiciones", "Privacidad"] },
];
