const inputValid = document.getElementById('validation-input');
const validCharacters = +inputValid.getAttribute('data-length');

inputValid.onchange = function() {
  if (inputValid.value.length === validCharacters) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  } else {
    inputValid.classList.add('invalid');
    if (inputValid.value === '') {
      inputValid.classList.remove('valid');
      inputValid.classList.remove('invalid');
    }
  }
};
