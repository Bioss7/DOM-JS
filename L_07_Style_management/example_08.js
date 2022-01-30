// Получаем css свойства элемента, некоторые браузеры могут некорректно работать
let elem = document.querySelector("div");
let objectStyles = getComputedStyle(elem);
console.log(objectStyles.width);