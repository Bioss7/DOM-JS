let elem = document.querySelector("div.message");
console.log(elem.offsetParent);
console.log(elem.offsetLeft, elem.offsetTop);
// Получаем рамку border
console.log(elem.clientLeft, elem.clientTop);
// Получаем размеры блока
console.log(elem.offsetWidth, elem.offsetHeight);
