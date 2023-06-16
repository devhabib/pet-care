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

  // Add click event listeners to each menu item
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Get the target section ID from the href attribute
      const targetSection = this.getAttribute("href");

      // Scroll to the target section
      document.querySelector(targetSection).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
