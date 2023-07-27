// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// botón menu

const toggleMenuElement = document.getElementById('toggle-menu');
const mainNavElement = document.getElementById('main-nav');

const handleClick = () => {
    mainNavElement.classList.toggle('hide');
}

toggleMenuElement.addEventListener('click', handleClick);


// recetas con DOM

const recetasData = [
    {
      imagen: "assets/images/receta1.jpg",
      nombre: "Hamburguesa clásica",
      tiempo: "Tiempo: 30 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta2.jpg",
      nombre: "Pizza de pepperoni",
      tiempo: "Tiempo: 45 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta3.jpg",
      nombre: "Ensalada César",
      tiempo: "Tiempo: 15 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta4.jpg",
      nombre: "Tacos de pescado",
      tiempo: "Tiempo: 25 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta5.jpg",
      nombre: "Sopa de tomate",
      tiempo: "Tiempo: 40 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta6.jpg",
      nombre: "Lasaña de carne",
      tiempo: "Tiempo: 1 hora",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta7.jpg",
      nombre: "Sushi de salmón",
      tiempo: "Tiempo: 50 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta8.jpg",
      nombre: "Pollo a la parrilla",
      tiempo: "Tiempo: 35 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta9.jpg",
      nombre: "Tarta de manzana",
      tiempo: "Tiempo: 1 hora",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta10.jpg",
      nombre: "Pasta Alfredo",
      tiempo: "Tiempo: 25 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta11.jpg",
      nombre: "Enchiladas de pollo",
      tiempo: "Tiempo: 45 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta12.jpg",
      nombre: "Pastel de chocolate",
      tiempo: "Tiempo: 1 hora",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta13.jpg",
      nombre: "Sopa de fideos",
      tiempo: "Tiempo: 30 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta14.jpg",
      nombre: "Alitas de pollo",
      tiempo: "Tiempo: 40 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta15.jpg",
      nombre: "Risotto de champiñones",
      tiempo: "Tiempo: 50 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta16.jpg",
      nombre: "Ensalada de quinoa",
      tiempo: "Tiempo: 20 minutos",
      dificultad: "Dificultad: Fácil",
    },
    {
      imagen: "assets/images/receta17.jpg",
      nombre: "Tacos al pastor",
      tiempo: "Tiempo: 35 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta18.jpg",
      nombre: "Pastel de zanahoria",
      tiempo: "Tiempo: 1 hora",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta19.jpg",
      nombre: "Ramen",
      tiempo: "Tiempo: 40 minutos",
      dificultad: "Dificultad: Moderada",
    },
    {
      imagen: "assets/images/receta20.jpg",
      nombre: "Ceviche de camarón",
      tiempo: "Tiempo: 25 minutos",
      dificultad: "Dificultad: Fácil",
    },
  ];

  const mostrarRecetas = (recetas) => {
    const recetasContainer = document.getElementById("recetas-container");
  
    for (let i = 0; i < recetas.length; i++) {
      const receta = recetas[i];
      const recetaDiv = document.createElement("div");
      recetaDiv.classList.add("receta");
  
      const recetaImagen = document.createElement("img");
      recetaImagen.src = receta.imagen;
      recetaImagen.alt = receta.nombre;
      recetaImagen.classList.add("receta-imagen");
  
      const recetaNombre = document.createElement("h2");
      recetaNombre.textContent = receta.nombre;
      recetaNombre.classList.add("receta-nombre");
  
      const recetaDetalles = document.createElement("div");
      recetaDetalles.classList.add("receta-detalles");
  
      const recetaTiempo = document.createElement("p");
      recetaTiempo.textContent = receta.tiempo;
      recetaTiempo.classList.add("receta-tiempo");
  
      const recetaDificultad = document.createElement("p");
      recetaDificultad.textContent = receta.dificultad;
      recetaDificultad.classList.add("receta-dificultad");
  
      recetaDetalles.appendChild(recetaTiempo);
      recetaDetalles.appendChild(recetaDificultad);
  
      recetaDiv.appendChild(recetaImagen);
      recetaDiv.appendChild(recetaNombre);
      recetaDiv.appendChild(recetaDetalles);
  
      recetasContainer.appendChild(recetaDiv);
    }
  };
  

    mostrarRecetas(recetasData);


  // filtro botón banner

const filterButton = document.getElementById("banner-button");
const filterOptions = document.getElementById("banner-options");
const filterButtons = document.getElementById("banner-options button");
const recetas = document.querySelectorAll(".recetas .receta");

const toggleFilterOptions = () => {
  filterOptions.classList.toggle("hidden");
};

const handleFilterClick = (event) => {
  const target = event.target;
  if (target.tagName !== "BUTTON") return;
  for (let i = 0; i < filterButtons.length; i++) {
    const button = filterButtons[i];
    button.classList.toggle("active", button === target);
  }
  target.classList.add("active");

  const filtro = target.getAttribute("data-filter");
  for (let i = 0; i < recetas.length; i++) {
    const receta = recetas[i];
    const showRecipe = filtro === "all" || receta.classList.contains(filtro);
    receta.classList.toggle("hide", !showRecipe);
  }
  filterOptions.classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  filterButton.addEventListener("click", toggleFilterOptions);
  filterOptions.addEventListener("click", handleFilterClick);
});

