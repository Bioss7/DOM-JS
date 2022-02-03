"use strict";

function LoadingImages() {
    this.urls = new Set(); // Коллекция urls изображений которые надо загрузить, коллекция Set состоящая из уникальных значений 
    this.listImages = [];  // Все загруженные изображения

    // Метод addItem позволяет добавить в коллекцию текущей url
    this.addItem = function(url) {
        this.urls.add(url);
    }

    // Метод getTotalItems возвращает общее количество url которые нужно загрузить
    this.getTotalItems = function() {
        return this.urls.size;
    }

    // Метод load выполняет создание изображений или загрузку
    this.load = function(callback_progress) {
        for(let url of this.urls) { // Перебираем коллекцию urls
            let img = new Image(); // Создаем изображение 
            this.listImages.push(img); // Добавляем в массив listImages созданное изображение 

            img.onload = callback_progress; // На событие onload вешаем обработчик callback_progress
            img.src = url; // Устанавливаем src на тот url который необходимо загрузить
        }
    }
}