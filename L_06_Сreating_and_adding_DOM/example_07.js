// DocumentFragment крайне редко используется, представляет собой минимальный объект документа, который не имеет родителя. 
let fr = new DocumentFragment();
let list  = ["Меркурий", "Венера", "Земля", "Марс"];
for(let p of list){
    let item = document.createElement('li');
    item.innerHTML = p;
    fr.append(item);
}

let ul = document.querySelector("ul");
// Вставляем созданный элемент DocumentFragment
ul.append(fr);

// Без использования DocumentFragment
let ul = document.querySelector("ul");
let list  = ["Меркурий", "Венера", "Земля", "Марс"];
for(let p of list){
    let item = document.createElement('li');
    item.innerHTML = p;
    ul.append(item);
}