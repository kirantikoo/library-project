document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");

        // Clear previous errors
        emailError.innerText = "";
        passwordError.innerText = "";

        let valid = true; // Flag to check form validity

        // Validations
        // Check if email is empty
        if (email === "") {
            emailError.innerText = "Email is required.";
            valid = false;
        }

        // Check if password is empty
        if (password === "") {
            passwordError.innerText = "Password is required.";
            valid = false;
        }

        // Prevent form submission if validation fails
             if (!valid) {
            event.preventDefault();
        } 
            else {
            event.preventDefault();
            window.location.href = "userdashboard.html";
        }
    });
});