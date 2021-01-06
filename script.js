const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");
const navLiAbout = document.querySelector(".nav-li-about");
const navLiWork = document.querySelector(".nav-li-work");
const navLiProcess = document.querySelector(".nav-li-process");
const navLiServices = document.querySelector(".nav-li-services");
const navLiTestimonials = document.querySelector(".nav-li-testimonials");
const navLiContact = document.querySelector(".nav-li-contact");

hamburger.addEventListener("click", menu);
navLiAbout.addEventListener("click", closeMenu);
navLiWork.addEventListener("click", closeMenu);
navLiProcess.addEventListener("click", closeMenu);
navLiServices.addEventListener("click", closeMenu);
navLiTestimonials.addEventListener("click", closeMenu);
navLiContact.addEventListener("click", closeMenu);

function menu() {
  navUl.classList.toggle("show");
}

function closeMenu() {
  navUl.classList.remove("show");
}
