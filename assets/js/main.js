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
const originalDocumentTitle = document.title;
const builtInTranslations = {
  en: {
    strings: {
      "Aller au contenu": "Skip to content",
      "Accueil": "Home",
      "Nos programmes": "Our programmes",
      "Notre vision": "Our vision",
      "Contact": "Contact",
      "Programmes": "Programmes",
      "Compte": "Account",
      "À propos": "About",
      "Contactez-nous": "Contact us",
      "Mon compte": "My account",
      "Politique de confidentialité": "Privacy policy",
      "Conditions générales": "Terms and conditions",
      "Liens utiles": "Useful links",
      "Masterclasses d’arabe": "Arabic masterclasses",
      "Programme enfants": "Children's programme",
      "Programme arabe enfants": "Children's Arabic programme",
      "Réserver une place": "Reserve a place",
      "Réserver maintenant": "Reserve now",
      "Découvrir le programme": "Discover the programme",
      "Voir les programmes": "View programmes",
      "Voir les tarifs": "View pricing",
      "S'inscrire": "Register",
      "S'inscrire maintenant": "Register now",
      "Résultats recherchés": "Target outcomes",
      "Ce que l’étudiant doit gagner": "What the student should gain",
      "Le parcours ne promet pas une progression floue. Chaque séance travaille un résultat concret et vérifiable.": "The path does not promise vague progress. Each session works toward a concrete and verifiable result.",
      "Lire avec plus de fluidité": "Read with more fluency",
      "Installer les bases, corriger les hésitations et gagner en régularité dans la lecture.": "Build foundations, correct hesitation and gain consistency in reading.",
      "Comprendre les phrases utiles": "Understand useful phrases",
      "Relier vocabulaire, structures simples et sens pour ne pas apprendre mécaniquement.": "Connect vocabulary, simple structures and meaning instead of learning mechanically.",
      "Oser parler progressivement": "Dare to speak progressively",
      "Pratiquer des réponses courtes, puis construire des échanges plus naturels.": "Practice short answers, then build more natural exchanges.",
      "Garder un rythme réaliste": "Keep a realistic pace",
      "Choisir un format individualisé ou en groupe selon l’âge, le niveau et les disponibilités.": "Choose an individual or group format based on age, level and availability.",
      "Avis et retours": "Reviews and feedback",
      "Ce que les familles apprécient": "What families appreciate",
      "Un cadre simple à comprendre, une progression suivie et une réservation rapide via WhatsApp.": "A simple framework to understand, monitored progress and fast reservation through WhatsApp.",
      "5 étoiles": "5 stars",
      "Le cadre est clair dès le départ. On sait quoi travailler, combien de séances prévoir et comment suivre la progression.": "The framework is clear from the start. We know what to work on, how many sessions to plan and how to follow progress.",
      "Parent d’élève": "Student parent",
      "J’avais besoin de reprendre les bases sans perdre de temps. Les séances m’aident à lire avec plus d’assurance.": "I needed to rebuild the basics without wasting time. The sessions help me read with more confidence.",
      "Étudiante adulte": "Adult student",
      "Le choix entre individuel et groupe rend l’inscription plus simple. L’échange WhatsApp permet de confirmer vite.": "The choice between individual and group makes registration easier. The WhatsApp exchange makes confirmation fast.",
      "Famille accompagnée": "Supported family",
      "Réservation WhatsApp": "WhatsApp reservation",
      "Inscription guidée": "Guided registration",
      "De votre demande à la première séance": "From your request to the first session",
      "La réservation est pensée pour être rapide: vous choisissez le programme, le rythme et le format, puis l’équipe confirme les détails sur WhatsApp.": "Reservation is designed to be fast: you choose the programme, pace and format, then the team confirms the details on WhatsApp.",
      "Réserver sur WhatsApp": "Reserve on WhatsApp",
      "Choisir le programme": "Choose the programme",
      "Masterclasses adultes, communication arabe ou programme enfants.": "Adult masterclasses, Arabic communication or children's programme.",
      "Indiquer le rythme": "Indicate the pace",
      "Nombre de sessions par semaine, durée et format individualisé ou groupe.": "Number of weekly sessions, duration and individual or group format.",
      "Envoyer la demande": "Send the request",
      "Le formulaire prépare un message WhatsApp complet avec vos informations.": "The form prepares a complete WhatsApp message with your information.",
      "Confirmer la place": "Confirm the place",
      "L’équipe vérifie le niveau, le créneau et le tarif adapté avant le démarrage.": "The team checks the level, slot and suitable price before starting.",
      "Place limitée selon les créneaux": "Limited places depending on time slots",
      "Vous pouvez commencer par une demande simple": "You can start with a simple request",
      "Envoyez votre niveau, votre objectif et vos disponibilités. L’équipe vous répond avec le programme le plus adapté.": "Send your level, goal and availability. The team replies with the most suitable programme.",
      "Remplir le formulaire": "Fill out the form",
      "Programme adultes et adolescents": "Adult and teenager programme",
      "Masterclasses d’arabe - Bayan Academy": "Arabic masterclasses - Bayan Academy",
      "Programme Masterclasses d’arabe Bayan Academy pour renforcer la lecture, la compréhension et la communication.": "Bayan Academy Arabic masterclasses to strengthen reading, comprehension and communication.",
      "Renforcer la lecture, comprendre avec méthode et communiquer en arabe avec plus d’aisance.": "Strengthen reading, understand with method and communicate in Arabic with more ease.",
      "WhatsApp direct": "Direct WhatsApp",
      "Un programme pour progresser concrètement": "A programme for concrete progress",
      "Ces masterclasses structurent l’apprentissage autour de la lecture, de la compréhension et de la pratique orale. Elles conviennent aux adultes et adolescents qui veulent avancer avec un cadre clair.": "These masterclasses structure learning around reading, comprehension and oral practice. They suit adults and teenagers who want to progress within a clear framework.",
      "Public": "Audience",
      "Formats": "Formats",
      "Durée": "Duration",
      "Tarif": "Price",
      "Adultes et adolescents": "Adults and teenagers",
      "Individualisé ou en groupe": "Individualized or group-based",
      "Sessions de 1h à 2h": "1 to 2 hour sessions",
      "Dès 38.50 €/mois ou 385 € en paiement complet": "From €38.50/month or €385 paid in full",
      "Dès 38.50 €/mois": "From €38.50/month",
      "Dès 41.50 €/mois": "From €41.50/month",
      "Start With Us": "Start with us",
      "Lecture": "Reading",
      "Fluidité, prononciation, rythme et compréhension des structures de base.": "Fluency, pronunciation, rhythm and comprehension of basic structures.",
      "Compréhension": "Comprehension",
      "Vocabulaire utile, phrases fréquentes et repères pour lire avec sens.": "Useful vocabulary, common phrases and markers to read with meaning.",
      "Communication": "Communication",
      "Pratique guidée pour formuler, répondre et gagner en confiance.": "Guided practice to formulate, answer and build confidence.",
      "Suivi": "Follow-up",
      "Objectifs par séance, exercices ciblés et ajustements selon votre niveau.": "Goals per session, targeted exercises and adjustments based on your level.",
      "Tarifs de référence": "Reference pricing",
      "Choisissez le parcours qui correspond à votre objectif": "Choose the path that matches your goal",
      "Les tarifs sont affichés pour guider la réservation. L’équipe confirme ensuite les disponibilités et le rythme exact sur WhatsApp.": "Prices are shown to guide the reservation. The team then confirms availability and the exact pace on WhatsApp.",
      "Parcours complet": "Full path",
      "Langue arabe": "Arabic language",
      "385 €": "€385",
      "38.50 €/mois": "€38.50/month",
      "10 €": "€10",
      "Paiement complet pour un parcours structuré lecture, compréhension et communication.": "Full payment for a structured reading, comprehension and communication path.",
      "Réserver ce tarif": "Reserve this price",
      "Échelonné": "Installments",
      "Langue arabe mensuel": "Monthly Arabic language",
      "Option échelonnée jusqu’à 10 mois, à confirmer avec l’équipe.": "Installment option up to 10 months, to be confirmed with the team.",
      "Choisir ce rythme": "Choose this pace",
      "Expression": "Expression",
      "Communication arabe": "Arabic communication",
      "Pour travailler vocabulaire, phrases utiles et aisance orale.": "To work on vocabulary, useful phrases and oral ease.",
      "Choisir ce parcours": "Choose this path",
      "Découverte": "Discovery",
      "Masterclass ciblée": "Focused masterclass",
      "Une première session pour clarifier le niveau et choisir le bon programme.": "A first session to clarify the level and choose the right programme.",
      "Démarrer": "Start",
      "Déroulé du parcours": "Path overview",
      "Une progression simple, lisible et orientée résultat.": "Simple, clear progress focused on results.",
      "Évaluation": "Assessment",
      "Nous identifions votre niveau, vos blocages et votre objectif principal.": "We identify your level, blockers and main goal.",
      "Plan de travail": "Work plan",
      "Vous choisissez le nombre de sessions, la durée et le format individualisé ou groupe.": "You choose the number of sessions, duration and individual or group format.",
      "Pratique": "Practice",
      "Chaque séance alterne lecture, compréhension et communication.": "Each session alternates reading, comprehension and communication.",
      "Réservation": "Reservation",
      "Le formulaire prépare votre demande WhatsApp avec toutes les informations utiles.": "The form prepares your WhatsApp request with all useful information.",
      "Prêt à commencer ?": "Ready to begin?",
      "Réservez votre place et envoyez vos préférences directement sur WhatsApp.": "Reserve your place and send your preferences directly on WhatsApp.",
      "Préparez votre message WhatsApp avec vos préférences.": "Prepare your WhatsApp message with your preferences.",
      "Fermer": "Close",
      "Programme": "Programme",
      "Programme et tarif": "Programme and price",
      "Parcours Langue Arabe complet - 385 €": "Full Arabic Language path - €385",
      "Paiement échelonné Langue Arabe - 38.50 €/mois pendant 10 mois": "Arabic Language installments - €38.50/month for 10 months",
      "Communication arabe - dès 38.50 €/mois": "Arabic communication - from €38.50/month",
      "Masterclass Découverte - 10 €": "Discovery Masterclass - €10",
      "Tarif choisi": "Selected price",
      "Tarif choisi: Parcours Langue Arabe complet - 385 €": "Selected price: Full Arabic Language path - €385",
      "Sessions par semaine": "Sessions per week",
      "1 session": "1 session",
      "2 sessions": "2 sessions",
      "3 sessions": "3 sessions",
      "Durée de session": "Session duration",
      "1 heure": "1 hour",
      "1h30": "1h30",
      "2 heures": "2 hours",
      "Format": "Format",
      "Programme individualisé": "Individualized programme",
      "Programme en groupe": "Group programme",
      "Nom complet": "Full name",
      "Nom du parent": "Parent name",
      "Email ou WhatsApp": "Email or WhatsApp",
      "Niveau actuel": "Current level",
      "Débutant, intermédiaire, avancé": "Beginner, intermediate, advanced",
      "Détails utiles": "Useful details",
      "Objectifs, disponibilités, attentes particulières": "Goals, availability, specific expectations",
      "Continuer sur WhatsApp": "Continue on WhatsApp",
      "Salam, je souhaite réserver une place chez Bayan Academy.": "Hello, I would like to reserve a place at Bayan Academy.",
      "Nom": "Name",
      "Tarif choisi": "Selected price",
      "Sessions par semaine": "Sessions per week",
      "Durée": "Duration",
      "Niveau / âge": "Level / age",
      "Informations": "Information",
      "Votre message est prêt.": "Your message is ready.",
      "Ouvrir WhatsApp": "Open WhatsApp",
      "pour plus d’informations et finaliser la réservation.": "for more information and to finalize the reservation."
    }
  }
};
let translationCatalog = builtInTranslations;
const supportedLanguages = ["fr", "en"];
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = supportedLanguages.includes(requestedLanguage)
  ? requestedLanguage
  : localStorage.getItem("bayanLanguage") || "fr";

