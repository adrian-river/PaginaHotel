document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("navbar");

  const inPagesFolder = window.location.pathname.includes("/pages/");

  const navPath = inPagesFolder ? "navbar.html" : "pages/navbar.html";

  fetch(navPath)
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el navbar");
      return response.text();
    })
    .then(data => {
      navContainer.innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el navbar:", error));
});