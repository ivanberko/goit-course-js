const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.oninput = function() {
  outputName.innerHTML = inputName.value;
  if (inputName.value === '') {
    outputName.innerHTML = 'незнакомец';
  }
};
