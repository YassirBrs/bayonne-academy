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
    document.body.classList.toggle("menu-open", open);
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navShell.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navShell.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });
}

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const contact = data.get("contact") || "";
    const formation = data.get("formation") || "";
    const format = data.get("format") || "";
    const details = data.get("message") || "";
    const message = encodeURIComponent(`Salam, je souhaite réserver une place chez Bayan Academy.\nNom: ${name}\nContact: ${contact}\nProgramme: ${formation}\nFormat: ${format}\nInformations: ${details}`);
    const whatsappUrl = `https://wa.me/212656304934?text=${message}`;
    const note = form.querySelector(".form-note");
    if (note) {
      note.innerHTML = `Votre message est prêt. <a href="${whatsappUrl}" target="_blank" rel="noopener">Ouvrir WhatsApp</a> pour plus d’informations et finaliser la réservation.`;
    }
    window.open(whatsappUrl, "_blank", "noopener");
  });
});
