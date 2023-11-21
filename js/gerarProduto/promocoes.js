import produtos from "../produtos/produtos.js";
import renderProduct from "../gerarProduto.js";

const newProducts = produtos.filter(produto => { 
  return produto.categoria.includes('promocoes')
})

renderProduct(newProducts);