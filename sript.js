// highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navlist li a");

  let scrollPos = window.scrollY + 120; // offset for navbar height

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(sec.getAttribute("id"))) {
          link.classList.add("active");
        }
      });
    }
  });
});
