import { readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";

const cssVersion = "performance-cls";
const jsVersion = "blog-seo";
const baseUrl = "https://yassirbrs.github.io/bayonne-academy";

const articles = [
  {
    "slug": "learn-arabic",
    "legacySlug": "learn-arabic-apprendre-arabe",
    "focusKeyword": "learn arabic",
    "monthlySearches": 50000,
    "frTitle": "Learn Arabic: apprendre l’arabe avec une méthode claire",
    "enTitle": "Learn Arabic: A Clear Method for Beginners",
    "frSummary": "Une méthode simple pour apprendre l’arabe pas à pas, sans se disperser entre trop de ressources.",
    "enSummary": "A simple method to learn Arabic step by step without getting scattered across too many resources.",
    "frNeed": "Beaucoup d’apprenants veulent commencer l’arabe, mais ne savent pas dans quel ordre travailler. Le plus important est de choisir une méthode claire, progressive et adaptée au niveau réel.",
    "enNeed": "Many learners want to start Arabic but do not know which order to follow. The most important step is choosing a clear, progressive method adapted to the real level.",
    "frMethod": "Commencez par trois piliers: alphabet et sons, lecture courte, puis phrases utiles. Une progression équilibrée donne de meilleurs résultats qu’une accumulation de vidéos ou de listes de mots.",
    "enMethod": "Start with three pillars: alphabet and sounds, short reading, then useful sentences. A balanced progression works better than collecting videos or word lists.",
    "tipsFr": [
      "Apprendre les sons avec les lettres",
      "Lire des mots courts chaque semaine",
      "Réutiliser le vocabulaire dans des phrases",
      "Mesurer le niveau avant de choisir un programme"
    ],
    "tipsEn": [
      "Learn sounds with letters",
      "Read short words every week",
      "Reuse vocabulary in sentences",
      "Check the level before choosing a programme"
    ],
    "link": "index.html#test-niveau",
    "frLinkText": "faire le test de niveau",
    "enLinkText": "take the level test"
  },
  {
    "slug": "apprendre-arabe-facilement",
    "legacySlug": "apprendre-l-arabe-facilement",
    "focusKeyword": "apprendre l arabe facilement",
    "monthlySearches": 5000,
    "frTitle": "Apprendre l’arabe facilement: méthode réaliste et progressive",
    "enTitle": "Learn Arabic Easily: A Realistic Progressive Method",
    "frSummary": "Une approche réaliste pour rendre l’apprentissage de l’arabe plus clair, plus régulier et moins intimidant.",
    "enSummary": "A realistic approach to make Arabic learning clearer, steadier and less intimidating.",
    "frNeed": "Apprendre l’arabe devient plus simple quand le parcours est découpé en petites étapes. La facilité vient surtout de la régularité, du bon ordre et d’une correction adaptée.",
    "enNeed": "Arabic becomes easier when the path is divided into small steps. Ease comes mainly from consistency, the right order and adapted correction.",
    "frMethod": "Divisez chaque séance en quatre temps: reconnaître, lire, comprendre, parler. Cette structure rend la langue moins intimidante et permet de suivre les progrès semaine après semaine.",
    "enMethod": "Split each session into four moments: recognize, read, understand and speak. This structure makes the language less intimidating and makes progress easier to track.",
    "tipsFr": [
      "Travailler peu mais régulièrement",
      "Éviter les longues listes",
      "Lire à voix haute",
      "Choisir un objectif principal"
    ],
    "tipsEn": [
      "Work little but consistently",
      "Avoid long lists",
      "Read aloud",
      "Choose one main goal"
    ],
    "link": "programme-masterclasses-arabe.html",
    "frLinkText": "découvrir les masterclasses d’arabe",
    "enLinkText": "discover the Arabic masterclasses"
  },
  {
    "slug": "cours-arabe-en-ligne",
    "legacySlug": "cours-d-arabe-en-ligne",
    "focusKeyword": "cours d arabe en ligne",
    "monthlySearches": 5000,
    "frTitle": "Cours d’arabe en ligne: comment choisir le bon programme",
    "enTitle": "Online Arabic Classes: How to Choose the Right Programme",
    "frSummary": "Les critères essentiels pour choisir un cours d’arabe en ligne sérieux, flexible et adapté à votre niveau.",
    "enSummary": "The essential criteria for choosing a serious, flexible online Arabic class adapted to your level.",
    "frNeed": "Quand une personne cherche un cours d’arabe en ligne, elle compare souvent les formats, les tarifs, le niveau et la qualité du suivi. La page doit répondre à ces critères rapidement.",
    "enNeed": "When someone searches for online Arabic classes, they often compare formats, pricing, level and follow-up quality. The page must answer those points quickly.",
    "frMethod": "Vérifiez si le programme propose une évaluation, un rythme clair, des séances de durée adaptée et un échange simple avec l’équipe avant l’inscription.",
    "enMethod": "Check whether the programme offers an evaluation, a clear pace, suitable session duration and simple communication before registration.",
    "tipsFr": [
      "Comparer individuel et groupe",
      "Vérifier la durée des séances",
      "Lire la page tarifs",
      "Confirmer le niveau avant de réserver"
    ],
    "tipsEn": [
      "Compare individual and group formats",
      "Check session duration",
      "Read the pricing page",
      "Confirm level before booking"
    ],
    "link": "nos-formations.html",
    "frLinkText": "comparer les programmes",
    "enLinkText": "compare the programmes"
  },
  {
    "slug": "cours-arabe-debutant",
    "legacySlug": "cours-arabe-debutant",
    "focusKeyword": "cours arabe débutant",
    "monthlySearches": 500,
    "frTitle": "Cours arabe débutant: que doit contenir une bonne première étape ?",
    "enTitle": "Beginner Arabic Course: What Should the First Step Include?",
    "frSummary": "Ce qu’un bon cours d’arabe débutant doit contenir pour construire des bases solides dès le départ.",
    "enSummary": "What a good beginner Arabic course should include to build solid foundations from the start.",
    "frNeed": "Un débutant ne doit pas recevoir un cours trop dense. La priorité est de construire une base stable: sons, lettres, lecture lente, vocabulaire utile et premières phrases.",
    "enNeed": "A beginner should not receive an overloaded course. The priority is a stable base: sounds, letters, slow reading, useful vocabulary and first sentences.",
    "frMethod": "Le bon cours commence par une évaluation simple, puis avance par petits blocs. Chaque séance doit produire un résultat visible: lire un mot, comprendre une phrase ou répondre simplement.",
    "enMethod": "A good course starts with a simple evaluation, then moves in small blocks. Each session should produce a visible result: reading a word, understanding a sentence or answering simply.",
    "tipsFr": [
      "Commencer par le niveau réel",
      "Limiter les objectifs",
      "Pratiquer à voix haute",
      "Revoir les bases sans honte"
    ],
    "tipsEn": [
      "Start from the real level",
      "Limit goals",
      "Practice aloud",
      "Review foundations without embarrassment"
    ],
    "link": "programme-masterclasses-arabe.html#niveaux",
    "frLinkText": "voir les niveaux acceptés",
    "enLinkText": "view accepted levels"
  },
  {
    "slug": "parler-arabe",
    "legacySlug": "parler-arabe",
    "focusKeyword": "parler arabe",
    "monthlySearches": 5000,
    "frTitle": "Parler arabe: passer du vocabulaire aux vraies phrases",
    "enTitle": "Speak Arabic: Move from Vocabulary to Real Sentences",
    "frSummary": "Comment passer du vocabulaire isolé à des phrases utiles pour parler arabe avec plus d’aisance.",
    "enSummary": "How to move from isolated vocabulary to useful sentences so you can speak Arabic with more ease.",
    "frNeed": "Parler arabe demande plus que mémoriser des mots. Il faut apprendre à comprendre une question, construire une réponse et répéter des situations proches de la vie réelle.",
    "enNeed": "Speaking Arabic requires more than memorizing words. You need to understand a question, build an answer and repeat situations close to real life.",
    "frMethod": "Travaillez les questions fréquentes, les réponses modèles et les mini-dialogues. Répéter une phrase utile avec plusieurs variations crée une vraie aisance.",
    "enMethod": "Work on frequent questions, model answers and mini-dialogues. Repeating a useful sentence with several variations creates real ease.",
    "tipsFr": [
      "Apprendre des phrases complètes",
      "Répéter sans traduire mot à mot",
      "Corriger la prononciation",
      "Simuler des situations concrètes"
    ],
    "tipsEn": [
      "Learn complete sentences",
      "Repeat without word-for-word translation",
      "Correct pronunciation",
      "Simulate concrete situations"
    ],
    "link": "programme-communication-arabe.html",
    "frLinkText": "voir le programme Communication arabe",
    "enLinkText": "view the Arabic Communication programme"
  },
  {
    "slug": "apprendre-arabe-gratuitement",
    "legacySlug": "apprendre-l-arabe-gratuitement",
    "focusKeyword": "apprendre l arabe gratuitement",
    "monthlySearches": 5000,
    "frTitle": "Apprendre l’arabe gratuitement: que faire avant un programme accompagné ?",
    "enTitle": "Learn Arabic for Free: What to Do Before a Guided Programme",
    "frSummary": "Comment utiliser les ressources gratuites intelligemment avant de passer à un programme accompagné.",
    "enSummary": "How to use free resources wisely before moving to a guided programme.",
    "frNeed": "Les ressources gratuites peuvent aider à découvrir la langue, mais elles manquent souvent de correction, de rythme et d’évaluation. Il faut donc les utiliser avec une stratégie.",
    "enNeed": "Free resources can help you discover the language, but they often lack correction, pace and evaluation. They should be used with a strategy.",
    "frMethod": "Utilisez le gratuit pour tester l’alphabet, écouter les sons et mémoriser quelques phrases. Ensuite, faites vérifier votre niveau pour éviter de répéter les mêmes erreurs.",
    "enMethod": "Use free resources to test the alphabet, listen to sounds and memorize a few sentences. Then have your level checked to avoid repeating the same mistakes.",
    "tipsFr": [
      "Choisir une seule ressource",
      "Noter les questions",
      "Demander une correction",
      "Passer au suivi quand les blocages reviennent"
    ],
    "tipsEn": [
      "Choose one resource",
      "Write down questions",
      "Ask for correction",
      "Move to guided support when blockers repeat"
    ],
    "link": "index.html#test-niveau",
    "frLinkText": "commencer par le test de niveau",
    "enLinkText": "start with the level test"
  },
  {
    "slug": "apprendre-arabe-en-ligne",
    "legacySlug": "apprendre-l-arabe-en-ligne",
    "focusKeyword": "apprendre l arabe en ligne",
    "monthlySearches": 500,
    "frTitle": "Apprendre l’arabe en ligne: construire une routine efficace",
    "enTitle": "Learn Arabic Online: Build an Effective Routine",
    "frSummary": "Une routine simple pour apprendre l’arabe en ligne avec méthode, flexibilité et suivi régulier.",
    "enSummary": "A simple routine to learn Arabic online with method, flexibility and regular support.",
    "frNeed": "L’apprentissage en ligne fonctionne quand le cadre est visible. Sans planning, sans correction et sans objectif, l’étudiant peut vite accumuler des ressources sans progresser.",
    "enNeed": "Online learning works when the structure is visible. Without planning, correction and goals, a student can quickly collect resources without progressing.",
    "frMethod": "Planifiez des séances fixes, une révision courte entre les cours et un objectif par semaine: lire plus fluide, comprendre un thème ou répondre à des questions simples.",
    "enMethod": "Plan fixed sessions, a short review between classes and one weekly goal: read more fluently, understand one theme or answer simple questions.",
    "tipsFr": [
      "Bloquer des créneaux réguliers",
      "Préparer les questions",
      "Revoir après chaque séance",
      "Choisir un format adapté"
    ],
    "tipsEn": [
      "Block regular time slots",
      "Prepare questions",
      "Review after each session",
      "Choose a suitable format"
    ],
    "link": "contactez-nous.html",
    "frLinkText": "demander une orientation",
    "enLinkText": "request guidance"
  },
  {
    "slug": "cours-arabe",
    "legacySlug": "cours-arabe",
    "focusKeyword": "cours arabe",
    "monthlySearches": 5000,
    "frTitle": "Cours arabe: les critères pour choisir une formation utile",
    "enTitle": "Arabic Course: Criteria for Choosing Useful Training",
    "frSummary": "Les critères à vérifier avant de choisir un cours d’arabe vraiment utile pour votre objectif.",
    "enSummary": "The criteria to check before choosing an Arabic course that is truly useful for your goal.",
    "frNeed": "Un cours d’arabe peut répondre à plusieurs besoins: débuter, reprendre les bases, parler, lire plus vite ou accompagner un enfant. Le bon choix dépend de l’objectif réel.",
    "enNeed": "An Arabic course can answer several needs: starting, rebuilding foundations, speaking, reading faster or supporting a child. The right choice depends on the real goal.",
    "frMethod": "Avant de réserver, clarifiez l’objectif principal, le niveau actuel, le format souhaité et la fréquence possible. Ces éléments orientent vers le bon programme.",
    "enMethod": "Before booking, clarify the main goal, current level, preferred format and possible frequency. These elements point to the right programme.",
    "tipsFr": [
      "Définir le public",
      "Choisir l’objectif",
      "Comparer les formats",
      "Vérifier les tarifs"
    ],
    "tipsEn": [
      "Define the audience",
      "Choose the goal",
      "Compare formats",
      "Check pricing"
    ],
    "link": "nos-formations.html",
    "frLinkText": "voir tous les cours disponibles",
    "enLinkText": "view all available courses"
  },
  {
    "slug": "alphabet-arabe-facile",
    "legacySlug": "alphabet-arabe-facile",
    "focusKeyword": "alphabet arabe facile",
    "monthlySearches": 500,
    "frTitle": "Alphabet arabe facile: apprendre les lettres sans confusion",
    "enTitle": "Easy Arabic Alphabet: Learn Letters Without Confusion",
    "frSummary": "Une méthode simple pour apprendre l’alphabet arabe sans confusion entre les formes et les sons.",
    "enSummary": "A simple method to learn the Arabic alphabet without confusion between shapes and sounds.",
    "frNeed": "L’alphabet arabe paraît difficile parce que les lettres changent de forme selon leur position. Une méthode facile présente peu de lettres à la fois et les relie rapidement à des mots.",
    "enNeed": "The Arabic alphabet seems difficult because letters change shape depending on position. An easy method introduces a few letters at a time and quickly connects them to words.",
    "frMethod": "Apprenez un petit groupe de lettres, prononcez-les, écrivez-les puis lisez des syllabes courtes. Le passage rapide à la lecture évite l’apprentissage abstrait.",
    "enMethod": "Learn a small group of letters, pronounce them, write them, then read short syllables. Moving quickly to reading avoids abstract learning.",
    "tipsFr": [
      "Étudier par familles de formes",
      "Lire des syllabes",
      "Dire les sons à voix haute",
      "Réviser tous les jours brièvement"
    ],
    "tipsEn": [
      "Study by shape families",
      "Read syllables",
      "Say sounds aloud",
      "Review briefly every day"
    ],
    "link": "programme-masterclasses-arabe.html#niveaux",
    "frLinkText": "voir le niveau fondations",
    "enLinkText": "view the foundation level"
  },
  {
    "slug": "alphabet-arabe-pdf-enfants",
    "legacySlug": "alphabet-arabe-pdf-enfants",
    "focusKeyword": "alphabet arabe pdf pour les petit",
    "monthlySearches": 500,
    "frTitle": "Alphabet arabe PDF pour les petits: comment l’utiliser intelligemment",
    "enTitle": "Arabic Alphabet PDF for Children: How to Use It Well",
    "frSummary": "Comment utiliser un PDF d’alphabet arabe avec un enfant sans remplacer l’écoute, l’oral et la pratique.",
    "enSummary": "How to use an Arabic alphabet PDF with a child without replacing listening, speaking and practice.",
    "frNeed": "Un PDF d’alphabet peut aider un enfant, mais il ne suffit pas. L’enfant a besoin d’entendre le son, de reconnaître la lettre et de l’utiliser dans un mot concret.",
    "enNeed": "An alphabet PDF can help a child, but it is not enough. The child needs to hear the sound, recognize the letter and use it in a concrete word.",
    "frMethod": "Utilisez une fiche courte, une image, un son et un mot. La séance doit rester légère pour garder la motivation et la concentration.",
    "enMethod": "Use one short worksheet, one image, one sound and one word. The session should stay light to preserve motivation and attention.",
    "tipsFr": [
      "Limiter la fiche à quelques lettres",
      "Ajouter l’oral",
      "Relier à des objets connus",
      "Faire un retour parent simple"
    ],
    "tipsEn": [
      "Limit the worksheet to a few letters",
      "Add oral practice",
      "Connect to known objects",
      "Give simple parent feedback"
    ],
    "link": "programme-arabe-enfants.html#modules",
    "frLinkText": "voir les modules enfants",
    "enLinkText": "view the children’s modules"
  },
  {
    "slug": "apprendre-lire-arabe",
    "legacySlug": "apprendre-a-lire-l-arabe",
    "focusKeyword": "apprendre à lire l arabe",
    "monthlySearches": 500,
    "frTitle": "Apprendre à lire l’arabe: étapes pour gagner en fluidité",
    "enTitle": "Learn to Read Arabic: Steps to Build Fluency",
    "frSummary": "Les étapes essentielles pour apprendre à lire l’arabe avec plus de fluidité et de compréhension.",
    "enSummary": "The essential steps to learn to read Arabic with more fluency and comprehension.",
    "frNeed": "Lire l’arabe ne consiste pas seulement à reconnaître les lettres. Il faut travailler le son, l’enchaînement, le rythme et la compréhension des mots.",
    "enNeed": "Reading Arabic is not only about recognizing letters. You must work on sound, flow, rhythm and word comprehension.",
    "frMethod": "Lisez un texte court, identifiez les hésitations, corrigez un point précis puis relisez. Cette boucle crée une fluidité réelle.",
    "enMethod": "Read a short text, identify hesitation, correct one precise point, then reread. This loop builds real fluency.",
    "tipsFr": [
      "Lire lentement au départ",
      "Corriger un blocage à la fois",
      "Relire le même passage",
      "Ajouter du vocabulaire utile"
    ],
    "tipsEn": [
      "Read slowly at first",
      "Correct one blocker at a time",
      "Reread the same passage",
      "Add useful vocabulary"
    ],
    "link": "programme-masterclasses-arabe.html#modules",
    "frLinkText": "voir les modules de lecture",
    "enLinkText": "view the reading modules"
  },
  {
    "slug": "lecture-arabe-debutant",
    "legacySlug": "lecture-arabe-debutant",
    "focusKeyword": "lecture arabe debutant",
    "monthlySearches": 500,
    "frTitle": "Lecture arabe débutant: exercices simples pour progresser",
    "enTitle": "Beginner Arabic Reading: Simple Exercises to Improve",
    "frSummary": "Des exercices simples pour aider les débutants à lire l’arabe sans blocage ni surcharge.",
    "enSummary": "Simple exercises to help beginners read Arabic without blocking or overload.",
    "frNeed": "Un débutant bloque souvent sur les mêmes points: confusions de lettres, sons proches, lenteur et manque de vocabulaire. Les exercices doivent cibler ces obstacles.",
    "enNeed": "Beginners often block on the same points: letter confusion, close sounds, slow pace and limited vocabulary. Exercises should target these obstacles.",
    "frMethod": "Alternez syllabes, mots courts, phrases simples et relecture. La relecture est essentielle car elle transforme l’effort initial en fluidité.",
    "enMethod": "Alternate syllables, short words, simple sentences and rereading. Rereading is essential because it turns initial effort into fluency.",
    "tipsFr": [
      "Commencer par des syllabes",
      "Lire à voix haute",
      "Chronométrer sans pression",
      "Garder les textes courts"
    ],
    "tipsEn": [
      "Start with syllables",
      "Read aloud",
      "Time yourself without pressure",
      "Keep texts short"
    ],
    "link": "programme-masterclasses-arabe.html#evaluation",
    "frLinkText": "commencer par une évaluation",
    "enLinkText": "start with an evaluation"
  },
  {
    "slug": "apprendre-arabe-pdf",
    "legacySlug": "apprendre-l-arabe-pdf",
    "focusKeyword": "apprendre l arabe pdf",
    "monthlySearches": 500,
    "frTitle": "Apprendre l’arabe PDF: avantages, limites et méthode",
    "enTitle": "Learn Arabic PDF: Benefits, Limits and Method",
    "frSummary": "Les avantages et les limites des supports PDF pour apprendre l’arabe avec une vraie méthode.",
    "enSummary": "The benefits and limits of PDF materials when learning Arabic with a real method.",
    "frNeed": "Un PDF peut structurer la révision, mais il ne corrige pas la prononciation et ne vérifie pas la compréhension. Il doit compléter une méthode, pas la remplacer.",
    "enNeed": "A PDF can structure review, but it does not correct pronunciation or check comprehension. It should support a method, not replace it.",
    "frMethod": "Utilisez le PDF comme fiche de révision: une page, un objectif, un exercice oral. Puis demandez une correction sur les points qui restent difficiles.",
    "enMethod": "Use the PDF as a review sheet: one page, one goal, one oral exercise. Then ask for correction on the points that remain difficult.",
    "tipsFr": [
      "Choisir un PDF court",
      "Ajouter de l’oral",
      "Noter les erreurs",
      "Faire vérifier le niveau"
    ],
    "tipsEn": [
      "Choose a short PDF",
      "Add oral practice",
      "Write down mistakes",
      "Have the level checked"
    ],
    "link": "index.html#test-niveau",
    "frLinkText": "vérifier votre niveau",
    "enLinkText": "check your level"
  },
  {
    "slug": "cours-arabe-gratuit-pdf",
    "legacySlug": "cours-d-arabe-gratuit-pdf",
    "focusKeyword": "cours d arabe gratuit pdf",
    "monthlySearches": 500,
    "frTitle": "Cours d’arabe gratuit PDF: comment réviser sans se perdre",
    "enTitle": "Free Arabic Course PDF: How to Review Without Getting Lost",
    "frSummary": "Comment réviser avec un cours d’arabe gratuit en PDF sans se perdre entre trop de supports.",
    "enSummary": "How to review with a free Arabic course PDF without getting lost between too many materials.",
    "frNeed": "Les supports gratuits peuvent être utiles, mais l’enjeu est d’éviter la dispersion. Trop de ressources peuvent ralentir la progression si elles ne suivent pas un ordre clair.",
    "enNeed": "Free resources can be useful, but the challenge is avoiding dispersion. Too many files can slow progress if they do not follow a clear order.",
    "frMethod": "Gardez un seul support pendant deux semaines, suivez les exercices dans l’ordre, puis faites un bilan: lecture, vocabulaire, compréhension et oral.",
    "enMethod": "Keep one resource for two weeks, follow exercises in order, then review: reading, vocabulary, comprehension and speaking.",
    "tipsFr": [
      "Éviter d’accumuler trop de supports",
      "Créer une routine courte",
      "Suivre un ordre",
      "Demander une orientation si besoin"
    ],
    "tipsEn": [
      "Avoid downloading too many files",
      "Create a short routine",
      "Follow an order",
      "Ask for guidance if needed"
    ],
    "link": "contactez-nous.html",
    "frLinkText": "demander conseil",
    "enLinkText": "ask for guidance"
  },
  {
    "slug": "apprendre-chiffres-arabes",
    "legacySlug": "apprendre-les-chiffres-arabes",
    "focusKeyword": "apprendre les chiffres arabes",
    "monthlySearches": 500,
    "frTitle": "Apprendre les chiffres arabes: méthode simple et mémorisation",
    "enTitle": "Learn Arabic Numbers: Simple Method and Memorization",
    "frSummary": "Une méthode simple pour apprendre les chiffres arabes et les utiliser dans des phrases concrètes.",
    "enSummary": "A simple method to learn Arabic numbers and use them in practical sentences.",
    "frNeed": "Les chiffres sont utiles pour lire des dates, compter, comprendre un prix ou suivre une consigne. Ils donnent aussi une première victoire rapide aux débutants.",
    "enNeed": "Numbers are useful for reading dates, counting, understanding a price or following instructions. They also give beginners a quick first win.",
    "frMethod": "Apprenez les chiffres par petits groupes, dites-les à voix haute, puis utilisez-les dans des phrases simples comme l’âge, l’heure ou le nombre d’objets.",
    "enMethod": "Learn numbers in small groups, say them aloud, then use them in simple sentences such as age, time or number of objects.",
    "tipsFr": [
      "Apprendre 0 à 10 d’abord",
      "Dire les nombres à voix haute",
      "Utiliser des exemples réels",
      "Réviser avec des cartes"
    ],
    "tipsEn": [
      "Learn 0 to 10 first",
      "Say numbers aloud",
      "Use real examples",
      "Review with cards"
    ],
    "link": "programme-arabe-enfants.html",
    "frLinkText": "voir le programme arabe enfants",
    "enLinkText": "view the children’s Arabic programme"
  },
  {
    "slug": "apprendre-arabe-litteraire",
    "legacySlug": "apprendre-arabe-litteraire",
    "focusKeyword": "apprendre l arabe littéraire",
    "monthlySearches": 500,
    "frTitle": "Apprendre l’arabe littéraire: pour qui et par où commencer ?",
    "enTitle": "Learn Literary Arabic: Who Is It For and Where to Start?",
    "frSummary": "À qui s’adresse l’arabe littéraire et comment commencer avec un parcours structuré.",
    "enSummary": "Who literary Arabic is for and how to start with a structured learning path.",
    "frNeed": "L’arabe littéraire attire les étudiants qui veulent lire, comprendre des textes et construire une base solide. Il demande une progression plus structurée que des phrases isolées.",
    "enNeed": "Literary Arabic attracts students who want to read, understand texts and build a solid base. It requires a more structured progression than isolated phrases.",
    "frMethod": "Commencez par lecture et vocabulaire essentiel, puis ajoutez les structures fréquentes. L’expression orale peut accompagner le parcours pour garder la langue vivante.",
    "enMethod": "Start with reading and essential vocabulary, then add frequent structures. Speaking can accompany the path to keep the language alive.",
    "tipsFr": [
      "Renforcer l’alphabet",
      "Lire régulièrement",
      "Construire du vocabulaire",
      "Travailler la compréhension"
    ],
    "tipsEn": [
      "Strengthen the alphabet",
      "Read regularly",
      "Build vocabulary",
      "Work on comprehension"
    ],
    "link": "programme-masterclasses-arabe.html#modules",
    "frLinkText": "voir les modules du programme",
    "enLinkText": "view the programme modules"
  },
  {
    "slug": "apprendre-darija",
    "legacySlug": "apprendre-darija-ou-arabe",
    "focusKeyword": "apprendre darija",
    "monthlySearches": 5000,
    "frTitle": "Apprendre darija ou arabe littéraire: quelle différence ?",
    "enTitle": "Learn Darija or Standard Arabic: What Is the Difference?",
    "frSummary": "Les différences entre darija et arabe littéraire pour choisir le parcours le plus adapté à votre usage.",
    "enSummary": "The differences between Darija and Standard Arabic so you can choose the path that fits your use.",
    "frNeed": "La darija sert surtout à communiquer dans le contexte marocain, tandis que l’arabe littéraire vise une base plus large de lecture, compréhension et expression structurée.",
    "enNeed": "Darija is mainly useful for communication in the Moroccan context, while Standard Arabic gives a broader base for reading, comprehension and structured expression.",
    "frMethod": "Si votre objectif est familial ou voyage au Maroc, la darija peut être utile. Si vous voulez lire, comprendre et construire une base durable, commencez par l’arabe structuré.",
    "enMethod": "If your goal is family or travel in Morocco, Darija can be useful. If you want to read, understand and build a lasting base, start with structured Arabic.",
    "tipsFr": [
      "Clarifier l’objectif",
      "Ne pas mélanger les bases",
      "Commencer par une évaluation",
      "Choisir le parcours selon l’usage"
    ],
    "tipsEn": [
      "Clarify the goal",
      "Do not mix foundations",
      "Start with an evaluation",
      "Choose the path according to use"
    ],
    "link": "contactez-nous.html",
    "frLinkText": "demander le bon parcours",
    "enLinkText": "ask for the right path"
  },
  {
    "slug": "arabe-enfants",
    "legacySlug": "arabe-pour-enfants",
    "focusKeyword": "apprendre l arabe pour les petit",
    "monthlySearches": 500,
    "frTitle": "Arabe pour enfants: apprendre sans pression et avec régularité",
    "enTitle": "Arabic for Children: Learn Without Pressure and with Consistency",
    "frSummary": "Comment aider un enfant à apprendre l’arabe avec régularité, plaisir et objectifs adaptés.",
    "enSummary": "How to help a child learn Arabic with consistency, enjoyment and adapted goals.",
    "frNeed": "Pour les enfants, l’enjeu n’est pas seulement d’apprendre vite. Il faut préserver la motivation, adapter la durée et donner aux parents un retour clair.",
    "enNeed": "For children, the challenge is not only learning fast. Motivation must be protected, duration adapted and parents given clear feedback.",
    "frMethod": "Travaillez par objectifs courts: lettres, sons, mots, image, phrase. L’enfant doit voir une réussite simple à chaque étape.",
    "enMethod": "Work with short goals: letters, sounds, words, image, sentence. The child should see a simple success at every step.",
    "tipsFr": [
      "Adapter à l’âge",
      "Faire court",
      "Utiliser des images",
      "Donner un retour parent"
    ],
    "tipsEn": [
      "Adapt to age",
      "Keep it short",
      "Use images",
      "Give parent feedback"
    ],
    "link": "programme-arabe-enfants.html",
    "frLinkText": "découvrir le programme enfants",
    "enLinkText": "discover the children’s programme"
  },
  {
    "slug": "duolingo-arabe",
    "legacySlug": "meilleure-application-pour-apprendre-arabe",
    "focusKeyword": "duolingo arab",
    "monthlySearches": 5000,
    "frTitle": "Duolingo arabe et applications: suffisant pour apprendre l’arabe ?",
    "enTitle": "Duolingo Arabic and Apps: Are They Enough to Learn Arabic?",
    "frSummary": "Ce que les applications peuvent apporter, et pourquoi l’accompagnement humain reste important.",
    "enSummary": "What apps can offer, and why human guidance still matters.",
    "frNeed": "Les applications aident à créer une habitude, mais elles ne répondent pas toujours aux besoins de correction, de prononciation et de progression personnalisée.",
    "enNeed": "Apps help create a habit, but they do not always cover correction, pronunciation and personalized progression needs.",
    "frMethod": "Utilisez une application pour réviser, pas comme seul parcours. Ajoutez une évaluation, une correction orale et un programme adapté à votre objectif.",
    "enMethod": "Use an app for review, not as the only path. Add evaluation, oral correction and a programme adapted to your goal.",
    "tipsFr": [
      "Utiliser l’application comme complément",
      "Vérifier la prononciation",
      "Pratiquer des phrases réelles",
      "Faire corriger les blocages"
    ],
    "tipsEn": [
      "Use the app as support",
      "Check pronunciation",
      "Practice real sentences",
      "Correct blockers"
    ],
    "link": "programme-communication-arabe.html#evaluation",
    "frLinkText": "demander une évaluation orale",
    "enLinkText": "request an oral evaluation"
  },
  {
    "slug": "tarifs-cours-arabe-en-ligne",
    "legacySlug": "tarifs-cours-arabe-en-ligne",
    "focusKeyword": "cours arabe en ligne",
    "monthlySearches": 500,
    "frTitle": "Tarifs cours arabe en ligne: que comparer avant de payer ?",
    "enTitle": "Online Arabic Course Pricing: What to Compare Before Paying",
    "frSummary": "Les points à comparer avant de payer un cours d’arabe en ligne: durée, format, suivi et objectifs.",
    "enSummary": "What to compare before paying for an online Arabic class: duration, format, support and goals.",
    "frNeed": "Le prix d’un cours d’arabe en ligne doit être comparé avec la durée, le format, l’évaluation, le suivi et les objectifs couverts.",
    "enNeed": "The price of an online Arabic course should be compared with duration, format, evaluation, follow-up and covered goals.",
    "frMethod": "Regardez le prix mensuel, le paiement complet, la durée des séances et ce qui se passe avant la première séance. Un tarif clair réduit l’hésitation.",
    "enMethod": "Look at monthly price, full payment, session duration and what happens before the first session. Clear pricing reduces hesitation.",
    "tipsFr": [
      "Comparer complet et échelonné",
      "Vérifier le format",
      "Regarder la durée",
      "Confirmer sur WhatsApp"
    ],
    "tipsEn": [
      "Compare full and installment payment",
      "Check the format",
      "Look at duration",
      "Confirm on WhatsApp"
    ],
    "link": "programme-masterclasses-arabe.html#tarifs",
    "frLinkText": "voir les tarifs",
    "enLinkText": "view the pricing"
  }
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const href = (slug) => `${slug}.html`;
const legacyHref = (slug) => `blog-${slug}.html`;

const headLinks = (extra = "") => `${extra}
    <link rel="stylesheet" href="assets/css/style.css?v=${cssVersion}">`;

const header = (current = "blog") => `<a class="skip-link" href="#main-content">Aller au contenu</a>
    <header class="site-header" aria-label="Navigation principale">
      <div class="nav-shell" id="navShell">
        <a class="brand" href="index.html" aria-label="Bayan Academy"><img loading="eager" decoding="async" src="assets/images/icon.png" alt="" width="96" height="96"><span>Bayan Academy</span></a>
        <nav class="nav-links" aria-label="Menu">
          <a href="index.html">Accueil</a>
          <a href="nos-formations.html">Nos programmes</a>
          <a href="blog.html"${current === "blog" ? ' aria-current="page"' : ""}>Blog</a>
          <a href="a-propos.html">Notre vision</a>
          <a href="contactez-nous.html">Contact</a>
        </nav>
        <div class="nav-actions">
          <a class="icon-btn" href="nos-formations.html" aria-label="Programmes"><svg viewBox="0 0 15 15" aria-hidden="true"><path d="M14.1 1.6C14 .7 13.3 0 12.4 0H2.7C1.7 0 1 .7.9 1.6L.1 13.1c0 .5.1 1 .5 1.3.3.4.7.6 1.2.6h11.4c.5 0 .9-.2 1.3-.6.3-.4.5-.8.5-1.3zM5.8 4c0-.4-.3-.8-.8-.8S4.2 3.6 4.2 4v1.5c0 1.8 1.5 3.2 3.2 3.2s3.2-1.5 3.2-3.2V4c0-.4-.4-.8-.8-.8S9.2 3.6 9.2 4v1.5c0 1-.8 1.8-1.8 1.8S5.8 6.5 5.8 5.5z"/></svg></a>
          <a class="icon-btn" href="mon-compte.html" aria-label="Compte"><svg viewBox="0 0 15 15" aria-hidden="true"><path d="M10.5 9h-6C2.4 9 .7 10.7.7 12.8v1.5c0 .4.3.7.8.7s.8-.3.8-.7v-1.5c0-1.2 1-2.2 2.2-2.2h6c1.2 0 2.2 1 2.2 2.2v1.5c0 .4.3.7.8.7s.8-.3.8-.7v-1.5c-.1-2.1-1.7-3.8-3.8-3.8zM7.5 7C9.4 7 11 5.4 11 3.5S9.4 0 7.5 0 4 1.6 4 3.5 5.6 7 7.5 7z"/></svg></a>
          <button class="menu-toggle" type="button" id="menuToggle" aria-label="Menu" aria-expanded="false"><svg viewBox="0 0 18 14" aria-hidden="true"><rect width="18" height="1.7" rx="1"></rect><rect y="6.15" width="18" height="1.7" rx="1"></rect><rect y="12.3" width="18" height="1.7" rx="1"></rect></svg></button>
        </div>
      </div>
    </header>`;

const footer = () => `<footer class="site-footer">
      <div class="footer-top">
        <div><div class="footer-logo"><img loading="lazy" decoding="async" src="assets/images/icon.png" alt="" width="96" height="96"><span>Bayan Academy</span></div><p>Masterclasses d’arabe pour adultes et programme dédié aux enfants.</p></div>
        <div><h3>Nos programmes</h3><ul><li><a href="programme-masterclasses-arabe.html">Masterclasses d’arabe</a></li><li><a href="programme-communication-arabe.html">Communication arabe</a></li><li><a href="programme-arabe-enfants.html">Programme enfants</a></li><li><a href="contactez-nous.html">Réserver une place</a></li></ul></div>
        <div><h3>Liens utiles</h3><ul><li><a href="index.html">Accueil</a></li><li><a href="blog.html">Blog</a></li><li><a href="a-propos.html">À propos</a></li><li><a href="contactez-nous.html">Contactez-nous</a></li><li><a href="mon-compte.html">Mon compte</a></li></ul></div>
      </div>
      <div class="footer-bottom"><div class="footer-bottom-inner"><span>Copyright © Bayan Academy</span><nav aria-label="Mentions"><a href="politique-de-confidentialite.html">Politique de confidentialité</a><a href="conditions-utilisation.html">Conditions générales</a></nav></div></div>
    </footer>
    <a class="whatsapp" href="https://wa.me/212697965070" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
    <script src="assets/js/main.js?v=${jsVersion}" defer></script>`;

const articleStructuredData = (article) => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.frTitle,
  alternativeHeadline: article.enTitle,
  description: article.frSummary,
  inLanguage: ["fr", "en"],
  keywords: [article.focusKeyword, ...(article.relatedKeywords || [])].filter(Boolean),
  author: {
    "@type": "Organization",
    name: "Bayan Academy"
  },
  publisher: {
    "@type": "Organization",
    name: "Bayan Academy",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/assets/images/icon.png`
    }
  },
  mainEntityOfPage: `${baseUrl}/${href(article.slug)}`
}, null, 8);

const tipsList = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

const learningPlanFr = () => [
  {
    title: "Semaine 1: clarifier le niveau",
    text: "Notez ce que vous savez déjà faire: lettres, lecture, compréhension, phrases ou besoin enfant. Cette étape évite de choisir un parcours trop facile ou trop avancé."
  },
  {
    title: "Semaine 2: travailler une base courte",
    text: "Gardez un objectif principal et répétez-le plusieurs fois: un son, une famille de lettres, une phrase utile ou un mini-dialogue. La répétition courte donne plus de résultats qu’une séance trop chargée."
  },
  {
    title: "Semaine 3: appliquer dans une vraie situation",
    text: "Passez de l’exercice à l’usage: lire un court passage, répondre à une question, compter, présenter une personne ou expliquer une disponibilité selon votre objectif."
  },
  {
    title: "Semaine 4: évaluer et ajuster",
    text: "Faites un bilan simple: ce qui est fluide, ce qui bloque, ce qui doit être corrigé. C’est le bon moment pour choisir un programme individualisé ou un format en groupe."
  }
];

const learningPlanEn = () => [
  {
    title: "Week 1: clarify the level",
    text: "Write down what you can already do: letters, reading, comprehension, sentences or children’s learning needs. This avoids choosing a path that is too easy or too advanced."
  },
  {
    title: "Week 2: build one short foundation",
    text: "Keep one main objective and repeat it several times: one sound, one letter family, one useful sentence or one mini-dialogue. Short repetition works better than an overloaded lesson."
  },
  {
    title: "Week 3: apply it in a real situation",
    text: "Move from exercise to use: read a short passage, answer a question, count, introduce someone or explain availability according to your objective."
  },
  {
    title: "Week 4: evaluate and adjust",
    text: "Make a simple review: what is fluent, what still blocks you and what needs correction. This is the right moment to choose an individual programme or a group format."
  }
];

const mistakesFr = [
  "Changer de ressource chaque semaine sans terminer un parcours.",
  "Apprendre du vocabulaire isolé sans lecture ni phrases.",
  "Repousser l’évaluation alors que le niveau réel est encore flou.",
  "Choisir uniquement selon le prix sans comparer la durée, le suivi et l’objectif."
];

const mistakesEn = [
  "Changing resources every week without finishing a path.",
  "Learning isolated vocabulary without reading or sentences.",
  "Delaying evaluation while the real level is still unclear.",
  "Choosing only by price without comparing duration, support and goal."
];

const faqFr = (article) => [
  {
    question: "Par où commencer ?",
    answer: article.frMethod
  },
  {
    question: "Combien de séances par semaine faut-il prévoir ?",
    answer: "Pour une progression régulière, une à deux séances par semaine suffisent souvent si une courte révision est faite entre les cours. Le rythme dépend du niveau, de l’âge et de l’objectif."
  },
  {
    question: "Faut-il choisir un programme individuel ou en groupe ?",
    answer: "L’individuel convient mieux aux besoins précis et aux horaires spécifiques. Le groupe convient aux apprenants qui veulent progresser avec un cadre collectif et un tarif plus accessible."
  }
];

const faqEn = (article) => [
  {
    question: "Where should I start?",
    answer: article.enMethod
  },
  {
    question: "How many sessions per week should I plan?",
    answer: "For steady progress, one to two sessions per week are often enough if a short review is done between lessons. The best pace depends on level, age and goal."
  },
  {
    question: "Should I choose an individual or group programme?",
    answer: "Individual learning works best for precise needs and specific schedules. Group learning suits students who want a shared structure and a more accessible price."
  }
];

const stepsList = (items) => items.map((item) => `<li><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.text)}</span></li>`).join("");

const faqMarkup = (items) => items.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("");

const articlePage = (article) => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(article.frTitle)} - ${escapeHtml(article.enTitle)} - Bayan Academy</title>
    <meta name="description" content="${escapeHtml(article.frSummary)} ${escapeHtml(article.enSummary)}">
    <meta name="keywords" content="${escapeHtml([article.focusKeyword, ...(article.relatedKeywords || [])].filter(Boolean).join(", "))}">
    <meta name="theme-color" content="#1a1a1a">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${baseUrl}/${href(article.slug)}">
    <link rel="manifest" href="manifest.webmanifest">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:site_name" content="Bayan Academy">
    <meta property="og:title" content="${escapeHtml(article.frTitle)}">
    <meta property="og:description" content="${escapeHtml(article.frSummary)}">
    <meta property="og:url" content="${baseUrl}/${href(article.slug)}">
    <meta property="og:image" content="${baseUrl}/assets/images/arabe.webp">
    <meta name="twitter:card" content="summary_large_image">
    ${headLinks()}
    <script type="application/ld+json">
      ${articleStructuredData(article)}
    </script>
  </head>
  <body>
    ${header("blog")}
    <main id="main-content">
      <section class="page-hero blog">
        <div class="page-hero-content">
          <span class="eyebrow">Blog Bayan Academy</span>
          <div data-lang-panel="fr">
            <h1>${escapeHtml(article.frTitle)}</h1>
            <p>${escapeHtml(article.frSummary)}</p>
          </div>
          <div data-lang-panel="en">
            <h1>${escapeHtml(article.enTitle)}</h1>
            <p>${escapeHtml(article.enSummary)}</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner article-layout">
          <article class="article-content" data-lang-panel="fr" lang="fr">
            <p class="article-meta">Guide Bayan Academy • Lecture 7 minutes</p>
            <h2>Pourquoi c’est important</h2>
            <p>${escapeHtml(article.frNeed)}</p>
            <div class="article-highlight">
              <strong>À retenir</strong>
              <p>La bonne stratégie n’est pas de viser plus de contenu, mais de choisir le bon ordre: évaluer, apprendre une base claire, pratiquer, puis réserver le format adapté.</p>
            </div>
            <h2>Méthode recommandée</h2>
            <p>${escapeHtml(article.frMethod)}</p>
            <ul class="check-list">${tipsList(article.tipsFr)}</ul>
            <h2>Plan de progression sur 4 semaines</h2>
            <ol class="article-steps">${stepsList(learningPlanFr(article))}</ol>
            <h2>Erreurs à éviter</h2>
            <ul class="check-list">${tipsList(mistakesFr)}</ul>
            <h2>Quel format choisir ?</h2>
            <p>Si vous avez un objectif urgent, un horaire précis ou des blocages déjà identifiés, le programme individualisé permet d’aller plus vite. Si vous voulez une progression régulière avec une dynamique collective, le format en groupe peut être plus adapté.</p>
            <h2>Passer à l’action</h2>
            <p>Pour avancer avec un cadre clair, vous pouvez <a href="${article.link}">${escapeHtml(article.frLinkText)}</a>. Le bon programme dépend du niveau réel, de l’objectif et du rythme disponible.</p>
            <div class="article-link-panel"><a class="button" href="${article.link}">${escapeHtml(article.frLinkText)}</a><a class="button-secondary" href="contactez-nous.html">Réserver sur WhatsApp</a></div>
            <h2>Questions fréquentes</h2>
            <div class="faq-list article-faq">${faqMarkup(faqFr(article))}</div>
          </article>
          <article class="article-content" data-lang-panel="en" lang="en">
            <p class="article-meta">Bayan Academy guide • 7 minute read</p>
            <h2>Why it matters</h2>
            <p>${escapeHtml(article.enNeed)}</p>
            <div class="article-highlight">
              <strong>Key takeaway</strong>
              <p>The right strategy is not more content, but the right order: evaluate, learn a clear foundation, practise, then reserve the suitable format.</p>
            </div>
            <h2>Recommended method</h2>
            <p>${escapeHtml(article.enMethod)}</p>
            <ul class="check-list">${tipsList(article.tipsEn)}</ul>
            <h2>4-week progression plan</h2>
            <ol class="article-steps">${stepsList(learningPlanEn(article))}</ol>
            <h2>Mistakes to avoid</h2>
            <ul class="check-list">${tipsList(mistakesEn)}</ul>
            <h2>Which format should you choose?</h2>
            <p>If you have an urgent goal, a precise schedule or identified blockers, the individual programme helps you move faster. If you want steady progress with a shared learning rhythm, the group format can be more suitable.</p>
            <h2>Take action</h2>
            <p>To progress with a clear framework, you can <a href="${article.link}">${escapeHtml(article.enLinkText)}</a>. The right programme depends on real level, goal and available pace.</p>
            <div class="article-link-panel"><a class="button" href="${article.link}">${escapeHtml(article.enLinkText)}</a><a class="button-secondary" href="contactez-nous.html">Reserve on WhatsApp</a></div>
            <h2>Frequently Asked Questions</h2>
            <div class="faq-list article-faq">${faqMarkup(faqEn(article))}</div>
          </article>
          <aside class="article-aside">
            <div data-lang-panel="fr">
              <h2>Ressources</h2>
              <a href="index.html#test-niveau">Test de niveau</a>
              <a href="nos-formations.html">Tous les programmes</a>
              <a href="contactez-nous.html">Réserver via WhatsApp</a>
            </div>
            <div data-lang-panel="en">
              <h2>Resources</h2>
              <a href="index.html#test-niveau">Level test</a>
              <a href="nos-formations.html">All programmes</a>
              <a href="contactez-nous.html">Reserve on WhatsApp</a>
            </div>
          </aside>
        </div>
      </section>
      <section class="section page-band">
        <div class="section-inner split">
          <div data-lang-panel="fr"><h2>Besoin d’un parcours adapté ?</h2><p>Envoyez votre niveau, votre objectif et vos disponibilités. L’équipe vous oriente vers le programme le plus pertinent.</p></div>
          <div data-lang-panel="en"><h2>Need a tailored path?</h2><p>Send your level, goal and availability. The team will guide you toward the most relevant programme.</p></div>
          <div><a class="button-secondary" href="contactez-nous.html">Contact</a></div>
        </div>
      </section>
    </main>
    ${footer()}
  </body>
</html>
`;

const redirectPage = (article) => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(article.frTitle)} - Bayan Academy</title>
    <meta name="robots" content="noindex, follow">
    <meta http-equiv="refresh" content="0; url=${href(article.slug)}">
    <link rel="canonical" href="${baseUrl}/${href(article.slug)}">
  </head>
  <body>
    <p><a href="${href(article.slug)}">${escapeHtml(article.frTitle)}</a></p>
  </body>
