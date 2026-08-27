const slider = document.getElementById("heroSlider");
const slides = [...document.querySelectorAll(".slide")];
const dotsWrap = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const interval = 4000;
const transitionTime = 900;

let current = 0;
let timer;

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- MENU ---------------- */

    const menuBtn = document.querySelector(".header__toggle");
    const menu = document.querySelector(".header__menu");

    if (menuBtn && menu) {

        menuBtn.addEventListener("click", () => {

            menu.classList.toggle("header__menu--active");

        });

    }


    // Create Dots
    slides.forEach((_, index) => {

        const dot = document.createElement("button");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {

            if (index > current) {
                goToSlide(index, "next");
            } else if (index < current) {
                goToSlide(index, "prev");
            }

        });

        dotsWrap.appendChild(dot);

    });

    const dots = [...dotsWrap.children];

    // Update Dots
    function updateDots() {

        dots.forEach((dot, index) => {

            dot.classList.toggle("active", index === current);

        });

    }

    // Main Function
    function goToSlide(index, direction) {

        if (index === current) return;

        const previous = current;

        current = (index + slides.length) % slides.length;

        slides[previous].classList.remove("active");

        if (direction === "next") {
            slides[previous].classList.add("exit-left");
        } else {
            slides[previous].classList.add("exit-right");
        }

        slides[current].classList.remove("exit-left", "exit-right");
        slides[current].classList.add("active");

        setTimeout(() => {

            slides[previous].classList.remove("exit-left", "exit-right");

        }, transitionTime);

        updateDots();
        restartAutoplay();

    }

    // Next
    function nextSlide() {

        goToSlide(current + 1, "next");

    }

    // Previous
    function prevSlide() {

        goToSlide(current - 1, "prev");

    }

    // Autoplay
    function startAutoplay() {

        clearInterval(timer);

        timer = setInterval(nextSlide, interval);

    }

    function restartAutoplay() {

        startAutoplay();

    }

    // Events
    nextBtn.addEventListener("click", nextSlide);

    prevBtn.addEventListener("click", prevSlide);

    slider.addEventListener("mouseenter", () => {

        clearInterval(timer);

    });

    slider.addEventListener("mouseleave", () => {

        startAutoplay();

    });

    // Start
    startAutoplay();

    /* ---------------- TESTIMONIAL SLIDER ---------------- */

    const slider = document.querySelector(".testimonial__slider");

    if (slider) {

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener("mousedown", (e) => {

            isDown = true;

            startX = e.pageX - slider.offsetLeft;

            scrollLeft = slider.scrollLeft;

        });

        slider.addEventListener("mouseleave", () => {

            isDown = false;

        });

        slider.addEventListener("mouseup", () => {

            isDown = false;

        });

        slider.addEventListener("mousemove", (e) => {

            if (!isDown) return;

            e.preventDefault();

            const x = e.pageX - slider.offsetLeft;

            const walk = (x - startX) * 2;

            slider.scrollLeft = scrollLeft - walk;

        });

    }

});