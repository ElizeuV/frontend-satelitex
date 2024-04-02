import produtos from "./produtos/produtos.js";

const image = document.getElementById('pagamento_image');
const name = document.getElementById('pagamento_name');
const size = document.getElementById('pagamento_size');
const color = document.getElementById('pagamento_color');
const price = document.getElementById('pagamento_price');
const valor = document.getElementById('pagamento_valor');
const total = document.getElementById('pagamento_total');

let path = window.location.pathname;

switch (path) {
  case '/pages/pagamento/AirJordan.html':
    const AirJordan = () => {
      const produto = produtos.filter(produto => (produto.link == 'AirJordan'));
      image.src = produto[0].imagem;
      const text = document.createTextNode(produto[0].nome);
      name.appendChild(text);
      const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
      price.appendChild(number);
      const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
      color.appendChild(cor);
      const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
      size.appendChild(tamanho);
      const numberValor = document.createTextNode(` R$${produto[0].preco}`);
      valor.appendChild(numberValor);
      const numberTotal = document.createTextNode(`Total: R$${produto[0].preco + 35}`);
      total.appendChild(numberTotal);
    }
    AirJordan();
    break;
}