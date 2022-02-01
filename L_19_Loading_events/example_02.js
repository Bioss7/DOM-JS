window.onload = function(event) {
    console.log("load");
    console.log(`Изображение: ${image.offsetWidth}x${image.offsetHeight}`);
}

// Возникает при перезагрузки страницы
window.addEventListener("unload", function() {
    console.log("отправка данных на сервер");
});

// Возникает при закрытие страницы 
window.onbeforeunload = function() {
    return false;
};