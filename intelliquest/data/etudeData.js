/**
 * ÉTUDES ET FORMATIONS PAGE DATA
 * Centralized content for etudes.html
 */
const etudeData = {
  meta: {
    title: "Étudier et Immigrer au Canada – IntelliQuest Canada Academy",
    description: "Orientation scolaire, admissions universitaires, permis d'études et démarches d'immigration au Canada."
  },
  hero: {
    bgImage: "assets/images/user-orientation-hero-full.webp",
    alt: "Étudier au Canada - ICA Orientation",
    sloganLines: [
      "La référence",
      "pour réussir votre vie",
      "au Canada"
    ],
    description: "Votre passerelle d'excellence pour étudier, travailler et s'établir durablement au Canada grâce à un accompagnement expert et personnalisé.",
    cta: {
      label: "DÉCOUVRIR NOS PARCOURS",
      href: "#poles-sections"
    }
  },
  polesNav: [
    {
      number: "PÔLE 01",
      title: "Études au Canada",
      targetId: "etudes",
      theme: "blue",
      active: true
    },
    {
      number: "PÔLE 02",
      title: "Immigration au Canada",
      targetId: "immigration",
      theme: "amber",
      active: false
    }
  ],
  etudesPole: {
    id: "etudes",
    eyebrow: "PÔLE ÉTUDES",
    title: "Services dédiés pour les études au Canada",
    subtitle: "Notre équipe vous accompagne de l'orientation académique jusqu'à votre intégration, avec un suivi personnalisé à chaque étape.",
    steps: [
      {
        id: "etudes-step-1",
        stepNumber: "01",
        tabLabel: "Étape 1 : Orientation",
        badge: "ÉTAPE 1 • ORIENTATION",
        badgeTheme: "blue",
        title: "Orientation scolaire et académique",
        description: "Notre équipe vous accompagne avec des conseils personnalisés pour faire les bons choix d'études, découvrir les meilleures opportunités académiques au Canada et bâtir un parcours cohérent vers la réussite.",
        checklist: [
          "Analyse approfondie du profil et des objectifs du candidat",
          "Sélection rigoureuse des établissements et programmes d'études",
          "Stratégie d'admission sur-mesure et conseil d'experts"
        ],
        buttonText: "DÉMARRER L'ORIENTATION",
        buttonLink: "contact.html",
        buttonTheme: "btn-blue",
        image: "assets/images/etape1.webp",
        alt: "Orientation scolaire et académique ICA"
      },
      {
        id: "etudes-step-2",
        stepNumber: "02",
        tabLabel: "Étape 2 : Admission",
        badge: "ÉTAPE 2 • ADMISSION",
        badgeTheme: "blue",
        title: "Démarches d'admission universitaire",
        description: "Nos conseillers prennent en charge l'ensemble de vos démarches d'admission, du montage du dossier administratif à la soumission officielle de la candidature auprès des universités et collèges canadiens.",
        checklist: [
          "Constitution complète et vérification méticuleuse du dossier",
          "Soumission et suivi en direct auprès des universités canadiennes",
          "Obtention rapide de la lettre d'admission officielle"
        ],
        buttonText: "POSTULER MAINTENANT",
        buttonLink: "contact.html",
        buttonTheme: "btn-blue",
        image: "assets/images/etape2.webp",
        alt: "Démarches d'admission ICA"
      },
      {
        id: "etudes-step-3",
        stepNumber: "03",
        tabLabel: "Étape 3 : Autorisations",
        badge: "ÉTAPE 3 • AUTORISATIONS",
        badgeTheme: "blue",
        title: "Obtention des autorisations de séjour",
        description: "Bénéficiez d'une expertise reconnue pour la demande de vos permis d'études, visa de résident temporaire et certificat d'acceptation du Québec (CAQ), avec un dossier solide et conforme aux exigences de l'immigration.",
        checklist: [
          "Demande de CAQ et conformité avec les règles du Québec",
          "Préparation du dossier de permis d'études et visa canadien",
          "Simulation et coaching personnalisé pour les entrevues"
        ],
        buttonText: "PRÉPARER MON VISA",
        buttonLink: "contact.html",
        buttonTheme: "btn-blue",
        image: "assets/images/etape3.webp",
        alt: "Obtention permis d'études ICA"
      },
      {
        id: "etudes-step-4",
        stepNumber: "04",
        tabLabel: "Étape 4 : Après l'arrivée",
        badge: "ÉTAPE 4 • APRÈS L'ARRIVÉE",
        badgeTheme: "blue",
        title: "Accompagnement et installation au Canada",
        description: "À votre arrivée sur le sol canadien, notre équipe vous aide à vous installer sereinement : accueil à l'aéroport, recherche de logement, ouverture de compte bancaire, souscription d'assurance et démarches du NAS.",
        checklist: [
          "Service d'accueil et accompagnement vers votre logement",
          "Assistance pour les démarches administratives (NAS, SIM, banque)",
          "Intégration académique et réseau de soutien étudiants ICA"
        ],
        buttonText: "EN SAVOIR PLUS SUR L'ACCUEIL",
        buttonLink: "contact.html",
        buttonTheme: "btn-blue",
        image: "assets/images/etape4.webp",
        alt: "Installation au Canada ICA"
      }
    ]
  },
  immigrationPole: {
    id: "immigration",
    eyebrow: "PÔLE IMMIGRATION",
    title: "Services dédiés pour l'immigration au Canada",
    subtitle: "Un accompagnement expert à chaque étape de votre projet, de la consultation initiale à la résidence permanente et au soutien post-arrivée.",
    steps: [
      {
        id: "immig-step-1",
        stepNumber: "01",
        tabLabel: "Étape 1 : Consultation",
        badge: "ÉTAPE 1 • CONSULTATION",
        badgeTheme: "amber",
        title: "Consultation initiale & Diagnostic",
        description: "Commencez votre projet d'immigration par une évaluation personnalisée et approfondie de votre profil par nos experts afin de définir le programme le plus rapide et le mieux adapté (Entrée Express, Arrima, PTPQ, Permis de travail).",
        checklist: [
          "Évaluation complète de l'admissibilité et du score CRS / Arrima",
          "Élaboration d'une stratégie d'immigration personnalisée",
          "Calendrier prévisionnel et transparence des démarches"
        ],
        buttonText: "RÉSERVER UNE CONSULTATION",
        buttonLink: "contact.html",
        buttonTheme: "btn-amber",
        image: "assets/images/vlcsnap-2025-04-30-15h52m06s3444-268x300.webp",
        alt: "Consultation immigration Canada ICA"
      },
      {
        id: "immig-step-2",
        stepNumber: "02",
        tabLabel: "Étape 2 : Préparation de dossier",
        badge: "ÉTAPE 2 • PRÉPARATION",
        badgeTheme: "amber",
        title: "Préparation rigoureuse du dossier",
        description: "Nos conseillers spécialisés prennent en charge la constitution minutieuse de votre dossier : équivalences de diplômes (EDE WES / ICAS), vérification des pièces justificatives et conseils pour l'optimisation de vos tests linguistiques (TEF/TCF/IELTS).",
        checklist: [
          "Démarches d'évaluation des diplômes d'études (EDE)",
          "Structuration conforme des preuves d'expérience professionnelle",
          "Audit et validation finale de chaque document"
        ],
        buttonText: "COMMENCER MON DOSSIER",
        buttonLink: "contact.html",
        buttonTheme: "btn-amber",
        image: "assets/images/IMG_80933-298x300.webp",
        alt: "Préparation de dossier immigration Canada ICA"
      },
      {
        id: "immig-step-3",
        stepNumber: "03",
        tabLabel: "Étape 3 : Dépôt",
        badge: "ÉTAPE 3 • DÉPÔT",
        badgeTheme: "amber",
        title: "Dépôt officiel et suivi continu",
        description: "Une fois le dossier finalisé, nous procédons à sa soumission officielle auprès de l'IRCC ou du Ministère de l'Immigration du Québec (MIFI), et nous assurons un suivi proactif jusqu'à la décision finale.",
        checklist: [
          "Soumission du profil dans les bassins de candidats",
          "Réponse proactive aux demandes d'informations complémentaires",
          "Suivi des instructions médicales et des visas d'immigration"
        ],
        buttonText: "SUIVRE MA DEMANDE",
        buttonLink: "contact.html",
        buttonTheme: "btn-amber",
        image: "assets/images/depot-300x300.webp",
        alt: "Dépôt officiel immigration Canada ICA"
      },
      {
        id: "immig-step-4",
        stepNumber: "04",
        tabLabel: "Étape 4 : Post-arrivée",
        badge: "ÉTAPE 4 • POST-ARRIVÉE",
        badgeTheme: "amber",
        title: "Intégration et soutien post-arrivée",
        description: "Nous restons à vos côtés dès votre arrivée au Canada pour faciliter votre installation : démarches de résidence permanente, recherche de logement, intégration professionnelle et accompagnement des familles.",
        checklist: [
          "Orientation à l'arrivée et formalités administratives canadiennes",
          "Conseils pour la recherche d'emploi et réseautage local",
          "Assistance à l'installation des familles et scolarisation des enfants"
        ],
        buttonText: "CONTACTEZ NOS EXPERTS",
        buttonLink: "contact.html",
        buttonTheme: "btn-amber",
        image: "assets/images/ayaa-300x258.webp",
        alt: "Intégration et soutien post-arrivée Canada ICA"
      }
    ]
  }
};

module.exports = etudeData;
