'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (const checkLogin of allLogins) {
    if (checkLogin.includes(`${login}`) && checkLogin.length === login.length) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (!isLoginUnique(allLogins, login)) {
    return console.log('Такой логин уже используется!');
  } else {
    logins.push(login);
    return console.log('Логин успешно добавлен!');
  }
};

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));

console.log(logins);
