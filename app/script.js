const collapsibles = document.querySelectorAll(".card-faq__item");

collapsibles.forEach(item =>
  item.addEventListener("click", function() {
    this.classList.toggle("active");
  }),
);