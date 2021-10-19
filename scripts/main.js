// For mobile hamburger
const mobNav = document.querySelector("nav#mobile");
const deskNav = document.querySelector("nav.desktop");
const navColor = window.getComputedStyle(mobNav).getPropertyValue("background-color");

document.getElementsByClassName("ham")[0].addEventListener("click", (event) => {
  document.getElementsByClassName("ham")[0].classList.toggle("cross");
  document.getElementById("line2").classList.toggle("none");
  mobNav.classList.toggle("on");
  mobNav.classList.toggle("off");
  if(mobNav.className === "on"){
    deskNav.style.backgroundColor = navColor;
  } else {
    deskNav.style.backgroundColor = "";
  }
  event.stopPropagation();
});

// To close the navbar on clicking a link. 
const mobileLis = document.querySelectorAll("nav#mobile a");

Array.from(mobileLis).forEach(link => {
  link.addEventListener("click", event => {
    mobNav.classList.toggle("on");
    mobNav.classList.toggle("off");
    event.stopPropagation();
  })
})
