const hamburgerButton = document.getElementById("menu-btn");
const navlist = document.getElementById("menu");

function toggle() {
    navlist.classList.toggle("flex");
    navlist.classList.toggle("hidden");
    hamburgerButton.classList.toggle("open");
}

hamburgerButton.addEventListener("click", toggle);