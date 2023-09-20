import renderProduct from '../gerarProduto.js';

const produtos = [
  {
    nome: 'Tênis Air Jordan 16 Mid Feminino',
    preco: 1599.99,
    imagem: '../images/produtos/AirJordan.png',
    legenda: 'Air Jordan'
  },
  {
    nome: 'Tênis Adidas Mid Masculino',
    preco: 399.99,
    imagem: '../images/produtos/AdidasFemininoVermelho.png',
    legenda: 'Adidas Feminino'
  }
]

renderProduct(produtos);
