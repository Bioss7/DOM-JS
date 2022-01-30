// Убрать у ссылки действие по умолчанию
// Прописать у ссылки в onclick="return false;"
let a = document.querySelector('a');
a.onclick = function(event){
    event.preventDefault();
}

// stopPropagation - Прекращает дальнейшую передачу текущего события.

// defaultPrevented принимает true если на более нижнем уровне был вызван метод preventDefault
// с помощью этого мы можем узнать было ли вызвано контекстное меню для дочернего элемента
document.addEventListener("contextmenu", function(event){
    if(event.defaultPrevented) return; 
    console.log("Контекстное меню документа");
    event.preventDefault();
}, {passive: true});
// passive: true если не собираемся использовать event.preventDefault();
// В некоторых браузерах passive: true включено по умолчанию 

main_menu.oncontextmenu = function(event) {
    console.log("Контекстное меню главного меню");
    event.preventDefault(); 
    // event.stopPropagation();
}