(function () {
  "use strict";

  // Section ids in bottom-to-top page order. Each section is rendered only when
  // the matching include_* flag is set in _config.yml, so any of them may be
  // missing from the page; everything below works off what is actually there.
  var SECTION_IDS = ["publications", "projects", "skills", "about", "summary"];
  var OFFSET = -100;

  var navbar, siteLink, summary, stickyOffSet, sections;

  function setAllLinkColors(color) {
    sections.forEach(function (entry) {
      entry.link.style.color = color;
    });
  }

  function activeSection() {
    for (var i = 0; i < sections.length; i++) {
      var entry = sections[i];
      var offset = entry.id === "summary" ? OFFSET / 2 : OFFSET;
      if (window.pageYOffset >= entry.section.offsetTop + offset) {
        return entry;
      }
    }
    return null;
  }

  function onScroll() {
    if (navbar) {
      if (window.pageYOffset >= stickyOffSet) {
        navbar.classList.add("header-sticky");
      } else {
        navbar.classList.remove("header-sticky");
      }
    }

    var active = activeSection();
    if (active) {
      setAllLinkColors("#555555");
      active.link.style.color = "#FFFFFF";
    } else {
      setAllLinkColors("#FFFFFF");
    }

    if (siteLink && summary) {
      var passedSummary = window.pageYOffset >= summary.offsetTop + OFFSET / 2;
      siteLink.style.visibility = passedSummary ? "visible" : "hidden";
    }
  }

  function init() {
    navbar = document.getElementById("header-navbar");
    siteLink = document.getElementById("header-site-link");
    summary = document.getElementById("summary");
    stickyOffSet = navbar ? navbar.offsetTop : 0;

    sections = SECTION_IDS.map(function (id) {
      return {
        id: id,
        section: document.getElementById(id),
        link: document.getElementById(id + "-link")
      };
    }).filter(function (entry) {
      return entry.section && entry.link;
    });

    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
