document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!email && !password) {
        errorMessage.textContent = "Por favor, insira seu e-mail e sua senha.";
    } else if (!email) {
        errorMessage.textContent = "Por favor, insira seu e-mail.";
    } else if (!password) {
        errorMessage.textContent = "Por favor, insira sua senha.";
    } else {
        window.location.href = "select-type.html";
    }
});