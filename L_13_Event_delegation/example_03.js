// Создаем универсальный обработчик 
// Вешаем на кнопку атрибут main_menu для скрытия меню
document.addEventListener("click", function(event){
    // Получаем id элемента который нужно скрыть
    let id = event.target.dataset.toggleId;
    // Проверяем есть ли элемент
    if(!id) return;
    // Получаем элемент
    let elem = document.getElementById(id);
    if(!elem) return;
    // Меняем видимость элемента с true на false
    elem.hidden = !elem.hidden;
})
