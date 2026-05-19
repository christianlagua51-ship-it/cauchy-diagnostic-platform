import { BookOpenCheck, Brain, Eye, Target } from "lucide-react";

export const aboutContent = {
  title: "Nosotros",
  headline: "La calma llega cuando entiendes.",
  intro: [
    "CAUCHY nace de una idea simple:",
    "las matemáticas no deberían sentirse como una barrera.",
    "Creemos que comprender puede sentirse bien.",
    "Creemos que pensar puede disfrutarse.",
    "Y creemos que cualquier persona merece experimentar la tranquilidad que aparece cuando algo finalmente tiene sentido.",
  ],
  sections: [
    {
      title: "Qué hacemos",
      body: [
        "CAUCHY es una experiencia educativa enfocada en comprensión matemática.",
        "Nuestro objetivo no es únicamente resolver ejercicios.",
      ],
      items: [
        "comprensión profunda",
        "razonamiento lógico",
        "pensamiento crítico",
        "confianza académica",
      ],
    },
    {
      title: "Cómo entendemos el aprendizaje",
      body: [
        "No creemos que aprender sea memorizar más rápido.",
        "Creemos que aprender significa:",
      ],
      items: ["entender", "conectar ideas", "equivocarse sin miedo", "construir confianza"],
    },
    {
      title: "Nuestra visión",
      body: [
        "Convertirnos en una comunidad educativa moderna donde las matemáticas dejen de ser una fuente de ansiedad y se conviertan en una herramienta para crecer.",
      ],
      items: [],
    },
    {
      title: "Nuestro compromiso",
      body: ["Queremos que cada estudiante sienta:", "“Sí puedo entender esto.”"],
      items: [],
    },
  ],
};

export const methodologyContent = {
  title: "Metodología",
  headline: "Entender antes de memorizar",
  intro: ["Nuestra metodología parte de una idea central:", "comprender primero."],
  steps: [
    {
      title: "Paso 1 - Diagnóstico",
      body: ["Comenzamos identificando cómo piensa matemáticamente cada estudiante.", "Evaluamos:"],
      items: ["aritmética", "álgebra", "lógica", "funciones", "geometría"],
      icon: Target,
    },
    {
      title: "Paso 2 - Comprensión",
      body: ["Buscamos responder:", "No solo aplicar fórmulas."],
      items: ["por qué", "cómo", "cuándo", "qué significa"],
      icon: Brain,
    },
    {
      title: "Paso 3 - Práctica guiada",
      body: ["Aplicamos ejercicios seleccionados para consolidar comprensión."],
      items: [],
      icon: BookOpenCheck,
    },
    {
      title: "Paso 4 - Reflexión",
      body: ["Buscamos que el estudiante pueda explicar ideas con sus propias palabras."],
      items: [],
      icon: Eye,
    },
  ],
  principlesTitle: "Principios",
  principles: [
    "aprender sin miedo",
    "claridad visual",
    "progreso sostenible",
    "curiosidad",
    "autonomía",
  ],
};

export const contactContent = {
  title: "¿Listo para empezar?",
  message:
    "Descubre tu perfil matemático y comienza una experiencia matemática basada en comprensión, curiosidad y claridad.",
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/cauchy_ec",
      type: "external",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@cauchy.ec",
      type: "external",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/message/YJ4Q6K77AQQWL1",
      type: "external",
    },
    {
      label: "Correo",
      href: "mailto:cauchy593@gmail.com",
      value: "cauchy593@gmail.com",
      type: "email",
    },
  ],
};
