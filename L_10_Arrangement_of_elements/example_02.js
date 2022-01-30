// Получение высоты элемента окна браузера и самого документа
let wnd = document.getElementById("wnd");
console.log(getCoordFromDocument(wnd));    

function getCoordFromDocument(elem){
    let coords  = elem.getBoundingClientRect();
    return {
        top: coords.top + window.pageYOffset,
        left: coords.left + window.pageXOffset
    };
}