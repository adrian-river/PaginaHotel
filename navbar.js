document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("navbar");

  const navPath = window.location.pathname.includes("/pages/")
    ? "../pages/navbar.html"
    : "./pages/navbar.html";

  fetch(navPath)
    .then((response) => {
      if (!response.ok) throw new Error("No se pudo cargar el navbar");
      return response.text();
    })
    .then((data) => {
      navContainer.innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el navbar:", error));
});

function actualizarReloj() {
  const ahora = new Date();

  // Formatear fecha
  const opciones = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const fecha = ahora.toLocaleDateString("es-ES", opciones);
  const fechaCapitalizada =
    fecha.charAt(0).toUpperCase() + fecha.slice(1).replace(".", "");

  // Formatear hora
  const hora = ahora.toLocaleTimeString("es-ES");

  // Actualizar en navbar
  const fechaElement = document.querySelector("#fecha-nav");
  const horaElement = document.querySelector("#hora-nav");

  if (fechaElement) fechaElement.textContent = fechaCapitalizada;
  if (horaElement) horaElement.textContent = hora;
}

// Actualizar inmediatamente
actualizarReloj();

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);
