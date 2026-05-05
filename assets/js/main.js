const heroImages = [
  "assets/images/hero-1.webp",
  "assets/images/hero-2.webp",
  "assets/images/hero-3.webp",
  "assets/images/hero-4.webp",
  "assets/images/hero-5.webp",
  "assets/images/hero-6.webp"
];

const heroBg = document.getElementById("heroBg");

if (heroBg) {
  let heroIndex = 0;

  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroBg.style.opacity = "0";
    setTimeout(() => {
      heroBg.style.backgroundImage = `url("${heroImages[heroIndex]}")`;
      heroBg.style.opacity = "1";
    }, 500);
  }, 3600);
}

const navShell = document.getElementById("navShell");
const menuToggle = document.getElementById("menuToggle");

if (navShell && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = navShell.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navShell.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector(".form-note");
    if (note) {
      note.textContent = "Votre message est prêt. Contactez-nous via WhatsApp pour finaliser l'inscription.";
    }
  });
});
