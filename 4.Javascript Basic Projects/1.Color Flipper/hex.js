const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colors = document.querySelector(".color");

btn.addEventListener("click", function () {
  const hexValue = randomHex();
  document.body.style.backgroundColor = hexValue;
  colors.textContent = hexValue;
});

function randomHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }
  return hexColor;
}

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
