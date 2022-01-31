// focus - при получении фокуса
// blur - при потере фокуса

let frm = document.forms[0];

frm.user.onfocus = function(event) {
    console.log("получение фокуса");
}

frm.user.onblur = function(event) {
    console.log("потеря фокуса");
}