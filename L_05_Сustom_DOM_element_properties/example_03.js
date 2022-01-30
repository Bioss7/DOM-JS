// Получаем элемент comm
let div = document.getElementById("comm");
// Получаем значение атрибута
console.log(div.getAttribute("deflt"));
// Меняем значение атрибута на новое 
div.setAttribute("deflt", "новое значение");
console.log(div.getAttribute("deflt"));

// Выводим все атрибуты
for(let val of div.attributes)
console.log(val);

let inp = document.getElementById("input");
// Проверяем тип атрибута с помощью typeof
console.log(typeof inp.checked);