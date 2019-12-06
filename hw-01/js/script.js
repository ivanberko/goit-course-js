'use strict';

const message = 'JavaScript is awesome!';
/*
 * В круглых скобках указываем имя переменной,
 * значение которой необходимо вывести в консоль
 */
console.log(message); // JavaScript is awesome!

const name = 'Mango';
/*
 * Можно сначала указать какую-то произвольную строку,
 * к примеру описывающую переменную или дополняющую ее, после чего
 * поставить запятую и указать имя переменной
 */
console.log('My name is: ', name); // My name is: Mango

/*
 * alert выводит модальное окно, текст которого соотсветствует значению
 * переменной (или литерала) которую мы укажем в скобках.
 */
alert(message);
alert('My name is: ' + name);

/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

/*
 * Спрашиваем имя отеля в котором хотел бы остановится клиент
 * и сохраняем в переменную результат вызова prompt
 */
const hotelName = prompt('Please enter desired hotel name:');
console.log(hotelName);

/*
 * Важная особенность prompt в том, что не зависимо что ввел пользователь,
 * всегда вернется строка. Тоесть если пользователь ввел 5, то вернется
 * не число 5, а строка "5". Об этом необходимо всегда помнить.
 */
const value = prompt('Please enter a number!');
console.log(typeof value); // 'string'
console.log(value); // '5'

