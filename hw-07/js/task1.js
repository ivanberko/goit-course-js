const ulById = document.getElementById('categories');

const allCategories = ulById.querySelectorAll('.item');
console.log(`В списке ${allCategories.length} категории.`);


allCategories.forEach((element) => {
  console.log(`Категория: ${element.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});
