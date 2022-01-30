// Запись свойств из css 
// font-size fontSize запись свойства 
// -moz-border-radius elem.style.MozBorderRadius = "5px"

// Показываем, скрываем элемент с интервалом 
let elem = document.querySelector("div");
let idMove = setInterval(function() {
    if(!elem.style.display) elem.style.display = "none";
    else elem.style.display = "";
}, 100);
setTimeout(() => clearInterval(idMove), 3000);