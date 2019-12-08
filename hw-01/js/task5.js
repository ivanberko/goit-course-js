'use strict';

let cost;
let deliverProduct = prompt(
  'Укажите страну в которую хотите заказать доставку!',
);
let message5;

if (deliverProduct === null) {
  message5 = alert(`Доставка не выбрана`);
}

switch (deliverProduct.toLowerCase()) {
  case 'китай':
    cost = 100;
    message5 = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );
    break;

  case 'чили':
    cost = 250;
    message5 = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );

    break;

  case 'австралия':
    cost = 170;
    message5 = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );

    break;

  case 'индия':
    cost = 80;
    message5 = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );

    break;

  case 'ямайка':
    cost = 120;
    message5 = alert(
      `Доставка в ${deliverProduct} будет стоить ${cost} кредитов`,
    );

    break;

  default:
    message5 = alert(`В вашей стране доставка не доступнв`);
}

console.log(message5);
