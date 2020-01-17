'use strict';

const costToChina = 100;
const costToChile = 250;
const costToAustralia = 170;
const costToIndia = 80;
const costToJamaica = 120;

let deliverProduct = prompt(
  'Укажите страну в которую хотите заказать доставку!',
);

if (deliverProduct === null) {
  alert(`Доставка не выбрана`);
}
// при null все равно заходит в switch и ругается на .toLowerCase() ?????
switch (deliverProduct.toLowerCase()) {
  case 'китай':
    costToChina;
    alert(`Доставка в ${deliverProduct} будет стоить ${costToChina} кредитов`);
    break;
  case 'чили':
    costToChile;
    alert(`Доставка в ${deliverProduct} будет стоить ${costToChile} кредитов`);
    break;
  case 'австралия':
    costToAustralia;
    alert(`Доставка в ${deliverProduct} будет стоить ${costToAustralia} кредитов`);
    break;
  case 'индия':
    costToIndia;
    alert(`Доставка в ${deliverProduct} будет стоить ${costToIndia} кредитов`);
    break;
  case 'ямайка':
    costToJamaica;
    alert(`Доставка в ${deliverProduct} будет стоить ${costToJamaica} кредитов`);
    break;
  default:
    alert(`В вашей стране доставка не доступна`);
}

