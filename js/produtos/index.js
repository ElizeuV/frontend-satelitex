import renderProduct from '../gerarProduto.js';

const produtos = [
  {
    nome: 'Tênis Air Jordan 16 Mid',
    preco: 1599.99,
    imagem: './images/produtos/AirJordan.png',
    legenda: 'Air Jordan'
  },
  {
    nome: 'Tênis Adidas Mid Feminino',
    preco: 399.99,
    imagem: './images/produtos/AdidasFemininoVermelho.png',
    legenda: 'Adidas Feminino'
  },
  {
    nome: 'Nike Vapor 14',
    preco: 250.00,
    imagem: './images/produtos/NikeVapor14.png',
    legenda: 'Nike Vapor'
  }
]

renderProduct(produtos);
