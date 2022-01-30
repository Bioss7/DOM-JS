let list = document.querySelector('ul');
// Заменяем содержимое заданными узлами или строками
list.replaceWith(document.createElement("hr"), "замена", document.createElement("br"));