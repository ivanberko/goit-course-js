'use strict';

const totalGoods = 100;
const ordered = prompt('Пожалуйста введите необходимое количество товара:');

let report =
  totalGoods >= ordered && Number(ordered)
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров или введено не корректное значение!';

// let report;

// if (total >= ordered && Number(ordered)) {
//   report = 'Заказ оформлен, с вами свяжется менеджер';
// } else {
//   report = 'На складе недостаточно товаров или введено не корректное значение';
// }

console.log('Task 2 -', report);
alert(report);
