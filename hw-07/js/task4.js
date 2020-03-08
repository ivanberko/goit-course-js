let counterValue = 0;
const valueById = document.getElementById('value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

const incrementCounter = function() {
  valueById.textContent = counterValue += 1;
};

const decrementtCounter = function() {
  valueById.textContent = counterValue -= 1;
};

btnDecrement.addEventListener('click', decrementtCounter);
btnIncrement.addEventListener('click', incrementCounter);
