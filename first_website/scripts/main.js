const button = document.querySelectorAll(".daily-life-btn, .science-btn");

button.forEach(function (button) {
    button.addEventListener("click", function () {
        // 'this' now correctly refers to the specific button that was clicked
        // 'nextElementSibling' safely finds the panel right beneath it
        const panel = this.nextElementSibling;

        // Toggle the 'active' class on that specific panel
        panel.classList.toggle("active");
    });
});