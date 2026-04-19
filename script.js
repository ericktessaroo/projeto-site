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

        // 🌙 site escuro → mostra ícone de SOL
        themeIcon.src = "img/night-mode.png";

    } else {
        localStorage.setItem("tema", "light");

        // ☀️ site claro → mostra ícone de LUA
        themeIcon.src = "img/dark-mode.png";
    }
});

/* CARREGAMENTO */

if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
    themeIcon.src = "img/night-mode.png";
} else {
    themeIcon.src = "img/dark-mode.png";
}