document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
  
    if (!toggle) {
        console.error("Theme toggle button not found");
        return;
    }
  
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
        toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
        toggle.setAttribute("aria-pressed", savedTheme === "dark");
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
            root.setAttribute("data-theme", "dark");
            toggle.textContent = "☀️";
            toggle.setAttribute("aria-pressed", "true");
        }
    }
  
    toggle.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        const nextTheme = isDark ? "light" : "dark";
    
        root.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        toggle.textContent = nextTheme === "dark" ? "☀️" : "🌙";
        toggle.setAttribute("aria-pressed", nextTheme === "dark");
    });
});
  