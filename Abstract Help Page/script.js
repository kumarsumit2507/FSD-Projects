const menuBtn = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("header__menu--active");

    });

}