import produtos from "./produtos/produtos.js";

const image = document.getElementById('product_image');
const name = document.getElementById('product_name');
const size = document.getElementById('product_size');
const color = document.getElementById('product_color');
const price = document.getElementById('product_price');

let path = window.location.pathname;

switch(path) {
    case '/pages/carrinho/AirJordan.html':
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
        }
        AirJordan();
        break;
      }