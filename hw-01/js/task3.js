'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const requestPas = prompt('Введите пароль');
if (requestPas === null) {
  message = 'Отмененно пользователь!';
} else if (ADMIN_PASSWORD === requestPas) {
  message = 'Добро пожаловать';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
console.log(`Task-3 : ${message}`)
