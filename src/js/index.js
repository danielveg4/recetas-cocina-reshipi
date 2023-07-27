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
      tipo: "fast",
    },
    {
      imagen: "assets/images/receta2.jpg",
      nombre: "Pizza de pepperoni",
      tiempo: "Tiempo: 45 minutos",
      dificultad: "Dificultad: Moderada",
      tipo: "italiana",
    },
    {
      imagen: "assets/images/receta3.jpg",
      nombre: "Ensalada César",
      tiempo: "Tiempo: 15 minutos",
      dificultad: "Dificultad: Fácil",
      tipo: "acompañante",
    },
    {
      imagen: "assets/images/receta4.jpg",
      nombre: "Tacos de pescado",
      tiempo: "Tiempo: 25 minutos",
      dificultad: "Dificultad: Moderada",
      tipo: "pescado",
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
      const button = filterButtons[i];
      button.classList.toggle("active", button === event.target);
    }
    
  
    for (let i = 0; i < recetas.length; i++) {
      recetas[i].classList.remove("hide");
    }
  
    if (filtro === "all") {
      mostrarRecetas(allRecetas);
    } else if (filtro === "popular") {
      for (let i = 8; i < recetas.length; i++) {
        recetas[i].classList.add("hide");
      }
    } else if (filtro === "recent") {
      for (let i = 0; i < 8 || i >= 16; i++) {
        recetas[i].classList.add("hide");
      }
    } else if (filtro === "recommended") {
      for (let i = 0; i < 16; i++) {
        recetas[i].classList.add("hide");
      }
    }
  };


// botones iconos banner: al pulsar en uno de ellos tiene que mostrarte las recetas que estén hechas con eso.

const pescadoIcon = document.getElementById("recipe-pescado");

pescadoIcon.addEventListener("click", () => {
  const recetasDePescado = recetasData.filter((receta) => receta.tipo === "pescado");
  mostrarRecetas(recetasDePescado);
});


// listeners filtro

filterButton.addEventListener("click", toggleFilterOptions);
bannerOptions.addEventListener("click", handleFilterClick);

