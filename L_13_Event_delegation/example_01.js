// Получаем innerHTML элемента, по клику с помощью метода event.target
// Если кликнем между элементами получим все содерждимое ul 
main_menu.addEventListener("click", function(event){
   let li = event.target;
   console.log(li.innerHTML);
});   
// Перепишем обработчик 
main_menu.addEventListener("click", function(event){
    let li = event.target.closest('li'); // Взять ближайший элемент li
    if(li == null) return;
    console.log(li.innerHTML);
 });   