let counterValue = 0;
const valueById = document.getElementById('value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

const incrementCounter = function() {
  counterValue += 1;
  valueById.textContent = counterValue;
};

const decrementtCounter = function() {
  counterValue -= 1;
  valueById.textContent = counterValue;
};

btnDecrement.addEventListener('click', decrementtCounter);
btnIncrement.addEventListener('click', incrementCounter);