</html>
`;

const blogCards = articles.map((article) => `<article class="blog-card">
              <span class="price-pill">Guide</span>
              <div data-lang-panel="fr"><h3>${escapeHtml(article.frTitle)}</h3><p>${escapeHtml(article.frSummary)}</p><a class="button-secondary" href="${href(article.slug)}">Lire l’article</a></div>
              <div data-lang-panel="en"><h3>${escapeHtml(article.enTitle)}</h3><p>${escapeHtml(article.enSummary)}</p><a class="button-secondary" href="${href(article.slug)}">Read article</a></div>
            </article>`).join("\n");

const blogPage = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Blog arabe - Arabic Learning Blog - Bayan Academy</title>
    <meta name="description" content="Articles bilingues pour apprendre l’arabe, améliorer la lecture, accompagner les enfants et choisir le bon programme Bayan Academy.">
    <meta name="theme-color" content="#1a1a1a">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${baseUrl}/blog.html">
    <link rel="manifest" href="manifest.webmanifest">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:site_name" content="Bayan Academy">
    <meta property="og:title" content="Blog arabe - Bayan Academy">
    <meta property="og:description" content="Guides bilingues pour apprendre l’arabe et choisir le bon programme.">
    <meta property="og:url" content="${baseUrl}/blog.html">
    <meta property="og:image" content="${baseUrl}/assets/images/arabe.webp">
    <meta name="twitter:card" content="summary_large_image">
    ${headLinks('<link rel="preload" as="image" href="assets/images/hero-2.webp" fetchpriority="high">')}
  </head>
  <body>
    ${header("blog")}
    <main id="main-content">
      <section class="page-hero blog">
        <div class="page-hero-content">
          <span class="eyebrow">Blog Bayan Academy</span>
          <div data-lang-panel="fr"><h1>Guides pour apprendre l’arabe</h1><p>20 articles bilingues pour progresser en lecture, vocabulaire, communication et programme enfants.</p></div>
          <div data-lang-panel="en"><h1>Guides to Learn Arabic</h1><p>20 bilingual articles to progress in reading, vocabulary, communication and children’s Arabic learning.</p></div>
        </div>
      </section>
      <section class="section">
        <div class="section-inner">
          <div class="section-lead" data-lang-panel="fr"><h2>Articles récents</h2><p>Chaque guide contient des conseils pratiques et un lien vers un programme, le test de niveau ou une page utile du site.</p></div>
          <div class="section-lead" data-lang-panel="en"><h2>Recent Articles</h2><p>Each guide includes practical advice and a link to a programme, the level test or a useful page on the website.</p></div>
          <div class="blog-grid">
            ${blogCards}
          </div>
        </div>
      </section>
    </main>
    ${footer()}
  </body>
</html>
`;

