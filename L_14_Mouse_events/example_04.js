// clientX/clientY - координаты курсора мыши относительно окна браузера;
// pageX/pageY - координаты курсора мыши относительно HTML-документа;

document.addEventListener("mousemove", (event)=>console.log("mousemove:" + event.clientX + ", " + event.clientY));

