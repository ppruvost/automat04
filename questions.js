/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [ {
    question: "On lance un dé à 6 faces équilibré. Quelle est la probabilité d’obtenir le nombre 3 ?",
    options: ["1/6", "1/3", "1/2", "3/6"],
    bonne_reponse: "1/6",
    explication: "Il y a 6 issues possibles et une seule favorable (le 3), donc la probabilité est 1/6."
  },
  {
    question: "On tire une carte au hasard parmi 10 cartes numérotées de 1 à 10. Quelle est la probabilité de tirer un nombre pair ?",
    options: ["1/10", "3/10", "5/10", "7/10"],
    bonne_reponse: "5/10",
    explication: "Les nombres pairs sont 2, 4, 6, 8 et 10, soit 5 issues favorables sur 10."
  },
  {
    question: "Dans un sac, il y a 4 billes rouges et 6 billes bleues. Quelle est la probabilité de tirer une bille rouge ?",
    options: ["4/10", "6/10", "1/4", "1/6"],
    bonne_reponse: "4/10",
    explication: "Il y a 4 billes rouges sur un total de 10 billes."
  },
  {
    question: "On lance une pièce équilibrée. Quelle est la probabilité d’obtenir pile ?",
    options: ["1", "1/3", "1/2", "2"],
    bonne_reponse: "1/2",
    explication: "Il y a deux issues possibles (pile ou face) et une seule favorable."
  },
  {
    question: "Une roue comporte 8 cases identiques numérotées de 1 à 8. Quelle est la probabilité d’obtenir un nombre supérieur à 6 ?",
    options: ["1/8", "2/8", "6/8", "7/8"],
    bonne_reponse: "2/8",
    explication: "Les nombres supérieurs à 6 sont 7 et 8, soit 2 issues favorables sur 8."
  },
  {
    question: "Dans une boîte, il y a 3 stylos noirs et 1 stylo rouge. Quelle est la probabilité de tirer un stylo noir ?",
    options: ["1/4", "3/4", "1/3", "4/3"],
    bonne_reponse: "3/4",
    explication: "Il y a 3 stylos noirs sur un total de 4 stylos."
  },
  {
    question: "On tire au hasard une boule parmi 5 boules vertes, 3 boules jaunes et 2 boules rouges. Quelle est la probabilité de tirer une boule jaune ?",
    options: ["3/10", "5/10", "2/10", "1/10"],
    bonne_reponse: "3/10",
    explication: "Il y a 3 boules jaunes sur un total de 10 boules."
  },
  {
    question: "On lance un dé à 6 faces. Quelle est la probabilité d’obtenir un nombre impair ?",
    options: ["1/6", "2/6", "3/6", "4/6"],
    bonne_reponse: "3/6",
    explication: "Les nombres impairs sont 1, 3 et 5, soit 3 issues favorables sur 6."
  },
  {
    question: "Dans un sac, il y a 10 jetons dont 1 seul est gagnant. Quelle est la probabilité de gagner ?",
    options: ["1/10", "9/10", "1/9", "10/1"],
    bonne_reponse: "1/10",
    explication: "Un seul jeton gagnant sur 10 jetons au total."
  },
  {
    question: "On choisit au hasard un jour de la semaine. Quelle est la probabilité de choisir un jour du week-end ?",
    options: ["2/5", "2/7", "5/7", "1/7"],
    bonne_reponse: "2/7",
    explication: "Le week-end comprend 2 jours (samedi et dimanche) sur 7 jours au total."
  }
];

/* ============================================================
   =================== FIN DES QUESTIONS ======================
   ============================================================ */
