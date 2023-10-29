const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const origLIst = document.getElementById('ingredients');
for (const ingredient of ingredients) {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  origLIst.append(ingredientElement);
}
