'use strict';

console.log('TASK6------------------------');

let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Add number`);
  if (input !== null) {
    numbers.push(Number(input));
  }

  if (Number.isNaN(Number(input))) {
    alert('Введено не корректное значение');
    continue;
  }
} while (input !== null);
console.log(numbers);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
