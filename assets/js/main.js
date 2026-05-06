const themeStorageKey = "bayanTheme";
const getInitialTheme = () => {
  try {
    return localStorage.getItem(themeStorageKey) === "light" ? "light" : "dark";
  } catch (error) {
    return "dark";
  }
};
let currentTheme = getInitialTheme();
document.documentElement.dataset.theme = currentTheme;

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

  const startHeroCycle = () => {
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroBg.style.opacity = "0";
      setTimeout(() => {
        heroBg.style.backgroundImage = `url("${heroImages[heroIndex]}")`;
        heroBg.style.opacity = "1";
      }, 500);
    }, 3600);
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(startHeroCycle, { timeout: 4500 });
  } else {
    window.addEventListener("load", () => setTimeout(startHeroCycle, 1200), { once: true });
  }
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
      "Activer le thème clair": "Enable light theme",
      "Activer le thème sombre": "Enable dark theme",
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
      "Faire le test de niveau": "Take the level test",
      "Orientation rapide": "Quick guidance",
      "Test de niveau avant inscription": "Level test before registration",
      "Répondez à quelques questions pour préparer une recommandation claire avant de contacter l’équipe.": "Answer a few questions to prepare a clear recommendation before contacting the team.",
      "Programme conseillé selon l’âge et le niveau": "Programme recommended by age and level",
      "Format individualisé ou groupe": "Individualized or group format",
      "Message WhatsApp prérempli": "Prefilled WhatsApp message",
      "Profil": "Profile",
      "Adulte ou adolescent": "Adult or teenager",
      "Enfant": "Child",
      "Niveau actuel": "Current level",
      "Je débute complètement": "I am a complete beginner",
      "Je connais les lettres mais je lis lentement": "I know the letters but read slowly",
      "Je lis déjà mais je veux gagner en fluidité": "I already read but want more fluency",
      "Je veux surtout parler et comprendre": "I mainly want to speak and understand",
      "Objectif principal": "Main goal",
      "Renforcer la lecture": "Strengthen reading",
      "Comprendre avec méthode": "Understand with method",
      "Communiquer en arabe": "Communicate in Arabic",
      "Accompagner un enfant": "Support a child",
      "Format préféré": "Preferred format",
      "Je veux être conseillé": "I want advice",
      "Voir ma recommandation": "See my recommendation",
      "Recommandation Bayan Academy": "Bayan Academy recommendation",
      "Envoyer sur WhatsApp": "Send on WhatsApp",
      "Comparer les formats": "Compare formats",
      "Choisissez le cadre qui vous fera avancer": "Choose the setting that will move you forward",
      "Comme les meilleurs instituts en ligne, Bayan Academy rend le choix du format visible avant la réservation.": "Like strong online institutes, Bayan Academy makes the format choice visible before reservation.",
      "Suivi proche": "Close follow-up",
      "Programme individualisé": "Individualized programme",
      "Pour un objectif précis, un besoin de correction rapprochée ou des disponibilités particulières.": "For a specific goal, closer correction needs or specific availability.",
      "Rythme ajusté": "Adjusted pace",
      "Corrections ciblées": "Targeted corrections",
      "WhatsApp pour confirmer": "WhatsApp to confirm",
      "Voir le parcours": "View the path",
      "Populaire": "Popular",
      "Programme en groupe": "Group programme",
      "Pour progresser avec un cadre régulier, des échanges guidés et un niveau proche entre étudiants.": "To progress with a regular framework, guided exchanges and similar student levels.",
      "Dynamique motivante": "Motivating dynamic",
      "Objectifs communs": "Shared goals",
      "Tarifs dès 38.50 €/mois": "Pricing from €38.50/month",
      "Choisir un programme": "Choose a programme",
      "Découverte": "Discovery",
      "Masterclass découverte": "Discovery masterclass",
      "Pour tester le niveau, clarifier l’objectif et éviter de choisir un programme au hasard.": "To test the level, clarify the goal and avoid choosing a programme at random.",
      "Session à 10 €": "€10 session",
      "Commencer léger": "Start lightly",
      "Recommandation: Programme arabe enfants. Le plus adapté est de confirmer l’âge, le niveau de lecture et le rythme avec l’équipe.": "Recommendation: Children's Arabic programme. The best next step is to confirm age, reading level and pace with the team.",
      "Recommandation: Communication arabe. Ce parcours est conseillé si l’objectif principal est de comprendre et parler avec plus d’aisance.": "Recommendation: Arabic communication. This path is recommended if the main goal is to understand and speak with more ease.",
      "Recommandation: Masterclasses d’arabe. Ce parcours est conseillé pour renforcer la lecture, la compréhension et les bases.": "Recommendation: Arabic masterclasses. This path is recommended to strengthen reading, comprehension and foundations.",
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
const detailPageTranslations = {
  "Voir détails, niveaux et durée": "See details, levels and duration",
  "Voir détails, évaluation et rythme": "See details, evaluation and rhythm",
  "Navigation du programme": "Programme navigation",
  "Niveaux": "Levels",
  "Durée et rythme": "Duration and rhythm",
  "Niveaux acceptés": "Accepted levels",
  "Un parcours modulé selon votre point de départ": "A path adapted to your starting point",
  "Vous n’entrez pas dans une classe générique. Le niveau détermine les objectifs, le rythme et les corrections prioritaires.": "You do not enter a generic class. Your level determines the goals, pace and priority corrections.",
  "Niveau 1": "Level 1",
  "Niveau 2": "Level 2",
  "Niveau 3": "Level 3",
  "Fondations": "Foundations",
  "Pour reprendre les bases de lecture, reconnaître les formes, corriger les sons et lire des phrases simples.": "To rebuild reading foundations, recognize forms, correct sounds and read simple sentences.",
  "Lecture lente guidée": "Slow guided reading",
  "Vocabulaire essentiel": "Essential vocabulary",
  "Consolidation": "Consolidation",
  "Pour gagner en fluidité, comprendre les structures utiles et construire des réponses courtes.": "To gain fluency, understand useful structures and build short answers.",
  "Fluidité de lecture": "Reading fluency",
  "Phrases fréquentes": "Frequent phrases",
  "Pour développer l’expression orale, organiser ses idées et répondre avec plus de confiance.": "To develop oral expression, organize ideas and answer with more confidence.",
  "Dialogue pratique": "Practical dialogue",
  "Vocabulaire actif": "Active vocabulary",
  "Correction orale": "Oral correction",
  "Évaluation initiale": "Initial evaluation",
  "Avant de réserver, on clarifie le bon point d’entrée": "Before reserving, we clarify the right entry point",
  "L’objectif est d’éviter un programme trop facile, trop rapide ou mal adapté. L’évaluation sert à recommander le parcours, la durée de séance et le format.": "The goal is to avoid a programme that is too easy, too fast or poorly adapted. The evaluation recommends the path, session length and format.",
  "Commencer par une évaluation": "Start with an evaluation",
  "Ce qui est observé": "What is observed",
  "Fluidité, hésitations, prononciation, rythme.": "Fluency, hesitation, pronunciation and rhythm.",
  "Capacité à relier mots, phrases et sens.": "Ability to connect words, phrases and meaning.",
  "Réponses courtes, vocabulaire disponible, confiance.": "Short answers, available vocabulary and confidence.",
  "Lecture, communication, progression personnelle ou familiale.": "Reading, communication, personal or family progress.",
  "Contenu détaillé": "Detailed content",
  "Les modules travaillés pendant le programme": "Modules covered during the programme",
  "Les modules sont combinés selon le niveau. Un débutant ne reçoit pas la même progression qu’un étudiant qui veut surtout parler.": "Modules are combined according to level. A beginner does not receive the same progression as a student focused mainly on speaking.",
  "Lecture technique": "Technical reading",
  "Sons, fluidité, enchaînement, rythme et correction des blocages récurrents.": "Sounds, fluency, flow, rhythm and correction of recurring blocks.",
  "Vocabulaire utile": "Useful vocabulary",
  "Mots fréquents, familles de mots et phrases directement réutilisables.": "Frequent words, word families and directly reusable phrases.",
  "Compréhension active": "Active comprehension",
  "Questions, reformulation et lecture avec sens plutôt que simple déchiffrage.": "Questions, reformulation and reading with meaning rather than simple decoding.",
  "Expression orale": "Oral expression",
  "Réponses guidées, mini-dialogues et entraînement à parler sans blocage.": "Guided answers, mini-dialogues and training to speak without blocking.",
  "Exercices entre séances": "Exercises between sessions",
  "Travail court et ciblé pour consolider sans surcharger l’étudiant.": "Short targeted work to consolidate without overloading the student.",
  "Bilan de progression": "Progress review",
  "Points acquis, points à revoir et ajustement du rythme si nécessaire.": "Acquired points, points to review and pace adjustment if needed.",
  "Durée et organisation": "Duration and organization",
  "Un rythme lisible avant l’inscription": "A clear pace before registration",
  "Le rythme dépend du niveau, de l’objectif et des disponibilités. La demande WhatsApp contient déjà ces informations pour accélérer la confirmation.": "The pace depends on level, goal and availability. The WhatsApp request already contains this information to speed up confirmation.",
  "1, 2 ou 3 sessions par semaine selon l’objectif.": "1, 2 or 3 sessions per week depending on the goal.",
  "1h, 1h30 ou 2h selon le niveau et la capacité de concentration.": "1h, 1h30 or 2h depending on level and concentration capacity.",
  "Individualisé pour corriger vite, groupe pour progresser dans une dynamique régulière.": "Individualized to correct quickly, group-based to progress in a regular dynamic.",
  "Livrable": "Deliverable",
  "Un plan de travail clair: niveau, priorité, rythme conseillé et prochaine étape.": "A clear work plan: level, priority, recommended pace and next step.",
  "Niveaux enfants": "Children's levels",
  "Un parcours adapté à l’âge et à l’autonomie": "A path adapted to age and autonomy",
  "L’enfant progresse mieux quand la séance correspond à son âge, sa concentration et ses habitudes de lecture.": "Children progress better when the session matches their age, concentration and reading habits.",
  "Départ": "Start",
  "Premiers repères": "First markers",
  "Pour découvrir les lettres, les sons et les premiers mots dans un cadre rassurant.": "To discover letters, sounds and first words in a reassuring setting.",
  "Jeux de lecture": "Reading games",
  "Routines courtes": "Short routines",
  "Progression": "Progress",
  "Lecture guidée": "Guided reading",
  "Pour lire plus régulièrement, reconnaître des mots fréquents et comprendre des consignes simples.": "To read more regularly, recognize frequent words and understand simple instructions.",
  "Phrases simples": "Simple sentences",
  "Vocabulaire thématique": "Themed vocabulary",
  "Compréhension par images": "Comprehension through images",
  "Confiance": "Confidence",
  "Pour encourager les petites phrases, les dialogues courts et la prise de parole.": "To encourage short sentences, brief dialogues and speaking.",
  "Mini-dialogues": "Mini-dialogues",
  "Réponses guidées": "Guided answers",
  "Prononciation douce": "Gentle pronunciation",
  "Évaluation enfant": "Child evaluation",
  "On commence par comprendre le profil de l’enfant": "We start by understanding the child's profile",
  "Avant de confirmer une place, l’équipe vérifie l’âge, le niveau, la capacité d’attention et le format le plus confortable.": "Before confirming a place, the team checks age, level, attention capacity and the most comfortable format.",
  "Demander une évaluation": "Request an evaluation",
  "Ce qui guide l’orientation": "What guides the orientation",
  "Âge": "Age",
  "Durée de séance et rythme adaptés à la concentration.": "Session length and pace adapted to concentration.",
  "Lettres connues, syllabes, mots, fluidité actuelle.": "Known letters, syllables, words and current fluency.",
  "Motivation": "Motivation",
  "Centres d’intérêt, confiance, besoin d’encouragement.": "Interests, confidence and need for encouragement.",
  "Famille": "Family",
  "Disponibilités, objectif parental et suivi possible à la maison.": "Availability, parental goal and possible follow-up at home.",
  "Les modules du programme enfants": "Children's programme modules",
  "Chaque module reste court, progressif et orienté vers la confiance de l’enfant.": "Each module stays short, progressive and focused on the child's confidence.",
  "Reconnaissance, prononciation et association progressive avec des mots simples.": "Recognition, pronunciation and progressive association with simple words.",
  "Syllabes, mots fréquents, phrases simples et correction bienveillante.": "Syllables, frequent words, simple sentences and supportive correction.",
  "Vocabulaire vivant": "Living vocabulary",
  "Thèmes proches de l’enfant: maison, famille, école, objets et actions.": "Themes close to the child: home, family, school, objects and actions.",
  "Images, consignes, questions courtes et reformulation adaptée à l’âge.": "Images, instructions, short questions and age-appropriate reformulation.",
  "Petites phrases, dialogues et répétition guidée sans pression.": "Short sentences, dialogues and guided repetition without pressure.",
  "Retour parent": "Parent feedback",
  "Points travaillés, conseils de révision et orientation pour la suite.": "Points worked on, revision advice and direction for the next step.",
  "Un rythme clair pour l’enfant et les parents": "A clear pace for the child and parents",
  "Le programme évite les séances trop lourdes. La durée est choisie selon l’âge, l’attention et l’objectif familial.": "The programme avoids sessions that are too heavy. Duration is chosen according to age, attention and family goal.",
  "1, 2 ou 3 sessions par semaine selon la disponibilité familiale.": "1, 2 or 3 sessions per week according to family availability.",
  "1h à 2h, avec recommandation selon l’âge et la concentration.": "1h to 2h, with a recommendation based on age and concentration.",
  "Individuel pour un suivi rapproché, groupe pour une dynamique motivante.": "Individual for closer follow-up, group for a motivating dynamic.",
  "Suivi parent": "Parent follow-up",
  "Objectifs courts, progrès observés et prochaines priorités.": "Short goals, observed progress and next priorities.",
  "Découvrir l’évaluation": "Discover the evaluation",
  "Voir le programme communication": "View the communication programme",
  "Découvrir le programme Communication arabe": "Discover the Arabic communication programme",
  "Découvrir le programme arabe enfants": "Discover the children's Arabic programme",
  "Découvrir la masterclass découverte": "Discover the discovery masterclass",
  "Communication arabe - Bayan Academy": "Arabic communication - Bayan Academy",
  "Programme Communication arabe Bayan Academy pour construire des phrases utiles, enrichir le vocabulaire et parler avec plus d’aisance.": "Bayan Academy Arabic communication programme to build useful sentences, enrich vocabulary and speak with more ease.",
  "Un parcours pour comprendre, répondre et communiquer en arabe dans un cadre guidé.": "A path to understand, answer and communicate in Arabic within a guided framework.",
  "Programme expression orale": "Oral expression programme",
  "Construire des phrases utiles, comprendre les échanges simples et parler avec plus d’assurance.": "Build useful sentences, understand simple exchanges and speak with more confidence.",
  "Un parcours centré sur l’usage réel": "A path centered on real use",
  "Ce programme transforme le vocabulaire passif en phrases utilisables. L’objectif est de comprendre, répondre et prendre la parole progressivement, sans rester bloqué sur la théorie.": "This programme turns passive vocabulary into usable sentences. The goal is to understand, answer and speak progressively, without staying blocked on theory.",
  "Adultes, adolescents et grands enfants motivés": "Adults, teenagers and motivated older children",
  "Individualisé ou petit groupe": "Individualized or small group",
  "Sessions de 1h, 1h30 ou 2h": "1h, 1h30 or 2h sessions",
  "Dès 38.50 €/mois selon le rythme choisi": "From €38.50/month depending on the chosen pace",
  "Comprendre": "Understand",
  "Repérer les mots clés, les consignes et les intentions dans des phrases simples.": "Identify key words, instructions and intent in simple sentences.",
  "Répondre": "Answer",
  "Construire des réponses courtes, correctes et réutilisables au quotidien.": "Build short, correct and reusable everyday answers.",
  "Prononcer": "Pronounce",
  "Travailler les sons difficiles, le rythme et l’aisance de lecture à voix haute.": "Work on difficult sounds, rhythm and ease reading aloud.",
  "Dialoguer": "Dialogue",
  "Simuler des situations concrètes pour gagner en confiance progressivement.": "Simulate concrete situations to progressively build confidence.",
  "Niveaux de communication": "Communication levels",
  "Un chemin clair de la phrase guidée au dialogue": "A clear path from guided sentence to dialogue",
  "Le niveau ne sert pas à classer l’étudiant. Il sert à choisir les phrases, les corrections et les situations les plus utiles.": "The level is not used to rank the student. It is used to choose the most useful sentences, corrections and situations.",
  "Déclic oral": "Speaking breakthrough",
  "Pour apprendre à répondre avec des phrases simples et éviter le blocage au moment de parler.": "To learn to answer with simple sentences and avoid freezing when speaking.",
  "Questions fréquentes": "Frequent questions",
  "Réponses modèles": "Model answers",
  "Prononciation guidée": "Guided pronunciation",
  "Aisance guidée": "Guided ease",
  "Pour enrichir les réponses, reformuler et tenir un échange simple avec moins d’hésitation.": "To enrich answers, rephrase and hold a simple exchange with less hesitation.",
  "Dialogues courts": "Short dialogues",
  "Correction immédiate": "Immediate correction",
  "Conversation structurée": "Structured conversation",
  "Pour organiser ses idées, expliquer une situation et comprendre des échanges plus naturels.": "To organize ideas, explain a situation and understand more natural exchanges.",
  "Expression organisée": "Organized expression",
  "Écoute active": "Active listening",
  "Fluidité progressive": "Progressive fluency",
  "Évaluation orale": "Oral evaluation",
  "On identifie ce qui bloque la prise de parole": "We identify what blocks speaking",
  "L’évaluation observe le vocabulaire disponible, la compréhension des questions, la prononciation et la capacité à construire une réponse simple.": "The evaluation observes available vocabulary, question comprehension, pronunciation and the ability to build a simple answer.",
  "Faire une évaluation orale": "Do an oral evaluation",
  "Ce qui est vérifié": "What is checked",
  "Vocabulaire": "Vocabulary",
  "Mots connus, mots actifs et thèmes prioritaires.": "Known words, active words and priority themes.",
  "Capacité à répondre en phrase courte sans traduction mot à mot.": "Ability to answer in a short sentence without word-for-word translation.",
  "Prononciation": "Pronunciation",
  "Sons à corriger, rythme et clarté de la parole.": "Sounds to correct, rhythm and clarity of speech.",
  "Situation": "Situation",
  "Objectifs concrets: famille, voyage, étude, conversation ou reprise des bases.": "Concrete goals: family, travel, study, conversation or rebuilding foundations.",
  "Des modules pensés pour parler plus vite": "Modules designed to speak sooner",
  "Chaque module produit quelque chose d’utilisable: une phrase, une réponse, une correction ou une situation maîtrisée.": "Each module produces something usable: a sentence, an answer, a correction or a mastered situation.",
  "Phrases utiles": "Useful sentences",
  "Structures courtes pour se présenter, demander, répondre et relancer une conversation.": "Short structures to introduce yourself, ask, answer and continue a conversation.",
  "Mots fréquents classés par thèmes, puis réutilisés immédiatement à l’oral.": "Frequent words grouped by theme, then immediately reused orally.",
  "Compréhension orale": "Oral comprehension",
  "Questions, consignes et expressions simples pour comprendre avant de répondre.": "Questions, instructions and simple expressions to understand before answering.",
  "Sons difficiles, articulation, rythme et lecture à voix haute.": "Difficult sounds, articulation, rhythm and reading aloud.",
  "Situations réelles": "Real situations",
  "Dialogues autour de la famille, du quotidien, du voyage ou d’un objectif personnel.": "Dialogues around family, daily life, travel or a personal goal.",
  "Feedback personnalisé": "Personalized feedback",
  "Corrections précises et mini-plan de progression après chaque étape.": "Precise corrections and a mini progress plan after each step.",
  "Un rythme qui laisse vraiment pratiquer": "A pace that really leaves room to practice",
  "Les séances gardent du temps pour parler, corriger et recommencer. Le rythme est ajusté selon la disponibilité et l’objectif de progression.": "Sessions keep time to speak, correct and try again. The pace is adjusted according to availability and progress goals.",
  "1, 2 ou 3 sessions par semaine selon l’urgence et la régularité souhaitée.": "1, 2 or 3 sessions per week depending on urgency and desired consistency.",
  "1h pour un entretien léger, 1h30 ou 2h pour pratiquer plus longtemps.": "1h for a light exchange, 1h30 or 2h to practice longer.",
  "Individuel pour corriger précisément, groupe pour multiplier les échanges.": "Individual to correct precisely, group to multiply exchanges.",
  "Points de progression observés: compréhension, réponse, prononciation et fluidité.": "Progress points observed: comprehension, response, pronunciation and fluency.",
  "Choisissez le format de communication adapté": "Choose the right communication format",
  "Le tarif est confirmé sur WhatsApp avec le rythme, la durée de séance et le format individualisé ou groupe.": "The price is confirmed on WhatsApp with the pace, session duration and individual or group format.",
  "Parcours oral": "Oral path",
  "Pour travailler vocabulaire, phrases utiles et aisance orale dans un cadre régulier.": "To work on vocabulary, useful sentences and oral ease in a regular framework.",
  "Complet": "Complete",
  "Pour combiner lecture, compréhension et communication avec un programme complet.": "To combine reading, comprehension and communication with a complete programme.",
  "Voir le complet": "View the complete path",
  "Une première session pour identifier les blocages et choisir le bon rythme.": "A first session to identify blockers and choose the right pace.",
  "Une progression courte, active et orientée parole.": "Short, active progress focused on speaking.",
  "Diagnostic oral": "Oral diagnosis",
  "On repère le niveau, les mots disponibles et les blocages de réponse.": "We identify the level, available words and response blockers.",
  "Plan de phrases": "Sentence plan",
  "Vous recevez les structures prioritaires à pratiquer selon votre objectif.": "You receive priority structures to practice according to your goal.",
  "Mise en situation": "Practice situation",
  "Chaque séance alterne écoute, réponse, correction et répétition active.": "Each session alternates listening, answering, correction and active repetition.",
  "Le formulaire WhatsApp envoie le programme, le tarif, la durée et le rythme choisis.": "The WhatsApp form sends the chosen programme, price, duration and pace.",
  "Prêt à pratiquer ?": "Ready to practice?"
};
Object.assign(builtInTranslations.en.strings, detailPageTranslations);
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

