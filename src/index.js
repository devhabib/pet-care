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
});
