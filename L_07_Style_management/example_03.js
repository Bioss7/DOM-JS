let elem = document.querySelector("div");
// Добавляем класс ex
elem.classList.add("ex");
// Удаляем класс ex
elem.classList.remove("ex");
// Добавляем или удаляем класс ex
elem.classList.toggle("ex");

// classList итерируемый объект с помощью цикла for of 
for(let cl of elem.classList){
    console.log(cl);
}