const showPassword = () => {
    var passIcon = document.getElementById('#showPass .toogleIcon')
    var showHideButton = document.getElementById("showPass");
    var password = document.getElementById("password");
    showHideButton.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            password.style.fontSize = '15px';
        } else {
            password.type = "password";
            password.style.fontSize = '';
        }
    })
}
showPassword()

const toogle = () => {
    var passIcon = document.querySelector('.toggleIcon');
    passIcon.addEventListener("click", () => {
        passIcon.classList.toggle('bxs-hide')
    })
}

toogle();
