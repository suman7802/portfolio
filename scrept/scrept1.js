var typed = new Typed(".typeing", {
  strings: [, "Web Designer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const actives = document.querySelectorAll(".nav li a");
const clearActive = () => {
  actives.forEach((active) => {
    active.classList.remove("active");
  });
};
actives.forEach((active) => {
  active.addEventListener("click", (e) => {
    clearActive();
    e.target.classList.add("active");
  });
});
