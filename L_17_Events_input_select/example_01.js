let frm = document.forms[0];
// Событие срабатывает после того как был потерян фокус (срабатывает 1 раз)
frm.user.onchange = function() {
    console.log(frm.user.value);
}

// Для type="radio" и type="checkbox"
frm.sex[0].onchange = function() {
    console.log("sex 0: " + frm.sex[0].checked);
}

frm.sex[1].onchange = function() {
    console.log("sex 1: " + frm.sex[1].checked);
}

frm.agree.onchange = function() {
    console.log("agree: " + frm.agree.checked);
}

// Выводит индекс select
frm.city.onchange = function() {
    console.log(frm.city.selectedIndex);
}