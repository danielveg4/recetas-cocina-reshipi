// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// botón menu

const toggleMenuElement = document.getElementById('toggle-menu');
const mainNavElement = document.getElementById('main-nav');


function handleClick(){
    mainNavElement.classList.toggle('hide');
}

toggleMenuElement.addEventListener('click', handleClick);


// filtro botón banner

document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.querySelector(".banner-button");
    const filterOptions = document.querySelector(".banner-options");
  
    filterButton.addEventListener("click", function () {
      filterOptions.toggleAttribute("hidden");
    });
  
    const filterButtons = document.querySelectorAll(".banner-options button");
    const recetas = document.querySelectorAll(".recetas .receta");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Mostrar el botón activo y ocultar los demás
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
  
        const filtro = this.getAttribute("data-filter");
  
        // Filtrar las recetas según la categoría seleccionada
        recetas.forEach((receta) => {
          if (filtro === "all" || receta.classList.contains(filtro)) {
            receta.classList.remove("hide");
          } else {
            receta.classList.add("hide");
          }
        });
  
        // Ocultar el desplegable después de hacer clic en una opción de filtro
        filterOptions.setAttribute("hidden", "true");
      });
    });
  });

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

// función para las recetas

// Función para agregar las recetas al contenedor en el HTML
function mostrarRecetas(recetas) {
    const recetasContainer = document.getElementById("recetas-container");
  
    recetas.forEach((receta) => {
      const recetaHTML = `
        <div class="receta ${receta.dificultad.toLowerCase()}">
          <img src="${receta.imagen}" alt="${receta.nombre}" class="receta-imagen">
          <h2 class="receta-nombre">${receta.nombre}</h2>
          <div class="receta-detalles">
            <p class="receta-tiempo">${receta.tiempo}</p>
            <p class="receta-dificultad">${receta.dificultad}</p>
          </div>
        </div>
      `;
      recetasContainer.insertAdjacentHTML("beforeend", recetaHTML);
    });
  }
  
  // Mostrar las recetas en el contenedor
  mostrarRecetas(recetasData);

