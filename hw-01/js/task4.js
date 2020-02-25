
const credits = 23580;
const pricePerDroid = 3000;

const сountDroid = prompt('Какое количество дроидов вы хотите купить?');

if (сountDroid === null) {
  alert('Отменено пользовательм!');
} else {
  const totalPrice = сountDroid * pricePerDroid;
  if (credits < totalPrice) {
    alert('Недостаточно средств на счету!');
  } else {
    alert(
      `Вы купили ${сountDroid} дроидов, на счету осталось ${credits
        - totalPrice} кредитов.`,
    );
  }
}
