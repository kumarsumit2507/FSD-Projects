document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- MENU ---------------- */

    const menuBtn = document.querySelector(".header__toggle");
    const menu = document.querySelector(".header__menu");

    if(menuBtn && menu){

        menuBtn.addEventListener("click", () => {

            menu.classList.toggle("header__menu--active");

        });

    }

    /* ---------------- TESTIMONIAL SLIDER ---------------- */

    const slider = document.querySelector(".testimonial__slider");

    if(slider){

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown",(e)=>{

            isDown = true;

            startX = e.pageX - slider.offsetLeft;

            scrollLeft = slider.scrollLeft;

        });

        slider.addEventListener("mouseleave",()=>{

            isDown = false;

        });

        slider.addEventListener("mouseup",()=>{

            isDown = false;

        });

        slider.addEventListener("mousemove",(e)=>{

            if(!isDown) return;

            e.preventDefault();

            const x = e.pageX - slider.offsetLeft;

            const walk = (x - startX) * 2;

            slider.scrollLeft = scrollLeft - walk;

        });

    }

});