let frm = document.forms[0];

// Для проверки отправки формы
frm.onsubmit = function(event) {
    if(!frm.user.value) {
        event.preventDefault(); // Отменяем отправку данных 
        console.log("поле user пустое");
    }
    alert("Отправка формы");
}