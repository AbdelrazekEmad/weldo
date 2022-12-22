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

$(".owl-carousel-testimonial").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 650,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1500: {
      items: 3,
    },
  },
});

$(".owl-carousel-partnars").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 650,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 2,
    },
    1000: {
      items: 4,
    },
    1500: {
      items: 6,
    },
  },
});
