const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthText = document.getElementById("strength");

togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type");
    passwordInput.setAttribute("type", type === "password" ? "text" : "password");
    togglePassword.classList.toggle("fa-eye-slash");
});

function checkPasswordStrength(password){
    if (password.length < 8) {
        return "Weak: Password should be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
        return "Weak: Password should have at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
        return "Weak: Password should have at least one lowercase letter";
    }
    if (!/\d/.test(password)) {
        return "Weak: Password should have at least one digit";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Weak: Password should have at least one special character";
    }
    return "Strong: Password meets all criteria";
}

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    strengthText.textContent = strength;
});
