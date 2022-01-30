// Устаревшие методы
// parent.appendChild(node) - добавляет элемент в конец списка дочерних элементов
// parent.insertBefore(node, nextSibling) - вставляет элемент перед nextSibling
// parent.removeChild(node) - удаляет элемент node (здесь parent является родителем node)
// parent.replaceChild(newElem, node) - заменяет дочерний элемент node на новый newElem

// Вставка фрагмента html в момент загрузки HTML-страницы
document.write(html);

setTimeout(function(){
    document.write('<p>Строка вставленная методом write');
}, 500);