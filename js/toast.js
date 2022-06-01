const toast = document.querySelector(".demo-toast");
const toastDismiss = document.querySelector(".demo-toast-dismiss");
const toastBtn = document.querySelector(".demo-button");

toastBtn.addEventListener("click", () => {
  toast.classList.add("show-toast");
  setTimeout(() => {
    toast.classList.remove("show-toast");
  }, 4000);
});

toastDismiss.addEventListener("click", () => {
  toast.classList.remove("show-toast");
});
