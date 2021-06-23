// Select DOM
const body = document.querySelector("body");
const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__menu-button");

// Menu toggle event
menuButton.addEventListener("click", () => {
  body.classList.toggle("no-scroll");
  header.classList.toggle("show-nav");
});
