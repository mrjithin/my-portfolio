// To make both elements same height. 
const navUl = document.querySelector('nav ul');
const navA = document.getElementById('logo-a');
navA.style.height = navUl.offsetHeight+'px';

// Making both same height. 
const hamCont = document.getElementById('ham-cont');
hamCont.style.height = navA.offsetHeight+'px';

// For mobile hamburger
document.getElementsByClassName("ham")[0].addEventListener("click", (event) => {
  document.getElementsByClassName("ham")[0].classList.toggle("cross");
  document.getElementById("line2").classList.toggle("none");
});
