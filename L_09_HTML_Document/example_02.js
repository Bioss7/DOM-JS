// Получение текущего положения прокрутки
let html = document.documentElement;
console.log(html.scrollTop);
// В старых браузерах 
console.log(document.body.scrollTop);

// window.pageXOffset - смещение документа в окне браузера по оси Ox
// window.pageYOffset - смещение документа в окне браузера по оси Оy
console.log(window.pageYOffset);

// Сдвиг документа по оси Y Вертикали
setInterval(() => {
    window.scrollBy(0, 5);
    // влево на 0 и сверху на 5
    window.scrollTo(0, 5);
}, 100);

// Возвращает в начало документа
window.scrollTo(0, 0);

// Скроллит к header
setTimeout(function(){
    header_1.scrollIntoView(false);
});

// Запрет скроллинга
document.body.style.overflow = "hidden";