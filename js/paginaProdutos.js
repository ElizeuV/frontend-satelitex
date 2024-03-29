import produtos from "./produtos/produtos.js";

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
            const number = document.createTextNode(`R$${produto[0].preco}`)
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
    case '/pages/produtos/Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca.html':
        const CamisaPoloNikeDriFITParkMasculinaBranca = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        CamisaPoloNikeDriFITParkMasculinaBranca();
        break;
    case '/pages/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul.html':
        const CamisetaNikeDriFITAcademy23MasculinaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        CamisetaNikeDriFITAcademy23MasculinaAzul();
        break;
    case '/pages/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca.html':
        const CamisetaNikeDriFITAcademy23MasculinaBranca = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(produto[0].preco)
            price.appendChild(number);
        }
        CamisetaNikeDriFITAcademy23MasculinaBranca();
        break;
}