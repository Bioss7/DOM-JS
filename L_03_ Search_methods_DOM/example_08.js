// Ищем дочерние элементы contains
let div = document.querySelector("div.content-table");
let ul = document.querySelector("ul.stars-list");
if(div.contains(ul))
console.log("ul внутри div");