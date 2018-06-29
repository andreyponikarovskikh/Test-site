'use strict'

var popupForm = document.querySelector(".popUpForm");
var popupButton = document.querySelector(".js_popUpButton");
var formButton = document.querySelector(".js_sendFormButton")  ;
var clientName = popupForm.querySelector("[name=clientName]");

popupButton.addEventListener("click", function (evt) {
evt.preventDefault();
popupForm.classList.toggle("popUpForm__popUp");
// переводим фокус на popUp форму
setTimeout(function(){clientName.focus();},600);
});

formButton.addEventListener("click", function (evt) {
evt.preventDefault();
popupForm.classList.toggle("popUpForm__popUp");
});


window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popupForm.classList.contains("popUpForm__popUp")) {
    popupForm.classList.remove("popUpForm__popUp");
  }
}
});

var mobileMenu = document.querySelector(".mobileNav__mainNav");
var mobileMenuButton = document.querySelector(".mobileNav__button");

mobileMenuButton.addEventListener("click", function (evt){
  evt.preventDefault();
  mobileMenu.classList.toggle("mobileNav__mainNav_show");
});



