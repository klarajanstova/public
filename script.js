const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

function setHeaderState() {
  header.dataset.elevated = window.scrollY > 24 ? "true" : "false";
}

year.textContent = new Date().getFullYear();
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

document.querySelectorAll(".client-logo-card img").forEach((logo) => {
  logo.addEventListener("error", () => {
    logo.closest(".client-logo-card")?.classList.add("logo-fallback");
  });
});
