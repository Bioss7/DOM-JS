// Выбираем все элементы где есть нестандартный атрибут cell-red
// C помощью цикла перебираем 
for(let cell of document.querySelectorAll('[cell-red]')){
    // Получаем значение нестандартного атрибута
    let attr = cell.getAttribute('cell-red');
    // Устанавливаем фон для ячеек из значения атрибута cell-red
    cell.style.background = attr;
}  