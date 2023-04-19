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
    menu.style.transition = 'all 0.7s ease';
    menu.style.transform = 'translateY(-500%)';
  } else {
    menu.style.transition = 'all 0.3s ease';
    menu.style.transform = 'translateY(0%)';
  }
  previousPosition = currentPosition;
};

function openFullscreenImage(imgId) {
  var elem = document.getElementById(imgId);
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  // zmena šírky obrázkov na 100% vo full screen režime
  elem.getElementsByTagName("img")[0].style.width = "100%";
}

function closeFullscreenImage() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }

  // návrat šírky obrázkov na pôvodnú hodnotu
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.width = "750px"; // tu nahrad 750px pôvodnou hodnotou
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeFullscreenImage();
  }
});

var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    openFullscreenImage(this.parentNode.id);
  });
}
