// clientWidth - ширина клиентской области (за вычетом полосы вертикального скроллинга)
// clientHeight - высота клиентской области (за вычетом полосы горизонтального скроллинга)
// window.innerWidth - полная ширина окна браузера вместе с полосой прокрутки (если она есть)
// window.innerHeight - полная высота окна браузера вместе с горизонтальной полосой прокрутки (если она есть)   
let html = document.documentElement;
console.log(html.clientWidth, html.clientHeight);
console.log(window.innerWidth, window.innerHeight);
// Высота и ширина HTML-документа
console.log(html.scrollWidth, html.scrollHeight);

// Надежный способ получения ширины и высоты HTML
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight);