let fontSizeValue = document.getElementById('font-size-control');
let textOutput = document.getElementById('text');

fontSizeValue.addEventListener("input", () => {
    let txtFontSize = fontSizeValue.value + "px";
    textOutput.style.fontSize = txtFontSize;
});