if (!supportedLanguages.includes(currentLanguage)) {
  currentLanguage = "fr";
}

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
const getTranslationMap = () => translationCatalog.en?.strings || {};
const translateText = (text, language = currentLanguage) => {
  if (language !== "en") {
    return text;
  }
  return getTranslationMap()[normalizeText(text)] || text;
};

const setTextNodeContent = (node, value) => {
  const leading = node.textContent.match(/^\s*/)?.[0] || "";
  const trailing = node.textContent.match(/\s*$/)?.[0] || "";
  node.textContent = `${leading}${value}${trailing}`;
};

const applyTranslations = (language = currentLanguage) => {
  currentLanguage = language;
  localStorage.setItem("bayanLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = translateText(originalDocumentTitle, currentLanguage);

  document.querySelectorAll("[data-language-choice]").forEach((button) => {
    const active = button.dataset.languageChoice === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "SVG", "PATH"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalizeText(node.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    if (!node.__bayanFrText) {
      node.__bayanFrText = normalizeText(node.textContent);
      if (node.parentElement?.tagName === "OPTION") {
        node.parentElement.dataset.bayanFrText = node.__bayanFrText;
      }
    }
    setTextNodeContent(node, translateText(node.__bayanFrText, currentLanguage));
  });

  document.querySelectorAll("*").forEach((element) => {
    ["placeholder", "aria-label", "alt", "title", "content"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) {
        return;
      }
      if (!element.__bayanI18nAttrs) {
        element.__bayanI18nAttrs = {};
      }
      if (!element.__bayanI18nAttrs[attribute]) {
        element.__bayanI18nAttrs[attribute] = normalizeText(element.getAttribute(attribute) || "");
      }
      element.setAttribute(attribute, translateText(element.__bayanI18nAttrs[attribute], currentLanguage));
    });
  });

  document.querySelectorAll("input[readonly], input[data-programme-field]").forEach((input) => {
    if (!input.__bayanFrValue) {
      input.__bayanFrValue = normalizeText(input.value);
    }
    input.value = translateText(input.__bayanFrValue, currentLanguage);
  });

  updatePriceSummary();
};

