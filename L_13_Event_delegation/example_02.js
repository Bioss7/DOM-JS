// Работа с нестандартными атрибутами, начинающиеся с префикса data (data-command)
// В dataset помещаются все нестандартные атрибуты 
// Механизм всплытия
let menuActs = {
    // Методы
    open() {alert("open...");},
    save() {alert("save...");},
};

main_menu.addEventListener("click", function(event){
    let li  = event.target.closest('li');
    if(li == null) return;
    
    let act = li.dataset.command; // Получаем содержимое атрибута 
    if(act && menuActs[act] !== undefined) menuActs[act]();
}); 

