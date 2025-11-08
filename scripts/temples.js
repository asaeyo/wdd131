// temples.js
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        menuButton.classList.toggle("show");
        navigation.classList.toggle("show");
    });

    // Footer year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;
});
