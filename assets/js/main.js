//
//

// change mood
let modeIcons = document.querySelectorAll(".mood-icon span");
modeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    navShadow(scrollY != 0);
    if (icon == modeIcons[0]) {
      icon.nextElementSibling.classList.remove("d-none");
    } else {
      icon.previousElementSibling.classList.remove("d-none");
    }
    icon.classList.add("d-none");
  });
});

// open side menu
let linksSide = document.querySelector(".navbar-nav");
document.querySelector(".navbar-toggler ").addEventListener("click", () => {
  linksSide.style.right = "0";
});

// close side menu
document.querySelector(".close-icon").addEventListener("click", () => {
  document.querySelector(".clicked-show").style.right = "-31rem";
});

// shadow nav ++ scroll top
window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  navShadow(window.scrollY >= getComputedStyle(nav).height.slice(0, -2));

  let scrollTop = document.querySelector(".scroll-top");
  if (scrollY >= 500) {
    scrollTop.style.bottom = "3rem";
    scrollTop.onclick = () => scroll({ top: 0, behavior: "smooth" });
  } else {
    scrollTop.style.bottom = "-3rem";
  }
});

// nav shadow
function navShadow(condition) {
  let nav = document.querySelector("nav");
  let bodyDark = document.querySelector(".dark-theme");
  if (condition) {
    if (bodyDark) {
      nav.style.boxShadow = "0 1px 4px hsla(152, 4%, 4%, .3)";
    } else {
      nav.style.boxShadow = "0 1px 4px hsla(152, 4%, 15%, 0.1)";
    }
  } else {
    nav.style.boxShadow = "none";
  }
}

let itemsFAQ = document.querySelectorAll(".faq .row .item");

itemsFAQ.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("show")) {
      item.classList.remove("show");
    } else {
      itemsFAQ.forEach((ele) => ele.classList.remove("show"));
      item.classList.add("show");
    }
  });
});

