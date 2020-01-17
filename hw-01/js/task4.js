'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let сountDroid;
let totalPrice;
let messageInfo;

сountDroid = prompt('Какое количество дроидов вы хотите купить?');
totalPrice = Number(сountDroid) * pricePerDroid;

if (Number.isNaN(Number(сountDroid))) {
  messageInfo = confirm('Введено не корректное значение');
} else if (сountDroid === null || сountDroid === '') {
  messageInfo = 'Отменено пользовательм!';
} else if (credits < totalPrice) {
  messageInfo = 'Недостаточно средств на счету!';
} else if (credits >= totalPrice && сountDroid !== null) {
  messageInfo = `Вы купили ${сountDroid} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}

console.log(`Task-4 : ${messageInfo}`);
