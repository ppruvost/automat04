/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  {
    question: "Développer l’expression (x + 2)(x + 3).",
    options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 1", "x² + 6x + 1"],
    bonne_reponse: "x² + 5x + 6",
    explication: "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6."
  },
  {
    question: "Développer l’expression (x - 4)(x + 1).",
    options: ["x² - 3x - 4", "x² - 4x + 1", "x² - 3x + 4", "x² + 5x - 4"],
    bonne_reponse: "x² - 3x - 4",
    explication: "(x - 4)(x + 1) = x² + x - 4x - 4 = x² - 3x - 4."
  },
  {
    question: "Quel est le développement de (x - 2)(x - 5) ?",
    options: ["x² - 7x + 10", "x² - 10x + 7", "x² + 7x - 10", "x² - 7x - 10"],
    bonne_reponse: "x² - 7x + 10",
    explication: "(x - 2)(x - 5) = x² - 5x - 2x + 10 = x² - 7x + 10."
  },
  {
    question: "Développer l’expression (x + 6)(x - 2).",
    options: ["x² + 4x - 12", "x² - 4x - 12", "x² + 8x - 12", "x² - 8x + 12"],
    bonne_reponse: "x² + 4x - 12",
    explication: "(x + 6)(x - 2) = x² - 2x + 6x - 12 = x² + 4x - 12."
  },
  {
    question: "Quel est le terme constant du développement de (x - 3)(x + 5) ?",
    options: ["15", "-15", "2", "-2"],
    bonne_reponse: "-15",
    explication: "Le terme constant est le produit de -3 et 5, soit -15."
  },
  {
    question: "Développer l’expression (x + 4)(x - 4).",
    options: ["x² - 16", "x² + 16", "x² - 8x - 16", "x² + 8x - 16"],
    bonne_reponse: "x² - 16",
    explication: "(x + 4)(x - 4) est une identité remarquable : x² - 16."
  },
  {
    question: "Développer l’expression (x - 1)(x + 7).",
    options: ["x² + 6x - 7", "x² + 8x - 7", "x² - 6x - 7", "x² + 6x + 7"],
    bonne_reponse: "x² + 6x - 7",
    explication: "(x - 1)(x + 7) = x² + 7x - x - 7 = x² + 6x - 7."
  },
  {
    question: "Quel est le coefficient de x dans le développement de (x + 3)(x - 8) ?",
    options: ["-5", "24", "-24", "11"],
    bonne_reponse: "-5",
    explication: "(x + 3)(x - 8) = x² - 8x + 3x - 24 = x² - 5x - 24."
  },
  {
    question: "Développer l’expression (x - 6)(x - 2).",
    options: ["x² - 8x + 12", "x² - 12x + 8", "x² + 8x + 12", "x² - 4x + 12"],
    bonne_reponse: "x² - 8x + 12",
    explication: "(x - 6)(x - 2) = x² - 2x - 6x + 12 = x² - 8x + 12."
  },
  {
    question: "Quelle est la forme développée de (x + a)(x + b) ?",
    options: ["x² + (a + b)x + ab", "x² + abx + (a + b)", "x² + ax + bx", "x² + (a - b)x + ab"],
    bonne_reponse: "x² + (a + b)x + ab",
    explication: "En développant : x² + bx + ax + ab = x² + (a + b)x + ab."
  }
];

/* ============================================================
   =================== FIN DES QUESTIONS ======================
   ============================================================ */
