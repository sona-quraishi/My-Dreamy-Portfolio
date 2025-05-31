document,addEventListener("DOMContentLoaded", function () {
    const toggleButton = this.document.querySelector(".toggle-btn");
    const body = this.document.body;

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});