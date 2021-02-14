window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header-navbar");
var stickyOffSet = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= stickyOffSet) {
    navbar.classList.add("header-sticky");
  } else {
    navbar.classList.remove("header-sticky");
  }
  var offset = -100;
  if(window.pageYOffset >= document.getElementById("publications").offsetTop + offset){
    setNavbarLinkColorDim();
    document.getElementById("publications-link").style.color = "#FFFFFF";
  }
  else if(window.pageYOffset >= document.getElementById("projects").offsetTop + offset){
    setNavbarLinkColorDim();
    document.getElementById("projects-link").style.color = "#FFFFFF";
  }
  else if(window.pageYOffset >= document.getElementById("skills").offsetTop + offset){
    setNavbarLinkColorDim();
    document.getElementById("skills-link").style.color = "#FFFFFF";
  }
  else if(window.pageYOffset >= document.getElementById("about").offsetTop + offset){
    setNavbarLinkColorDim();
    document.getElementById("about-link").style.color = "#FFFFFF";
  }
  else if(window.pageYOffset >= document.getElementById("summary").offsetTop + offset/2){
    setNavbarLinkColorDim();
    document.getElementById("summary-link").style.color = "#FFFFFF";
  }
  else {
    setNavbarLinkColorBright();
  }
  if(window.pageYOffset >= document.getElementById("summary").offsetTop + offset/2){
    document.getElementById("header-site-link").style.visibility = "visible";
  }
  else {
    document.getElementById("header-site-link").style.visibility = "hidden";
  }
}

function setNavbarLinkColorBright(){
    var color = "#FFFFFF";
    document.getElementById("summary-link")     .style.color = color;
    document.getElementById("about-link")       .style.color = color;
    document.getElementById("skills-link")      .style.color = color;
    document.getElementById("projects-link")    .style.color = color;
    document.getElementById("publications-link").style.color = color;
}

function setNavbarLinkColorDim(){
    var color = "#555555";
    document.getElementById("summary-link")     .style.color = color;
    document.getElementById("about-link")       .style.color = color;
    document.getElementById("skills-link")      .style.color = color;
    document.getElementById("projects-link")    .style.color = color;
    document.getElementById("publications-link").style.color = color;
}
