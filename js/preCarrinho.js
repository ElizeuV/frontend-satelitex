import produtos from "./produtos/produtos.js";

const image = document.getElementById('product_image');
const name = document.getElementById('product_name');
const size = document.getElementById('product_size');
const color = document.getElementById('product_color');
const price = document.getElementById('product_price');

let path = window.location.pathname;

switch(path) {
    case '/pages/carrinho/AirJordan.html':
        const AirJordan = () => {
            const produto = produtos.filter(produto => (produto.link == 'AirJordan'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        AirJordan();
        break;
    case '/pages/carrinho/AdidasFemininoVermelho.html':
        const AdidasFemininoVermelho = () => {
            const produto = produtos.filter(produto => (produto.link == 'AdidasFemininoVermelho'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        AdidasFemininoVermelho();
        break;
    case '/pages/carrinho/TenisOldSchoolBlackWhiteVans.html':
        const TenisOldSchoolBlackWhiteVans = () => {
            const produto = produtos.filter(produto => (produto.link == 'TenisOldSchoolBlackWhiteVans'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        TenisOldSchoolBlackWhiteVans();
        break;
    case '/pages/carrinho/TenisOldSchoolRoseSmookeVans.html':
        const TenisOldSchoolRoseSmookeVans = () => {
            const produto = produtos.filter(produto => (produto.link == 'TenisOldSchoolRoseSmookeVans'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        TenisOldSchoolRoseSmookeVans();
        break;
    case '/pages/carrinho/Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca.html':
        const CamisaPoloNikeDriFITParkMasculinaBranca = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisaPoloNikeDriFITParkMasculinaBranca();
        break;
    case '/pages/carrinho/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul.html':
        const CamisetaNikeDriFITAcademy23MasculinaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaNikeDriFITAcademy23MasculinaAzul();
        break;
    case '/pages/carrinho/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca.html':
        const CamisetaNikeDriFITAcademy23MasculinaBranca = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaNikeDriFITAcademy23MasculinaBranca();
        break;
    case '/pages/carrinho/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-BrancaJaqueta-Nike-Dri-FIT-Academy-23-Masculina.html':
        const JaquetaNikeDriFITAcademy23Masculina = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        JaquetaNikeDriFITAcademy23Masculina();
        break;
    case '/pages/carrinho/Apple-iPhone-13-Pro-Max-(256-GB)---Verde-alpino.html':
        const AppleIphone13ProMax256GBVerdeAlpino = () => {
            const produto = produtos.filter(produto => (produto.link == 'Apple-iPhone-13-Pro-Max-(256-GB)---Verde-alpino'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        AppleIphone13ProMax256GBVerdeAlpino();
        break;
    case '/pages/carrinho/Smart-TV-Samsung-70-4K-Wi-Fi-Crystal-UHD-Comando-de-Voz-UN70CU7700GXZD.html':
        const SmartTVSamsung704kWiFiCrystalUHDComandoDeVoz = () => {
            const produto = produtos.filter(produto => (produto.link == 'Smart-TV-Samsung-70-4K-Wi-Fi-Crystal-UHD-Comando-de-Voz-UN70CU7700GXZD'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        SmartTVSamsung704kWiFiCrystalUHDComandoDeVoz();
        break;
    case '/pages/carrinho/Smartphone-E22-128gb-4g-65-Hd-Camera-Dupla-16mp-Motorola-Cor-Preto.html':
        const SmartphoneE22128gb4g65HdCameraDupla16mpMotorolaCorPreto = () => {
            const produto = produtos.filter(produto => (produto.link == 'Smartphone-E22-128gb-4g-65-Hd-Camera-Dupla-16mp-Motorola-Cor-Preto'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        SmartphoneE22128gb4g65HdCameraDupla16mpMotorolaCorPreto();
        break;
    case '/pages/carrinho/NikeVapor14.html':
        const NikeVapor14 = () => {
            const produto = produtos.filter(produto => (produto.link == 'NikeVapor14'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        NikeVapor14();
        break;
    case '/pages/carrinho/Camiseta-Nike-Sportswear-Club-Essentials-Feminina-Bege_1.html':
        const CamisetaNikeSportswearClubEssentialsFemininaBege = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Sportswear-Club-Essentials-Feminina-Bege_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaNikeSportswearClubEssentialsFemininaBege();
        break;
    case '/pages/carrinho/Camisa-Nike-Brasil-B-2023-24-Jogadora-Feminina.html':
        const CamisaNikeBrasilB202324JogadoraFeminina = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camisa-Nike-Brasil-B-2023-24-Jogadora-Feminina'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisaNikeBrasilB202324JogadoraFeminina();
        break;
    case '/pages/carrinho/Camiseta-Nike-Brasil-Feminina-Amarela_1.html':
        const CamisetaNikeBrasilFemininaAmarela = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Brasil-Feminina-Amarela_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaNikeBrasilFemininaAmarela();
        break;
    case '/pages/carrinho/Camiseta-Nike-Dri-FIT-Academy-23-Feminina-Azul_1.html':
        const CamisetaNikeDriFITAcademy23FemininaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Feminina-Azul_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaNikeDriFITAcademy23FemininaAzul();
        break;
    case '/pages/carrinho/Camiseta-Nike-Dri-FIT-Swoosh-Feminina-Azul_1.html':
        const CamisetaNikeDriFITSwooshFemininaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Swoosh-Feminina-Azul_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaNikeDriFITSwooshFemininaAzul();
        break;
    case '/pages/carrinho/Short-Infantil-Feminino-Lilica.html':
        const ShortInfantilFemininoLilica = () => {
            const produto = produtos.filter(produto => (produto.link == 'Short-Infantil-Feminino-Lilica'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        ShortInfantilFemininoLilica();
        break;
    case '/pages/carrinho/Short-Infantil-Feminino-Lilica-Rosa.html':
        const ShortInfantilFemininoLilicaRosa = () => {
            const produto = produtos.filter(produto => (produto.link == 'Short-Infantil-Feminino-Lilica-Rosa'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        ShortInfantilFemininoLilicaRosa();
        break;
    case '/pages/carrinho/Blusa-Manga-Curta-Aquarela-Bebe-Feminina-Lilica-Multicores.html':
        const BlusaMangaCurtaAquarelaBebeFemininaLilicaMulticores = () => {
            const produto = produtos.filter(produto => (produto.link == 'Blusa-Manga-Curta-Aquarela-Bebe-Feminina-Lilica-Multicores'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        BlusaMangaCurtaAquarelaBebeFemininaLilicaMulticores();
        break;
    case '/pages/carrinho/Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Azul.html':
        const CamisetaMangaCurtaInfantilMasculinaTigorAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaMangaCurtaInfantilMasculinaTigorAzul();
        break;
    case '/pages/carrinho/Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Laranja.html':
        const CamisetaMangaCurtaInfantilMasculinaTigorLaranja = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Laranja'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        CamisetaMangaCurtaInfantilMasculinaTigorLaranja();
        break;
    case '/pages/carrinho/Shorts-Infantil-Masculino-Tigor-Azul.html':
        const ShortsInfantilMasculinoTigorAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Shorts-Infantil-Masculino-Tigor-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        ShortsInfantilMasculinoTigorAzul();
        break;
    case '/pages/carrinho/Shorts-Infantil-Masculino-Tigor-Preto.html':
        const ShortsInfantilMasculinoTigorPreto = () => {
            const produto = produtos.filter(produto => (produto.link == 'Shorts-Infantil-Masculino-Tigor-Preto'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome);
            name.appendChild(text);
            const number = document.createTextNode(`Preço: R$${produto[0].preco}`);
            price.appendChild(number);
            const cor = document.createTextNode(`Cor: ${produto[0].cor}`);
            color.appendChild(cor);
            const tamanho = document.createTextNode(`Tamanho: ${produto[0].tamanho}`);
            size.appendChild(tamanho);
        }
        ShortsInfantilMasculinoTigorPreto();
        break;
      }