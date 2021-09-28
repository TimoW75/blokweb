// JavaScript Document
var deButton = document.querySelector("header img:first-of-type");
var deNav = document.querySelector("nav")


deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
  deButton.classList.toggle("toonMenu");
}