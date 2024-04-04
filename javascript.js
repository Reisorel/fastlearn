const indexLinks = document.querySelectorAll('nav ol li a');
// Récupérer le bouton "Mystery"
const mysteryButton = document.querySelector('.btn-back-to-top');
// Fonction pour sélectionner aléatoirement un lien de l'index
function randomIndex(max) {
  return Math.floor(Math.random() * max);
}
// Ajouter un écouteur d'événement au bouton "Mystery"
mysteryButton.addEventListener('click', () => {
  // Générer un index aléatoire
  const index = randomIndex(indexLinks.length);
  // Récupérer le lien correspondant à l'index aléatoire
  const randomLink = indexLinks[index];
  // Aller vers la section correspondante
  randomLink.click();
});

// PARTIE QUIZZ //

// tableau "questions" contenant 3 objets représentant des clés questions, options de réponse et réponses avec des valeurs en string
const questions = [
  {
    question: "Une primitive est-elle mutable?",
    options: ["Oui", "Non"],
    answer: "Non"
  },
  {
    question: "Combien existe-t-il de primitives",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Connais-tu a différence entre copie partielle et copie profonde ?",
    options: ["Oui", "Non"],
    answer: "Oui"
  }
];

// Sélection des éléments du DOM avec les identifiants "quiz" et "submitBtn"
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submitBtn");

// Fonction pour générer le quiz à partir des données
function generateQuiz() {
  // Itération sur chaque question dans le tableau "questions"
  questions.forEach((question, index) => {
    // Création d'un élément <div> pour chaque question
    const questionDiv = document.createElement("div");
    // Ajout du texte de la question à la <div> avec son numéro
    questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

    // Itération sur les options de réponse pour chaque question
    question.options.forEach((option, optionIndex) => {
      // Création d'un nouvel élément <input> pour représenter un bouton radio
      const optionInput = document.createElement("input");
      // Définition du type de l'élément <input> comme "radio"
      optionInput.type = "radio";
      // Attribution d'un nom unique pour les boutons radio de chaque question
      optionInput.name = `question${index}`;
      // Attribution de la valeur de l'option à l'élément <input>
      optionInput.value = option;
      // Ajout de l'élément <input> à la <div> de la question
      questionDiv.appendChild(optionInput);

      // Création d'un nouvel élément <label> pour étiqueter l'option de réponse
      const optionLabel = document.createElement("label")
      // Attribution du texte de l'option à l'élément <label>
      optionLabel.textContent = option;
      // Ajout de l'élément <label> à la <div> de la question
      questionDiv.appendChild(optionLabel);
      // Ajout d'un saut de ligne pour séparer visuellement les options de réponse
      questionDiv.appendChild(document.createElement("br"))
    })
    // Ajout de la <div> de la question au conteneur global du quiz
    quizContainer.appendChild(questionDiv)
  });
}

function submitQuiz() {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption) {
      if (selectedOption.value === question.answer) {
        score++;
      }
    }
  });

  alert(`Votre score est de : ${score}/${questions.length}`);
}

generateQuiz();

submitButton.addEventListener("click", submitQuiz);
