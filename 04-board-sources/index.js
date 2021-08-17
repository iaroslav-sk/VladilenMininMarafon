const board = document.querySelector("#board");
const SQUARES_NUMBER = 800;
const colors = [
  "aquamarine",
  "blueviolet",
  "chocolate",
  "cyan",
  "darkkhaki",
  "fuchsia",
  "indigo",
  "ivory",
  "maroon",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 2px`;
}

function removeColor(element) {
  element.style.backgroundColor = "#666464";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
