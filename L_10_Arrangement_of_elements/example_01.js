// Выравнивание элемента по центру 
let wnd = document.getElementById("wnd");
let centerX  = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;
wnd.style.left = centerX - wnd.offsetWidth/2 + "px";
wnd.style.top = centerY - wnd.offsetHeight/2 + "px";

// Получаем координаты
let coords = wnd.getBoundingClientRect();
console.log(coords);

// Получаем элемент по коордантам
let elem = document.elementFromPoint(102, 190);
console.log(elem);