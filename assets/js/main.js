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
const whatsappNumber = "212697965070";

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
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    const note = form.querySelector(".form-note");
    if (note) {
      note.innerHTML = `Votre message est prêt. <a href="${whatsappUrl}" target="_blank" rel="noopener">Ouvrir WhatsApp</a> pour plus d’informations et finaliser la réservation.`;
    }
    window.open(whatsappUrl, "_blank", "noopener");
  });
});

const registrationModal = document.querySelector("[data-registration-modal]");
const registrationForm = document.querySelector("[data-registration-form]");
let lastRegistrationTrigger = null;

const closeRegistrationModal = () => {
  if (!registrationModal) {
    return;
  }
  registrationModal.hidden = true;
  document.body.classList.remove("menu-open");
  if (lastRegistrationTrigger) {
    lastRegistrationTrigger.focus();
  }
};

const openRegistrationModal = (trigger) => {
  if (!registrationModal) {
    return;
  }
  lastRegistrationTrigger = trigger;
  const programmeField = registrationModal.querySelector("[data-programme-field]");
  if (programmeField && trigger.dataset.programme) {
    programmeField.value = trigger.dataset.programme;
  }
  registrationModal.hidden = false;
  document.body.classList.add("menu-open");
  const firstField = registrationModal.querySelector("select, input:not([readonly]), textarea, button");
  if (firstField) {
    firstField.focus();
  }
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-registration]");
  if (trigger) {
    openRegistrationModal(trigger);
    return;
  }

  const closeTrigger = event.target.closest("[data-close-registration]");
  if (closeTrigger || event.target === registrationModal) {
    closeRegistrationModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && registrationModal && !registrationModal.hidden) {
    closeRegistrationModal();
  }
});

if (registrationForm) {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(registrationForm);
    const message = encodeURIComponent(`Salam, je souhaite réserver une place chez Bayan Academy.\nProgramme: ${data.get("programme") || ""}\nSessions par semaine: ${data.get("sessions") || ""}\nDurée: ${data.get("duration") || ""}\nFormat: ${data.get("format") || ""}\nNom: ${data.get("name") || ""}\nContact: ${data.get("contact") || ""}\nNiveau / âge: ${data.get("level") || ""}\nDétails: ${data.get("details") || ""}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
  });
}
