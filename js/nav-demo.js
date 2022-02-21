const navbarContainer = document.querySelector(".nav-list-hamburger");
const hamburgerButton = document.querySelector(".hamBtn");

hamburgerButton.addEventListener("click", () => {
  const visibility = navbarContainer.getAttribute("data-visible-example");
  if (visibility === "false") {
    navbarContainer.setAttribute("data-visible-example", true);
  } else {
    navbarContainer.setAttribute("data-visible-example", false);
  }
});
