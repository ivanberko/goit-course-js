'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

while (
  message !== 'Добро пожаловать' &&
  message !== 'Отмененно пользователь!'
) {
  let requestPas = prompt('Введите пароль');
  if (requestPas === null) {
    message = 'Отмененно пользователь!';
    alert(message);
    console.log('Task 3 -', message);
  } else if (ADMIN_PASSWORD === requestPas) {
    message = 'Добро пожаловать';
    alert(message);
    console.log('Task 3 -', message);
  } else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
    console.log('Task 3 -', message);
  }
}
