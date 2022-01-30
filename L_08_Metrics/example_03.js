let elem = document.querySelector("div.message");

setInterval(function() {
    console.log(elem.scrollTop, elem.scrollLeft, elem.scrollWidth, elem.scrollHeight);
})