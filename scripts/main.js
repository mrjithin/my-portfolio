// For mobile hamburger
const mobNav = document.querySelector("nav#mobile");

document.getElementsByClassName("ham")[0].addEventListener("click", (event) => {
  document.getElementsByClassName("ham")[0].classList.toggle("cross");
  document.getElementById("line2").classList.toggle("none");
  mobNav.classList.toggle("on");
  mobNav.classList.toggle("off");
});
