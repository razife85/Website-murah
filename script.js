const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 20
    ? "0 8px 25px rgba(13,27,49,.06)"
    : "none";
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(faq => {
      faq.classList.remove("active");
      faq.querySelector(".faq-question span").textContent = "⌄";
    });

    if (!isOpen) {
      item.classList.add("active");
      button.querySelector("span").textContent = "⌃";
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
