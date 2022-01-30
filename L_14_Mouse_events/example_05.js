// mouseover - возникает при наведении курсора мыши на элемент HTML-документа;
// mouseout - возникает при покидании курсора мыши элемента HTML - документа.

// mouseover 
// target - ссылка на объект над которым находится курсор мыши;
// relatedTarget - ссылка на объект, с которого ушел курсор мыши;
// mouseout
// relatedTarget - ссылка на объект над которым находится курсор мыши;
// relatedTarget - ссылка на объект, с которого ушел курсор мыши;

document.addEventListener("mouseover", (event)=>{
    let prop = "target = " + event.target.tagName;
    if(event.relatedTarget != null)
    prop+=", relatedTarget =" + event.relatedTarget.tagName;

    console.log("mouseover: " + prop);
})

// document.addEventListener("mouseout", (event)=>{
//     let prop = "target = " + event.target.tagName;
//     if(event.relatedTarget != null)
//     prop+=", relatedTarget =" + event.relatedTarget.tagName;

//     console.log("mouseout: " + prop);
// })

// mouseenter и mouseleave
// Не всплывают
// Событие mouseenter генерируется когда указатель оказывается над элементом и при этом не важно: потомок это элемента или сам элемент.
// Событие mouseleave срабатывает при покидании элемента целиком (дочерние элементы здесь не учитываются).

let div = document.querySelector("div.parent");
div.addEventListener("mouseover", showInfo);

function showInfo(event){
    let prop = "target = " + event.target.tagName;
    if(event.relatedTarget != null)
    prop+=", relatedTarget = " + event.relatedTarget.tagName;

    let name = event.currentTarget.tagName;
    console.log(name+ "mouseover: " + prop);
}