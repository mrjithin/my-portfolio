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

const skills = document.querySelectorAll(".skill .inner-bar");

function scrolled(item, i) {
  if(isScrolledIntoView(item)) {
    item.classList.add("visited");
    item.parentNode.parentNode.classList.add("shadow-pop-bi");
    clearInterval(skillObj["skill"+i]);
  }
}
const skillObj = {};
Array.from(skills).forEach((item, i) => {
  skillObj["skill"+i] = setInterval(scrolled, 300, item , i);
})

const date = new Date();
document.getElementById("year").textContent = date.getFullYear();
