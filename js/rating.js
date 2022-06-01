const allStars = document.querySelectorAll(".star");

allStars.forEach((star, id) =>
  star.addEventListener("click", () => selectStar(id))
);

const selectStar = (selectedStar) => {
  if (allStars[selectedStar].classList.contains("filled")) selectedStar -= 1;

  allStars.forEach((star, id) => {
    if (id <= selectedStar) star.classList.add("filled");
    else star.classList.remove("filled");
  });
};
