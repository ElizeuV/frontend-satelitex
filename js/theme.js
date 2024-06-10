const theme = document.getElementById('change_theme');
const map = document.getElementById('map');

theme.addEventListener("click", () => {
  if(theme.hasAttribute('dark')) {
    document.body.style.setProperty('--cor-secundaria', '#f6f6f6');
    document.body.style.setProperty('--cor-quadriaria', '#000000');
    map.classList.remove('map-dark');
    theme.removeAttribute('dark');
    localStorage.removeItem('dark');
  } else {
    document.body.style.setProperty('--cor-secundaria', '#1a1a1a');
    document.body.style.setProperty('--cor-quadriaria', '#ffffff');
    map.classList.add('map-dark');
    theme.setAttribute('dark', '');
    localStorage.setItem('dark', 'dark');
  }
});
