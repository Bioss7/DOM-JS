let frm = document.forms[0];
// Фокус работает на все элементы формы (событие всплыло до уровня формы)
frm.addEventListener("focusin", function(){
    console.log("form focusin");
});

// Поставить фокус на элемент (не работает firefox)
frm.about.focus();

