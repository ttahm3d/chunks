const sidebarBtn = document.querySelector(".i-sidebar-btn");
const sidebarContainer = document.querySelector(".component-list");
let isSidebarShown = false;

sidebarBtn.addEventListener("click", () => {
  if (!isSidebarShown) {
    sidebarContainer.style.display = "block";
    isSidebarShown = true;
  } else {
    sidebarContainer.style.display = "none";
    isSidebarShown = false;
  }
});
