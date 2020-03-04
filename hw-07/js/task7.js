const inputControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

spanText.style.fontSize = `${inputControl.value}px`;

inputControl.onchange = function() {
  spanText.style.fontSize = `${inputControl.value}px`;
};
