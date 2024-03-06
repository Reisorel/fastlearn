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
