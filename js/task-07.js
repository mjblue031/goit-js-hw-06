let fontSizeValue = document.getElementById('font-size-control');
let textOutput = document.getElementById('text');

console.log(textOutput.textContent);
console.log(fontSizeValue.value);

fontSizeValue.addEventListener("input", () => {
    let txtFontSize = fontSizeValue.value + "px";
    textOutput.style.fontSize = txtFontSize;
});