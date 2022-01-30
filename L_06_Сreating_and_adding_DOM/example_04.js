// Создаем текстовые элементы 
let textNode = document.createTextNode('Текстовый элемент');
document.body.append(textNode);

// Можно вставить как текст с помощью метода append
document.body.append("<p>text");

// Вставка HTML 
let list = document.querySelector("ul");
list.insertAdjacentHTML("beforebegin", "<p>Список планет<p><hr>");
list.insertAdjacentHTML("afterend", "<hr><p>Конец списка");
list.insertAdjacentHTML("afterbegin", "<li>Солнце");
list.insertAdjacentHTML("beforeend", "<li>Марс"); 

// Вставка как текста    
let ul = document.querySelector("ul");
ul.insertAdjacentText("beforebegin", "<p>Список планет<hr>");   

// Создание элемента и вставка 
let li = document.createElement("li");
li.innerHTML = "<b>Солнце</b>";
list.insertAdjacentElement("afterbegin", li);  