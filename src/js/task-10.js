function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);
const boxes = document.querySelector("#boxes");
const numberInput = document.querySelector("input");
console.log(create);
console.log(destroy);
console.log(boxes);
console.log(numberInput);
let number = 0;
boxes.style.height = "auto";
boxes.style.display = "flex";
boxes.style.flexDirection = "column";
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
numberInput.addEventListener("input", (event) => {
  number = event.currentTarget.value;
  console.log(number);
});
function createBoxes() {
  for (let i = 0; i < number; i++) {
    let elem = document.createElement(`div${i}`);
    boxes.append(elem);
    boxes.lastChild.style.width = `${30 + 10 * i}px`;
    boxes.lastChild.style.height = `${30 + 10 * i}px`;
    boxes.lastChild.style.backgroundColor = getRandomHexColor();
  }
}
function destroyBoxes() {
  while (boxes.lastChild) {
    boxes.lastChild.remove();
  }
}
