let elem = document.querySelector("div.message");
// Только для чтения
// Если хотим изменить используем
elem.style.height = 100 + "px";
console.log(elem.clientWidth, elem.clientHeight);