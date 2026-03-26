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