// document.readyState
// loading - документ в процессе загрузки
// interactive - документ был полностью прочитан (парсинг документа завершен)
// complete - документ был полностью прочитан и все ресурсы (изображения, стили и т.п.) тоже загружены

removeImage();
function removeImage() {
    if(document.readyState == "loading") {
        console.log("документ грузится, вешаем обработчик");
        document.addEventListener("DOMContentLoaded", removeImage);
    }
    else {
        console.log("удаляем изображение");
        document.body.remove(image);
    }
}