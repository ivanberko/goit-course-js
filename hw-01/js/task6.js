'use strikt';

let userInput;
let total = 0;

while (userInput !== null) {
  userInput = prompt('Введите любое число');

  if (userInput === null) {
    alert('Вы закончили ввод');
    break;
  } else if (Number.isNaN(Number(userInput))) {
    alert('"ERROR" вы ввели некорректное число :( попробуйте еще раз!');
    continue;
  }

  userInput = Number(userInput);
  console.log(userInput);

  total += userInput;
}

console.log(`Task 6 ${total}`);
alert(`Введенная вами сумма чисел = ${total}`);
