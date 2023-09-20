const content = document.getElementById('content');

const getProduct = (produto) => {
  const container = document.createElement('div');
  container.className = 'content_item';
  const link = document.createElement('a');
  const image = document.createElement('img');
  const text = document.createElement('p');
  const price = document.createElement('p');

  image.src = produto.imagem;
  image.alt = produto.legenda;
  const nome = document.createTextNode(produto.nome);
  const preco = document.createTextNode(`R$ ${produto.preco}`);

  text.appendChild(nome);
  price.appendChild(preco);
  container.appendChild(link);
  link.appendChild(image);
  link.appendChild(text);
  link.appendChild(price);

  return container;
}

const renderProduct = (produtos) => {
  produtos.forEach(produto => {
    const product = getProduct(produto);

    content.appendChild(product);
  });
}

export default renderProduct;