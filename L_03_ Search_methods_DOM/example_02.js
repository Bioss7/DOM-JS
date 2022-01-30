// В стандарте ES6 появилась возможность выбирать элемент с помощью querySelectorAll  
let list = document.querySelectorAll("ul > li:first-child");

for(let val of list){
    console.log(val);
}

// Получили элемент под индексом 0    
console.log(list[0]);