import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const cssVersion = "blog-seo";
const jsVersion = "blog-seo";
const baseUrl = "https://yassirbrs.github.io/bayonne-academy";

const articles = [
  {
    slug: "comment-apprendre-arabe-debutant",
    frTitle: "Comment apprendre l’arabe quand on débute",
    enTitle: "How to Learn Arabic as a Beginner",
    frSummary: "Une méthode simple pour commencer sans se perdre entre alphabet, lecture, vocabulaire et expression.",
    enSummary: "A simple method to begin without getting lost between alphabet, reading, vocabulary and speaking.",
    frNeed: "Un débutant a besoin d’un ordre clair. Commencer par trop de règles, trop de listes ou trop de supports crée de la confusion. Le plus efficace est de relier rapidement les lettres, les sons, les mots utiles et les premières phrases.",
    enNeed: "A beginner needs a clear order. Starting with too many rules, lists or resources creates confusion. The most effective path is to connect letters, sounds, useful words and first sentences quickly.",
    frMethod: "Travaillez par séances courtes: lecture guidée, répétition orale, vocabulaire thématique puis petite phrase. Cette alternance évite d’apprendre mécaniquement et installe une base solide.",
    enMethod: "Work in short sessions: guided reading, oral repetition, themed vocabulary, then a short sentence. This alternation avoids mechanical learning and builds a solid base.",
    tipsFr: ["Apprendre les lettres avec leur son", "Lire quelques mots dès la première semaine", "Répéter à voix haute", "Garder un carnet de phrases utiles"],
    tipsEn: ["Learn letters with their sounds", "Read a few words from the first week", "Repeat aloud", "Keep a notebook of useful sentences"],
    link: "index.html#test-niveau",
    frLinkText: "faire le test de niveau",
    enLinkText: "take the level test"
  },
  {
    slug: "alphabet-arabe-premieres-semaines",
    frTitle: "Alphabet arabe: que travailler les premières semaines ?",
    enTitle: "Arabic Alphabet: What to Study in the First Weeks",
    frSummary: "Les priorités pour reconnaître les lettres, les sons et les formes sans ralentir la progression.",
    enSummary: "The priorities for recognizing letters, sounds and forms without slowing progress.",
    frNeed: "L’alphabet arabe demande de reconnaître la lettre selon sa position, mais il ne faut pas rester bloqué sur la théorie. Les lettres doivent être vues, prononcées et lues dans des mots simples dès le départ.",
    enNeed: "The Arabic alphabet requires recognizing each letter by position, but you should not stay stuck in theory. Letters should be seen, pronounced and read in simple words from the beginning.",
    frMethod: "Choisissez un petit groupe de lettres, associez chaque lettre à son son, puis lisez des syllabes et des mots courts. La régularité compte plus que la quantité.",
    enMethod: "Choose a small group of letters, connect each letter to its sound, then read syllables and short words. Consistency matters more than quantity.",
    tipsFr: ["Réviser peu mais souvent", "Tracer les lettres pour mémoriser les formes", "Lire des syllabes avant les longues phrases", "Corriger la prononciation rapidement"],
    tipsEn: ["Review little but often", "Trace letters to remember shapes", "Read syllables before long sentences", "Correct pronunciation early"],
    link: "programme-masterclasses-arabe.html#niveaux",
    frLinkText: "voir les niveaux adultes",
    enLinkText: "view the adult levels"
  },
  {
    slug: "ameliorer-lecture-arabe",
    frTitle: "Améliorer sa lecture arabe avec une méthode progressive",
    enTitle: "Improve Arabic Reading with a Progressive Method",
    frSummary: "Comment gagner en fluidité sans brûler les étapes et sans mémoriser mécaniquement.",
    enSummary: "How to gain fluency without skipping steps or memorizing mechanically.",
    frNeed: "La lecture progresse quand les hésitations sont repérées. Il faut distinguer les blocages de son, les confusions de lettres et le manque de vocabulaire.",
    enNeed: "Reading improves when hesitation is identified. It is important to separate sound blocks, letter confusion and lack of vocabulary.",
    frMethod: "Lisez lentement, corrigez un point précis, puis relisez le même passage. Une relecture guidée vaut souvent mieux qu’un nouveau texte trop difficile.",
    enMethod: "Read slowly, correct one precise point, then reread the same passage. Guided rereading is often better than a new text that is too difficult.",
    tipsFr: ["Lire à voix haute", "Noter les sons difficiles", "Relire le même support", "Ajouter du vocabulaire utile"],
    tipsEn: ["Read aloud", "Note difficult sounds", "Reread the same material", "Add useful vocabulary"],
    link: "programme-masterclasses-arabe.html#modules",
    frLinkText: "découvrir les modules de lecture",
    enLinkText: "discover the reading modules"
  },
  {
    slug: "communication-arabe-phrases-utiles",
    frTitle: "Communication arabe: commencer par les phrases utiles",
    enTitle: "Arabic Communication: Start with Useful Sentences",
    frSummary: "Pourquoi les phrases réutilisables aident à parler plus vite que les longues listes de mots.",
    enSummary: "Why reusable sentences help you speak faster than long word lists.",
    frNeed: "Pour parler, il ne suffit pas de connaître des mots isolés. L’étudiant doit pouvoir transformer le vocabulaire en phrases courtes qu’il peut réutiliser immédiatement.",
    enNeed: "To speak, knowing isolated words is not enough. The student must turn vocabulary into short sentences that can be reused immediately.",
    frMethod: "Travaillez une situation, trois questions et trois réponses. Ensuite, changez un mot dans chaque phrase pour créer de nouveaux échanges.",
    enMethod: "Work on one situation, three questions and three answers. Then change one word in each sentence to create new exchanges.",
    tipsFr: ["Apprendre des questions fréquentes", "Répondre avec des phrases complètes", "Répéter sans traduire mot à mot", "Simuler des dialogues courts"],
    tipsEn: ["Learn frequent questions", "Answer with complete sentences", "Repeat without word-for-word translation", "Simulate short dialogues"],
    link: "programme-communication-arabe.html",
    frLinkText: "voir le programme Communication arabe",
    enLinkText: "view the Arabic Communication programme"
  },
  {
    slug: "arabe-enfants-routine-maison",
    frTitle: "Arabe pour enfants: créer une routine simple à la maison",
    enTitle: "Arabic for Children: Build a Simple Home Routine",
    frSummary: "Des idées concrètes pour aider un enfant à réviser sans pression entre deux séances.",
    enSummary: "Concrete ideas to help a child review without pressure between sessions.",
    frNeed: "Un enfant retient mieux avec des repères courts et réguliers. Une routine trop longue fatigue l’attention et peut réduire la motivation.",
    enNeed: "A child remembers better with short, regular markers. A routine that is too long can tire attention and reduce motivation.",
    frMethod: "Gardez dix minutes: deux lettres, trois mots, une phrase et une mini-révision. Le parent peut encourager sans transformer la maison en classe.",
    enMethod: "Keep ten minutes: two letters, three words, one sentence and a mini review. Parents can encourage without turning the home into a classroom.",
    tipsFr: ["Réviser au même moment", "Utiliser des images", "Valoriser l’effort", "Prévoir une pause courte"],
    tipsEn: ["Review at the same time", "Use images", "Value effort", "Plan a short break"],
    link: "programme-arabe-enfants.html",
    frLinkText: "découvrir le programme enfants",
    enLinkText: "discover the children’s programme"
  },
  {
    slug: "choisir-programme-arabe-individuel-groupe",
    frTitle: "Programme individualisé ou groupe: comment choisir ?",
    enTitle: "Individual or Group Programme: How to Choose",
    frSummary: "Les critères simples pour choisir le bon format selon le niveau, l’objectif et le rythme.",
    enSummary: "Simple criteria to choose the right format based on level, goal and pace.",
    frNeed: "Le bon format dépend du besoin de correction, de l’autonomie et de la motivation. L’individuel aide quand l’objectif est précis; le groupe aide quand la dynamique régulière compte beaucoup.",
    enNeed: "The right format depends on correction needs, autonomy and motivation. Individual support helps when the goal is precise; group learning helps when regular momentum matters.",
    frMethod: "Comparez votre disponibilité, votre confiance à l’oral et le niveau de suivi souhaité. Une évaluation initiale permet souvent de trancher rapidement.",
    enMethod: "Compare your availability, speaking confidence and desired level of follow-up. An initial evaluation often makes the choice clearer.",
    tipsFr: ["Choisir l’individuel pour corriger vite", "Choisir le groupe pour pratiquer régulièrement", "Vérifier le niveau avant l’inscription", "Adapter la durée de séance"],
    tipsEn: ["Choose individual support to correct quickly", "Choose group learning to practice regularly", "Check the level before registering", "Adapt session duration"],
    link: "nos-formations.html",
    frLinkText: "comparer les programmes",
    enLinkText: "compare the programmes"
  },
  {
    slug: "test-niveau-arabe-avant-inscription",
    frTitle: "Pourquoi faire un test de niveau avant de s’inscrire ?",
    enTitle: "Why Take an Arabic Level Test Before Registering",
    frSummary: "Le test évite de choisir un programme trop facile ou trop difficile.",
    enSummary: "The test helps avoid choosing a programme that is too easy or too difficult.",
    frNeed: "Sans diagnostic, l’étudiant peut perdre du temps dans un parcours mal calibré. Le test clarifie le niveau réel, les blocages et la priorité de travail.",
    enNeed: "Without a diagnosis, a student can lose time in a poorly calibrated path. The test clarifies the real level, blockers and work priorities.",
    frMethod: "Répondez selon votre situation actuelle: lecture, compréhension, expression, âge et objectif. Le résultat sert de point de départ pour une orientation plus précise.",
    enMethod: "Answer according to your current situation: reading, comprehension, expression, age and goal. The result becomes the starting point for clearer guidance.",
    tipsFr: ["Ne pas surestimer son niveau", "Indiquer l’objectif réel", "Préciser les disponibilités", "Demander une orientation"],
    tipsEn: ["Do not overestimate your level", "State the real goal", "Specify availability", "Ask for guidance"],
    link: "index.html#test-niveau",
    frLinkText: "faire le test de niveau",
    enLinkText: "take the level test"
  },
  {
    slug: "apprendre-vocabulaire-arabe",
    frTitle: "Apprendre le vocabulaire arabe sans l’oublier",
    enTitle: "Learn Arabic Vocabulary Without Forgetting It",
    frSummary: "Comment transformer les mots appris en vocabulaire actif.",
    enSummary: "How to turn learned words into active vocabulary.",
    frNeed: "Le vocabulaire devient utile quand il est réutilisé dans une phrase. Une liste seule donne l’impression d’apprendre, mais elle ne garantit pas la compréhension ni l’expression.",
    enNeed: "Vocabulary becomes useful when reused in a sentence. A list alone gives the impression of learning, but it does not guarantee comprehension or expression.",
    frMethod: "Choisissez un thème, sélectionnez dix mots, puis construisez cinq phrases. Révisez le lendemain en changeant un élément dans chaque phrase.",
    enMethod: "Choose a theme, select ten words, then build five sentences. Review the next day by changing one element in each sentence.",
    tipsFr: ["Classer par thèmes", "Créer des phrases personnelles", "Réviser à intervalles courts", "Dire les mots à voix haute"],
    tipsEn: ["Group by themes", "Create personal sentences", "Review at short intervals", "Say words aloud"],
    link: "programme-communication-arabe.html#modules",
    frLinkText: "voir les modules de vocabulaire",
    enLinkText: "view the vocabulary modules"
  },
  {
    slug: "prononciation-arabe-erreurs-frequentes",
    frTitle: "Prononciation arabe: erreurs fréquentes à corriger tôt",
    enTitle: "Arabic Pronunciation: Common Mistakes to Correct Early",
    frSummary: "Les corrections prioritaires pour gagner en clarté et en confiance.",
    enSummary: "Priority corrections to gain clarity and confidence.",
    frNeed: "Une mauvaise habitude de prononciation peut devenir difficile à corriger si elle s’installe. Il vaut mieux travailler peu de sons, mais les corriger précisément.",
    enNeed: "A poor pronunciation habit can become difficult to correct if it settles in. It is better to work on a few sounds and correct them precisely.",
    frMethod: "Écoutez, répétez, enregistrez-vous puis comparez. La correction immédiate aide à éviter de répéter la même erreur pendant plusieurs semaines.",
    enMethod: "Listen, repeat, record yourself and compare. Immediate correction helps avoid repeating the same mistake for weeks.",
    tipsFr: ["Isoler un son difficile", "Répéter dans un mot", "Lire une phrase courte", "Demander un retour précis"],
    tipsEn: ["Isolate a difficult sound", "Repeat it in a word", "Read a short sentence", "Ask for precise feedback"],
    link: "programme-communication-arabe.html#evaluation",
    frLinkText: "demander une évaluation orale",
    enLinkText: "request an oral evaluation"
  },
  {
    slug: "lecture-arabe-enfant-age",
    frTitle: "Lecture arabe enfant: adapter la séance à l’âge",
    enTitle: "Children’s Arabic Reading: Adapt the Session to Age",
    frSummary: "Pourquoi la durée, les supports et les objectifs doivent changer selon l’enfant.",
    enSummary: "Why duration, materials and goals should change depending on the child.",
    frNeed: "Un enfant de six ans et un enfant de dix ans n’ont pas la même attention, la même autonomie ni les mêmes repères. Le programme doit respecter cette différence.",
    enNeed: "A six-year-old and a ten-year-old do not have the same attention, autonomy or reference points. The programme must respect that difference.",
    frMethod: "Commencez par observer l’âge, la lecture actuelle et la motivation. Ensuite, choisissez une séance courte, visuelle et progressive.",
    enMethod: "Start by observing age, current reading and motivation. Then choose a short, visual and progressive session.",
    tipsFr: ["Limiter les objectifs par séance", "Utiliser des images", "Alterner lecture et oral", "Faire un retour parent simple"],
    tipsEn: ["Limit goals per session", "Use images", "Alternate reading and speaking", "Give simple parent feedback"],
    link: "programme-arabe-enfants.html#evaluation",
    frLinkText: "voir l’évaluation enfant",
    enLinkText: "view the child evaluation"
  },
  {
    slug: "objectifs-realistes-arabe",
    frTitle: "Fixer des objectifs réalistes pour apprendre l’arabe",
    enTitle: "Set Realistic Goals to Learn Arabic",
    frSummary: "Comment définir un objectif clair pour rester motivé et mesurer les progrès.",
    enSummary: "How to define a clear goal to stay motivated and measure progress.",
    frNeed: "Un objectif vague rend la progression difficile à mesurer. Dire “je veux apprendre l’arabe” est moins utile que “je veux lire plus facilement” ou “je veux répondre à des questions simples”.",
    enNeed: "A vague goal makes progress hard to measure. Saying “I want to learn Arabic” is less useful than “I want to read more easily” or “I want to answer simple questions.”",
    frMethod: "Choisissez un objectif principal pour quatre à six semaines. Mesurez-le avec un indicateur simple: lire un texte court, répondre à dix questions ou maîtriser un thème.",
    enMethod: "Choose one main goal for four to six weeks. Measure it with a simple indicator: read a short text, answer ten questions or master one theme.",
    tipsFr: ["Définir une priorité", "Mesurer chaque semaine", "Adapter le rythme", "Garder une trace des progrès"],
    tipsEn: ["Define one priority", "Measure weekly", "Adapt the pace", "Track progress"],
    link: "contactez-nous.html",
    frLinkText: "demander une orientation",
    enLinkText: "request guidance"
  },
  {
    slug: "arabe-adultes-reprendre-bases",
    frTitle: "Reprendre les bases de l’arabe à l’âge adulte",
    enTitle: "Restart Arabic Foundations as an Adult",
    frSummary: "Une approche rassurante pour revenir aux bases sans perdre de temps.",
    enSummary: "A reassuring approach to return to foundations without wasting time.",
    frNeed: "Beaucoup d’adultes ont déjà appris des éléments, mais avec des trous: lettres oubliées, lecture lente, vocabulaire passif ou manque de confiance.",
    enNeed: "Many adults have learned parts before, but with gaps: forgotten letters, slow reading, passive vocabulary or lack of confidence.",
    frMethod: "Commencez par un diagnostic, puis reprenez uniquement les points qui bloquent la progression. Cela évite de recommencer tout le programme inutilement.",
    enMethod: "Start with a diagnosis, then revisit only the points that block progress. This avoids restarting the entire programme unnecessarily.",
    tipsFr: ["Identifier les acquis", "Corriger les blocages", "Lire à voix haute", "Choisir un rythme stable"],
    tipsEn: ["Identify what is already known", "Correct blockers", "Read aloud", "Choose a stable pace"],
    link: "programme-masterclasses-arabe.html#evaluation",
    frLinkText: "commencer par une évaluation",
    enLinkText: "start with an evaluation"
  },
  {
    slug: "comprendre-arabe-avec-methode",
    frTitle: "Comprendre l’arabe avec méthode, pas seulement traduire",
    enTitle: "Understand Arabic with Method, Not Only Translation",
    frSummary: "Pourquoi relier mots, structures et contexte aide à comprendre durablement.",
    enSummary: "Why connecting words, structures and context builds lasting comprehension.",
    frNeed: "Traduire mot à mot peut aider au début, mais cela limite vite la compréhension. L’étudiant doit apprendre à reconnaître le sens global et les structures fréquentes.",
    enNeed: "Word-for-word translation can help at first, but it quickly limits comprehension. The student must learn to recognize global meaning and frequent structures.",
    frMethod: "Lisez une phrase, repérez les mots connus, cherchez le sens général puis reformulez. Cette méthode rend la compréhension plus active.",
    enMethod: "Read a sentence, identify known words, look for general meaning and then rephrase. This method makes comprehension more active.",
    tipsFr: ["Chercher le sens global", "Repérer les mots fréquents", "Reformuler simplement", "Relire avec correction"],
    tipsEn: ["Look for global meaning", "Identify frequent words", "Rephrase simply", "Reread with correction"],
    link: "programme-masterclasses-arabe.html#modules",
    frLinkText: "explorer les modules",
    enLinkText: "explore the modules"
  },
  {
    slug: "rythme-seances-arabe",
    frTitle: "Combien de séances d’arabe par semaine choisir ?",
    enTitle: "How Many Arabic Sessions per Week Should You Choose?",
    frSummary: "Choisir un rythme efficace selon son objectif, son temps et son niveau.",
    enSummary: "Choose an effective pace based on goal, time and level.",
    frNeed: "Un rythme trop faible ralentit l’automatisation; un rythme trop lourd peut fatiguer. Le bon équilibre dépend de la disponibilité réelle et de l’objectif.",
    enNeed: "A pace that is too light slows automation; a pace that is too heavy can tire you. The right balance depends on real availability and the goal.",
    frMethod: "Pour reprendre les bases, une à deux séances peuvent suffire. Pour parler plus vite ou préparer un objectif précis, deux à trois séances sont souvent plus efficaces.",
    enMethod: "To rebuild foundations, one to two sessions may be enough. To speak faster or prepare a precise goal, two to three sessions are often more effective.",
    tipsFr: ["Mesurer son temps réel", "Prévoir une révision courte", "Adapter la durée", "Confirmer le rythme sur WhatsApp"],
    tipsEn: ["Measure real available time", "Plan a short review", "Adapt session length", "Confirm the pace on WhatsApp"],
    link: "programme-masterclasses-arabe.html#rythme",
    frLinkText: "voir les rythmes proposés",
    enLinkText: "view the available paces"
  },
  {
    slug: "motiver-enfant-apprendre-arabe",
    frTitle: "Motiver un enfant à apprendre l’arabe sans pression",
    enTitle: "Motivate a Child to Learn Arabic Without Pressure",
    frSummary: "Des repères pratiques pour garder la motivation et éviter le découragement.",
    enSummary: "Practical markers to keep motivation and avoid discouragement.",
    frNeed: "La motivation d’un enfant dépend beaucoup de la confiance. Trop corriger, trop comparer ou allonger les séances peut produire l’effet inverse.",
    enNeed: "A child’s motivation depends strongly on confidence. Overcorrecting, comparing too much or lengthening sessions can have the opposite effect.",
    frMethod: "Valorisez l’effort, fixez un objectif court et montrez le progrès. Une petite réussite régulière vaut mieux qu’une longue séance difficile.",
    enMethod: "Value effort, set a short goal and show progress. A small regular success is better than a long difficult session.",
    tipsFr: ["Féliciter l’effort", "Limiter les corrections", "Choisir des thèmes proches de l’enfant", "Garder des séances courtes"],
    tipsEn: ["Praise effort", "Limit corrections", "Choose themes close to the child", "Keep sessions short"],
    link: "programme-arabe-enfants.html#modules",
    frLinkText: "voir les modules enfants",
    enLinkText: "view the children’s modules"
  },
  {
    slug: "arabe-en-ligne-bien-choisir",
    frTitle: "Cours d’arabe en ligne: comment bien choisir ?",
    enTitle: "Online Arabic Classes: How to Choose Well",
    frSummary: "Les critères à vérifier avant de réserver un programme en ligne.",
    enSummary: "The criteria to check before reserving an online programme.",
    frNeed: "Un bon programme en ligne ne se résume pas à un appel vidéo. Il doit proposer une progression, un rythme, une évaluation et une méthode de suivi.",
    enNeed: "A good online programme is more than a video call. It should offer progression, pace, evaluation and a follow-up method.",
    frMethod: "Vérifiez le niveau ciblé, les objectifs, la durée des séances, les tarifs et la façon de communiquer avec l’équipe avant l’inscription.",
    enMethod: "Check the target level, goals, session duration, pricing and how to communicate with the team before registration.",
    tipsFr: ["Lire la page programme", "Vérifier les tarifs", "Demander le format adapté", "Confirmer via WhatsApp"],
    tipsEn: ["Read the programme page", "Check pricing", "Ask for the right format", "Confirm through WhatsApp"],
    link: "nos-formations.html",
    frLinkText: "voir tous les programmes",
    enLinkText: "view all programmes"
  },
  {
    slug: "preparer-premiere-seance-arabe",
    frTitle: "Préparer sa première séance d’arabe",
    enTitle: "Prepare Your First Arabic Session",
    frSummary: "Les informations utiles à préparer pour démarrer plus efficacement.",
    enSummary: "Useful information to prepare for a more effective start.",
    frNeed: "Une première séance réussie commence avant le cours. Plus l’objectif, le niveau et les disponibilités sont clairs, plus l’orientation est précise.",
    enNeed: "A successful first session starts before the class. The clearer the goal, level and availability, the more precise the guidance.",
    frMethod: "Préparez votre niveau actuel, votre objectif principal, le nombre de séances souhaité et les horaires possibles. Ajoutez aussi les difficultés déjà rencontrées.",
    enMethod: "Prepare your current level, main goal, desired number of sessions and possible times. Also add difficulties you have already faced.",
    tipsFr: ["Noter son objectif", "Préciser son niveau", "Choisir une durée", "Envoyer les disponibilités"],
    tipsEn: ["Write down the goal", "Specify the level", "Choose a duration", "Send availability"],
    link: "contactez-nous.html",
    frLinkText: "préparer votre demande",
    enLinkText: "prepare your request"
  },
  {
    slug: "lecture-fluidite-prononciation",
    frTitle: "Lecture, fluidité et prononciation: travailler les trois ensemble",
    enTitle: "Reading, Fluency and Pronunciation: Work on All Three Together",
    frSummary: "Pourquoi séparer ces compétences ralentit parfois la progression.",
    enSummary: "Why separating these skills can sometimes slow progress.",
    frNeed: "La lecture sans prononciation reste fragile, et la prononciation sans lecture manque de support. Les deux doivent avancer avec la fluidité.",
    enNeed: "Reading without pronunciation remains fragile, and pronunciation without reading lacks support. Both should progress with fluency.",
    frMethod: "Prenez un court passage, lisez lentement, corrigez les sons, puis relisez plus naturellement. Le même support sert à plusieurs objectifs.",
    enMethod: "Take a short passage, read slowly, correct sounds, then reread more naturally. The same material serves several goals.",
    tipsFr: ["Choisir un texte court", "Corriger un son à la fois", "Relire après correction", "Mesurer la fluidité"],
    tipsEn: ["Choose a short text", "Correct one sound at a time", "Reread after correction", "Measure fluency"],
    link: "programme-masterclasses-arabe.html",
    frLinkText: "découvrir les masterclasses",
    enLinkText: "discover the masterclasses"
  },
  {
    slug: "progresser-arabe-30-jours",
    frTitle: "Progresser en arabe en 30 jours: plan réaliste",
    enTitle: "Progress in Arabic in 30 Days: A Realistic Plan",
    frSummary: "Un plan simple pour installer une routine et mesurer les premiers progrès.",
    enSummary: "A simple plan to build a routine and measure first progress.",
    frNeed: "Trente jours ne suffisent pas pour tout maîtriser, mais ils suffisent pour installer une habitude, clarifier le niveau et obtenir des progrès visibles.",
    enNeed: "Thirty days are not enough to master everything, but they are enough to build a habit, clarify level and see visible progress.",
    frMethod: "Semaine 1: diagnostic et lettres. Semaine 2: lecture courte. Semaine 3: vocabulaire et phrases. Semaine 4: révision, oral et bilan.",
    enMethod: "Week 1: diagnosis and letters. Week 2: short reading. Week 3: vocabulary and sentences. Week 4: review, speaking and assessment.",
    tipsFr: ["Planifier quatre semaines", "Réviser chaque jour un peu", "Parler dès que possible", "Faire un bilan final"],
    tipsEn: ["Plan four weeks", "Review a little every day", "Speak as soon as possible", "Do a final review"],
    link: "index.html#test-niveau",
    frLinkText: "commencer par le test",
    enLinkText: "start with the test"
  },
  {
    slug: "tarifs-programme-arabe",
    frTitle: "Tarifs d’un programme d’arabe: comment comparer ?",
    enTitle: "Arabic Programme Pricing: How to Compare",
    frSummary: "Comparer le prix avec le format, la durée, le suivi et l’objectif réel.",
    enSummary: "Compare price with format, duration, follow-up and the real goal.",
    frNeed: "Le tarif seul ne dit pas tout. Il faut regarder ce que la séance contient, le niveau de suivi, la durée et l’adaptation au profil.",
    enNeed: "Price alone does not tell the whole story. Look at what the session includes, the level of follow-up, duration and adaptation to the profile.",
    frMethod: "Comparez le paiement complet, l’échelonnement, la découverte et le format. Choisissez ensuite selon l’objectif et la régularité possible.",
    enMethod: "Compare full payment, installments, discovery session and format. Then choose based on the goal and possible consistency.",
    tipsFr: ["Comparer la durée", "Vérifier le suivi", "Demander le bon format", "Confirmer les disponibilités"],
    tipsEn: ["Compare duration", "Check follow-up", "Ask for the right format", "Confirm availability"],
    link: "programme-masterclasses-arabe.html#tarifs",
    frLinkText: "voir les tarifs",
    enLinkText: "view the pricing"
  }
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const href = (slug) => `blog-${slug}.html`;

const headLinks = (extra = "") => `${extra}
    <link rel="preload" href="assets/css/style.css?v=${cssVersion}" as="style" fetchpriority="high" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="assets/css/style.css?v=${cssVersion}"></noscript>`;

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

const articlePage = (article) => `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(article.frTitle)} - ${escapeHtml(article.enTitle)} - Bayan Academy</title>
    <meta name="description" content="${escapeHtml(article.frSummary)} ${escapeHtml(article.enSummary)}">
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
            <p class="article-meta">Guide arabe • Lecture 5 minutes • Bayan Academy</p>
            <h2>Pourquoi c’est important</h2>
            <p>${escapeHtml(article.frNeed)}</p>
            <h2>Méthode recommandée</h2>
            <p>${escapeHtml(article.frMethod)}</p>
            <ul class="check-list">${tipsList(article.tipsFr)}</ul>
            <h2>Passer à l’action</h2>
            <p>Pour avancer avec un cadre clair, vous pouvez <a href="${article.link}">${escapeHtml(article.frLinkText)}</a>. Le bon programme dépend du niveau réel, de l’objectif et du rythme disponible.</p>
          </article>
          <article class="article-content" data-lang-panel="en" lang="en">
            <p class="article-meta">Arabic guide • 5 minute read • Bayan Academy</p>
            <h2>Why it matters</h2>
            <p>${escapeHtml(article.enNeed)}</p>
            <h2>Recommended method</h2>
            <p>${escapeHtml(article.enMethod)}</p>
            <ul class="check-list">${tipsList(article.tipsEn)}</ul>
            <h2>Take action</h2>
            <p>To progress with a clear framework, you can <a href="${article.link}">${escapeHtml(article.enLinkText)}</a>. The right programme depends on real level, goal and available pace.</p>
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

writeFileSync("blog.html", blogPage);
for (const article of articles) {
  writeFileSync(href(article.slug), articlePage(article));
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
