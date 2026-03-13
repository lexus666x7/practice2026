const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

burger.addEventListener("click", () => {
    navMenu.classlist.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});