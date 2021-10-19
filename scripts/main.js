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
  })
})

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

const skills = document.querySelectorAll(".inner-bar");

Array.from(skills).forEach(item => {
  item.addEventListener("scroll", event => {
    if(isScrolledIntoView(item)) {
      item.classList.add("visited");
    }
  })
})
