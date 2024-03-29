const login = document.getElementById('entrar');

if(login.dataset.login == 'true') {
  login.innerText = 'Sair';
}

if(login.dataset.login == 'false') {
  login.innerText = 'Entrar';
}

login.addEventListener('click', (e) => {
  if(login.dataset.login == 'true') {
    e.preventDefault();
    login.innerText = 'Entrar';
    login.setAttribute('data-login', 'false')
  }
})

