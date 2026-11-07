
const registerForm = document.getElementById("register-form");
const registerMessage = document.getElementById("register-message");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

        const password = document.getElementById("clave").value;
        const confirmPassword = document.getElementById("confirmar-clave").value;

        if (password !== confirmPassword) {
            registerMessage.textContent = "Las contraseñas no coinciden.";
            registerMessage.className = "register-message error";
            registerMessage.hidden = false;

            return;
        }

        registerMessage.textContent = "¡Registro exitoso! Serás redirigido al inicio de sesión.";

        registerMessage.className = "register-message success";
        registerMessage.hidden = false;

        registerForm.querySelector("button[type='submit']").disabled = true;

        setTimeout(function () {
            window.location.href = "login.html";
            }, 2500);
        });
