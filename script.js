const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const themeBtn = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle img");

/* MENU */

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

/* DARK MODE */

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
        themeIcon.src = "img/light.png";
    } else {
        localStorage.setItem("tema", "light");
        themeIcon.src = "img/dark.png";
    }
});

/* CARREGAMENTO */

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    themeIcon.src = "img/light.png";
} else {
    themeIcon.src = "img/dark.png";
}