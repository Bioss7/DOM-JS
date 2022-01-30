// Удаляем пункты меню с конца списка, пока список не окажется пустой
let idRemove = setInterval(function() {
let li = document.querySelector("ul.list > li:last-child");
    if(li === null){
        clearInterval(idRemove);
        alert("Список удален");
}
    else li.remove();
}, 500);