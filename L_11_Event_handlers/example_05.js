// Событие для transition
let inp = document.querySelector("input");
inp.addEventListener("transitionend", showMessage);

function showMessage(event){
    alert(event.currentTarget.tagName);
}

let inp = document.querySelector("input");
inp.addEventListener("transitionend", showMessage);

function showMessage(event){
    handleEvent(event){
        console.log("Событие: " + event.type);
    }
}

// Используем класс
class MyHandler{
    handleEvent(event){
        console.log("Событие: " + event.type);
    }
}

let inp = document.querySelector("input"); 
inp.addEventListener("click", new MyHandler());

function showMessage(event){
    alert(event.currentTarget.tagName);
}