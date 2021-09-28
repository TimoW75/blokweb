// JavaScript Document
var deButton = document.querySelector("header img:first-of-type");
var deNav = document.querySelector("nav")
var Main = document.querySelector("header")

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
  Main.classList.toggle("toonMenu");
}