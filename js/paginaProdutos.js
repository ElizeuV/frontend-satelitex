const image = document.getElementById('image');
const nome = document.getElementById('name');
const price = document.getElementById('price');

let path = window.location.pathname;

switch(path) {
    case '/frontend-satelitex/pages/produtos/AirJordan.html':
        image.src = '../../images/produtos/AirJordan.png';
        const texto1 = document.createTextNode('Tênis Air Jordan 16 Mid');
        nome.appendChild(texto1);
        const numero1 = document.createTextNode(1599.99);
        price.appendChild(numero1);
        break;
    case '/frontend-satelitex/pages/produtos/AdidasFemininoVermelho.html':
        image.src = '../../images/produtos/AdidasFemininoVermelho.png';
        const texto2 = document.createTextNode('Tênis Adidas Mid Feminino');
        nome.appendChild(texto2);
        const numero2 = document.createTextNode(1299.99);
        price.appendChild(numero2);
        break;
    case '/frontend-satelitex/pages/produtos/TenisOldSchoolBlackWhiteVans.html':
        image.src = '../../images/produtos/TenisOldSchoolBlackWhiteVans.png';
        const texto3 = document.createTextNode('Tênis Old School Black White Vans');
        nome.appendChild(texto3);
        const numero3 = document.createTextNode(799.99);
        price.appendChild(numero3);
        break;
}