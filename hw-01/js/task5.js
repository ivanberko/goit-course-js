
const costToChina = 100;
const costToChile = 250;
const costToAustralia = 170;
const costToIndia = 80;
const costToJamaica = 120;

const deliverProduct = prompt(
  'Укажите страну в которую хотите заказать доставку!',
);

if (deliverProduct === null) {
  console.log('Task-5 : Доставка не выбрана');
} else {
  switch (deliverProduct.toLowerCase()) {
    case 'китай':
      console.log(
        `Task-5 : Доставка в ${deliverProduct} будет стоить ${costToChina} кредитов`,
      );
      break;
    case 'чили':
      console.log(
        `Task-5 : Доставка в ${deliverProduct} будет стоить ${costToChile} кредитов`,
      );
      break;
    case 'австралия':
      console.log(
        `Task-5 : Доставка в ${deliverProduct} будет стоить ${costToAustralia} кредитов`,
      );
      break;
    case 'индия':
      console.log(
        `Task-5 : Доставка в ${deliverProduct} будет стоить ${costToIndia} кредитов`,
      );
      break;
    case 'ямайка': console.log(
      `Task-5 : Доставка в ${deliverProduct} будет стоить ${costToJamaica} кредитов`,
    );
      break;
    default:
      console.log('Task-5 : В вашей стране доставка не доступна');
  }
}
