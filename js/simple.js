let btn = document.getElementById("top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 550) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
