// Перемещаем элемент по координате Y 
let elem = document.querySelector("div");
let coordY = 0;
let idMove = setInterval(() => {
    coordY += 5;
    elem.style.top = coordY + "px";
}, 50);
setTimeout(() => clearInterval(idMove), (3000));