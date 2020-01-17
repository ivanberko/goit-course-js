'use strict';

const totalGoods = 100;
const ordered = 50;

if (totalGoods >= ordered && Number(ordered)) {
  console.log(`Task-2 : Заказ оформлен, с вами свяжется менеджер`);
} else {
  console.log('Task-2 : На складе недостаточно товаров или введено не корректное значение!');
}
