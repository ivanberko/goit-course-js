'use strict';

let userInput;
let total = 0;

do {
  userInput = prompt('Введите любое число');

  if (userInput !== null && Number.isNaN(Number(userInput))) {
    alert('"ERROR" вы ввели некорректное число :( попробуйте еще раз!');
    continue;
  }

  console.log(userInput);

  total += Number(userInput);
} while (userInput !== null);

console.log(`Task-6 : ${total}`);
alert(`Введенная вами сумма чисел = ${total}`);
