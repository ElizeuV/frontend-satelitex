import renderProduct from '../gerarProduto.js';

const produtos = [
  {
    nome: 'Tênis Air Jordan 16 Mid Feminino',
    preco: 1599.99,
    imagem: './images/produtos/AirJordan.png',
    legenda: 'Air Jordan'
  },
  {
    nome: 'Tênis Adidas Mid Masculino',
    preco: 399.99,
    imagem: './images/produtos/AdidasFemininoVermelho.png',
    legenda: 'Adidas Feminino'
  },
  {
    nome: 'Gorro Minimalista Sólido',
    preco: 150.99,
    imagem: './images/produtos/GorroMinimalistaSolido.png',
    legenda: 'Gorro Minimalista'
  }
]

renderProduct(produtos);
