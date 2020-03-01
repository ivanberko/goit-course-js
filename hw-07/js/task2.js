const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsById = document.getElementById('ingredients');

ingredients.forEach((element) => {
  const item = document.createElement('li');
  item.textContent = element;
  ingredientsById.append(item);
});
