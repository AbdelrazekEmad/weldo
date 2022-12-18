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

// cheap of dots for slider
$(".owl-carousel-hero .owl-dot span").css({
  background: "white",
  width: "5px",
  height: "20px",
});

$(".owl-carousel-testimonial .owl-dot span").css({
  background: "white",
  width: "20px",
  height: "5px",
});
