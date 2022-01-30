// Метод createElement создает элемент с указанным тегом
let div = document.createElement('div');
// className свойство для присвоения класса 
div.className = "msg";
div.innerHTML = "Важная информация";
// Добавляет элемент div в конец списка body
document.body.append(div);

// Методы вставки элементов
// node.prepend - вставялет узлы или строки в начало node
// node.before - вставляет узлы или строки до node
// node.after - вставляет узлы или строки после node
// node.replaceWith - заменяет node заданными узлами или строками

let list = document.querySelector("ul");
list.before('before');
list.after('after');

let li_1 = document.createElement('li');
li_1.innerHTML = "первый элемент";
list.prepend(li_1);

let li_2 = document.createElement('li');
li_2.innerHTML = "последний элемент";
list.append(li_2);