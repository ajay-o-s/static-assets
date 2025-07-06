function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const themeIcon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "☀️"; // Sun icon
  } else {
    themeIcon.textContent = "🌙"; // Moon icon
  }
}

// Set year on load
const currentYear = new Date().getFullYear();
document.getElementById("footer-year").textContent = currentYear;
document.getElementById("last-updated-year").textContent = currentYear;

// Set default icon on load
window.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "☀️";
  } else {
    themeIcon.textContent = "🌙";
  }
});
