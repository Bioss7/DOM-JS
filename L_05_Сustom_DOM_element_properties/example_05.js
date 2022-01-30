// Устанавливаем атрибут для таблицы, по флагу flSkip, через одну ячейку 
let flSkip = false;
for(let cell of document.querySelectorAll('[data-cell-red]')) {
    if(!flSkip) cell.setAttribute('data-cell-red', 'lightRed');
    flSkip = !flSkip;
}

// Атрибут cell-red в HTML = cellRed в JS
// Если свойство использует дефисы, то в dataset оно прописывается в верблюжьей нотации (например, data-cell-red => cellRed)
// в остальных случаях просто используется оставшееся имя (например, data-color => color).
let flSkip = false;
for(let cell of document.querySelectorAll('[data-cell-red]')) {
    if(!flSkip) cell.dataset.cellRed = 'lightRed';
    flSkip = !flSkip;
}