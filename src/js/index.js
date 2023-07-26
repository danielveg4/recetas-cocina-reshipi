// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const toggleMenuElement = document.getElementById('toggle-menu');
const mainNavElement = document.getElementById('main-nav');


function handleClick(){
    mainNavElement.classList.toggle('hide');
    
}

toggleMenuElement.addEventListener('click', handleClick);