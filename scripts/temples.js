
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Última modificación: " + document.lastModified;


const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});
