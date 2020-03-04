const inputControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

spanText.style.fontSize = `${inputControl.value}px`;

inputControl.oninput = function() {
  spanText.style.fontSize = `${inputControl.value}px`;
};
