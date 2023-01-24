const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleBox = document.querySelector(".style-switcher");
const colorTheme = document.querySelectorAll(".color-theme");
const DayNight = document.querySelector(".day-night");
const hamBurger = document.querySelector(".aside");

const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const color3 = document.querySelector(".color-3");
const color4 = document.querySelector(".color-4");
const color5 = document.querySelector(".color-5");
//-------------------
styleSwitcherToggler.addEventListener("click", () => {
  styleBox.classList.toggle("open");
});
//-------------------
window.addEventListener("scroll", () => {
  if (styleBox.classList.contains("open")) {
    styleBox.classList.remove("open");
  }
});
//-------------------
const setActiveStyle = (Vcolor) => {
  colorTheme.forEach((style) => {
    if (Vcolor === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};
// -------------------
DayNight.addEventListener("click", () => {
  DayNight.querySelector("i").classList.toggle("fa-sun");
  DayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    DayNight.querySelector("i").classList.add("fa-sun");
  } else {
    DayNight.querySelector("i").classList.add("fa-moon");
  }
});
// -------------------
hamBurger.addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("hamBurger");
});

document.addEventListener("scroll", () => {
  document.querySelector(".aside").classList.add("hamBurger");
  // }
});
