const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsById = document.getElementById('ingredients');

const createItem = function(array) {
  return array.map((element) => {
    const item = document.createElement('li');
    item.textContent = element;
    return item;
  });
};

ingredientsById.append(...createItem(ingredients));
