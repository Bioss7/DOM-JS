// event.which = 1 - левая кнопка;
// event.which = 2 - средняя кнопка;
// event.which = 3 - правая кнопка.

// Обработчики мышки кнопки
document.addEventListener("mousedown", (event)=>console.log("mousedown " + event.which));
document.addEventListener("mouseup", (event)=>console.log("mouseup " + event.which));