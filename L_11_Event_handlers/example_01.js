/* События Events */
// Пользователь кликает мышкой по HTML-странице (браузер генерирует событие onclick);
// Пользователь перемещает курсор мыши (браузер генерирует событие mousemove);
// Пользователь нажимает на клавишу клавиатуры (браузер генерирует события keydown/keyup);
// Когда полностью загружается HTML-документ браузер генериурет событие DOMContentLoaded.  

let inp = document.querySelector("input");
// присваиваем ссылку
inp.onclick = showMessage;
link.onclick = showMessage;
// Удалить обработчик
inp.onclick = null;

// Теряется контекст у анонимной функции
function showMessage(){
    // alert("Hello!");
    alert(this.tagName);
}