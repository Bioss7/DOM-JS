// cut - при вырезании фрагмента в буфер обмена;
// copy - при копировании фрагмента в буфер обмена;
// paste - при вставке фрагмента из буфера обмена;
// Отменяются события event.preventDefault();
let frm = document.forms[0];

frm.user.oncut = function(event) {
    console.log("cut");
    event.preventDefault();
}

frm.user.oncopy = function(event) {
    console.log("copy");
    event.preventDefault();
}

frm.user.onpaste = function(event) {
    console.log("paste");
    event.preventDefault();
}