const rua =document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');

rua.innerHTML = localStorage.getItem('logradouro');
bairro.innerHTML = localStorage.getItem('bairro');
cidade.innerHTML = localStorage.getItem('localidade');