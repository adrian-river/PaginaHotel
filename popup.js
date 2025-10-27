const endDate = new Date();
endDate.setDate(endDate.getDate() + 4);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate.getTime() - now;

  if (distance < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/*     function redirect() {
            alert('Redirigiendo a la página de reservas...');
            // window.location.href = 'tu-url-de-reservas';
        } */

// Actualizar el cronómetro cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// Cerrar popup al hacer clic fuera
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    closePopup();
  }
});
