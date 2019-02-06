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
  console.log(activeImage);

  for (i = 0; i < slideImage.length; i++) {
    slideImage[i].style.opacity = 0;
    slideImage[i].style.transition = "opacity 1s";
    if (i === activeImage) {
      slideImage[i].style.opacity = 1;
      slideImage[i].style.transition = "opacity 0s";
    }
  }
}
function imageShow() {
  for (i = 0; i < slideImage.length; i++) {
    slideImage[i].style.opacity = 1;
    slideImage[i].style.transition = "opacity 0s";
  }
}

$("#iris").on("click", function() {
  rollImage(0);
});
$("#seed").on("click", function() {
  rollImage(1);
});
$("#edge").on("click", function() {
  rollImage(2);
});
$("#original").on("click", function() {
  rollImage(3);
});
