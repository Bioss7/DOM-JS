// Клонирование элемента 
let t = document.querySelector("table");
let r = document.querySelector("table>tbody>tr:last-child");

// cloneNode(true) если true копирует все содержимое элемента 
let row = r.cloneNode(true);
row.firstChild.innerHTML = "Венера";
t.append(row);