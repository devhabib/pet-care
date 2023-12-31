import simpleParallax from "simple-parallax-js";

import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  function toggleHeader() {
    var navbar = document.querySelector(".header__navbar");
    var search = document.querySelector(".header__search");
    navbar.classList.toggle("open");
    search.classList.toggle("open");
  }

  var mobileToggle = document.querySelector(".header__mobile a");
  mobileToggle.addEventListener("click", toggleHeader);
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetSection = this.getAttribute("href");

      document.querySelector(targetSection).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

var image = document.getElementsByClassName("hero__img");
new simpleParallax(image, {
  delay: 0.3,
  transition: "cubic-bezier(0,0,0,0.1)",
  scale: 0.95,
  orientation: "down left",
});
