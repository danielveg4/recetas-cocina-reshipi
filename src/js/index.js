// Importar el firebase

import '../app/firebase.js';
import '../app/singupForm.js';


// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// logout

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import  { auth } from '../app/firebase.js'

const loginLink = document.getElementById('iniciarSesion');
const logout = document.getElementById('logout');

import { signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"


logout.addEventListener('click', async () => {
  await signOut(auth);
  console.log('user sign out');
})

const loginCheck = user => {
  if (user) {
    loginLink.forEach(link => link.style.display = 'block');
    logout.forEach(link => link.style.display = 'none');
  } else { 
    loginLink.forEach(link => link.style.display = 'none');
    logout.forEach(link => link.style.display = 'block');
  }
}

//onAuthStateChanged(auth, async (user) => {
//  loginCheck(user)
// });


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
    tipo: "fast",
    país: "EE. UU.",
    duracion: 30,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta2.jpg",
    nombre: "Pizza de pepperoni",
    tiempo: "Tiempo: 45 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "italiana",
    país: "Italia",
    duracion: 45,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta3.jpg",
    nombre: "Ensalada César",
    tiempo: "Tiempo: 15 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "Francia",
    duracion: 15,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta4.jpg",
    nombre: "Tacos de pescado",
    tiempo: "Tiempo: 25 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "México",
    duracion: 25,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta5.jpg",
    nombre: "Sopa de tomate",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "Italia",
    duracion: 40,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta6.jpg",
    nombre: "Lasaña de carne",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "carne",
    país: "Italia",
    duracion: 60,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta7.jpg",
    nombre: "Sushi de salmón",
    tiempo: "Tiempo: 50 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "Japón",
    duracion: 50,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta8.jpg",
    nombre: "Pollo a la parrilla",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "carne",
    país: "España",
    duracion: 35,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta9.jpg",
    nombre: "Tarta de manzana",
    tiempo: "Tiempo: 1 hora y media",
    dificultad: "Dificultad: Moderada",
    tipo: "postres",
    país: "Francia",
    duracion: 90,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta10.jpg",
    nombre: "Pasta Alfredo",
    tiempo: "Tiempo: 25 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "italiana",
    país: "Italia",
    duracion: 25,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta11.jpg",
    nombre: "Enchiladas de pollo",
    tiempo: "Tiempo: 45 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "carne",
    país: "México",
    duracion: 45,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta12.jpg",
    nombre: "Pastel de chocolate",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "postres",
    país: "Francia",
    duracion: 60,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta13.jpg",
    nombre: "Sopa de fideos",
    tiempo: "Tiempo: 30 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañantes",
    país: "China",
    duracion: 30,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta14.jpg",
    nombre: "Alitas de pollo",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "carne",
    país: "España",
    duracion: 40,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta15.jpg",
    nombre: "Risotto de champiñones",
    tiempo: "Tiempo: 50 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "Italia",
    duracion: 50,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta16.jpg",
    nombre: "Ensalada de quinoa",
    tiempo: "Tiempo: 20 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañantes",
    país: "Perú",
    duracion: 20,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta17.jpg",
    nombre: "Tacos al pastor",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "México",
    duracion: 35,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta18.jpg",
    nombre: "Pastel de zanahoria",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "postres",
    país: "Inglaterra",
    duracion: 60,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta19.jpg",
    nombre: "Ramen",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "Japón",
    duracion: 40,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta20.jpg",
    nombre: "Ceviche de camarón",
    tiempo: "Tiempo: 25 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "pescado",
    país: "Perú",
    duracion: 25,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta21.jpg",
    nombre: "Paella",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "plato principal",
    país: "España",
    duracion: 60,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta22.jpg",
    nombre: "Fish and Chips",
    tiempo: "Tiempo: 40 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "EE. UU.",
    duracion: 40,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta23.jpg",
    nombre: "Tacos de carnitas",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "acompañantes",
    país: "México",
    duracion: 35,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta24.jpg",
    nombre: "Sushi tempura",
    tiempo: "Tiempo: 50 minutos",
    dificultad: "Dificultad: Moderada",
    tipo: "pescado",
    país: "Japón",
    duracion: 50,
    valoración: "populares",
  },
  {
    imagen: "assets/images/receta25.jpg",
    nombre: "Tortilla española",
    tiempo: "Tiempo: 35 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "España",
    duracion: 35,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta26.jpg",
    nombre: "Samosa",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "aperitivo",
    país: "India",
    duracion: 60,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta27.jpg",
    nombre: "Poutine",
    tiempo: "Tiempo: 30 minutos",
    dificultad: "Dificultad: Fácil",
    tipo: "acompañante",
    país: "Francia",
    duracion: 30,
    valoración: "recomendadas",
  },
  {
    imagen: "assets/images/receta28.jpg",
    nombre: "Baguette",
    tiempo: "Tiempo: 2 horas",
    dificultad: "Dificultad: Moderada",
    tipo: "panes",
    país: "Francia",
    duracion: 120,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta29.jpg",
    nombre: "Pan con tomate",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Fácil",
    tipo: "panes",
    país: "España",
    duracion: 60,
    valoración: "reciente",
  },
  {
    imagen: "assets/images/receta30.jpg",
    nombre: "Paella de mariscos",
    tiempo: "Tiempo: 1 hora",
    dificultad: "Dificultad: Moderada",
    tipo: "marisco",
    país: "España",
    duracion: 60,
    valoración: "populares",
  },
];

  let allRecetas = [...recetasData];
  let recetasFiltradas = [...recetasData];

  const mostrarRecetas = (recetas) => {
    const recetasContainer = document.getElementById("recetas-container");
    recetasContainer.innerHTML = "";

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
  
  mostrarRecetas(allRecetas);
  


  // filtro botón banner

  const filterButton = document.getElementById("banner-button");
  const filterButtons = document.querySelectorAll(".banner-options button");
  const recetas = document.querySelectorAll(".main__recetas .receta");
  const bannerOptions = document.querySelector(".banner-options");

  const toggleFilterOptions = () => {
    bannerOptions.hidden = !bannerOptions.hidden;
  };
  

  const handleFilterClick = (event) => {
    const filtro = event.target.dataset.filter;
    if (event.target.tagName !== "BUTTON") return;
    for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].classList.remove("active");
    }
    event.target.classList.add("active");
    for (let i = 0; i < recetas.length; i++) {
      recetas[i].classList.remove("hide");
    }
  
    filterRecetas(filtro);
  };

  const filterRecetas = (filtro) => {
    for (let i = 0; i < recetas.length; i++) {
      const receta = recetasData[i];
  
      const cumpleFiltro =
        filtro === "all" ||
        (filtro === "popular" && receta.valoración === "populares") ||
        (filtro === "recent" && receta.valoración === "reciente") ||
        (filtro === "recommended" && receta.valoración === "recomendadas");
  
      if (cumpleFiltro) {
        recetas[i].classList.remove("hide");
      } else {
        recetas[i].classList.add("hide");
      }
    }
  };


