const headerNavbar = document.getElementById('categories');
const theme = document.getElementById('change_theme');
let showNavbar = false;

function toggleNavbar() {
    showNavbar = !showNavbar;
    
    if(showNavbar) {
        headerNavbar.style.marginLeft = '0vw';
        headerNavbar.style.animationName = 'showNavbar';
    } else {
        headerNavbar.style.marginLeft = '-100vw';
        headerNavbar.style.animationName = 'closeNavbar';
    }
}

function closeNavbar() {
    if(showNavbar){
        toggleNavbar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 900 && showNavbar) {
        toggleNavbar();
    }
})

$('.carousel').carousel({
    interval: 1500
  })
let whatTheme = false; //false = claro

theme.addEventListener('click', () => {
    if(whatTheme) {
        document.body.style.setProperty('--cor-principal', '#f6f6f6');
        document.body.style.setProperty('--cor-secundaria', 'rgba(18, 20, 20, 0.9)');
        whatTheme = false;
    } else {
        document.body.style.setProperty('--cor-secundaria', '#f6f6f6');
        document.body.style.setProperty('--cor-principal', 'rgba(18, 20, 20, 0.9)');
        whatTheme = true;
    }
})
