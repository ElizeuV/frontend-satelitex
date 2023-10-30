import renderProduct from '../gerarProduto.js';

const produtos = [
  {
    nome: 'Tênis Air Jordan 16 Mid',
    preco: 1599.99,
    imagem: './images/produtos/AirJordan.png',
    legenda: 'Air Jordan',
    link: 'AirJordan'
  },
  {
    nome: 'Tênis Adidas Mid Feminino',
    preco: 399.99,
    imagem: './images/produtos/AdidasFemininoVermelho.png',
    legenda: 'Adidas Feminino',
    link: 'AdidasFemininoVermelho'
  },
  {
    nome: 'Tênis Old School Black White Vans',
    preco: 789.99,
    imagem: './images/produtos/TenisOldSchoolBlackWhiteVans.png',
    legenda: 'Nike Vapor',
    link: 'TenisOldSchoolBlackWhiteVans'
  },
  {
    nome: 'Tênis Old School Rose Smooke Vans',
    preco: 799.99,
    imagem: './images/produtos/TenisOldSchoolRoseSmookeVans.png',
    legenda: 'Nike Vapor',
    link: 'TenisOldSchoolRoseSmookeVans'
  }
]

export default produtos;

renderProduct(produtos);
