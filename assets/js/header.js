window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header-navbar");
var stickyOffSet = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= stickyOffSet) {
    navbar.classList.add("header-sticky");
  } else {
    navbar.classList.remove("header-sticky");
  }
}
