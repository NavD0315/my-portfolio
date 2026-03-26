const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const details = this.nextElementSibling;

        if (details.style.display === "block") {
            details.style.display = "none";
            this.textContent = "Show Details";
        } else {
            details.style.display = "block";
            this.textContent = "Hide Details";
        }
    });
});

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if (name === "" || email === "" || userMessage === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Message sent successfully!";
    message.style.color = "green";

    form.reset();
});