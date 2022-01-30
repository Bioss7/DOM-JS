// Устарелые методы, работают с живой DOM коллекцией, живые (динамические, реагируют на изменение DOM);
let list = document.getElementsByTagName("h2");
for(let item of list) console.log(item);