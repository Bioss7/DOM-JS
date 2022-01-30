// Получаем у анонимной функции tagName
let inp = document.querySelector("input");
inp.onclick = showMessage;

function showMessage(event){
    alert(event.currentTarget.tagName);
}