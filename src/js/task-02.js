const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((value) => {
  const ingredientsList = document.querySelector("#ingredients");
  const liElement = document.createElement("li");
  liElement.textContent = value;
  liElement.classList.add("item");
  ingredientsList.append(liElement);
});
