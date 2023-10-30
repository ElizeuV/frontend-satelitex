const content = document.getElementById('content');

const getProduct = (produto) => {
  const container = document.createElement('div');
  container.className = 'card';
  const imgBox = document.createElement('div');
  imgBox.className = 'img_box';
  const contentBox = document.createElement('div');
  contentBox.className = 'content_box';
  const link = document.createElement('a');
  link.classList = 'buy';
  link.href = `/frontend-satelitex/pages/produtos/${produto.link}.html`;
  const image = document.createElement('img');
  const text = document.createElement('h3');
  const price = document.createElement('h2');
  price.className = 'price';

  image.src = produto.imagem;
  image.alt = produto.legenda;
  const nome = document.createTextNode(produto.nome);
  const preco = document.createTextNode(`R$ ${produto.preco}`);
  const buy = document.createTextNode('Compre Agora');
  link.appendChild(buy);

  imgBox.appendChild(image);
  text.appendChild(nome);
  price.appendChild(preco);
  contentBox.appendChild(text);
  contentBox.appendChild(price);
  contentBox.appendChild(link);
  container.appendChild(imgBox);
  container.appendChild(contentBox);


  return container;
}

const renderProduct = (produtos) => {
  produtos.forEach(produto => {
    const product = getProduct(produto);

    content.appendChild(product);
  });
}

export default renderProduct;