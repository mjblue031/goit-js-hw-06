let txtInput = document.getElementById('validation-input');
let maxLength = txtInput.getAttribute("data-length");

txtInput.addEventListener("blur", () => {
    if(txtInput.value.length == maxLength) {
        txtInput.classList.add("valid");
        txtInput.classList.remove("invalid");

    }
    else{
        txtInput.classList.remove("valid");
        txtInput.classList.add("invalid");
    }
});
