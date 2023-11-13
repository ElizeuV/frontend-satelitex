import produtos from "./produtos/all.js";

const image = document.getElementById('image');
const nome = document.getElementById('name');
const price = document.getElementById('price');

let path = window.location.pathname;

switch(path) {
    case '/pages/produtos/AirJordan.html':
        const AirJordan = () => {
            const produto = produtos.filter(produto => (produto.link == 'AirJordan'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        AirJordan();
        break;
    case '/pages/produtos/AdidasFemininoVermelho.html':
        const AdidasFemininoVermelho = () => {
            const produto = produtos.filter(produto => (produto.link == 'AdidasFemininoVermelho'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        AdidasFemininoVermelho();
        break;
    case '/pages/produtos/TenisOldSchoolBlackWhiteVans.html':
        const TenisOldSchoolBlackWhiteVans = () => {
            const produto = produtos.filter(produto => (produto.link == 'TenisOldSchoolBlackWhiteVans'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        TenisOldSchoolBlackWhiteVans();
        break;
    case '/pages/produtos/TenisOldSchoolRoseSmookeVans.html':
        const TenisOldSchoolRoseSmookeVans = () => {
            const produto = produtos.filter(produto => (produto.link == 'TenisOldSchoolRoseSmookeVans'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        TenisOldSchoolRoseSmookeVans();
        break;
}