let frm = document.forms[0];

// Событие срабатывает каждый раз при изменении элемента
// input не отменяется event.preventDefault (Стандартное событие)
frm.user.oninput = function() {
    console.log(frm.user.value);
}

