// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  body.classList.remove("light", "dark");
  body.classList.add(savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  // Update year displays
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll(
    "#last-updated-year, #footer-year"
  );
  yearElements.forEach((element) => {
    if (element) element.textContent = currentYear;
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Add scroll-based navigation highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("h2[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
