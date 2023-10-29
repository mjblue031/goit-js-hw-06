let logInForm = document.querySelector('.login-form');

logInForm.addEventListener("submit", (eve) => {
    eve.preventDefault();

    const formLogIn = eve.target;
    const eMail = formLogIn.elements.email.value;
    const pWord = formLogIn.elements.password.value;

    console.log(eMail);

    if(eMail === "" || pWord === ""){
        return console.log("All fields must be filled in");
    }
    console.log(`Email: ${eMail}, Password: ${pWord}`);
    formLogIn.reset();
});