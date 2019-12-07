'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let сountDroid = prompt('Какое количество дроидов вы хотите купить?');
let totalPrice;
let messageInfo;

if (сountDroid === null) {
  messageInfo = alert('Отменено пользовательм!');
}

totalPrice = Number(сountDroid) * pricePerDroid;

if (Number(сountDroid) >= 1) {
  messageInfo = alert(`Общая сумма заказа на ${totalPrice} кредитов!`);
  console.log('Task 4 -', totalPrice);
} else {
  messageInfo = alert('Введено не корректное значение');
}

if (сountDroid === null) {
  сountDroid = 0;
  messageInfo = alert(
    `Вы купили ${сountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
} else if (credits >= totalPrice) {
  alert(
    `Вы купили ${сountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
} else if (credits <= totalPrice) {
  alert('Недостаточно средств на счету!');
}