for (const file of readdirSync(".").filter((file) => /^blog-.+\.html$/.test(file))) {
  unlinkSync(file);
}

writeFileSync("blog.html", blogPage);
for (const article of articles) {
  writeFileSync(href(article.slug), articlePage(article));
  writeFileSync(legacyHref(article.legacySlug), redirectPage(article));
}

for (const file of readdirSync(".").filter((file) => file.endsWith(".html") && !file.startsWith("blog-") && file !== "blog.html")) {
  let html = readFileSync(file, "utf8");
  const navBlock = html.match(/<nav class="nav-links"[\s\S]*?<\/nav>/)?.[0] || "";
  if (!navBlock.includes('href="blog.html"')) {
    html = html.replace(/(<a href="nos-formations\.html"(?: aria-current="page")?>Nos programmes<\/a>)/, `$1\n          <a href="blog.html">Blog</a>`);
  }
  const usefulLinksBlock = html.match(/<h3>Liens utiles<\/h3>[\s\S]*?<\/ul>/)?.[0] || "";
  if (!usefulLinksBlock.includes('href="blog.html"')) {
    html = html.replace(/(<li><a href="index\.html">Accueil<\/a><\/li>)/g, `$1<li><a href="blog.html">Blog</a></li>`);
  }
  html = html.replaceAll("assets/css/style.css?v=performance-pass", `assets/css/style.css?v=${cssVersion}`);
  html = html.replaceAll("assets/css/style.css?v=blog-seo", `assets/css/style.css?v=${cssVersion}`);
  html = html.replaceAll("assets/js/main.js?v=performance-pass", `assets/js/main.js?v=${jsVersion}`);
  writeFileSync(file, html);
}

const sitemapUrls = [
  ["/", "1.0"],
  ["/nos-formations.html", "0.9"],
  ["/blog.html", "0.9"],
  ...articles.map((article) => [`/${href(article.slug)}`, "0.7"]),
  ["/programme-masterclasses-arabe.html", "0.9"],
  ["/programme-communication-arabe.html", "0.9"],
  ["/programme-arabe-enfants.html", "0.9"],
  ["/a-propos.html", "0.8"],
  ["/contactez-nous.html", "0.8"],
  ["/mon-compte.html", "0.4"],
  ["/politique-de-confidentialite.html", "0.2"],
  ["/conditions-utilisation.html", "0.2"]
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(([path, priority]) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

writeFileSync("sitemap.xml", sitemap);
console.log(`Generated blog.html and ${articles.length} bilingual article pages.`);
