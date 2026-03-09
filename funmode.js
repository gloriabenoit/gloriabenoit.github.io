document.addEventListener("DOMContentLoaded", () => {

  const checkbox = document.getElementById("funCheckbox");

  // Restaurer l'état sauvegardé
  const saved = localStorage.getItem("funMode");

  if (saved === "true") {
    document.body.classList.add("fun");
    checkbox.checked = true;
  }

  // Écoute du changement
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      document.body.classList.add("fun");
      localStorage.setItem("funMode", "true");
    } else {
      document.body.classList.remove("fun");
      localStorage.setItem("funMode", "false");
    }
  });

});