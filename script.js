const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const passeword = document.getElementById("passeword")
const passewordconfirmation = document.getElementById("passeword-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passeword = passeword.value;
    const passewordconfirmation = passeword-confirmation.value;
    if (usernameValue === '') {
        setE

    }
}
