'use strict';

let cost;
let deliverProduct = prompt(
  'Укажите страну в которую хотите заказать доставку!',
);
let message;

if (deliverProduct === null || deliverProduct === '') {
  message = alert(`Доставка не выбрана`);
}

switch (deliverProduct.toLowerCase()) {
  case 'китай':
    cost = 100;
    message = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );
    break;
  case 'чили':
    cost = 250;
    message = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );
    break;
  case 'австралия':
    cost = 170;
    message = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );
    break;
  case 'индия':
    cost = 80;
    message = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );
    break;
  case 'ямайка':
    cost = 120;
    message = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );
    break;
  default:
    message = alert(`В вашей стране доставка не доступна`);
}
console.log(`Task 4 ${message}`);
