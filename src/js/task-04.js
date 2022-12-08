let counterValue = 0;
let span = document.querySelector("#value");
const incButton = document.querySelector(`button[data-action="increment"]`);
const decButton = document.querySelector(`button[data-action="decrement"]`);
incButton.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
decButton.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});
