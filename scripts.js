document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.getElementById("main-menu");
  const contentSection = document.getElementById("content-section");

  const menuButtons = document.querySelectorAll(".menu-btn");
  const backButton = document.querySelector(".back-btn");
  const contentDescription = document.querySelector(".content-description");

  const contentData = {
    "Santé": "Découvre des articles, exercices et astuces pour améliorer ta santé physique et mentale.",
    "Développement Personnel": "Explore des ressources pour t'aider à progresser et atteindre tes objectifs.",
    "Finances": "Apprends à gérer ton argent, investir et atteindre la liberté financière.",
    "Psychologie": "Plonge dans des concepts psychologiques pour mieux te comprendre et comprendre les autres.",
    "Lifestyle & Productivité": "Optimise ta routine quotidienne et améliore ta qualité de vie.",
    "Développement Web": "Découvre les derniers outils, langages et frameworks pour le développement web."
  };

  menuButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const category = e.target.textContent.trim();
      contentDescription.textContent = contentData[category] || "Contenu indisponible.";
      mainMenu.classList.add("hidden");
      contentSection.classList.remove("hidden");
    });
  });

  backButton.addEventListener("click", () => {
    contentSection.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });
});
