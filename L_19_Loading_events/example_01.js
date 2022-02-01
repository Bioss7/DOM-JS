// DOMContentLoaded - браузер полностью загрузил HTML, было построено DOM - дерево, 
// но внешние ресурсы, такие как картинки (img) и стили (css), могут быть ещё не загружены
// load - браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
// beforeunload/unload - пользователь покидает страницу. 

document.addEventListener("DOMContentLoaded", ready);

function ready(event) {
    console.log("DOMContentLoaded");
    console.log(`Изображение: ${image.offsetWidth}x${image.offsetHeight}`);
}

console.log("вызов метода write");
document.write('<p>Добавляем тег p на страницу');


// Скрипты с атрибутом async (который мы рассмотрим немного позже), не блокируют DOMContentLoaded. 
// Скрипты, сгенирированные динамически при помощи document.createElement('script') и затем добавленные на страницу, также не блокируют это событие 