// Меняем css с помощью cssText
let elem = document.querySelector("div");
elem.style.cssText = `color: red; font-size: 18px; background-color: green`;
// Свойства elem.style не синхронизированы со свойсвами в классе!!!