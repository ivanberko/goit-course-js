'use strict';

import users from './users.js';

console.log('TASK1----------------------------------------------------');
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log('TASK2----------------------------------------------------');
// Получить массив объектов пользователей по цвету глаз (поле eyeColor)
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log('TASK3----------------------------------------------------');
//Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {
  return users.reduce((userName, user) => {
    if (user.gender === gender) userName.push(user.name);
    return userName;
  }, []);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log('TASK4----------------------------------------------------');
//Получить массив только неактивных пользователей (поле isActive)
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// console.log('TASK5----------------------------------------------------');
// //Получить пользоваля (не массив) по email (поле email, он уникальный).
// const getUserWithEmail = (users, email) => {
//   // твой код
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// console.log('TASK6----------------------------------------------------');
// //Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
// const getUsersWithAge = (users, min, max) => {
//   // твой код
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// console.log('TASK7----------------------------------------------------');
// // Получить общую сумму баланса (поле balance) всех пользователей.
// const calculateTotalBalance = users => {
//   // твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

// console.log('TASK8----------------------------------------------------');
// //Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// console.log('TASK9----------------------------------------------------');
// //Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// console.log('TASK10---------------------------------------------------');
// //Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке
// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
