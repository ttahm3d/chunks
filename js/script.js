let isDarkModeEnabled = localStorage.getItem("chunks:uses-dark-mode");
const btnToggle = document.querySelector(".btnToggle");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("chunks:uses-dark-mode", "true");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("chunks:uses-dark-mode", null);
};

if (isDarkModeEnabled === "true") {
  enableDarkMode();
} else {
  disableDarkMode();
}

const toggleTheme = () => {
  isDarkModeEnabled = localStorage.getItem("chunks:uses-dark-mode");
  if (isDarkModeEnabled !== "true") {
    enableDarkMode();
    btnToggle.children[0].classList.replace("fa-moon", "fa-sun");
    console.log(isDarkModeEnabled);
  } else {
    disableDarkMode();
    btnToggle.children[0].classList.replace("fa-sun", "fa-moon");
    console.log(isDarkModeEnabled);
  }
};

btnToggle.addEventListener("click", toggleTheme);
