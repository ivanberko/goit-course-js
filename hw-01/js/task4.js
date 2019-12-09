'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let сountDroid = prompt('Какое количество дроидов вы хотите купить?');
let totalPrice;
let messageInfo;

while (true) {
  if (сountDroid === null || сountDroid === "") {
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
  } else if (Number.isNaN(Number(totalPrice))) {
    messageInfo = 'Введено не корректное значение';
    break;
  }
}

console.log(`Task 4 ${messageInfo}`);
alert(messageInfo);
