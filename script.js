
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeLabel = document.querySelector("#theme-label");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const isLightTheme =
        document.body.classList.contains("light-theme");

    if (isLightTheme) {
        themeIcon.textContent = "🌙";
        themeLabel.textContent = "Dark mode";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
        themeIcon.textContent = "☀️";
        themeLabel.textContent = "Light mode";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    }
});
