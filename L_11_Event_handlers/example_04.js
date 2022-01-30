// Добавляем слушателя 
let inp = document.querySelector("input");

inp.addEventListener("click", showMessage);
inp.addEventListener("click", function(event){
    console.log(event.clientX, event.clientY);
});

inp.onclick = function(){
    console.log("Обработчик onclick");
}

// Удаляем обработчик
inp.removeEventListener("click", showMessage);

function showMessage(event){
    alert(event.currentTarget.tagName);
}