// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
let slides = $(".product-roll").prop("style");
let slideImage = $(".product-image");
let sideNav = $(".side-nav ul li a");

function rollImage(i) {
  imageShow();

  if (i === 1) {
    slides.transform = "translateY(-220px)";
  } else if (i === 2) {
    slides.transform = "translateY(-480px)";
  } else if (i === 3) {
    slides.transform = "translateY(-800px)";
  } else {
    slides.transform = "translateY(0px)";
  }
  setTimeout(function() {
    imageHide(i);
  }, 500);
}

function imageHide(activeImage) {
  for (i = 0; i < slideImage.length; i++) {
    if (i === activeImage) {
      slideImage[i].style.opacity = 1;
      slideImage[i].style.transition = "opacity 0s";
    } else {
      slideImage[i].style.opacity = 0;
      slideImage[i].style.transition = "opacity 1s";
    }
  }
}

function imageShow() {
  for (i = 0; i < slideImage.length; i++) {
    slideImage[i].style.opacity = 1;
    slideImage[i].style.transition = "opacity 0s";
  }
}

function linkActive(num, id) {
  for (i = 0; i < sideNav.length; i++) {
    if (i === num) {
      sideNav.removeClass("link-active");
    }
  }
  $(id).addClass("link-active");
}

$("#iris").on("click", function() {
  rollImage(0);
  linkActive(0, "#iris");
});
$("#seed").on("click", function() {
  rollImage(1);
  linkActive(1, "#seed");
});
$("#edge").on("click", function() {
  rollImage(2);
  linkActive(2, "#edge");
});
$("#original").on("click", function() {
  rollImage(3);
  linkActive(3, "#original");
});
