// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), 
// который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.
let li = document.querySelector("li.star");
console.log(li.closest('.stars-list'));
console.log(li.closest('.content-table'));
console.log(li.closest('h1')); // null 