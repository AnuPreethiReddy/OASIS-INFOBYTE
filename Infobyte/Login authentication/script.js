
localStorage.setItem("demoUser", "password123");

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "#3897f0";
    } else {
        loginMessage.textContent = "Incorrect username or password.";
        loginMessage.style.color = "#dc2743";
    }
}
