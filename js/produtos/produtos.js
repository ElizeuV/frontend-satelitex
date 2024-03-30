const produtos = [
    {
        nome: 'Tênis Air Jordan 16 Mid',
        preco: 1599.99,
        imagem: '../../images/produtos/AirJordan.png',
        link: 'AirJordan',
        categoria: ['calcados', 'masculino'],
        cor: 'Vermelho',
        tamanho: 40
    },
    {
        nome: 'Tênis Adidas Mid Feminino',
        preco: 399.99,
        imagem: '../../images/produtos/AdidasFemininoVermelho.png',
        link: 'AdidasFemininoVermelho',
        categoria: ['calcados', 'feminino', 'promocoes'],
        cor: 'Vermelho',
        tamanho: 36
    },
    {
        nome: 'Tênis Old School Black White Vans',
        preco: 789.99,
        imagem: '../../images/produtos/TenisOldSchoolBlackWhiteVans.png',
        link: 'TenisOldSchoolBlackWhiteVans',
        categoria: ['calcados', 'feminino', 'masculino'],
        cor: 'Preto',
        tamanho: 38
    },
    {
        nome: 'Tênis Old School Rose Smooke Vans',
        preco: 799.99,
        imagem: '../../images/produtos/TenisOldSchoolRoseSmookeVans.png',
        link: 'TenisOldSchoolRoseSmookeVans',
        categoria: ['calcados', 'feminino'],
        cor: 'Rosa',
        tamanho: 35
    },
    {
        nome: 'Camisa Polo Nike Dri FIT',
        preco: 199.99,
        imagem: '../../images/produtos/Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca.png',
        link: 'Camisa-Polo-Nike-Dri-FIT-Park-Masculina-Branca',
        categoria: ['masculino', ''],
        cor: 'Branco',
        tamanho: 'M'
    },
    {
        nome: 'Camiseta Nike Dry FIT Academy Azul',
        preco: 159.99,
        imagem: '../../images/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul.png',
        link: 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Azul',
        categoria: ['masculino', ''],
        cor: 'Azul',
        tamanho: 'G'
    },
    {
        nome: 'Camiseta Nike Dry FIT Academy Branca',
        preco: 149.99,
        imagem: '../../images/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca.png',
        link: 'Camiseta-Nike-Dri-FIT-Academy-23-Masculina-Branca',
        categoria: ['masculino', 'promocoes'],
        cor: 'Branco',
        tamanho: 'P'
    },
    {
        nome: 'Jaqueta Nike Dry FIT Academy',
        preco: 299.99,
        imagem: '../../images/produtos/Jaqueta-Nike-Dri-FIT-Academy-23-Masculina.png',
        link: 'Jaqueta-Nike-Dri-FIT-Academy-23-Masculina',
        categoria: ['masculino', ''],
        cor: 'Preto',
        tamanho: 'M'
    },
    {
        nome: 'Apple Iphone 13 Pro Max 256GB Verde Alpino',
        preco: 9999.99,
        imagem: '../../images/produtos/Apple-iPhone-13-Pro-Max-(256-GB)---Verde-alpino.png',
        link: 'Apple-iPhone-13-Pro-Max-(256-GB)---Verde-alpino',
        categoria: ['eletronicos', ''],
        cor: 'Verde',
        tamanho: ''
    },
    {
        nome: 'Smart TV Samsung 70" 4K',
        preco: 6899.99,
        imagem: '../../images/produtos/Smart-TV-Samsung-70-4K-Wi-Fi-Crystal-UHD-Comando-de-Voz-UN70CU7700GXZD.png',
        link: 'Smart-TV-Samsung-70-4K-Wi-Fi-Crystal-UHD-Comando-de-Voz-UN70CU7700GXZD',
        categoria: ['eletronicos', ''],
        cor: 'Preto',
        tamanho: ''
    },
    {
        nome: 'Smartphone Motorola Moto E22 128GB 4G',
        preco: 799.99,
        imagem: '../../images/produtos/Smartphone-E22-128gb-4g-65-Hd-Camera-Dupla-16mp-Motorola-Cor-Preto.png',
        link: 'Smartphone-E22-128gb-4g-65-Hd-Camera-Dupla-16mp-Motorola-Cor-Preto',
        categoria: ['eletronicos', 'promocoes'],
        cor: 'Grafite',
        tamanho: ''
    },
    {
        nome: 'Nike Vapor 14',
        preco: 199.99,
        imagem: '../../images/produtos/NikeVapor14.png',
        link: 'NikeVapor14',
        categoria: ['calcados', 'masculino'],
        cor: 'Preto',
        tamanho: 41
    },
    {
        nome: 'Camiseta Nike Sportswear Club Essentials Bege',
        preco: 97.99,
        imagem: '../../images/produtos/Camiseta-Nike-Sportswear-Club-Essentials-Feminina-Bege_1.png',
        link: 'Camiseta-Nike-Sportswear-Club-Essentials-Feminina-Bege_1',
        categoria: ['feminino', ''],
        cor: 'Bege',
        tamanho: 'P'
    },
    {
        nome: 'Camiseta Nike Brasil B 2023-24',
        preco: 129.99,
        imagem: '../../images/produtos/Camisa-Nike-Brasil-B-2023-24-Jogadora-Feminina.png',
        link: 'Camisa-Nike-Brasil-B-2023-24-Jogadora-Feminina',
        categoria: ['feminino', ''],
        cor: 'Azul',
        tamanho: 'M'
    },
    {
        nome: 'Camiseta Nike Brasil 1',
        preco: 109.99,
        imagem: '../../images/produtos/Camiseta-Nike-Brasil-Feminina-Amarela_1.png',
        link: 'Camiseta-Nike-Brasil-Feminina-Amarela_1',
        categoria: ['feminino', ''],
        cor: 'Amarelo',
        tamanho: 'P'
    },
    {
        nome: 'Camiseta Nike Dry FIT Academy Azul',
        preco: 79.99,
        imagem: '../../images/produtos/Camiseta-Nike-Dri-FIT-Academy-23-Feminina-Azul_1.png',
        link: 'Camiseta-Nike-Dri-FIT-Academy-23-Feminina-Azul_1',
        categoria: ['feminino', 'promocoes'],
        cor: 'Azul',
        tamanho: 'GG'
    },
    {
        nome: 'Camiseta Nike Dry FIT Swoosh Azul',
        preco: 89.99,
        imagem: '../../images/produtos/Camiseta-Nike-Dri-FIT-Swoosh-Feminina-Azul_1.png',
        link: 'Camiseta-Nike-Dri-FIT-Swoosh-Feminina-Azul_1',
        categoria: ['feminino', ''],
        cor: 'Azul',
        tamanho: 'G'
    },
    {
        nome: 'Short Infantil Lilica',
        preco: 39.99,
        imagem: '../../images/produtos/Short-Infantil-Feminino-Lilica.png',
        link: 'Short-Infantil-Feminino-Lilica',
        categoria: ['infantil', ''],
        cor: 'Multicor',
        tamanho: 'M'
    },
    {
        nome: 'Short Infantil Lilica Rosa',
        preco: 39.99,
        imagem: '../../images/produtos/Short-Infantil-Feminino-Lilica-Rosa.png',
        link: 'Short-Infantil-Feminino-Lilica-Rosa',
        categoria: ['infantil', ''],
        cor: 'Rosa',
        tamanho: 'GG'
    },
    {
        nome: 'Blusa Manga Curta Aquarela Lilica Multicores',
        preco: 59.99,
        imagem: '../../images/produtos/Blusa-Manga-Curta-Aquarela-Bebe-Feminina-Lilica-Multicores.png',
        link: 'Blusa-Manga-Curta-Aquarela-Bebe-Feminina-Lilica-Multicores',
        categoria: ['infantil', ''],
        cor: 'Multicor',
        tamanho: 'G'
    },
    {
        nome: 'Camiseta Manga Curta Tigor Azul',
        preco: 59.99,
        imagem: '../../images/produtos/Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Azul.png',
        link: 'Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Azul',
        categoria: ['infantil', ''],
        cor: 'Azul',
        tamanho: 'M'
    },
    {
        nome: 'Camiseta Manga Curta Tigor Laranja',
        preco: 59.99,
        imagem: '../../images/produtos/Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Laranja.png',
        link: 'Camiseta-Manga-Curta-Infantil-Masculina-Tigor-Laranja',
        categoria: ['infantil', ''],
        cor: 'Laranja',
        tamanho: 'G'
    },
    {
        nome: 'Short Infantil Tigor Azul',
        preco: 49.99,
        imagem: '../../images/produtos/Shorts-Infantil-Masculino-Tigor-Azul.png',
        link: 'Shorts-Infantil-Masculino-Tigor-Azul',
        categoria: ['infantil', ''],
        cor: 'Azul',
        tamanho: 'GG'
    },
    {
        nome: 'Short Infantil Tigor Preto',
        preco: 49.99,
        imagem: '../../images/produtos/Shorts-Infantil-Masculino-Tigor-Preto.png',
        link: 'Shorts-Infantil-Masculino-Tigor-Preto',
        categoria: ['infantil', ''],
        cor: 'Preto',
        tamanho: 'G'
    }
]

export default produtos;