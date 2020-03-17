const inputNumberOfDiv = document.querySelector('input[type="number"]');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const containerBoxes = document.getElementById('boxes');
const arrayOfColorBoxes = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let widthBox = 20;
    let heightBox = 20;
    for (let i = 0; i < amount; i += 1) {
      const boxDiv = document.createElement('div');
      boxDiv.style.width = `${(widthBox += 10)}px`;
      boxDiv.style.height = `${(heightBox += 10)}px`;
      boxDiv.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(
        255,
      )},${getRandomInt(255)})`;
      arrayOfColorBoxes.push(boxDiv);
    }
    containerBoxes.append(...arrayOfColorBoxes);
  }
}

function destroyBoxes() {
  containerBoxes.innerHTML = '';
  arrayOfColorBoxes.splice(0);
  inputNumberOfDiv.value = '';
}

inputNumberOfDiv.onblur = function() {
  createBoxes(inputNumberOfDiv.value);
};

renderButton.addEventListener('click', inputNumberOfDiv.onfocus);
destroyButton.addEventListener('click', destroyBoxes);
