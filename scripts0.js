// === Initialisation des données par défaut dans le localStorage ===
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "futuriste");
  localStorage.setItem("difficulty", "normal");
  localStorage.setItem("musicVolume", "50");
  localStorage.setItem("sfxVolume", "50");
  localStorage.setItem("controls", "qwerty");
  localStorage.setItem("progress", "25");
  localStorage.setItem("geo", "500");
  localStorage.setItem("spells", "3");
  localStorage.setItem("feedback", "");
  localStorage.setItem("rating", "0");
}

// === Navigation entre les sections ===

// Afficher le menu principal
function returnToMenu() {
  document.getElementById('options').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('extras').classList.add('hidden');
  document.getElementById('main-menu').classList.remove('hidden');
}

// Afficher les options
function viewOptions() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('options').classList.remove('hidden');
}

// Afficher le tableau de bord
function viewDashboard() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');

  // Charger les données depuis le localStorage
  const progress = localStorage.getItem("progress");
  const geo = localStorage.getItem("geo");
  const spells = localStorage.getItem("spells");

  // Mettre à jour l'affichage des colonnes
  document.getElementById("progress-data").textContent = progress + "%";
  document.getElementById("geo-data").textContent = geo;
  document.getElementById("spells-data").textContent = spells;
}

// Afficher les extras
function viewExtras() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('extras').classList.remove('hidden');
}

// === Gestion des formulaires dans les options ===

// Sauvegarder les préférences générales
function saveGeneralPreferences() {
  const theme = document.getElementById("theme").value;
  const difficulty = document.getElementById("difficulty").value;

  // Sauvegarder dans le localStorage
  localStorage.setItem("theme", theme);
  localStorage.setItem("difficulty", difficulty);

  alert("Vos préférences générales ont été sauvegardées !");
}

// Sauvegarder le retour utilisateur
function saveUserFeedback() {
  const feedback = document.getElementById("feedback").value.trim();
  const rating = parseInt(document.getElementById("rating").value, 10);

  // Validation des champs
  if (feedback === "" || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Merci de remplir tous les champs correctement !");
    return;
  }

  // Sauvegarder dans le localStorage
  localStorage.setItem("feedback", feedback);
  localStorage.setItem("rating", rating);

  alert("Merci pour votre retour !");
}

// Sauvegarder les réglages personnalisés
function saveCustomSettings() {
  const musicVolume = document.getElementById("music-volume").value;
  const sfxVolume = document.getElementById("sfx-volume").value;
  const controls = document.getElementById("controls").value;

  // Sauvegarder dans le localStorage
  localStorage.setItem("musicVolume", musicVolume);
  localStorage.setItem("sfxVolume", sfxVolume);
  localStorage.setItem("controls", controls);

  alert("Vos réglages personnalisés ont été appliqués !");
}

// === Simulation de fonctionnalités ===

// Commencer une partie (placeholder)
function startGame() {
  alert("Fonctionnalité non encore disponible !");
}

// Ouvrir les options (placeholder)
function openOptions() {
  alert("Options : Fonctionnalité non encore disponible !");
}

// Afficher les succès (placeholder)
function viewAchievements() {
  alert("Succès : Fonctionnalité non encore disponible !");
}

// Quitter le jeu
function quitGame() {
  if (confirm("Êtes-vous sûr de vouloir quitter ?")) {
    alert("Merci d'avoir joué !");
    // Simule la fermeture de l'application
    window.close();
  }
}


// === Initialisation du thème à partir du localStorage ===
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "futuriste"; // Valeur par défaut : futuriste
  applyTheme(savedTheme); // Applique le thème sauvegardé
  document.getElementById("theme").value = savedTheme; // Met à jour la sélection dans le formulaire
}

// Appliquer le thème à l'interface
function applyTheme(theme) {
  const body = document.body;
  switch (theme) {
    case "futuriste":
      body.style.background = "linear-gradient(135deg, #001f3f, #1abc9c)";
      break;
    case "gothique":
      body.style.background = "linear-gradient(135deg, #2c2c2c, #000)";
      break;
    case "minimaliste":
      body.style.background = "linear-gradient(135deg, #ffffff, #cccccc)";
      break;
    default:
      body.style.background = "linear-gradient(135deg, #1abc9c, #00ccff)";
  }
}

// Sauvegarder le thème sélectionné
function saveTheme() {
  const theme = document.getElementById("theme").value;
  localStorage.setItem("theme", theme); // Enregistre le thème dans le localStorage
  applyTheme(theme); // Applique immédiatement le thème
  alert("Le thème a été sauvegardé !");
}

// Charger le thème au démarrage
document.addEventListener("DOMContentLoaded", loadTheme); // Applique le thème à l'ouverture de la page
