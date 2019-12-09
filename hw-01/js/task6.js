'use strikt';

let userInput;
let total = 0;

while (true) {
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

console.log(total);
alert(`Введенная вами сумма чисел = ${total}`);
