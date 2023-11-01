let logInForm = document.querySelector('.login-form');

logInForm.addEventListener("submit", (eve) => {
    eve.preventDefault();

    const formLogIn = eve.target;
    const eMail = formLogIn.elements.email.value;
    const pWord = formLogIn.elements.password.value;

    if(eMail === "" || pWord === ""){
        return console.log("All fields must be filled in");
    }

    const objData = {
        email: eMail.value,
        password: pWord.value,
    };
    console.log(objData);
    formLogIn.reset();
});