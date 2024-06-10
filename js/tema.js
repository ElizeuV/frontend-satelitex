const mapa = document.getElementById('map');

document.addEventListener('DOMContentLoaded', () => {
  const tema = localStorage.getItem('dark');
  console.log(tema)
  if(tema) {
    document.body.style.setProperty('--cor-secundaria', '#1a1a1a');
    document.body.style.setProperty('--cor-quadriaria', '#ffffff');
    mapa.classList.add('map-dark');
  } else {
    document.body.style.setProperty('--cor-secundaria', '#f6f6f6');
    document.body.style.setProperty('--cor-quadriaria', '#000000');
    mapa.classList.remove('map-dark');
  }
});