const injectLanguageSwitcher = () => {
  document.querySelectorAll(".nav-actions").forEach((actions) => {
    if (actions.querySelector(".language-switcher")) {
      return;
    }
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language");
    supportedLanguages.forEach((language) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.languageChoice = language;
      button.textContent = language.toUpperCase();
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => applyTranslations(language));
      switcher.append(button);
    });
    actions.insertBefore(switcher, menuToggle || actions.firstChild);
  });
};

const loadTranslationCatalog = async () => {
  try {
    const response = await fetch("translations.json", { cache: "no-cache" });
    if (!response.ok) {
      return;
    }
    translationCatalog = await response.json();
    applyTranslations(currentLanguage);
  } catch (error) {
    translationCatalog = builtInTranslations;
  }
};

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
    const message = encodeURIComponent(`${translateText("Salam, je souhaite réserver une place chez Bayan Academy.", currentLanguage)}\n${translateText("Nom", currentLanguage)}: ${name}\n${translateText("Contact", currentLanguage)}: ${contact}\n${translateText("Programme", currentLanguage)}: ${formation}\n${translateText("Format", currentLanguage)}: ${format}\n${translateText("Informations", currentLanguage)}: ${details}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    const note = form.querySelector(".form-note");
    if (note) {
      note.innerHTML = `${translateText("Votre message est prêt.", currentLanguage)} <a href="${whatsappUrl}" target="_blank" rel="noopener">${translateText("Ouvrir WhatsApp", currentLanguage)}</a> ${translateText("pour plus d’informations et finaliser la réservation.", currentLanguage)}`;
    }
    window.open(whatsappUrl, "_blank", "noopener");
  });
});

const registrationModal = document.querySelector("[data-registration-modal]");
const registrationForm = document.querySelector("[data-registration-form]");
let lastRegistrationTrigger = null;

const updatePriceSummary = () => {
  if (!registrationModal) {
    return;
  }
  const packageSelect = registrationModal.querySelector("[data-price-select]");
  const summary = registrationModal.querySelector("[data-price-summary]");
  if (packageSelect && summary) {
    summary.textContent = `${translateText("Tarif choisi", currentLanguage)}: ${packageSelect.value}`;
  }
};

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
    programmeField.__bayanFrValue = normalizeText(trigger.dataset.programme);
  }
  const packageSelect = registrationModal.querySelector("[data-price-select]");
  if (packageSelect && trigger.dataset.package) {
    const matchingOption = Array.from(packageSelect.options).find((option) => {
      const originalOptionText = option.dataset.bayanFrText || normalizeText(option.textContent);
      return option.value === trigger.dataset.package || normalizeText(option.textContent) === trigger.dataset.package || originalOptionText === trigger.dataset.package;
    });
    if (matchingOption) {
      packageSelect.value = matchingOption.value;
    }
  }
  registrationModal.hidden = false;
  document.body.classList.add("menu-open");
  applyTranslations(currentLanguage);
  updatePriceSummary();
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
  const packageSelect = registrationForm.querySelector("[data-price-select]");
  if (packageSelect) {
    packageSelect.addEventListener("change", updatePriceSummary);
    updatePriceSummary();
  }

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(registrationForm);
    const message = encodeURIComponent(`${translateText("Salam, je souhaite réserver une place chez Bayan Academy.", currentLanguage)}\n${translateText("Programme", currentLanguage)}: ${data.get("programme") || ""}\n${translateText("Tarif choisi", currentLanguage)}: ${data.get("package") || ""}\n${translateText("Sessions par semaine", currentLanguage)}: ${data.get("sessions") || ""}\n${translateText("Durée", currentLanguage)}: ${data.get("duration") || ""}\n${translateText("Format", currentLanguage)}: ${data.get("format") || ""}\n${translateText("Nom", currentLanguage)}: ${data.get("name") || ""}\n${translateText("Contact", currentLanguage)}: ${data.get("contact") || ""}\n${translateText("Niveau / âge", currentLanguage)}: ${data.get("level") || ""}\n${translateText("Détails utiles", currentLanguage)}: ${data.get("details") || ""}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
  });
}

injectLanguageSwitcher();
applyTranslations(currentLanguage);
loadTranslationCatalog();
