function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let btn = document.querySelector('.change-color');
let colorOutput = document.querySelector('.color');
let bodyColor = document.querySelectorAll('body');

console.log(bodyColor);

btn.addEventListener("click", () => {
  let randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
  colorOutput.textContent = randColor;
});
