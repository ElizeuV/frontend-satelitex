const headerNavbar = document.getElementById('categories');
const carouselIndicators = document.querySelector('.carousel-indicators');
let showNavbar = false;

function toggleNavbar() {
    showNavbar = !showNavbar;
    
    if(showNavbar) {
        headerNavbar.style.marginLeft = '0vw';
        headerNavbar.style.animationName = 'showNavbar';
        carouselIndicators.style.display = 'none';
    } else {
        headerNavbar.style.marginLeft = '-100vw';
        headerNavbar.style.animationName = 'closeNavbar';
        carouselIndicators.style.display = 'flex';
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
