// Получаем содержимое body
let body = document.body;

// Присваиваем новые свойства для body
body.myStyle = "color: red";
// Присваиваем новые свойства объекта для body
body.myStyle = {
    color: "red",
    fontSize: 20
};

// Присваиваем функцию которая возвращает размер шрифта
body.getFontSize = function() {
    return this.myStyle.fontSize;
}

//  Выводим свойство объекта 
console.log(body.getFontSize());