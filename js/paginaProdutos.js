import produtos from "./produtos/produtos.js";

const image = document.getElementById('image');
const nome = document.getElementById('name');
const price = document.getElementById('price');
const nextPage = document.getElementById('nextPage');


let path = window.location.pathname;

switch(path) {
    case '/pages/produtos/AirJordan.html':
        const AirJordan = () => {
            const produto = produtos.filter(produto => (produto.link == 'AirJordan'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        AirJordan();
        break;
    case '/pages/produtos/AdidasFemininoVermelho.html':
        const AdidasFemininoVermelho = () => {
            const produto = produtos.filter(produto => (produto.link == 'AdidasFemininoVermelho'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        AdidasFemininoVermelho();
        break;
    case '/pages/produtos/TenisOldSchoolBlackWhiteVans.html':
        const TenisOldSchoolBlackWhiteVans = () => {
            const produto = produtos.filter(produto => (produto.link == 'TenisOldSchoolBlackWhiteVans'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        TenisOldSchoolBlackWhiteVans();
        break;
    case '/pages/produtos/TenisOldSchoolRoseSmookeVans.html':
        const TenisOldSchoolRoseSmookeVans = () => {
            const produto = produtos.filter(produto => (produto.link == 'TenisOldSchoolRoseSmookeVans'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        TenisOldSchoolRoseSmookeVans();
        break;
    case '/pages/produtos/Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca.html':
        const CamisaPoloNikeDriFITParkMasculinaBranca = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisaPoloNikeDriFITParkMasculinaBranca();
        break;
    case '/pages/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul.html':
        const CamisetaNikeDriFITAcademy23MasculinaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaNikeDriFITAcademy23MasculinaAzul();
        break;
    case '/pages/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca.html':
        const CamisetaNikeDriFITAcademy23MasculinaBranca = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaNikeDriFITAcademy23MasculinaBranca();
        break;
    case '/pages/produtos/Jaqueta-Nike-Dri-FIT-Academy-23-Masculina.html':
        const JaquetaNikeDriFITAcademy23Masculina = () => {
            const produto = produtos.filter(produto => (produto.link == 'Jaqueta-Nike-Dri-FIT-Academy-23-Masculina'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        JaquetaNikeDriFITAcademy23Masculina();
        break;
    case '/pages/produtos/Apple-iPhone-13-Pro-Max-(256-GB)---Verde-alpino.html':
        const AppleIphone13ProMax256GBVerdeAlpino = () => {
            const produto = produtos.filter(produto => (produto.link == 'Apple-iPhone-13-Pro-Max-(256-GB)---Verde-alpino'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        AppleIphone13ProMax256GBVerdeAlpino();
        break;
    case '/pages/produtos/Smart-TV-Samsung-70-4K-Wi-Fi-Crystal-UHD-Comando-de-Voz-UN70CU7700GXZD.html':
        const SmartTVSamsung704kWiFiCrystalUHDComandoDeVoz = () => {
            const produto = produtos.filter(produto => (produto.link == 'Smart-TV-Samsung-70-4K-Wi-Fi-Crystal-UHD-Comando-de-Voz-UN70CU7700GXZD'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        SmartTVSamsung704kWiFiCrystalUHDComandoDeVoz();
        break;
    case '/pages/produtos/Smartphone-E22-128gb-4g-65-Hd-Camera-Dupla-16mp-Motorola-Cor-Preto.html':
        const SmartphoneE22128gb4g65HdCameraDupla16mpMotorolaCorPreto = () => {
            const produto = produtos.filter(produto => (produto.link == 'Smartphone-E22-128gb-4g-65-Hd-Camera-Dupla-16mp-Motorola-Cor-Preto'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        SmartphoneE22128gb4g65HdCameraDupla16mpMotorolaCorPreto();
        break;
    case '/pages/produtos/NikeVapor14.html':
        const NikeVapor14 = () => {
            const produto = produtos.filter(produto => (produto.link == 'NikeVapor14'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        NikeVapor14();
        break;
    case '/pages/produtos/Camiseta-Nike-Sportswear-Club-Essentials-Feminina-Bege_1.html':
        const CamisetaNikeSportswearClubEssentialsFemininaBege = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Sportswear-Club-Essentials-Feminina-Bege_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaNikeSportswearClubEssentialsFemininaBege();
        break;
    case '/pages/produtos/Camisa-Nike-Brasil-B-2023-24-Jogadora-Feminina.html':
        const CamisaNikeBrasilB202324JogadoraFeminina = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camisa-Nike-Brasil-B-2023-24-Jogadora-Feminina'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisaNikeBrasilB202324JogadoraFeminina();
        break;
    case '/pages/produtos/Camiseta-Nike-Brasil-Feminina-Amarela_1.html':
        const CamisetaNikeBrasilFemininaAmarela = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Brasil-Feminina-Amarela_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaNikeBrasilFemininaAmarela();
        break;
    case '/pages/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Feminina-Azul_1.html':
        const CamisetaNikeDriFITAcademy23FemininaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Academy-23-Feminina-Azul_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaNikeDriFITAcademy23FemininaAzul();
        break;
    case '/pages/produtos/Camiseta-Nike-Dri-FIT-Swoosh-Feminina-Azul_1.html':
        const CamisetaNikeDriFITSwooshFemininaAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Nike-Dri-FIT-Swoosh-Feminina-Azul_1'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaNikeDriFITSwooshFemininaAzul();
        break;
    case '/pages/produtos/Short-Infantil-Feminino-Lilica.html':
        const ShortInfantilFemininoLilica = () => {
            const produto = produtos.filter(produto => (produto.link == 'Short-Infantil-Feminino-Lilica'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        ShortInfantilFemininoLilica();
        break;
    case '/pages/produtos/Short-Infantil-Feminino-Lilica-Rosa.html':
        const ShortInfantilFemininoLilicaRosa = () => {
            const produto = produtos.filter(produto => (produto.link == 'Short-Infantil-Feminino-Lilica-Rosa'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        ShortInfantilFemininoLilicaRosa();
        break;
    case '/pages/produtos/Blusa-Manga-Curta-Aquarela-Bebe-Feminina-Lilica-Multicores.html':
        const BlusaMangaCurtaAquarelaBebeFemininaLilicaMulticores = () => {
            const produto = produtos.filter(produto => (produto.link == 'Blusa-Manga-Curta-Aquarela-Bebe-Feminina-Lilica-Multicores'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        BlusaMangaCurtaAquarelaBebeFemininaLilicaMulticores();
        break;
    case '/pages/produtos/Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Azul.html':
        const CamisetaMangaCurtaInfantilMasculinaTigorAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaMangaCurtaInfantilMasculinaTigorAzul();
        break;
    case '/pages/produtos/Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Laranja.html':
        const CamisetaMangaCurtaInfantilMasculinaTigorLaranja = () => {
            const produto = produtos.filter(produto => (produto.link == 'Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Laranja'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        CamisetaMangaCurtaInfantilMasculinaTigorLaranja();
        break;
    case '/pages/produtos/Shorts-Infantil-Masculino-Tigor-Azul.html':
        const ShortsInfantilMasculinoTigorAzul = () => {
            const produto = produtos.filter(produto => (produto.link == 'Shorts-Infantil-Masculino-Tigor-Azul'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        ShortsInfantilMasculinoTigorAzul();
        break;
    case '/pages/produtos/Shorts-Infantil-Masculino-Tigor-Preto.html':
        const ShortsInfantilMasculinoTigorPreto = () => {
            const produto = produtos.filter(produto => (produto.link == 'Shorts-Infantil-Masculino-Tigor-Preto'));
            image.src = produto[0].imagem;
            const text = document.createTextNode(produto[0].nome)
            nome.appendChild(text);
            const number = document.createTextNode(`R$ ${produto[0].preco}`)
            price.appendChild(number);
            nextPage.href = `../carrinho/${produto[0].link}.html`;
        }
        ShortsInfantilMasculinoTigorPreto();
        break;
}