// botones iconos banner: al pulsar en uno de ellos tiene que mostrarte las recetas que estén hechas con eso.

const recipesContainer = document.getElementById("recipes-container");

const encuentrameAlHijo = (element, className) => {
  while (element && !element.classList.contains(className)) {
    element = element.parentElement;
  }
  return element;
};

const handleIconClick = (tipo) => {
  const recetasFiltradas = recetasData.filter((receta) => receta.tipo === tipo);
  mostrarRecetas(recetasFiltradas);
};

recipesContainer.addEventListener("click", (event) => {
  const clickedRecipe = encuentrameAlHijo(event.target, "banner__recipe");
  if (!clickedRecipe) return;

  const tipo = clickedRecipe.dataset.tipo;
  handleIconClick(tipo);
});

// poner al padre el click y usar e.event.target


// listeners filtro

filterButton.addEventListener("click", toggleFilterOptions);

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", handleFilterClick);
}


// hacer un filtro para pais, tipo de plato... tipos, select y options. utilizar el select para que se despliegue, con un evento de change, que es con lo que filtras

const selectTipo = document.getElementById("selectTipo");
const selectPais = document.getElementById("selectPais");
const selectDuracion = document.getElementById("selectDuracion");
const buscarButton = document.getElementById("buscar");

const buscadorRecetas = () => {
  const tipoSeleccionado = selectTipo.value;
  const paisSeleccionado = selectPais.value;
  const duracionSeleccionada = selectDuracion.value;

  for (let i = 0; i < recetas.length; i++) {
    const receta = recetasData[i];
    const tipoReceta = receta.tipo;
    const paisReceta = receta.país;
    const duracionReceta = receta.duracion;

    const tipoCumple = tipoSeleccionado === "all" || tipoSeleccionado === tipoReceta;
    const paisCumple = paisSeleccionado === "all" || paisSeleccionado === paisReceta;
    const duracionCumple =
      duracionSeleccionada === "all" ||
      (duracionSeleccionada === "60+" && duracionReceta >= 60) ||
      (duracionReceta >= parseInt(duracionSeleccionada, 10) &&
        duracionReceta < parseInt(duracionSeleccionada, 10) + 15);

    if (tipoCumple && paisCumple && duracionCumple) {
      recetas[i].classList.remove("hide");
    } else {
      recetas[i].classList.add("hide");
    }
  }
};

buscarButton.addEventListener("click", buscadorRecetas);