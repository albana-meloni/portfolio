const dropdowns = document.querySelectorAll(".dropdown-container");

dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  })
})