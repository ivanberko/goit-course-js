'use strict';

console.log('TASK3----------------------------------------------------');

class Storage {
  constructor(products) {
    this.items = products;
  }
  // возвращает массив текущих товаров
  getItems() {
    return this.items;
  }

  // получает новый товар и добавляет его к текущим
  addItem(item) {
    return this.items.push(item);
  }

  // получет товар и, если он есть, удаляет его из текущих
  removeItem(item) {
    this.items = this.items.filter(elem => elem !== item);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
