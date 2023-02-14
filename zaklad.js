const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n=>n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const menu = document.querySelector('.menu');
let previousPosition = window.pageYOffset;

window.onscroll = function() {
  let currentPosition = window.pageYOffset;
  if (currentPosition > previousPosition) {
    menu.style.transition = 'all 0.4s ease';
    menu.style.transform = 'translateY(-100%)';
  } else {
    menu.style.transition = 'all 0.3s ease';
    menu.style.transform = 'translateY(0%)';
  }
  previousPosition = currentPosition;
};
