// Start Scroll to Top Btn

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// show and hide navbar and scroll to top btn when scrolling
window.onscroll = function () {
  // change navbar visabilty
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navgationbar").style.top = "0px";
    document.getElementById("navgationbar").style.backgroundColor = "#303849";
    document.getElementById("navgationbar").style.opacity = "0.95";
  } else {
    document.getElementById("navgationbar").style.top = "57px";
    document.getElementById("navgationbar").style.backgroundColor =
      "transparent";
  }

  // change scroll to top btn visabilty
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("scroll-top").style.display = "block";
  } else {
    document.getElementById("scroll-top").style.display = "none";
  }
};

// Start Slider Hero
$(".owl-carousel-hero").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 750,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
  },
});

// cheap of dots for slider
$(".owl-carousel-hero .owl-dot span").css({
  background: "white",
  width: "5px",
  height: "20px",
});

$(".owl-carousel-gallary").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 650,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel-testimonial").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 650,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