const updateThemeToggleLabel = () => {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) {
    return;
  }
  const label = currentTheme === "dark" ? "Activer le thème clair" : "Activer le thème sombre";
  const translatedLabel = translateText(label, currentLanguage);
  button.setAttribute("aria-label", translatedLabel);
  button.setAttribute("title", translatedLabel);
  button.setAttribute("aria-pressed", String(currentTheme === "light"));
};

const applyTheme = (theme, persist = true) => {
  currentTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = currentTheme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", currentTheme === "light" ? "#f7f2e8" : "#1a1a1a");
  });
  if (persist) {
    try {
      localStorage.setItem(themeStorageKey, currentTheme);
    } catch (error) {
      // Theme persistence is optional; the visual switch still works.
    }
  }
  updateThemeToggleLabel();
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
  updateThemeToggleLabel();
};

const injectThemeSwitcher = () => {
  document.querySelectorAll(".nav-actions").forEach((actions) => {
    if (actions.querySelector("[data-theme-toggle]")) {
      return;
    }
    const button = document.createElement("button");
    button.className = "theme-toggle";
    button.type = "button";
    button.dataset.themeToggle = "true";
    button.innerHTML = `<svg class="theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.5A5.5 5.5 0 1 1 12 6a5.5 5.5 0 0 1 0 11.5Zm0-1.8A3.7 3.7 0 1 0 12 8a3.7 3.7 0 0 0 0 7.7ZM12 4.3c-.5 0-.9-.4-.9-.9V1.9c0-.5.4-.9.9-.9s.9.4.9.9v1.5c0 .5-.4.9-.9.9Zm0 18.7c-.5 0-.9-.4-.9-.9v-1.5c0-.5.4-.9.9-.9s.9.4.9.9v1.5c0 .5-.4.9-.9.9ZM4.1 5.4 3 4.3c-.4-.4-.4-.9 0-1.3.4-.4.9-.4 1.3 0l1.1 1.1c.4.4.4.9 0 1.3-.4.4-.9.4-1.3 0Zm15.6 15.6-1.1-1.1c-.4-.4-.4-.9 0-1.3.4-.4.9-.4 1.3 0l1.1 1.1c.4.4.4.9 0 1.3-.4.4-.9.4-1.3 0ZM3.4 12.9H1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h1.5c.5 0 .9.4.9.9s-.4.9-.9.9Zm18.7 0h-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h1.5c.5 0 .9.4.9.9s-.4.9-.9.9ZM3 21c-.4-.4-.4-.9 0-1.3l1.1-1.1c.4-.4.9-.4 1.3 0 .4.4.4.9 0 1.3L4.3 21c-.4.4-.9.4-1.3 0Zm15.6-15.6c-.4-.4-.4-.9 0-1.3L19.7 3c.4-.4.9-.4 1.3 0 .4.4.4.9 0 1.3l-1.1 1.1c-.4.4-.9.4-1.3 0Z"/></svg><svg class="theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 15.7c.5.2.7.8.4 1.3A9.6 9.6 0 0 1 3.2 9.9 9.6 9.6 0 0 1 10.7 2c.5-.1 1 .2 1.1.7.1.4-.1.8-.4 1.1a7 7 0 0 0 8.4 10.5c.3-.3.7-.3 1.1-.1Zm-2.7 1a8.8 8.8 0 0 1-8.3-11 7.8 7.8 0 1 0 8.3 11Z"/></svg>`;
    button.addEventListener("click", () => {
      applyTheme(currentTheme === "light" ? "dark" : "light");
    });
    actions.insertBefore(button, menuToggle || actions.firstChild);
  });
  updateThemeToggleLabel();
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

const scheduleTranslationCatalogLoad = () => {
  const loadWhenIdle = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadTranslationCatalog, { timeout: 3500 });
      return;
    }
    setTimeout(loadTranslationCatalog, 1500);
  };

  if (document.readyState === "complete") {
    loadWhenIdle();
    return;
  }
  window.addEventListener("load", loadWhenIdle, { once: true });
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

