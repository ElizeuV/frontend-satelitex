const login = document.getElementById('entrar');

if(login.dataset.login == 'true') {
  login.innerText = 'Sair';
}

login.addEventListener('click', (e) => {
  if(login.dataset.login == 'true') {
    e.preventDefault();
    login.innerText = 'Entrar';
    login.setAttribute('data-login', 'false')
  }
})

