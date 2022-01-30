// event.shiftKey - true, если нажата клавиша Shift и false в противном случае;
// event.altKey - true при нажатом Alt (или Opt для Mac) и false иначе;
// event.ctrlKey - true при нажатом Ctrl и false иначе;
// event.metaKey - true при нажатом Cmd (для Mac) и false иначе;

// Обработка клавиш клавиатуры
// Если кликнули и нажали shift+ctrl или metaKey (cmd)
document.addEventListener("click", (event) =>{
    if(event.shiftKey && (event.ctrlKey || event.metaKey))
    console.log("click");
});