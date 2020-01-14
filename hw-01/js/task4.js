'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let сountDroid = true;
let totalPrice;
let messageInfo;

while (сountDroid) {
  сountDroid = prompt('Какое количество дроидов вы хотите купить?');

  if (Number.isNaN(Number(сountDroid))) {
    messageInfo = confirm ('Введено не корректное значение');
  } else if (сountDroid === null || сountDroid === '') {
    messageInfo = 'Отменено пользовательм!';
    break;
  }

  totalPrice = Number(сountDroid) * pricePerDroid;

  if (credits <= totalPrice) {
    messageInfo = 'Недостаточно средств на счету!';
    break;
  } else if (credits >= totalPrice) {
    messageInfo = `Вы купили ${сountDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`;
    break;
  }
}

console.log(`Task 4 ${messageInfo}`);
alert(messageInfo);
