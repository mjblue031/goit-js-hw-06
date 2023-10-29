const btnInc = document.querySelector('[data-action="increment"]');
const btnDec = document.querySelector('[data-action="decrement"]');
const valueDisplay = document.querySelector('#value');
let counterValue = 0;

btnInc.addEventListener("click", () => {
    counterValue+=1;
    valueDisplay.textContent = counterValue;
});

btnDec.addEventListener("click", () => {
    counterValue-=1;
    valueDisplay.textContent = counterValue;
});

