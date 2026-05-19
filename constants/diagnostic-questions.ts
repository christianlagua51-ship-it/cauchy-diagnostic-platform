export type DiagnosticAreaId = "arithmetic" | "algebra" | "logic" | "functions" | "geometry";

export type DiagnosticOption = {
  id: "A" | "B" | "C" | "D";
  label: string;
};

export type DiagnosticQuestion = {
  id: number;
  areaId: DiagnosticAreaId;
  prompt: string;
  expression?: string;
  options: DiagnosticOption[];
  correctAnswer: DiagnosticOption["id"];
};

export type DiagnosticArea = {
  id: DiagnosticAreaId;
  label: string;
  shortLabel: string;
  weight: number;
  recommendation: string;
};

export const diagnosticAreas: DiagnosticArea[] = [
  {
    id: "arithmetic",
    label: "Aritmetica",
    shortLabel: "Aritmetica",
    weight: 25,
    recommendation:
      "Reforzar calculo mental, proporciones, porcentajes y lectura numerica en situaciones cotidianas.",
  },
  {
    id: "algebra",
    label: "Algebra",
    shortLabel: "Algebra",
    weight: 25,
    recommendation:
      "Practicar traduccion de enunciados, simplificacion de expresiones y resolucion de ecuaciones base.",
  },
  {
    id: "logic",
    label: "Logica y razonamiento",
    shortLabel: "Logica",
    weight: 20,
    recommendation:
      "Trabajar patrones, inferencias y explicacion paso a paso del razonamiento usado.",
  },
  {
    id: "functions",
    label: "Funciones",
    shortLabel: "Funciones",
    weight: 15,
    recommendation:
      "Conectar expresiones, valores de entrada y salida, y lectura grafica de relaciones.",
  },
  {
    id: "geometry",
    label: "Geometria",
    shortLabel: "Geometria",
    weight: 15,
    recommendation:
      "Repasar areas, formulas esenciales y la interpretacion de medidas dentro de figuras.",
  },
];

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 1,
    areaId: "arithmetic",
    prompt: "Una persona mira videos de 30 segundos durante 2 horas. Cuantos videos vio aproximadamente?",
    options: [
      { id: "A", label: "120" },
      { id: "B", label: "180" },
      { id: "C", label: "240" },
      { id: "D", label: "360" },
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    areaId: "arithmetic",
    prompt: "Una pizza tiene 12 rebanadas y se reparte entre 4 personas por igual. Cuantas rebanadas recibe cada persona?",
    options: [
      { id: "A", label: "2" },
      { id: "B", label: "3" },
      { id: "C", label: "4" },
      { id: "D", label: "6" },
    ],
    correctAnswer: "B",
  },
  {
    id: 3,
    areaId: "arithmetic",
    prompt: "Un producto cuesta $80 y tiene un descuento del 25%. Cuanto debe pagar el cliente?",
    options: [
      { id: "A", label: "$20" },
      { id: "B", label: "$55" },
      { id: "C", label: "$60" },
      { id: "D", label: "$75" },
    ],
    correctAnswer: "C",
  },
  {
    id: 4,
    areaId: "arithmetic",
    prompt: "Cual es el valor de:",
    expression: "\\sqrt{144}",
    options: [
      { id: "A", label: "10" },
      { id: "B", label: "11" },
      { id: "C", label: "12" },
      { id: "D", label: "14" },
    ],
    correctAnswer: "C",
  },
  {
    id: 5,
    areaId: "algebra",
    prompt: "El doble de un numero mas 5 es igual a 17. Cual es el numero?",
    options: [
      { id: "A", label: "4" },
      { id: "B", label: "5" },
      { id: "C", label: "6" },
      { id: "D", label: "7" },
    ],
    correctAnswer: "C",
  },
  {
    id: 6,
    areaId: "algebra",
    prompt: "Simplifica:",
    expression: "3x + 2x - x",
    options: [
      { id: "A", label: "4x" },
      { id: "B", label: "5x" },
      { id: "C", label: "6x" },
      { id: "D", label: "7x" },
    ],
    correctAnswer: "A",
  },
  {
    id: 7,
    areaId: "algebra",
    prompt: "Resuelve:",
    expression: "x^2 - 9 = 0",
    options: [
      { id: "A", label: "x = 3" },
      { id: "B", label: "x = -3" },
      { id: "C", label: "x = \\pm 3" },
      { id: "D", label: "x = 9" },
    ],
    correctAnswer: "C",
  },
  {
    id: 8,
    areaId: "algebra",
    prompt: "Cual es el resultado de:",
    expression: "5!",
    options: [
      { id: "A", label: "25" },
      { id: "B", label: "60" },
      { id: "C", label: "100" },
      { id: "D", label: "120" },
    ],
    correctAnswer: "D",
  },
  {
    id: 9,
    areaId: "logic",
    prompt: "Si todos los cuadrados son rectangulos y esta figura es un cuadrado, entonces:",
    options: [
      { id: "A", label: "No es un rectangulo" },
      { id: "B", label: "Es un rectangulo" },
      { id: "C", label: "Es un circulo" },
      { id: "D", label: "No se puede determinar" },
    ],
    correctAnswer: "B",
  },
  {
    id: 10,
    areaId: "logic",
    prompt: "Completa la secuencia:",
    expression: "2,4,8,16,\\ ?",
    options: [
      { id: "A", label: "18" },
      { id: "B", label: "24" },
      { id: "C", label: "32" },
      { id: "D", label: "64" },
    ],
    correctAnswer: "C",
  },
  {
    id: 11,
    areaId: "logic",
    prompt: "Juan tiene 15 frutas y quiere repartirlas entre 5 personas por igual. Cuantas frutas recibe cada persona?",
    options: [
      { id: "A", label: "2" },
      { id: "B", label: "3" },
      { id: "C", label: "4" },
      { id: "D", label: "5" },
    ],
    correctAnswer: "B",
  },
  {
    id: 12,
    areaId: "functions",
    prompt: "Un taxi cobra $2 de tarifa base mas $0.50 por cada kilometro recorrido. Cual expresion representa el costo total?",
    options: [
      { id: "A", label: "0.5x" },
      { id: "B", label: "2x" },
      { id: "C", label: "2 + 0.5x" },
      { id: "D", label: "2 - 0.5x" },
    ],
    correctAnswer: "C",
  },
  {
    id: 13,
    areaId: "functions",
    prompt: "Si:",
    expression: "f(x)=2x+1 \\quad \\text{cual es el valor de } f(3)?",
    options: [
      { id: "A", label: "5" },
      { id: "B", label: "6" },
      { id: "C", label: "7" },
      { id: "D", label: "8" },
    ],
    correctAnswer: "C",
  },
  {
    id: 14,
    areaId: "geometry",
    prompt: "Cual es el area de un rectangulo de 8 metros de largo y 5 metros de ancho?",
    options: [
      { id: "A", label: "13" },
      { id: "B", label: "26" },
      { id: "C", label: "40" },
      { id: "D", label: "80" },
    ],
    correctAnswer: "C",
  },
  {
    id: 15,
    areaId: "geometry",
    prompt: "Cual es el area de un circulo de radio 3?",
    options: [
      { id: "A", label: "3\\pi" },
      { id: "B", label: "6\\pi" },
      { id: "C", label: "9\\pi" },
      { id: "D", label: "12\\pi" },
    ],
    correctAnswer: "C",
  },
];

export const diagnosticPhilosophy =
  "Las matematicas no se tratan unicamente de memorizar formulas. Comprender, interpretar y razonar son las verdaderas bases del aprendizaje matematico.";
