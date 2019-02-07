$(window).on("load", function() {
  let part2 = $(".part-2").prop("style");
  let slides = $(".product-roll").prop("style");
  let slideImage = $(".product-image");
  let sideNav = $(".side-nav ul li a");
  let details = $(".details-item-container").prop("style");
  let detailItem = $(".details-item");
  let features = $(".features-image");
  let sizes = $(".product-sizes span");
  let dots = $(".dot-border");
  let activeItem;
  rollImage(0);

  //Image Carousel Functions
  function imageHide(activeImage) {
    for (i = 0; i < slideImage.length; i++) {
      if (i === activeImage) {
        slideImage[i].style.opacity = 1;
        slideImage[i].style.transition = "opacity 0s";
        detailItem[i].style.opacity = 1;
        detailItem[i].style.transition = "opacity 0s";
      } else {
        slideImage[i].style.opacity = 0;
        slideImage[i].style.transition = "opacity 1000ms";
        detailItem[i].style.opacity = 0;
        detailItem[i].style.transition = "opacity 500ms";
      }
    }
  }
  function imageShow() {
    for (i = 0; i < slideImage.length; i++) {
      slideImage[i].style.opacity = 1;
      slideImage[i].style.transition = "opacity 0s";
      detailItem[i].style.opacity = 1;
      detailItem[i].style.transition = "opacity 0s";
    }
  }
  function rollImage(i) {
    imageShow();
    //SEED
    if (i === 1) {
      slides.transform = "translateY(-220px)";
      details.transform = "translateY(-60px)";
      features[0].style.opacity = 1;
      features[1].style.opacity = 0;
      features[2].style.opacity = 0;
      sizes[0].style.opacity = 1;
      sizes[0].textContent = "8" + '"';
      sizes[0].style.padding = "7px";
      sizes[1].style.opacity = 1;
      sizes[2].style.opacity = 1;
      part2.background = "linear-gradient(#95abd1, #eaf4e6)";
      dots[0].style.opacity = 1;
      dots[1].style.opacity = 1;
      dots[2].style.opacity = 1;
      dots.removeClass("dot-iris");
      dots[1].style.border = "1px solid";
      activeItem = 1;
      linkActive(1, "#seed");
      $("#arrowUp").prop("style").opacity = 1;
      $("#arrowDown").prop("style").opacity = 1;
      //EDGE
    } else if (i === 2) {
      slides.transform = "translateY(-480px)";
      details.transform = "translateY(-110px)";
      features[0].style.opacity = 1;
      features[1].style.opacity = 1;
      features[2].style.opacity = 1;
      sizes[0].style.opacity = 1;
      sizes[0].textContent = "8" + '"';
      sizes[0].style.padding = "7px";
      sizes[1].style.opacity = 0;
      sizes[2].style.opacity = 0;
      part2.background = "linear-gradient(#afe5ef, #c3fccb)";
      dots[0].style.opacity = 0;
      dots[1].style.opacity = 1;
      dots[2].style.opacity = 0;
      dots.removeClass("dot-iris");
      dots[1].style.border = "1px solid";
      activeItem = 2;
      linkActive(2, "#edge");
      $("#arrowUp").prop("style").opacity = 1;
      $("#arrowDown").prop("style").opacity = 1;
      //ORIGINAL
    } else if (i === 3) {
      slides.transform = "translateY(-800px)";
      details.transform = "translateY(-170px)";
      features[0].style.opacity = 1;
      features[1].style.opacity = 1;
      features[2].style.opacity = 1;
      sizes[0].style.opacity = 1;
      sizes[0].style.padding = "7px 3px";
      sizes[0].textContent = "15" + '"';
      sizes[1].style.opacity = 0;
      sizes[2].style.opacity = 0;
      part2.background = "linear-gradient(#87d6c4, #b4dfed)";
      dots[0].style.opacity = 0;
      dots[1].style.opacity = 1;
      dots[2].style.opacity = 0;
      dots.removeClass("dot-iris");
      dots[1].style.border = "1px solid";
      activeItem = 3;
      linkActive(3, "#original");
      $("#arrowDown").prop("style").opacity = 0;
      $("#arrowUp").prop("style").opacity = 1;
      //IRIS
    } else {
      slides.transform = "translateY(40px)";
      details.transform = "translateY(0px)";
      features[0].style.opacity = 1;
      features[1].style.opacity = 0;
      features[2].style.opacity = 0;
      sizes[0].style.opacity = 1;
      sizes[0].textContent = "8" + '"';
      sizes[0].style.padding = "7px";
      sizes[1].style.opacity = 0;
      sizes[2].style.opacity = 0;
      part2.background = "linear-gradient(#feb5b6, #feddd4)";
      dots.addClass("dot-iris");
      dots[1].style.border = "0px solid";
      activeItem = 0;
      linkActive(0, "#iris");
      $("#arrowUp").prop("style").opacity = 0;
      $("#arrowDown").prop("style").opacity = 1;
    }
    setTimeout(function() {
      imageHide(i);
    }, 500);
  }

  //3DOTS

  //SideNav
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
  //Arrow Nav
  $("#arrowUp").on("click", function() {
    rollImage(activeItem === 0 ? 0 : activeItem - 1);
  });

  $("#arrowDown").on("click", function() {
    rollImage(activeItem === 3 ? 3 : activeItem + 1);
  });
});
