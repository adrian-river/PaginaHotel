const infoHabitaciones = [
  {
    area: "40",
    huespedes: 2,
    nombreHabitacion: "Luxury",
    tipoCama: "Cama King (matrimonial)",
    banio: "Baño de mármol completo",
    extra: "Escritorio",
    frase:
      "Elegancia atemporal y confort incomparable que enriquecen tu estadía",
    imagenHabitacion: "./images/habitaciones/luxury-room.jpg",
    tipoHabitacion: "suites",
  },
  {
    area: "50",
    huespedes: 2,
    nombreHabitacion: "Luxury 2.0",
    tipoCama: "Cama King (matrimonial)",
    banio: "Baño de mármol completo",
    extra: "Vista panoramica",
    frase: "Estilo clásico y sofisticado",
    imagenHabitacion: "./images/habitaciones/luxury-room2.jpg",
    tipoHabitacion: "suites",
  },
  {
    area: "60",
    huespedes: 2,
    nombreHabitacion: "Luxury 3.0",
    tipoCama: "Cama King (matrimonial)",
    banio: "Baño de mármol completo con ducha y jacuzzi",
    extra: "Sala y desayunador",
    frase: "Un legado de elegancia y confort",
    imagenHabitacion: "./images/habitaciones/luxury-room3.jpg",
    tipoHabitacion: "suites",
  },
  {
    area: "30",
    huespedes: 2,
    nombreHabitacion: "Classic 1.0",
    tipoCama: "Cama Queen",
    banio: "Baño de porcelana con ducha",
    extra: "Televisor",
    frase: "Elegancia y serenidad",
    imagenHabitacion: "./images/habitaciones/classic-room.jpg",
    tipoHabitacion: "clasica",
  },
  {
    area: "35",
    huespedes: 2,
    nombreHabitacion: "Classic 2.0",
    tipoCama: "Cama Queen",
    banio: "Baño de porcelana con ducha",
    extra: "Televisor",
    frase: "Comodidad en un entorno amplio",
    imagenHabitacion: "./images/habitaciones/classic-room2.jpg",
    tipoHabitacion: "clasica",
  },
  {
    area: "85",
    huespedes: 2,
    nombreHabitacion: "Presidential 1.0",
    tipoCama: "Cama King (matrimonial)",
    banio: "Baño de mármol completo con jacuzzi",
    extra: "Sala independiente",
    frase:
      "Una verdadera obra de arte con ambientes separados y lujosos que te cautivarán",
    imagenHabitacion: "./images/habitaciones/presidential-room.jpg",
    tipoHabitacion: "presidencial",
  },
  {
    area: "90",
    huespedes: 2,
    nombreHabitacion: "Presidential 2.0",
    tipoCama: "Cama King (matrimonial)",
    banio: "Baño de mármol completo con jacuzzi",
    extra: "Sala independiente",
    frase:
      "Grandiosa habitación llena de cultura, elegancia y comodidad con dos áreas separadas.",
    imagenHabitacion: "./images/habitaciones/presidential-room2.jpg",
    tipoHabitacion: "presidencial",
  },
  {
    area: "120",
    huespedes: 2,
    nombreHabitacion: "Presidential 3.0",
    tipoCama: "Cama King (matrimonial)",
    banio: "Baño de mármol completo con jacuzzi",
    extra: "Walking closet",
    frase: "Amplios ambientes, obras de arte.",
    imagenHabitacion: "./images/habitaciones/presidential-room3.jpg",
    tipoHabitacion: "presidencial",
  },
];

const habitacionInfoJS = document.getElementById("habitacionesSection");

/* Agregar y quitar clase al navbar */

function setMenuActive(menuSelected) {
  const menu = document.querySelectorAll(".nav-option");
  menu.forEach((men) => men.classList.remove("active"));
  menuSelected.classList.add("active");
}

/* ************** */

function filtrarCategorias(tipoHabitacionSeleccionada) {
  habitacionInfoJS.innerHTML = "";

  const infoHabitacionesFiltradas = infoHabitaciones.filter(
    (habitacion) => habitacion.tipoHabitacion === tipoHabitacionSeleccionada
  );

  infoHabitacionesFiltradas.forEach((habitacion) => {
    habitacionInfoJS.innerHTML += `
  
  <div id="habitacionContainer" class="habitacion-container">
      <div class="habitacion-info">
        <h2>${habitacion.nombreHabitacion}</h2>
        <p>Area: ${habitacion.area} m2 | Cant. huespedes: ${habitacion.huespedes}</p>
            <div class="habitacion-descripcion">
                  <p>${habitacion.tipoCama}</p>
                  <p>${habitacion.banio}</p>
                  <p>${habitacion.extra}</p>
            </div>
            <p class="habitacion-frase">${habitacion.frase}</p>
          <span></span>
            <div class="habitacion-botones">
                  <button onclick="enviarInfoHabitacion('Hola quisiera reservar la habitación ${habitacion.nombreHabitacion}')">
            Reservar esta habitación
          </button>
            </div>
                </div>

        <div class="habitacion-imagen">
                <img src="${habitacion.imagenHabitacion}" alt="" />
        </div>
    </div>
`;
  });
}

function mostrarHabitaciones() {
  habitacionInfoJS.innerHTML = "";
  infoHabitaciones.forEach((habitacion) => {
    habitacionInfoJS.innerHTML += `
  <div id="habitacionContainer" class="habitacion-container">
      <div class="habitacion-info">
        <h2>${habitacion.nombreHabitacion}</h2>
        <p>Area: ${habitacion.area} m2 | Cant. huespedes: ${habitacion.huespedes}</p>
            <div class="habitacion-descripcion">
                  <p>${habitacion.tipoCama}</p>
                  <p>${habitacion.banio}</p>
                  <p>${habitacion.extra}</p>
            </div>
            <p class="habitacion-frase">${habitacion.frase}</p>
          <span></span>
            <div class="habitacion-botones">
                  <button onclick="enviarInfoHabitacion('Hola quisiera reservar la habitación ${habitacion.nombreHabitacion}')">
            Reservar esta habitación
          </button>
            </div>
                </div>

        <div class="habitacion-imagen">
                <img src="${habitacion.imagenHabitacion}" alt="" />
        </div>
    </div>
`;
  });
}

function enviarInfoHabitacion(habitacionSelected) {
  console.log(habitacionSelected);
}
mostrarHabitaciones();
