const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("ativo");
});

const links = document.querySelectorAll(".nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("ativo");
  });
});