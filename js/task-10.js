function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let begWidht = 30;
let begHeight = 30;

function createBoxes(amount) {
  let boxes = document.querySelector("#boxes");
  
  let i = 0;

  for (i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${begWidht}px`;
    box.style.height = `${begHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    begWidht += 10;
    begHeight += 10;
  }
}

function destroyBoxes() {
  let boxes = document.querySelector("#boxes");
  document.querySelector("#inputAmt").value = 0;
  begHeight = 30;
  begWidht = 30;
  boxes.innerHTML = "";
}

let btnCreate = document.querySelector("#dtaCreate");
let btnDestroy = document.querySelector("#dtaDestroy");

btnCreate.addEventListener("click", () => {
  let amt = document.querySelector("#inputAmt").value;
  createBoxes(amt);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
