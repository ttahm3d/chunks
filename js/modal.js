const modalContainer = document.querySelector(".demo-modal-container");
const modalContent = document.querySelector(".demo-modal-content");
const modelButton = document.querySelector(".demo-button");
const closeButton = document.querySelector(".demo-modal-close-btn");

console.log(modelButton);

const openModel = () => (modalContainer.style.display = "block");
const closeModel = () => (modalContainer.style.display = "none");

modelButton.addEventListener("click", () => {
  modalContainer.style.display = "block";
});
closeButton.addEventListener("click", closeModel);
