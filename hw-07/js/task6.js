const inputValid = document.getElementById('validation-input');
const validCharacters = +inputValid.getAttribute('data-length');

inputValid.onchange = function() {
  inputValid.textContent = inputValid.value;
  if (inputValid.textContent.length === validCharacters) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  } else {
    inputValid.classList.add('invalid');
  }
  if (inputValid.value === '') {
    inputValid.classList.remove('valid');
    inputValid.classList.remove('invalid');
  }
};
