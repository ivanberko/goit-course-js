'use strict';

const totalGoods = 100;
const ordered = prompt('Пожалуйста введите необходимое количество товара:');

if (totalGoods >= ordered && Number(ordered)) {
  alert('Заказ оформлен, с вами свяжется менеджер');
} else {
  alert('На складе недостаточно товаров или введено не корректное значение!');
}