document.querySelectorAll("[data-card-link]").forEach((card) => {
  const openCardLink = () => {
    const href = card.dataset.cardLink;
    if (href) {
      window.location.href = href;
    }
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }
    openCardLink();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    if (event.target.closest("a, button")) {
      return;
    }
    event.preventDefault();
    openCardLink();
  });
});

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

document.querySelectorAll("[data-level-test]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const audience = data.get("audience") || "";
    const level = data.get("level") || "";
    const goal = data.get("goal") || "";
    const format = data.get("format") || "";
    const levelLabel = form.elements.level?.selectedOptions?.[0]?.dataset.bayanFrText || form.elements.level?.selectedOptions?.[0]?.textContent || level;
    const goalLabel = form.elements.goal?.selectedOptions?.[0]?.dataset.bayanFrText || form.elements.goal?.selectedOptions?.[0]?.textContent || goal;
    const formatLabel = form.elements.format?.selectedOptions?.[0]?.dataset.bayanFrText || form.elements.format?.selectedOptions?.[0]?.textContent || format;
    let programme = "Masterclasses d’arabe";
    let recommendation = "Recommandation: Masterclasses d’arabe. Ce parcours est conseillé pour renforcer la lecture, la compréhension et les bases.";

    if (audience === "child" || goal === "child") {
      programme = "Programme arabe enfants";
      recommendation = "Recommandation: Programme arabe enfants. Le plus adapté est de confirmer l’âge, le niveau de lecture et le rythme avec l’équipe.";
    } else if (goal === "speaking" || level === "speaking") {
      programme = "Communication arabe";
      recommendation = "Recommandation: Communication arabe. Ce parcours est conseillé si l’objectif principal est de comprendre et parler avec plus d’aisance.";
    }

    const result = form.querySelector("[data-level-result]");
    const resultText = form.querySelector("[data-level-result-text]");
    const whatsappLink = form.querySelector("[data-level-whatsapp]");
    if (resultText) {
      resultText.__bayanFrText = recommendation;
      resultText.textContent = translateText(recommendation, currentLanguage);
    }
    if (whatsappLink) {
      const message = encodeURIComponent(`${translateText("Salam, je souhaite réserver une place chez Bayan Academy.", currentLanguage)}\n${translateText("Programme", currentLanguage)}: ${translateText(programme, currentLanguage)}\n${translateText("Niveau actuel", currentLanguage)}: ${translateText(levelLabel, currentLanguage)}\n${translateText("Objectif principal", currentLanguage)}: ${translateText(goalLabel, currentLanguage)}\n${translateText("Format préféré", currentLanguage)}: ${translateText(formatLabel, currentLanguage)}`);
      whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    }
    if (result) {
      result.hidden = false;
    }
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

injectThemeSwitcher();
injectLanguageSwitcher();
applyTheme(currentTheme, false);
applyTranslations(currentLanguage);
scheduleTranslationCatalogLoad();
