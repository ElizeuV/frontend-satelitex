const form = document.getElementById('cart_frete');
const input = document.getElementById('cep');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if(input.value.length !== 8) {
    alert('Cep inválido!');
    return;
  }

  url = `https://viacep.com.br/ws/${input.value}/json`

  fetch(url).then(function (response) {
    console.log(response)
    response.json().then(function (data) {
      console.log(data)
      localStorage.setItem('logradouro', data.logradouro);
    })
  })
  //window.location = 'pages/game.html';
  console.log(input.value)
})