let button = document.querySelector('.createAccount');
let password = document.querySelector('#password1');
let confirmPassword = document.querySelector('#confirmPassword1');
let passwordMatch = document.querySelector('.passwordMatch');



function checkPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        return "Passwords Match";
    } else {
        return "Passwods do not match";
    }
}

button.addEventListener('click', () => {
    let results = checkPassword(password.value, confirmPassword.value)
    passwordMatch.textContent = results
})