document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");

  const inPagesFolder = window.location.pathname.includes("./pages");
  const footerPath = inPagesFolder ? "footer.html" : "./pages/footer.html";

  fetch(footerPath)
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el footer");
      return response.text();
    })
    .then(data => {
      footerContainer.innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el footer:", error));
});
