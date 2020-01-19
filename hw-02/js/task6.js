'use strict';

console.log('TASK6------------------------')

let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Add number`);

  if (Number.isNaN(Number(input)) || input === '') {
    alert('Введено не корректное значение');
    continue;
  } else if (input >= 0 && input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);
console.log(numbers);

if (numbers.length !== 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}

console.log(total);
