document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#mob-header .mob-icon")
    .addEventListener("click", function () {
      document.querySelector(".mob-sidebar").classList.toggle("active");
    });

  document.getElementById("navicon").addEventListener("click", function () {
    this.classList.toggle("open");
  });

  document.querySelectorAll(".b-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
