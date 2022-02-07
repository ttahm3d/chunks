const sidebarBtn = document.querySelector(".i-sidebar-btn");
const componentList = document.querySelector(".component-list");
let isSidebarShown = false;

sidebarBtn.addEventListener("click", () => {
  if (!isSidebarShown) {
    componentList.style.height = "45vh";
    isSidebarShown = !isSidebarShown;
  } else {
    componentList.style.height = null;
    isSidebarShown = !isSidebarShown;
  }
});
