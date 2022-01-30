// Метод Element.matches() вернёт true или false, в зависимости от того, соответствует ли элемент указанному css-селектору
let list = document.querySelectorAll("ul.stars-list > li");

for(let item of list){
    if(item.matches("li.star")) console.log(item);
}